---
Preset: 3D Realism — photorealistic cinematic render, Octane Render style, Unreal Engine 5 style.
Quan hệ: 1 clip = 1 ảnh (frame cuối của clip). 33 ảnh cho 33 clip.
---

# 02 — IMAGE PROMPTS (33 ảnh, copy-paste độc lập)

## Negative prompt dùng chung cho toàn bộ 33 ảnh (3D Realism)

```
2D flat, cartoon, anime, hand-drawn vector, illustration, sketch, line art, simple coloring,
pixel art, low resolution, watermark (except reserved logo), text in image, malformed hands,
CGI quality from 2000s, plastic-like texture, cartoonish icons, drawing, painting
```

## Anchor dùng chung

**ANCHOR-A (Zone A — Bối cảnh phòng lab công nghệ cao, màu xanh cyan & vàng làm chủ đạo):**
`3D REALISM VISUAL ANCHOR: Photorealistic 3D render in Octane Render style, cinematic lighting, dramatic shadows, dark sci-fi physics laboratory background with clean metallic workbenches and glowing neon HUD digital readouts. Main objects have realistic textures (brushed steel, refractive glass, polished chrome, rubber). Leave upper-right corner clear for channel logo overlay in post.`

**ANCHOR-B (Zone B — Bối cảnh buồng nhiệt và hơi nước, màu đỏ cam nhiệt lượng chủ đạo):**
`3D REALISM VISUAL ANCHOR: Photorealistic 3D render in Octane Render style, cinematic lighting, dark metal and charcoal laboratory background. High contrast, warm volumetric glow from flames and hot metallic objects showing thermal radiation. Polished copper, hot steel, and realistic steam/water vapor textures. Leave upper-right corner clear for channel logo.`

---

### IMAGE PROMPT SC01-A
Mục đích sư phạm: Thiết lập hiện tượng đun nước sôi.
Narrative link: Cảnh đầu — không có cảnh trước.

`ANCHOR-A. STORY BRIDGE: none — opening shot. SUBJECT: a realistic transparent glass kettle filled with boiling water, placed on a gas stove in a laboratory. ACTION: water inside is boiling vigorously, with active bubbles rising rapidly, and thick white steam/vapor escaping from the kettle's spout. COMPOSITION: kettle centered on the workbench. STYLE: 3D realism, cinematic lighting, detailed textures, 8k resolution. Leave upper-right corner clear for watermark. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Thí nghiệm đun nước sôi"; alt-text: "Ấm thủy tinh trong suốt đun nước sôi sùng sục trên bếp gas."

---

### IMAGE PROMPT SC01-B
Mục đích sư phạm: Chỉ ra nhiệt độ nước sôi đạt 100°C.
Narrative link: Tiếp nối SC01-A (nước đã sôi).

`ANCHOR-A. STORY BRIDGE: boiling water kettle in identical position from SC01-A. SUBJECT: a digital thermometer probe is immersed inside the boiling water. ACTION: the digital display on the thermometer probe shows "100°C" in bright red LED digits. COMPOSITION: close-up on the digital thermometer display next to the boiling water surface. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt độ nước sôi: 100°C"; alt-text: "Nhiệt kế điện tử cắm trong ấm chỉ số 100°C."

---

### IMAGE PROMPT SC02-A
Mục đích sư phạm: Đun tiếp nhưng nhiệt độ không đổi.
Narrative link: Tiếp nối SC01-B (nhiệt kế đang chỉ 100°C).

