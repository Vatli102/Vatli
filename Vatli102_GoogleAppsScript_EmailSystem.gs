/**
 * =========================================================================================
 * VATLI102.COM - HỆ THỐNG PHÂN LUỒNG ĐIỂM ĐA GIÁO VIÊN & TỰ ĐỘNG GỬI EMAIL THEO MÔN
 * =========================================================================================
 */

// -----------------------------------------------------------------------------------------
// CẤU HÌNH LIÊN KẾT GOOGLE SHEET CỦA CÔ GIÁO (MÔN TOÁN & HÓA)
// -----------------------------------------------------------------------------------------
const MATH_CHEM_SPREADSHEET_ID = "13b99GLqtaW5HKVbBNykWvOG7Uq6Vk1L00ZSUHH1WxSk";

// Tên các Sheet quản lý
const SHEET_NAMES = {
  SUBMISSIONS: "Sheet1",            // Sheet nhận dữ liệu trắc nghiệm
  SUBSCRIBERS: "DangKy_NhanBai",    // Sheet lưu danh sách Email học sinh phân theo môn
  MAIL_HISTORY: "LichSu_GuiMail"    // Sheet lưu nhật ký lịch sử gửi mail
};

/**
 * Tự động tạo menu điều khiển trên thanh công cụ Google Sheets
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🔔 Vatli102 Hub")
    .addItem("✉️ Gửi Email Bài Học Mới (Theo Môn / Toàn bộ)", "promptSendNewLessonEmail")
    .addItem("🧪 Gửi Email Thử Nghiệm (Test vào Gmail bạn)", "sendTestEmailToSelf")
    .addSeparator()
    .addItem("📋 Xem Danh Sách Email Theo Môn", "syncAndCleanSubscribers")
    .addToUi();
}

/**
 * Hàm tiếp nhận dữ liệu POST từ website Vatli102.com
 */
