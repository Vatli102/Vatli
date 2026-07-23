---
Preset: 3D Realism — photorealistic cinematic render, Octane Render style, Unreal Engine 5 style.
Quan hệ: 1 clip = 1 ảnh (frame cuối của clip). 30 ảnh cho 30 clip.
---

# 02 — IMAGE PROMPTS (30 ảnh, copy-paste độc lập)

## Negative prompt dùng chung cho toàn bộ 30 ảnh (3D Realism)

```
2D flat, cartoon, anime, hand-drawn vector, illustration, sketch, line art, simple coloring,
pixel art, low resolution, watermark (except reserved logo), text in image, malformed hands,
CGI quality from 2000s, plastic-like texture, cartoonish icons, drawing, painting
```

## Anchor dùng chung

**ANCHOR-A (Zone A — Bối cảnh phòng lab tối công nghệ cao, màu xanh cyan & vàng làm chủ đạo):**
`3D REALISM VISUAL ANCHOR: Photorealistic 3D render in Octane Render style, cinematic lighting, dramatic shadows, dark sci-fi physics laboratory background with clean metallic workbenches and glowing neon HUD digital readouts. Main objects have realistic textures (brushed steel, refractive glass, polished chrome, rubber). Leave upper-right corner clear for channel logo overlay in post.`

**ANCHOR-B (Zone B — Bối cảnh buồng lạnh băng giá, màu xanh ngọc lấp lánh):**
`3D REALISM VISUAL ANCHOR: Photorealistic 3D render in Octane Render style, cinematic lighting. Detailed crystal structures of ice, glowing ice needles, and water droplets. Cold volumetric fog, blue and cyan neon tones. Leave upper-right corner clear for channel logo.`

---

### IMAGE PROMPT SC01
Mục đích sư phạm: Thiết lập hiện tượng nóng chảy nước đá tan.
Narrative link: Cảnh đầu — không có cảnh trước.

`ANCHOR-B. STORY BRIDGE: none — opening shot. SUBJECT: a single clear ice cube. ACTION: the ice cube is melting slowly under a soft warm spotlight, with water droplets sliding down its refractive sides and dripping onto the surface. COMPOSITION: macro close-up. STYLE: 3D realism, detailed ice crystals, water droplet refraction, 8k. Leave upper-right corner clear. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Sự kỳ lạ của quá trình nóng chảy"; alt-text: "Viên đá lấp lánh tan chảy chậm dưới ánh nắng."

---

### IMAGE PROMPT SC02
Mục đích sư phạm: Đo nhiệt độ cốc đá đang tan.
Narrative link: Tiếp nối SC01 (đá tan trong cốc).

`ANCHOR-B. STORY BRIDGE: same melting ice from SC01. SUBJECT: a clear glass beaker filled with melting ice cubes. ACTION: a digital thermometer is inserted in the beaker, its LCD display screen glows with blue digits (numbers added in post). COMPOSITION: beaker centered, close-up on scale. STYLE: 3D realism, glass and ice textures, 8k. Leave upper-right corner clear. Leave screen clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt độ đứng yên ở 0°C" và số hiển thị "0.0°C"; alt-text: "Nhiệt kế cắm trong cốc nước đá tan hiển thị số 0.0°C."

---

### IMAGE PROMPT SC03
Mục đích sư phạm: Liên tục đun nóng cung cấp nhiệt lượng.
Narrative link: Tiếp nối SC02 (đun nóng cốc đá).

`ANCHOR-B. STORY BRIDGE: same beaker from SC02. SUBJECT: beaker. ACTION: an alcohol burner under the beaker is lit with a warm flame, a yellow-red plasma cloud representing heat energy flows from the flame into the bottom of the beaker. COMPOSITION: beaker centered, flame bottom. STYLE: 3D realism, burning flame, glowing energy flow, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Liên tục cung cấp nhiệt lượng"; alt-text: "Bếp ga đun nóng cốc đá, dòng nhiệt lượng đỏ cam truyền vào đáy."

---

### IMAGE PROMPT SC04
Mục đích sư phạm: Nhiệt độ vẫn đứng im.
Narrative link: Tiếp nối SC03 (đun nóng liên tục nhưng nhiệt độ không tăng).

`ANCHOR-B. STORY BRIDGE: same thermometer screen from SC02. SUBJECT: thermometer. ACTION: the LCD display screen remains glowing with the same blue digits. COMPOSITION: close-up on the screen. STYLE: 3D realism, glowing LCD, 8k. Leave upper-right corner clear for watermark. Leave screen clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt độ không đổi trong quá trình nóng chảy" và số hiển thị "0.0°C"; alt-text: "Nhiệt kế vẫn hiển thị số 0.0°C nhấp nháy ổn định."