`ANCHOR-A. STORY BRIDGE: thermometer and kettle in identical positions from SC01-B. SUBJECT: the gas flame under the kettle. ACTION: the gas burner continues to burn with a hot blue and orange flame, sending glowing red energy currents (representing heat transfer) upwards into the bottom of the kettle, while the thermometer display remains locked at "100°C". COMPOSITION: close-up showing both the burner flame at the bottom and the thermometer display at the top. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt độ không đổi dù đun tiếp"; alt-text: "Ngọn lửa vẫn đun dưới đáy ấm, số chỉ nhiệt kế vẫn giữ 100°C."

---

### IMAGE PROMPT SC02-B
Mục đích sư phạm: Đặt câu hỏi nghiên cứu về năng lượng.
Narrative link: Tiếp nối SC02-A (nhiệt độ đứng yên).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a glowing neon blue and white question mark floats in the air above the boiling glass kettle. A semi-transparent holographic HUD panel displays a diagram of energy flow. ACTION: question mark glowing, HUD panel displaying. COMPOSITION: kettle at bottom-left, question mark and HUD panel at center-right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt năng làm tăng năng lượng nào?"; alt-text: "Bảng HUD lơ lửng hiển thị câu hỏi về đường đi của năng lượng."

---

### IMAGE PROMPT SC03-A
Mục đích sư phạm: Zoom vi mô vào các liên kết phân tử.
Narrative link: Tiếp nối SC02-B (giải thích đường đi năng lượng).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a microscopic 3D render of liquid water molecules represented as glowing blue and white spheres (H2O). ACTION: red energy beams (representing heat) strike the molecules, stretching and elongating the thin glowing springs (representing hydrogen bonds) connecting them. COMPOSITION: close-up on the molecular bonds stretching. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Giãn nở và phá vỡ liên kết phân tử"; alt-text: "Nhiệt năng làm kéo giãn các liên kết lò xo giữa phân tử nước."

---

### IMAGE PROMPT SC03-B
Mục đích sư phạm: Động năng nhiệt phân tử.
Narrative link: Tiếp nối SC03-A (phân tử nước đang giãn liên kết).

`ANCHOR-A. STORY BRIDGE: same liquid water molecules from SC03-A. SUBJECT: 3D H2O molecule spheres, now colored light-red and glowing, showing rapid random kinetic motion and vibration. ACTION: molecules show motion streaks representing high speed. COMPOSITION: close-up on the vibrating molecules. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Động năng chuyển động nhiệt phân tử"; alt-text: "Các phân tử nước màu đỏ chuyển động hỗn loạn không ngừng."

---

### IMAGE PROMPT SC04-A
Mục đích sư phạm: Thế năng tương tác phân tử.
Narrative link: Tiếp nối SC03-B (phân tử nước đang chuyển động).

`ANCHOR-A. STORY BRIDGE: same molecule spheres from SC03-B. SUBJECT: H2O molecules. ACTION: thin glowing plasma lines (representing molecular force fields/hydrogen bonds) connect the adjacent molecule spheres together, illustrating attractive and repulsive forces. COMPOSITION: close-up on the interconnected molecules. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Thế năng tương tác phân tử"; alt-text: "Đường tia sáng liên kết co giãn lò xo kết nối các phân tử nước."

---

### IMAGE PROMPT SC04-B
Mục đích sư phạm: Định nghĩa Nội năng U.
Narrative link: Tiếp nối SC04-A (đã học động năng và thế năng).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a large glowing 3D energy sphere (representing internal energy U, neon blue outline) at the center of the frame, with two smaller glowing plasma streams (one yellow representing kinetic, one green representing potential) flowing into it. ACTION: streams merging into the U core. COMPOSITION: U core centered, symmetrical. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Nội năng U = Động năng + Thế năng"; alt-text: "Quả cầu năng lượng hologram U phát sáng ở giữa."

---

### IMAGE PROMPT SC05-A
Mục đích sư phạm: Sự phụ thuộc của nội năng U.
Narrative link: Tiếp nối SC04-B (định nghĩa U).

`ANCHOR-A. STORY BRIDGE: same glowing U core symbol from SC04-B, now slightly smaller. SUBJECT: the U core symbol, with two glowing arrow vectors pointing from it to two blank rounded rectangle HUD cards (placeholders for T and V, text added in post). ACTION: arrows and cards static. COMPOSITION: U core center-left, cards on the right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "U = f(T, V)"; alt-text: "Quả cầu U kết nối với ký hiệu T và V lơ lửng xung quanh."