function doPost(e) {
  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (ex) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const timestamp = new Date();
    const name = data.name || "Ẩn danh";
    const className = data.className || "";
    const lesson = data.lesson || "";
    const contactOrCorrect = data.correct || "";
    const score = data.score || "";

    const isRegistration = className.includes("ĐĂNG KÝ") || lesson.includes("Đăng ký") || score === "Đăng ký";
    const registeredSubject = extractSubject(className, lesson, data.subject);

    // 1. NẾU LÀ HỌC SINH ĐĂNG KÝ NHẬN BÀI MỚI -> LƯU VÀO SHEET ĐĂNG KÝ CỦA THẦY VÀ GỬI MAIL
    if (isRegistration || contactOrCorrect.includes("@")) {
      addSubscriberToSheet(name, contactOrCorrect, registeredSubject, timestamp);
    }

    // 2. NẾU LÀ HỌC SINH NỘP BÀI TRẮC NGHIỆM CHẤM ĐIỂM -> TỰ ĐỘNG PHÂN LUỒNG SHEET
    if (!isRegistration) {
      const isMathOrChem = registeredSubject === "Toán Học" || registeredSubject === "Hóa Học";
      
      let targetSs = SpreadsheetApp.getActiveSpreadsheet();
      
      // Nếu là môn Toán hoặc Hóa và đã điền ID Sheet của Cô -> Ghi thẳng vào Sheet của Cô
      if (isMathOrChem && MATH_CHEM_SPREADSHEET_ID && MATH_CHEM_SPREADSHEET_ID !== "DÁN_ID_SHEET_CỦA_CÔ_VÀO_ĐÂY") {
        try {
          targetSs = SpreadsheetApp.openById(MATH_CHEM_SPREADSHEET_ID);
        } catch (err) {
          Logger.log("Không mở được Sheet của Cô giáo: " + err.toString());
          targetSs = SpreadsheetApp.getActiveSpreadsheet();
        }
      }

      let targetSheet = targetSs.getSheetByName(SHEET_NAMES.SUBMISSIONS) || targetSs.getSheets()[0];
      targetSheet.appendRow([timestamp, name, className, lesson, contactOrCorrect, score]);
    }

    // 3. TỰ ĐỘNG GỬI MAIL KHI PUSH BÀI TỪ GITHUB ACTIONS
    if (data.action === "sendNotification" && data.lessonTitle && data.lessonUrl) {
      const targetSubject = data.subject || "Vật Lí";
      const sentCount = dispatchLessonEmail(targetSubject, data.lessonTitle, data.lessonUrl, data.lessonSummary || "");
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        subject: targetSubject,
        recipientsCount: sentCount,
        message: "Đã gửi thông báo môn " + targetSubject + " thành công cho " + sentCount + " học sinh!"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true, message: "Đã ghi nhận dữ liệu!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Trích xuất chuẩn hóa Tên Môn Học
 */
function extractSubject(className, lesson, rawSubject) {
  if (rawSubject && rawSubject.trim() !== "") return rawSubject.trim();

  const text = (className + " " + lesson).toLowerCase();
  if (text.includes("toán")) return "Toán Học";
  if (text.includes("hóa")) return "Hóa Học";
  if (text.includes("sinh")) return "Sinh Học";
  if (text.includes("khtn")) return "KHTN";
  if (text.includes("văn")) return "Ngữ Văn";
  if (text.includes("tiếng anh") || text.includes("anh văn")) return "Tiếng Anh";
  if (text.includes("sử") || text.includes("lịch sử")) return "Lịch Sử";
  if (text.includes("địa") || text.includes("địa lí")) return "Địa Lí";
  if (text.includes("gdktpl") || text.includes("kinh tế")) return "GDKT&PL";
  if (text.includes("tin học") || text.includes("tinhoc")) return "Tin Học";
  if (text.includes("công nghiệp") || text.includes("nông nghiệp") || text.includes("công nghệ")) return "Công Nghệ";
  if (text.includes("vật lí") || text.includes("vật lý") || text.includes("lớp 10") || text.includes("lớp 11") || text.includes("lớp 12")) return "Vật Lí";
  
  return "Tất cả các môn";
}

/**
 * Lưu người đăng ký vào Sheet riêng DangKy_NhanBai của Thầy
 */
function addSubscriberToSheet(name, email, subject, timestamp) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let subSheet = ss.getSheetByName(SHEET_NAMES.SUBSCRIBERS);
  
  if (!subSheet) {
    subSheet = ss.insertSheet(SHEET_NAMES.SUBSCRIBERS);
    subSheet.appendRow(["Thời gian đăng ký", "Họ và tên", "Email nhận bài", "Môn đăng ký", "Trạng thái"]);
    subSheet.getRange(1, 1, 1, 5).setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold");
    subSheet.setFrozenRows(1);
  }

  const cleanEmail = email.trim().toLowerCase();
  if (!isValidEmail(cleanEmail)) return;

  const data = subSheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] && data[i][2].toString().trim().toLowerCase() === cleanEmail) {
      const currentSubj = data[i][3] ? data[i][3].toString() : "";
      if (!currentSubj.includes(subject) && subject !== "Tất cả các môn") {
        subSheet.getRange(i + 1, 4).setValue(currentSubj + ", " + subject);
      }
      return;
    }
  }

  subSheet.appendRow([timestamp || new Date(), name, cleanEmail, subject, "Đang nhận"]);

  try {
    sendWelcomeEmail(name, cleanEmail, subject);
  } catch (err) {
    Logger.log("Lỗi gửi Welcome Email: " + err.toString());
  }
}

function isStudentSubscribedToSubject(studentSubject, targetSubject) {
  if (!targetSubject || targetSubject === "Tất cả" || targetSubject === "Tất cả các môn") return true;
  if (!studentSubject || studentSubject === "Tất cả" || studentSubject === "Tất cả các môn" || studentSubject === "Trang chủ") return true;
  
  const s = studentSubject.toLowerCase();
  const t = targetSubject.toLowerCase();
  return s.includes(t) || t.includes(s);
}