---

### IMAGE PROMPT SC05
Mục đích sư phạm: Đặt câu hỏi nghiên cứu về năng lượng.
Narrative link: Tiếp nối SC04 (nhiệt đi đâu).

`ANCHOR-B. STORY BRIDGE: same beaker setup from SC03. SUBJECT: beaker. ACTION: a large glowing neon yellow question mark HUD icon floats lơ lửng above the beaker. COMPOSITION: beaker centered, question mark prominent. STYLE: 3D realism, glowing neon HUD, 8k. Leave upper-right corner clear. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt lượng truyền vào dùng làm gì?"; alt-text: "Dấu hỏi lớn màu vàng lơ lửng cạnh cốc đang đun."

---

### IMAGE PROMPT SC06
Mục đích sư phạm: Zoom cấu trúc tinh thể băng.
Narrative link: Tiếp nối SC05 (cấu trúc bên trong).

`ANCHOR-B. STORY BRIDGE: microscopic view of ice. SUBJECT: ice crystal structure. ACTION: a 3D model of water molecules arranged in a hexagonal lattice. The spheres are vibrating rapidly under the thermal energy. COMPOSITION: macro close-up. STYLE: 3D realism, atomic structure render, glowing vibration effects, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Mạng tinh thể lục giác nước đá"; alt-text: "Mạng tinh thể lục giác 3D của nước đá đang rung động."

---

### IMAGE PROMPT SC07
Mục đích sư phạm: Khái niệm Nhiệt nóng chảy riêng lambda.
Narrative link: Tiếp nối SC06 (năng lượng phá tinh thể gọi là lambda).

`ANCHOR-A. STORY BRIDGE: none — hard cut to dark lab. SUBJECT: a large glowing 3D core symbol (representing Specific Latent Heat of Fusion, neon teal outline) floating in the laboratory. ACTION: core glowing steadily. COMPOSITION: core centered, symmetrical. STYLE: 3D realism, cinematic lighting, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Nhiệt nóng chảy riêng λ"; alt-text: "Quả cầu năng lượng lambda lấp lánh rực sáng ở trung tâm."

---

### IMAGE PROMPT SC08
Mục đích sư phạm: Công thức nhiệt lượng nóng chảy.
Narrative link: Tiếp nối SC07 (công thức tính Q).

`ANCHOR-A. STORY BRIDGE: same glowing core from SC07. SUBJECT: a blank rounded-rectangle HUD formula plate centered in frame, next to the glowing core. ACTION: plate and core static. COMPOSITION: plate center, core side. STYLE: 3D realism, cinematic lighting, 8k. Leave upper-right corner clear. Leave plate clear for formula text "Q = λ·m". No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ trong khung "Biểu thức: Q = λ·m"; alt-text: "Bảng công thức HUD hiện lên lấp lánh cạnh quả cầu."

---

### IMAGE PROMPT SC09
Mục đích sư phạm: Giải thích các ký hiệu trong công thức.
Narrative link: Tiếp nối SC08 (chi tiết ký hiệu).

`ANCHOR-A. STORY BRIDGE: same HUD formula plate from SC08. SUBJECT: formula plate. ACTION: different symbols on the formula plate highlight in neon colors (Q in red, m in green, lambda in blue). COMPOSITION: centered plate. STYLE: 3D realism, multi-color neon glow, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: giải thích các ký hiệu Q (J), m (kg), λ (J/kg); alt-text: "Ký hiệu công thức phát sáng lần lượt."

---

### IMAGE PROMPT SC10
Mục đích sư phạm: Ý nghĩa nhiệt nóng chảy riêng nước đá.
Narrative link: Tiếp nối SC09 (độ lớn lambda nước đá).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a 3D ice cube representing 1 kg of ice. ACTION: a glowing yellow plasma stream representing 3.4*10^5 J enters the cube, melting it completely. COMPOSITION: ice cube centered, energy stream entering. STYLE: 3D realism, ice melting sim, glowing energy, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Ý nghĩa: 1 kg đá tan cần 3,4·10⁵ J"; alt-text: "Tia năng lượng lớn bắn vào khối băng làm tan hoàn toàn."

---

### IMAGE PROMPT SC11
Mục đích sư phạm: Bảng so sánh nhiệt nóng chảy riêng.
Narrative link: Tiếp nối SC10 (so sánh với các chất khác).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a 3D data table display showing values of specific heat of fusion. Columns show different material blocks: ice, steel, copper, lead. ACTION: table static. COMPOSITION: front perspective. STYLE: 3D realism, clean digital display layout, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: bảng số liệu c nước đá (3.4*10^5), thép (2.7*10^5), đồng (1.8*10^5), chì (0.25*10^5); alt-text: "Bảng so sánh 3D nhiệt nóng chảy riêng các chất."

---

### IMAGE PROMPT SC12
Mục đích sư phạm: Cấu trúc liên kết của băng bền vững hơn chì.
Narrative link: Tiếp nối SC11 (so sánh cấu trúc).

`ANCHOR-A. STORY BRIDGE: microscopic view of ice and lead. SUBJECT: molecular models. ACTION: split screen comparing the dense hexagonal hydrogen-bonded lattice of ice (left) and the metal lattice of lead (right). COMPOSITION: vertical split screen. STYLE: 3D realism, atomic structure render, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Mạng băng bền vững hơn mạng kim loại chì"; alt-text: "So sánh 3D liên kết mạng tinh thể của nước đá và chì."