---

### IMAGE PROMPT SC05-B
Mục đích sư phạm: Hai cách làm thay đổi nội năng (Đồng xu).
Narrative link: Tiếp nối SC05-A (yếu tố phụ thuộc U).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a human hand holding a shiny copper coin (metallic detailed texture, reflective copper orange color) hovering above a clean wooden lab table. Background is a dark sci-fi lab workspace. A large HUD card floats next to the hand showing a big question mark. ACTION: hand and coin static. COMPOSITION: hand holding coin on the left, HUD card on the right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Làm thế nào để đồng xu nóng lên?"; alt-text: "Bàn tay đang cầm đồng xu kim loại màu đồng trên mặt bàn gỗ."

---

### IMAGE PROMPT SC06-A
Mục đích sư phạm: Thực hiện công - Chà xát đồng xu.
Narrative link: Tiếp nối SC05-B (câu hỏi đồng xu).

`ANCHOR-A. STORY BRIDGE: same hand, coin and wooden table from SC05-B. SUBJECT: hand and coin. ACTION: the hand is pressing the copper coin down on the wooden tabletop and rubbing it back and forth rapidly, creating motion blur. A thermal imaging HUD overlay displays a red-orange heat signature on the coin indicating temperature rising. COMPOSITION: close-up on the coin rubbing. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Cách 1: Thực hiện công (Chà xát)"; alt-text: "Chà xát đồng xu trên mặt bàn gỗ làm nó phát sáng nhiệt lượng."

---

### IMAGE PROMPT SC06-B
Mục đích sư phạm: Thực hiện công - Gõ búa.
Narrative link: Tiếp nối SC06-A (thực hiện công cách 1).

`ANCHOR-A. STORY BRIDGE: same copper coin. SUBJECT: copper coin and a small metal hammer. ACTION: the copper coin lies on a small steel anvil. A metallic hammer tip is shown pressed firmly against the coin's surface, with glowing red-orange heat rings expanding from the contact point. COMPOSITION: close-up shot. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Cách 1: Thực hiện công (Gõ búa)"; alt-text: "Búa gõ mạnh lên mặt đồng xu tạo vệt sáng nhiệt rực đỏ."

---

### IMAGE PROMPT SC07-A
Mục đích sư phạm: Bản chất của Thực hiện công.
Narrative link: Tiếp nối SC06-B (búa đã đập xong).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: two glowing 3D schematic icons side by side connected by a plasma arrow: on the left, a rotating metallic gear icon (representing cơ năng); on the right, a burning flame icon (representing nội năng). ACTION: gear icon and flame icon static. COMPOSITION: gear left, flame right, arrow centered. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Có sự chuyển hóa cơ năng thành nội năng"; alt-text: "Sơ đồ chuyển hóa: Cơ năng sang Nội năng."

---

### IMAGE PROMPT SC07-B
Mục đích sư phạm: Truyền nhiệt - Đồng xu thả vào cốc nước nóng.
Narrative link: Tiếp nối SC07-A (sang cách thứ hai).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a clear glass beaker containing steaming hot water (volumetric heat waves) next to a cold copper coin (colored blue outline to show cold state). A pair of laboratory tweezers is holding the coin above the water surface. ACTION: elements static. COMPOSITION: beaker centered, tweezers on the side. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Cách 2: Truyền nhiệt"; alt-text: "Đồng xu nguội lạnh sắp được thả vào cốc nước nóng bốc hơi."

---

### IMAGE PROMPT SC08-A
Mục đích sư phạm: Mô tả quá trình Truyền nhiệt.
Narrative link: Tiếp nối SC07-B (thả đồng xu).