function getSubscribersBySubject(targetSubject) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const subscribersMap = new Map();

  const subSheet = ss.getSheetByName(SHEET_NAMES.SUBSCRIBERS);
  if (subSheet && subSheet.getLastRow() > 1) {
    const data = subSheet.getRange(2, 1, subSheet.getLastRow() - 1, 5).getValues();
    data.forEach(row => {
      const name = row[1] ? row[1].toString().trim() : "Bạn học";
      const email = row[2] ? row[2].toString().trim().toLowerCase() : "";
      const subject = row[3] ? row[3].toString().trim() : "Tất cả các môn";
      const status = row[4] ? row[4].toString().trim() : "";
      
      if (isValidEmail(email) && status !== "Đã hủy") {
        if (isStudentSubscribedToSubject(subject, targetSubject)) {
          subscribersMap.set(email, { name: name, subject: subject });
        }
      }
    });
  }

  const list = [];
  subscribersMap.forEach((info, email) => {
    list.push({ name: info.name, email: email, subject: info.subject });
  });
  return list;
}

function promptSendNewLessonEmail() {
  const ui = SpreadsheetApp.getUi();

  const subjResp = ui.prompt("📚 CHỌN MÔN HỌC PHÁT HÀNH", "Nhập TÊN MÔN HỌC (Ví dụ: Toán Học, Hóa Học, Vật Lí, Ngữ Văn...):", ui.ButtonSet.OK_CANCEL);
  if (subjResp.getSelectedButton() !== ui.Button.OK) return;
  const targetSubject = subjResp.getResponseText().trim() || "Vật Lí";

  const titleResp = ui.prompt("✉️ TIÊU ĐỀ BÀI HỌC", "Nhập TIÊU ĐỀ bài học mới:", ui.ButtonSet.OK_CANCEL);
  if (titleResp.getSelectedButton() !== ui.Button.OK) return;
  const lessonTitle = titleResp.getResponseText().trim();
  if (!lessonTitle) return;

  const linkResp = ui.prompt("🔗 ĐƯỜNG LINK BÀI HỌC", "Nhập LINK bài học trên website:", ui.ButtonSet.OK_CANCEL);
  if (linkResp.getSelectedButton() !== ui.Button.OK) return;
  const lessonUrl = linkResp.getResponseText().trim() || "https://vatli102.com";

  const recipients = getSubscribersBySubject(targetSubject);
  if (recipients.length === 0) {
    ui.alert("⚠️ Hiện chưa có học sinh nào đăng ký nhận bài cho môn [" + targetSubject + "]!");
    return;
  }

  const confirm = ui.alert("XÁC NHẬN GỬI THÔNG BÁO", "Hệ thống sẽ gửi thông báo môn [" + targetSubject + "] tới " + recipients.length + " học sinh.\n\nBấm YES để gửi ngay!", ui.ButtonSet.YES_NO);
  if (confirm === ui.Button.YES) {
    const sentCount = dispatchLessonEmail(targetSubject, lessonTitle, lessonUrl, "");
    ui.alert("🎉 Đã gửi thành công tới " + sentCount + " học sinh!");
  }
}

function dispatchLessonEmail(targetSubject, title, url, summary) {
  const recipients = getSubscribersBySubject(targetSubject);
  let successCount = 0;

  recipients.forEach(sub => {
    try {
      const htmlContent = generateEmailTemplate(sub.name, targetSubject, title, url, summary);
      
      MailApp.sendEmail({
        to: sub.email,
        subject: "🔔 [Vatli102 - Môn " + targetSubject + "] Bài học mới: " + title,
        htmlBody: htmlContent,
        name: "Vatli102 - Cổng Học Liệu Số"
      });
      successCount++;
      Utilities.sleep(150);
    } catch (e) {
      Logger.log("Lỗi gửi mail tới " + sub.email + ": " + e.toString());
    }
  });

  logMailHistory(targetSubject, title, url, successCount);
  return successCount;
}