---

### IMAGE PROMPT SC13
Mục đích sư phạm: Bố trí thí nghiệm đo lambda nước đá.
Narrative link: Tiếp nối SC12 (tiến hành đo đạc thực tế).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a laboratory table with a funnel containing crushed ice, a beaker below, a heating coil inserted in the ice, a stopwatch, and a wattmeter. ACTION: setup static. COMPOSITION: wide view. STYLE: 3D realism, detailed laboratory equipment, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Thí nghiệm đo nhiệt nóng chảy riêng nước đá"; alt-text: "Phễu lọc chứa đá viên nghiền nhỏ và thiết bị đo."

---

### IMAGE PROMPT SC14
Mục đích sư phạm: Cân điện tử hiệu chuẩn khối lượng.
Narrative link: Tiếp nối SC13 (hiệu chuẩn cân m1).

`ANCHOR-A. STORY BRIDGE: same scale and beaker from SC13. SUBJECT: beaker of water under the funnel on the scale. ACTION: scale display glows blue, numbers stabilize (added in post). COMPOSITION: close-up on scale display. STYLE: 3D realism, scale reflection, glowing LCD screen, 8k. Leave upper-right corner clear. Leave screen clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Hiệu chuẩn khối lượng m1 ban đầu"; alt-text: "Đổ một ít nước đá vào cốc trên cân để hiệu chuẩn thang đo."

---

### IMAGE PROMPT SC15
Mục đích sư phạm: Bật nguồn điện và đo thời gian tau.
Narrative link: Tiếp nối SC14 (bật đun và bấm giờ).

`ANCHOR-A. STORY BRIDGE: same setup. SUBJECT: calorimeter funnel. ACTION: heating coil inside ice glows red, a digital stopwatch HUD next to it counts time up to 300s. COMPOSITION: close-up on funnel and stopwatch. STYLE: 3D realism, ice melting fluid sim, glowing HUD, 8k. Leave upper-right corner clear. Leave stopwatch clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Công suất P = 40 W ‖ τ = 300 s"; alt-text: "Công tắc điện được bật, đồng hồ HUD đếm thời gian."

---

### IMAGE PROMPT SC16
Mục đích sư phạm: Cận cảnh giọt nước đá tan chảy.
Narrative link: Tiếp nối SC15 (sự tan chảy nhỏ giọt).

`ANCHOR-A. STORY BRIDGE: same setup. SUBJECT: funnel neck. ACTION: photorealistic water droplets fall rapidly and continuously from the funnel tip into the beaker. COMPOSITION: close-up macro. STYLE: 3D realism, detailed water drops, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Đá tan chảy chảy giọt xuống cốc"; alt-text: "Nước đá tan chảy thành từng giọt rơi nhanh từ phễu."

---

### IMAGE PROMPT SC17
Mục đích sư phạm: Đo khối lượng nước đá tan thêm m2.
Narrative link: Tiếp nối SC16 (đo khối lượng cốc sau đun).

`ANCHOR-A. STORY BRIDGE: same scale and beaker. SUBJECT: beaker on the scale. ACTION: the scale display glows blue with numbers (added in post). COMPOSITION: close-up on the scale display. STYLE: 3D realism, scale reflection, glowing LCD, 8k. Leave upper-right corner clear. Leave screen clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: số hiển thị "0.035 kg" và chữ "Khối lượng đá tan Δm"; alt-text: "Cân lại cốc hứng nước thu được khối lượng tan thêm."