`ANCHOR-A. STORY BRIDGE: same beaker and copper coin from SC07-B. SUBJECT: copper coin inside beaker. ACTION: the copper coin sits at the bottom of the beaker containing hot water. The coin is now glowing with a warm red-orange color, showing heat absorption. COMPOSITION: beaker centered, close-up on the coin. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt năng truyền trực tiếp"; alt-text: "Đồng xu nằm dưới đáy cốc nước nóng dần chuyển sang màu đỏ cam ấm."

---

### IMAGE PROMPT SC08-B
Mục đích sư phạm: Cơ chế truyền nhiệt vi mô.
Narrative link: Tiếp nối SC08-A (đồng xu trong nước).

`ANCHOR-A. STORY BRIDGE: microscopic boundary. SUBJECT: hot water molecules (red spheres) and copper lattice atoms (blue spheres). ACTION: high-energy red water molecules vibrate and collide with the blue copper atoms, transferring energy (indicated by tiny shockwave circles). COMPOSITION: water molecules on left, copper atoms on right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Va chạm vi mô phân tử"; alt-text: "Phân tử nước nóng va chạm truyền động năng sang nguyên tử kim loại."

---

### IMAGE PROMPT SC09-A
Mục đích sư phạm: Khái niệm Nhiệt lượng Q.
Narrative link: Tiếp nối SC08-B (khái niệm Q).

`ANCHOR-A. STORY BRIDGE: same coin in beaker setup from SC08-A. SUBJECT: beaker and coin. ACTION: a glowing orange volumetric energy cloud (representing heat quantity Q) flows from the hot water, fully wrapping around the copper coin at the bottom. COMPOSITION: beaker centered. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt lượng Q là phần nội năng biến thiên"; alt-text: "Luồng sáng nhiệt lượng Q bao quanh đồng xu dưới đáy cốc nước."

---

### IMAGE PROMPT SC09-B
Mục đích sư phạm: Công thức tính nhiệt lượng Q.
Narrative link: Tiếp nối SC09-A (khái niệm Q).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a blank rounded rectangle HUD plate centered in frame, with a simple 3D icon of heating water next to it. ACTION: formula plate static. COMPOSITION: formula plate center, water icon side. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave plate clear for post-production formula text "Q = m·c·ΔT". No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ trong khung "Q = m·c·ΔT"; alt-text: "Bảng HUD hiển thị công thức lơ lửng cạnh cốc nước."

---

### IMAGE PROMPT SC10-A
Mục đích sư phạm: Ví dụ tính nhiệt lượng Q.
Narrative link: Tiếp nối SC09-B (đã có công thức).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a sleek dark glass HUD card displaying a physics equation problem. The text "m = 10g (copper coin), c = 380 J/kg.K, ΔT = 20°C" is written in bright cyan holographic text on the card. The formula calculation "Q = m·c·ΔT = 0.01·380·20 = 76 J" is written below, highlighted in glowing green. ACTION: HUD card static. COMPOSITION: centered card. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear. No embedded text in the illustration artwork background. 16:9, 1280×720.`

Hậu kỳ: chữ "Tính Q cho đồng xu"; alt-text: "Bảng HUD giải bài toán tính nhiệt lượng Q của đồng xu 10g."

---
### IMAGE PROMPT SC10-B
Mục đích sư phạm: So sánh Công A và Nhiệt lượng Q.
Narrative link: Tiếp nối SC10-A (đã học đủ A và Q).

`ANCHOR-B. STORY BRIDGE: none. SUBJECT: a 3D two-column comparison card layout: left column contains the gear icon (from SC07-A), right column contains the flame icon (from SC07-A). ACTION: cards static. COMPOSITION: symmetrical two-column layout. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Công (A) ‖ Nhiệt lượng (Q)"; alt-text: "Bảng so sánh: Công và Nhiệt lượng."

---

### IMAGE PROMPT SC11-A
Mục đích sư phạm: Chuyển tiếp sang Định luật 1 (kết hợp A và Q).
Narrative link: Tiếp nối SC10-B (kết luận sự khác biệt, hướng đến sự kết hợp).

`ANCHOR-A. STORY BRIDGE: none — hard cut back to dark lab background. SUBJECT: a blank formula plate centered in frame, with a mechanical gear icon (A) and a flame icon (Q) floating above it with plus signs. ACTION: icons and plate static. COMPOSITION: icons top, plate center. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave formula plate clear for text. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Kết hợp cả hai cách"; alt-text: "Hai luồng sáng A và Q kết hợp trên bảng hologram."