function logMailHistory(subject, title, url, count) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let historySheet = ss.getSheetByName(SHEET_NAMES.MAIL_HISTORY);
  if (!historySheet) {
    historySheet = ss.insertSheet(SHEET_NAMES.MAIL_HISTORY);
    historySheet.appendRow(["Thời gian gửi", "Môn học", "Tiêu đề bài học", "Đường link", "Số lượng Email đã nhận"]);
    historySheet.getRange(1, 1, 1, 5).setBackground("#1e293b").setFontColor("#ffffff").setFontWeight("bold");
    historySheet.setFrozenRows(1);
  }
  historySheet.appendRow([new Date(), subject, title, url, count]);
}

function sendTestEmailToSelf() {
  const myEmail = Session.getActiveUser().getEmail();
  if (!myEmail) return;

  const sampleTitle = "Bài 10: Khảo sát hàm số - Toán 12";
  const sampleUrl = "https://vatli102.com/toan/";
  const sampleSummary = "Bài giảng trực quan kèm đề trắc nghiệm chấm điểm tự động chuẩn Bộ GD&ĐT 2018.";

  const htmlBody = generateEmailTemplate("Thầy/Cô (Bản Xem Thử)", "Toán Học", sampleTitle, sampleUrl, sampleSummary);

  MailApp.sendEmail({
    to: myEmail,
    subject: "🔔 [TEST - Môn Toán Học] Bài học mới: " + sampleTitle,
    htmlBody: htmlBody,
    name: "Vatli102 - Cổng Học Liệu Số"
  });

  try {
    SpreadsheetApp.getUi().alert("✓ Đã gửi email xem thử thành công về hộp thư: " + myEmail);
  } catch(e) {}
}

function syncAndCleanSubscribers() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let subSheet = ss.getSheetByName(SHEET_NAMES.SUBSCRIBERS);
  if (!subSheet) return;

  const lastRow = subSheet.getLastRow();
  SpreadsheetApp.getUi().alert("📋 Hiện có " + (lastRow > 1 ? (lastRow - 1) : 0) + " học sinh đã đăng ký trong danh sách.");
}

function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function generateEmailTemplate(studentName, subject, lessonTitle, lessonUrl, lessonSummary) {
  const summaryText = lessonSummary || ("Bài học & đề thi môn " + subject + " vừa được xuất bản trên cổng học liệu số Vatli102.com chuẩn chương trình GDPT 2018.");

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:'Segoe UI', Roboto, Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:25px 10px;">
      <tr>
        <td align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.06); border:1px solid #e2e8f0;">
            <tr>
              <td style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #2563eb 100%); padding:32px 25px; text-align:center;">
                <div style="display:inline-block; background-color:#ffffff; padding:6px 14px; border-radius:30px; margin-bottom:12px;">
                  <span style="font-size:11px; font-weight:800; color:#2563eb; letter-spacing:1px; text-transform:uppercase;">⚡ BẢN TIN MÔN ${subject.toUpperCase()}</span>
                </div>
                <h1 style="color:#ffffff; margin:0; font-size:24px; font-weight:800;">Vatli102.com</h1>
                <p style="color:#93c5fd; margin:6px 0 0 0; font-size:13px; font-weight:500;">Cổng Học Liệu Số & Đề Thi Trực Quan GDPT 2018</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 25px;">
                <p style="font-size:16px; color:#1e293b; margin:0 0 16px 0; font-weight:600;">
                  Chào <span style="color:#2563eb;">${studentName || "em"}</span>! 👋
                </p>
                <p style="font-size:14px; line-height:1.7; color:#475569; margin:0 0 20px 0;">
                  Thầy Cô vừa xuất bản bài học mới môn <strong>${subject}</strong> trên hệ thống. Em hãy vào học và luyện tập trắc nghiệm ngay nhé:
                </p>
                <div style="background-color:#eff6ff; border-left:4px solid #2563eb; border-radius:0 12px 12px 0; padding:18px 20px; margin:20px 0;">
                  <div style="font-size:11px; font-weight:800; color:#2563eb; text-transform:uppercase; margin-bottom:6px;">
                    ✨ BÀI HỌC MÔN ${subject.toUpperCase()} VỪA PHÁT HÀNH
                  </div>
                  <h2 style="color:#0f172a; margin:0 0 10px 0; font-size:17px; font-weight:800; line-height:1.4;">
                    ${lessonTitle}
                  </h2>
                  <p style="color:#334155; margin:0; font-size:13px; line-height:1.6;">
                    ${summaryText}
                  </p>
                </div>
                <div style="text-align:center; margin:30px 0 24px 0;">
                  <a href="${lessonUrl}" target="_blank" style="display:inline-block; background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color:#ffffff; text-decoration:none; padding:14px 34px; font-size:15px; font-weight:800; border-radius:50px; box-shadow:0 6px 18px rgba(37,99,235,0.35);">
                    👉 Vào Học Môn ${subject} Ngay ➔
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8fafc; padding:20px 25px; text-align:center; border-top:1px solid #e2e8f0;">
                <p style="color:#64748b; font-size:12px; margin:0 0 4px 0;">
                  Em nhận được thông báo này vì đã đăng ký nhận bài học môn <strong>${subject}</strong> trên Vatli102.com.
                </p>
                <p style="color:#94a3b8; font-size:11px; margin:0;">
                  © 2026 Vatli102.com - Chúc em học tập thật tốt và đạt điểm số tối đa!
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

