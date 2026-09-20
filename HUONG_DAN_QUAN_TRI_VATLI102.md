# SỔ TAY HƯỚNG DẪN QUẢN TRỊ & VẬN HÀNH HỆ THỐNG VATLI102.COM

> **Tài liệu lưu trữ đám mây:** Thầy/Cô có thể mở tài liệu này ở bất kỳ máy tính hay điện thoại nào bằng cách truy cập kho GitHub:  
> 🔗 **https://github.com/Vatli102/Vatli/blob/main/HUONG_DAN_QUAN_TRI_VATLI102.md**

---

## 1. HƯỚNG DẪN PHÂN QUYỀN CHO GIÁO VIÊN PUSH BÀI (TOÁN, HÓA...)

1. Truy cập: [https://github.com/Vatli102/Vatli/settings/access](https://github.com/Vatli102/Vatli/settings/access)
2. Bấm nút **Add people**.
3. Nhập **Username GitHub** hoặc **Gmail** của Thầy/Cô cộng tác viên.
4. Chọn **Add to this repository**.
5. Thầy/Cô cộng tác viên mở hòm thư Gmail bấm **Accept invitation** (Chấp nhận lời mời) là có quyền push bài trực tiếp lên web.

---

## 2. HƯỚNG DẪN TỰ ĐỘNG PHÂN LUỒNG ĐIỂM SANG GOOGLE SHEET RIÊNG (TOÁN & HÓA)

### Bước 1: Lấy ID Google Sheet của Giáo viên phụ trách
1. Giáo viên phụ trách tạo 1 file Google Sheets trên Google Drive của mình (ví dụ: `Điểm Trắc Nghiệm Toán Hóa`).
2. Bấm nút **Chia sẻ (Share)** góc phải trên $\rightarrow$ Thêm Gmail của Thầy Quản trị với quyền **Người chỉnh sửa (Editor)**.
3. Mở link Google Sheet, nhìn vào thanh địa chỉ:
   `https://docs.google.com/spreadsheets/d/`**`1a2B3c4D5e6F7g8H9i...`**`/edit`
   👉 Copy đoạn mã ở giữa (phần in đậm), đó chính là **ID Sheet**.

### Bước 2: Dán ID vào Google Apps Script trên Sheet Quản trị của Thầy
1. Thầy mở Google Sheet quản trị của Thầy $\rightarrow$ **Tiện ích mở rộng** $\rightarrow$ **Apps Script**.
2. Tìm dòng số 10:
   ```javascript
   const MATH_CHEM_SPREADSHEET_ID = "DÁN_ID_SHEET_CỦA_CÔ_VÀO_ĐÂY";
   ```
   Dán ID vừa lấy được vào trong dấu ngoặc kép.
3. Bấm **💾 Lưu (Ctrl + S)**.
4. Bấm **Triển khai (Deploy)** $\rightarrow$ **Quản lý bản triển khai (Manage deployments)**.
5. Bấm biểu tượng cây bút **✏️ Chỉnh sửa** $\rightarrow$ chọn **Phiên bản mới (New version)** $\rightarrow$ Bấm **Triển khai (Deploy)** $\rightarrow$ Bấm **Xong (Done)**.

---

## 3. CÁCH LẤY LẠI MÃ NGUỒN GOOGLE APPS SCRIPT (FULL CODE)

Toàn bộ mã nguồn hoàn chỉnh của hệ thống Email tự động & Phân luồng điểm đa giáo viên được lưu trữ tại file:
🔗 **`Vatli102_GoogleAppsScript_EmailSystem.gs`** trong kho GitHub:
[https://github.com/Vatli102/Vatli/blob/main/Vatli102_GoogleAppsScript_EmailSystem.gs](https://github.com/Vatli102/Vatli/blob/main/Vatli102_GoogleAppsScript_EmailSystem.gs)

---

## 4. QUY TRÌNH KHI SANG MÁY TÍNH MỚI

Khi thầy chuyển sang máy tính mới và làm việc với AI:
1. Đăng nhập tài khoản GitHub hoặc tải thư mục dự án về.
2. Thầy chỉ cần gửi cho AI đường link website **https://vatli102.com** hoặc mở thư mục dự án, AI sẽ tự động đọc các tệp hướng dẫn và quy tắc `GEMINI.md` để tiếp tục làm việc chính xác 100%.