---

### IMAGE PROMPT SC11-B
Mục đích sư phạm: Khái niệm Định luật 1 (bảo toàn).
Narrative link: Tiếp nối SC11-A (định luật 1 xuất hiện).

`ANCHOR-A. STORY BRIDGE: same formula plate layout from SC11-A. SUBJECT: a detailed 3D metallic balance scale icon positioned next to the formula plate, symbolizing energy conservation. ACTION: scale static, perfectly level. COMPOSITION: scale left, plate right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Định luật 1 Nhiệt động lực học"; alt-text: "Cán cân bảo toàn năng lượng cạnh công thức trống."

---

### IMAGE PROMPT SC12-A
Mục đích sư phạm: Công thức Định luật 1.
Narrative link: Tiếp nối SC11-B (khái niệm bảo toàn).

`ANCHOR-A. STORY BRIDGE: same formula plate from SC11-B. SUBJECT: the formula plate, now centered and enlarged. ACTION: plate glows with a golden yellow laser outline. COMPOSITION: formula plate dead-center. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave plate clear for post-production text "ΔU = A + Q". No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ trong khung "Biểu thức: ΔU = A + Q"; alt-text: "Công thức ΔU = A + Q hiện rõ nét bằng laser."

---

### IMAGE PROMPT SC12-B
Mục đích sư phạm: Thiết lập ví dụ kết hợp cả A và Q.
Narrative link: Tiếp nối SC12-A (đã có công thức).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a vertical glass xilanh cylinder containing gas molecules. The cylinder is placed directly over a gas burner flame, and a mechanical metal piston is compressing the gas down. ACTION: piston compressing down, flame active. COMPOSITION: xilanh centered, flame at bottom. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Khối khí nhận cả nhiệt và công"; alt-text: "Xilanh khí đặt trên bếp lửa ga và pít-tông đang nén xuống."

---

### IMAGE PROMPT SC13-A
Mục đích sư phạm: Trực quan hóa dòng năng lượng kép.
Narrative link: Tiếp nối SC12-B (nén và đun).

`ANCHOR-A. STORY BRIDGE: same xilanh setup from SC12-B. SUBJECT: xilanh. ACTION: a yellow plasma arrow (representing work done) flows down from the piston, and a red-orange plasma arrow (representing heat) flows up from the flame, both entering the cylinder. COMPOSITION: identical framing to SC12-B. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Năng lượng kép đổ vào hệ"; alt-text: "Dòng năng lượng A vàng và Q đỏ đồng thời chảy vào xilanh."

---

### IMAGE PROMPT SC13-B
Mục đích sư phạm: Độ biến thiên nội năng dU tăng.
Narrative link: Tiếp nối SC13-A (năng lượng kép đã vào).

`ANCHOR-A. STORY BRIDGE: same xilanh setup from SC13-A. SUBJECT: xilanh, with a vertical digital bar graph scale labeled U in post positioned next to it. ACTION: the bar graph rises rapidly, glowing with a bright green color at its peak, molecules inside turn red-orange. COMPOSITION: xilanh left-of-center, bar graph right-of-center. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nội năng khí tăng mạnh"; alt-text: "Đồng hồ đo nội năng U trong xilanh tăng vọt, phân tử chuyển đỏ."

---

### IMAGE PROMPT SC14-A
Mục đích sư phạm: Quy ước dấu của định luật.
Narrative link: Tiếp nối SC13-B (nội năng đã thay đổi, cần tính dấu).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a large glowing hologram circle labeled SYSTEM in post at center frame, with two arrows: one entering (colored orange, labeled with plus in post), one leaving (colored blue, labeled with minus in post). ACTION: arrows and system static. COMPOSITION: central sphere, symmetrical arrows. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Quy tắc: Nhận vào (+) ‖ Truyền ra (-)"; alt-text: "Quả cầu hệ hologram lấp lánh ở trung tâm, hai mũi tên hướng vào và ra."