---

### IMAGE PROMPT SC18
Mục đích sư phạm: Tính toán kết quả lambda thực nghiệm.
Narrative link: Tiếp nối SC17 (tính toán kết quả).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a blank rectangular HUD card centered. ACTION: card static, green glow highlight. COMPOSITION: card centered. STYLE: 3D realism, glowing HUD, 8k. Leave upper-right corner clear. Leave card clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "λ = (P·τ) / Δm" và "λ = 12000 / 0,035 = 3,43·10⁵ J/kg"; alt-text: "Tính toán lambda thực nghiệm nước đá."

---

### IMAGE PROMPT SC19
Mục đích sư phạm: Đồ thị Nhiệt độ - Thời gian (T-t).
Narrative link: Tiếp nối SC18: đồ thị tổng quát của sự chuyển thể.

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a grid coordinates T-t. ACTION: a glowing neon line graph draws dốc lên, then bends flat at 0°C. COMPOSITION: graph centered. STYLE: 3D realism, glowing neon line graph, 8k. Leave upper-right corner clear. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Đồ thị chuyển thể nước đá" và "0°C"; alt-text: "Trục tọa độ T-t hiển thị đồ thị đi ngang tại vạch 0°C."

---

### IMAGE PROMPT SC20
Mục đích sư phạm: Đoạn nằm ngang cùng tồn tại thể rắn và lỏng.
Narrative link: Tiếp nối SC19 (đoạn nằm ngang là gì).

`ANCHOR-A. STORY BRIDGE: same graph from SC19. SUBJECT: graph. ACTION: close-up on the flat horizontal line, highlighted in glowing cyan, showing ice cubes and liquid water side by side. COMPOSITION: close-up on the flat line. STYLE: 3D realism, glowing neon HUD, 8k. Leave upper-right corner clear. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Đang nóng chảy (Đá + Nước)"; alt-text: "Đoạn nằm ngang biểu thị nước đá và nước lỏng đồng tồn tại."

---

### IMAGE PROMPT SC21
Mục đích sư phạm: Mạng tinh thể lục giác có trật tự ở thể rắn.
Narrative link: Tiếp nối SC20 (đoạn nằm ngang ở mức vi mô).

`ANCHOR-B. STORY BRIDGE: microscopic view of ice from SC06. SUBJECT: ice crystal. ACTION: water molecules arranged in a highly ordered hexagonal structure, vibrating slightly in place. COMPOSITION: close-up. STYLE: 3D realism, molecular lattice render, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Thể rắn: Mạng tinh thể có trật tự"; alt-text: "Phân tử nước ở thể rắn xếp ngăn nắp trong mạng lục giác."

---

### IMAGE PROMPT SC22
Mục đích sư phạm: Phá vỡ tinh thể khi nhận nhiệt.
Narrative link: Tiếp nối SC21 (đập vỡ trật tự tinh thể).