function sendWelcomeEmail(studentName, email, subject) {
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:'Segoe UI', Roboto, Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:25px 10px;">
      <tr>
        <td align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.06); border:1px solid #e2e8f0;">
            <tr>
              <td style="background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #2563eb 100%); padding:30px 25px; text-align:center;">
                <h1 style="color:#ffffff; margin:0; font-size:24px; font-weight:800;">Vatli102.com</h1>
                <p style="color:#93c5fd; margin:6px 0 0 0; font-size:13px;">Xác Nhận Đăng Ký Nhận Bài Môn ${subject.toUpperCase()} 🎉</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 25px;">
                <p style="font-size:16px; color:#1e293b; margin:0 0 14px 0; font-weight:700;">
                  Chào <span style="color:#2563eb;">${studentName || "em"}</span>! 👋
                </p>
                <p style="font-size:14px; line-height:1.7; color:#475569; margin:0 0 18px 0;">
                  Chúc mừng em đã đăng ký nhận bài học môn <strong>${subject}</strong> thành công từ cổng học liệu số <strong>Vatli102.com</strong>.
                </p>
                <div style="background-color:#f0fdf4; border-left:4px solid #16a34a; border-radius:0 12px 12px 0; padding:16px 18px; margin:20px 0;">
                  <p style="color:#166534; font-weight:700; margin:0 0 6px 0; font-size:14px;">✅ Hệ thống đã ghi nhận thông tin của em:</p>
                  <p style="color:#15803d; font-size:13px; margin:0 0 4px 0;">• Email: <strong>${email}</strong></p>
                  <p style="color:#15803d; font-size:13px; margin:0;">• Chuyên môn theo dõi: <strong>${subject}</strong></p>
                </div>
                <p style="font-size:13px; line-height:1.7; color:#475569; margin:0 0 24px 0;">
                  Từ nay, mỗi khi Thầy Cô phát hành bài giảng mới hoặc đề thi kiểm tra môn <strong>${subject}</strong>, hệ thống sẽ tự động gửi thông báo trực tiếp vào hộp thư Gmail này của em.
                </p>
                <div style="text-align:center; margin:28px 0 20px 0;">
                  <a href="https://vatli102.com" target="_blank" style="display:inline-block; background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color:#ffffff; text-decoration:none; padding:13px 32px; font-size:14px; font-weight:800; border-radius:50px; box-shadow:0 6px 18px rgba(37,99,235,0.35); font-family:sans-serif;">
                    🏠 Truy Cập Vatli102.com Ngay ➔
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8fafc; padding:18px 25px; text-align:center; border-top:1px solid #e2e8f0;">
                <p style="color:#94a3b8; font-size:11px; margin:0;">© 2026 Vatli102.com - Chúc em học tập thật tốt!</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  MailApp.sendEmail({
    to: email,
    subject: "🎉 [Vatli102] Xác nhận đăng ký nhận bài học môn " + subject + " thành công!",
    htmlBody: htmlContent,
    name: "Vatli102 - Cổng Học Liệu Số"
  });
}