---

### IMAGE PROMPT SC14-B
Mục đích sư phạm: Quy ước dấu cho Q.
Narrative link: Tiếp nối SC14-A (quy tắc chung).

`ANCHOR-A. STORY BRIDGE: same system sphere from SC14-A. SUBJECT: system sphere. ACTION: a red plasma arrow (Q) enters the sphere, and a second red plasma arrow leaves the sphere. COMPOSITION: identical framing to SC14-A. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Q > 0: Nhận nhiệt ‖ Q < 0: Tỏa nhiệt"; alt-text: "Mũi tên Q đi vào và Q đi ra ngoài hệ."

---

### IMAGE PROMPT SC15-A
Mục đích sư phạm: Quy ước dấu cho A.
Narrative link: Tiếp nối SC14-B (quy ước dấu Q).

`ANCHOR-A. STORY BRIDGE: same system sphere from SC14-B. SUBJECT: system sphere. ACTION: a yellow plasma arrow representing mechanical work compresses the sphere, and a second yellow plasma arrow pushes outward from the sphere. COMPOSITION: identical framing. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "A > 0: Nhận công ‖ A < 0: Thực hiện công"; alt-text: "Pít-tông nén ép quả cầu và quả cầu giãn nở đẩy pít-tông."

---

### IMAGE PROMPT SC15-B
Mục đích sư phạm: Ví dụ bài toán quy ước dấu.
Narrative link: Tiếp nối SC15-A (quy ước dấu A).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a blank rectangular HUD question box centered in frame. ACTION: question box static. COMPOSITION: box centered. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave box clear for post-production text. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Ví dụ: Khí nhận nhiệt và sinh công"; alt-text: "Bảng HUD hiển thị đề bài toán ví dụ."

---

### IMAGE PROMPT SC16-A
Mục đích sư phạm: Giải ví dụ bài toán dấu.
Narrative link: Tiếp nối SC15-B (đề bài toán).

`ANCHOR-A. STORY BRIDGE: same question box from SC15-B. SUBJECT: question box. ACTION: box displays a green checkmark icon inside, indicating a correct calculation (values added in post). COMPOSITION: box centered, checkmark right. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave box clear for text. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Đáp số: ΔU = +50 J"; alt-text: "Lời giải phép tính ΔU = 150 + (-100) = 50 J phát sáng."

---

### IMAGE PROMPT SC16-B
Mục đích sư phạm: Đặt bài toán checkpoint củng cố.
Narrative link: Tiếp nối SC16-A (đã giải xong ví dụ).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a blank rounded-rectangle HUD challenge plate centered in frame, with a large question mark icon next to it. ACTION: challenge plate static. COMPOSITION: plate center, question mark side. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave plate clear for text. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Tự giải: Khí tỏa nhiệt và nhận công"; alt-text: "Bảng HUD hiển thị câu hỏi checkpoint tự luyện."

---

### IMAGE PROMPT SC17-A
Mục đích sư phạm: Lời giải checkpoint & Kết bài.
Narrative link: Tiếp nối SC16-B (câu hỏi checkpoint).

`ANCHOR-A. STORY BRIDGE: same challenge plate from SC16-B. SUBJECT: challenge plate, now shrinking as a large red flat "Đăng ký" (Subscribe) button and a "Like" button float in at the bottom. ACTION: buttons settled, glowing softly. COMPOSITION: plate top, buttons bottom, balanced closing composition. STYLE: 3D realism, cinematic lighting, detailed textures, 8k. Leave upper-right corner clear for watermark. Leave plate clear for post-production text. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ trong plate "Đáp số: ΔU = +40 J"; alt-text: "Đáp số hiện ra rực sáng và các nút Like/Subscribe 3D hiện lên."