`ANCHOR-B. STORY BRIDGE: same molecules from SC21. SUBJECT: water molecules. ACTION: glowing red-orange laser beams (representing heat energy) cut and break the cyan links between the molecules, making the hexagonal structure collapse. COMPOSITION: close-up on collapsing lattice. STYLE: 3D realism, molecular animation render, glowing energy, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Năng lượng bẻ gãy liên kết hydro"; alt-text: "Tia sáng đỏ bẻ gãy các liên kết hydro, tinh thể sụp đổ."

---

### IMAGE PROMPT SC23
Mục đích sư phạm: Sự thay đổi thế năng tương tác phân tử.
Narrative link: Tiếp nối SC22 (thế năng tăng động năng không đổi).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a large glowing 3D energy sphere (representing Potential Energy, neon green outline) scaling up, while a smaller sphere (representing Kinetic Energy, neon yellow) remains unchanged. ACTION: spheres static. COMPOSITION: green sphere centered, yellow sphere side. STYLE: 3D realism, cinematic lighting, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Năng lượng làm tăng Thế năng tương tác"; alt-text: "Nhiệt năng làm tăng thế năng tương tác, động năng không đổi."

---

### IMAGE PROMPT SC24
Mục đích sư phạm: Đồ thị dốc lên trở lại ở thể lỏng.
Narrative link: Tiếp nối SC23 (khi nóng chảy hoàn toàn).

`ANCHOR-A. STORY BRIDGE: same graph from SC19. SUBJECT: graph. ACTION: the graph line starts rising again from the 0°C flat line, dốc lên, and molecules inside are shown as red spheres moving freely. COMPOSITION: graph centered. STYLE: 3D realism, glowing neon line, 8k. Leave upper-right corner clear. No embedded text in illustration. 16:9, 1280×720.`

Hậu kỳ: chữ "Đá tan hết: Nhiệt độ tăng dốc lên"; alt-text: "Khi đá tan hết thành nước lỏng, đồ thị tiếp tục dốc lên."

---

### IMAGE PROMPT SC25
Mục đích sư phạm: Ứng dụng nóng chảy trong luyện kim.
Narrative link: Tiếp nối SC24 (ứng dụng công nghiệp).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a large factory ladle. ACTION: glowing bright red-orange liquid molten steel is being poured from the ladle into huge steel beam molds, releasing sparks. COMPOSITION: low angle. STYLE: 3D realism, industrial factory scene, molten metal glow, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Ứng dụng trong luyện kim đúc khuôn"; alt-text: "Thép nóng chảy đỏ rực đúc khuôn dầm thép."

---

### IMAGE PROMPT SC26
Mục đích sư phạm: Ứng dụng bảo quản hải sản bằng đá bào.
Narrative link: Tiếp nối SC25 (ứng dụng bảo quản).

`ANCHOR-B. STORY BRIDGE: none. SUBJECT: fresh seafood (crabs, fish) resting on a thick bed of crushed ice. ACTION: ice melting slowly, cold mist rising. COMPOSITION: close-up macro. STYLE: 3D realism, detailed ice grains and seafood textures, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Bảo quản thực phẩm bằng đá bào"; alt-text: "Quầy thủy hải sản tươi sống phủ đầy đá bào lấp lánh."

---

### IMAGE PROMPT SC27
Mục đích sư phạm: Ý nghĩa băng tan ở hai cực.
Narrative link: Tiếp nối SC26 (sự nóng chảy quy mô lớn).

`ANCHOR-B. STORY BRIDGE: none. SUBJECT: a massive polar glacier wall next to the ocean. ACTION: large chunks of ice break off from the glacier and collapse into the water, water splashing. COMPOSITION: wide cinematic landscape. STYLE: 3D realism, polar lighting, detailed ice textures, water simulation, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Băng hai cực tan chảy và sụp đổ"; alt-text: "Mô phỏng 3D toàn cảnh sông băng khổng lồ nứt vỡ sụp đổ."

---

### IMAGE PROMPT SC28
Mục đích sư phạm: Checkpoint củng cố tuyết tan.
Narrative link: Tiếp nối SC27 (câu hỏi củng cố).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a blank rounded-rectangle HUD challenge plate centered, options A, B, C. ACTION: options glowing. COMPOSITION: plate centered. STYLE: 3D realism, glowing HUD, 8k. Leave upper-right corner clear. Leave plate clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Tại sao khi tuyết tan, thời tiết lạnh hơn?"; alt-text: "Bảng HUD hiển thị câu hỏi trắc nghiệm tuyết tan."

---

### IMAGE PROMPT SC29
Mục đích sư phạm: Giải đáp câu hỏi tuyết tan.
Narrative link: Tiếp nối SC28 (đáp án câu hỏi củng cố).

`ANCHOR-A. STORY BRIDGE: same challenge plate from SC28. SUBJECT: challenge plate. ACTION: option B glows green with a checkmark, showing correct answer. COMPOSITION: plate centered, checkmark right. STYLE: 3D realism, green glowing confirmation, 8k. Leave upper-right corner clear. Leave plate clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Đáp án: Nóng chảy thu nhiệt môi trường"; alt-text: "Đáp án đúng được khoanh tròn rực sáng."

---

### IMAGE PROMPT SC30
Mục đích sư phạm: Sơ đồ tư duy tổng kết & chào kết.
Narrative link: Tiếp nối SC29 (tổng kết & kết bài).

`ANCHOR-A. STORY BRIDGE: none. SUBJECT: a 3D mind map diagram floating, with red flat "Đăng ký" and "Like" buttons at the bottom. ACTION: branches and buttons glow softly. COMPOSITION: mind map center, buttons bottom, balanced. STYLE: 3D realism, glowing HUD, 8k. Leave upper-right corner clear. No embedded text. 16:9, 1280×720.`

Hậu kỳ: chữ "Chào tạm biệt và hẹn gặp lại!"; alt-text: "Sơ đồ tư duy và nút Subscribe/Like 3D nổi lên xoay chậm."
