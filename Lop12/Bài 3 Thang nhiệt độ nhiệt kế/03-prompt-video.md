---
Preset: 3D Realism — photorealistic cinematic render, Octane Render style, Unreal Engine 5 style.
Quan hệ: 1 clip = 1 video prompt = 1 ảnh tham chiếu (xem `02-prompt-anh.md`). Mỗi clip = 10 giây.
Voice-over: xem file riêng `04-voice-script.md` — KHÔNG đưa lời thoại vào prompt gửi AI video tool.
---

# 03 — VIDEO PROMPTS (30 clip, Phần A gửi AI video tool)

## Negative prompt dùng chung cho toàn bộ 30 clip (3D Realism)

```
camera pan, camera zoom, camera shake, camera movement of any kind, character morphing,
style inconsistency between frames, photorealistic transition, 2D flat, cartoon, anime,
hand-drawn vector, illustration, sketch, line art, simple coloring, pixel art, low resolution,
embedded text, subtitle, formula in animation, scientifically impossible motion,
speech, voice, narration, watermark change, background color drift between clips
```

## Sound design chung

Nhạc nền: điện tử nhẹ, upbeat, không lời, xuyên suốt (Lo-fi edu style). SFX pop nhẹ khi label/marker xuất hiện. Không có giọng nói trong file .mp4 — voice-over ghép riêng ở hậu kỳ (xem `04-voice-script.md`).

---

### VIDEO PROMPT SC01 ← khớp IMAGE PROMPT SC01
Reference image: SC01 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: Photorealistic 3D render in Octane Render style, cinematic lighting, dramatic shadows, dark sci-fi physics laboratory background with clean metallic workbenches and glowing neon HUD digital readouts. All objects have realistic textures (brushed steel, refractive glass, polished chrome, rubber). ANIMATE FROM REFERENCE IMAGE. Static frame, no camera movement. One continuous shot, 10 seconds. OPENING 0:00–0:02: microscopic skin tissue static. BEAT-ACTION 0:02–0:06: thermo-receptor nerve cells begin to glow with a soft yellow-orange light. BEAT-RESPONSE 0:06–0:09: nerve cells pulse gently. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: glow ease-in-out, pulse loop. SCIENCE ACCURACY LOCK: none. SOUND: electronic music starts, soft digital hum SFX. No embedded text.`

Hậu kỳ: ghép voice SC01 (xem `04-voice-script.md`); chữ "Thụ cảm nhiệt trên da" tại giây 0:03.

---

### VIDEO PROMPT SC02 ← khớp IMAGE PROMPT SC02
Reference image: SC02 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: Photorealistic 3D render in Octane Render style, water textures, glass basins, wooden bench, dark background. START FROM END STATE OF SC01: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: three basins static. BEAT-ACTION 0:02–0:06: ice cubes in left basin bounce slightly, light vapor rises from right basin. BEAT-RESPONSE 0:06–0:09: vapor flow continues, basins static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: vapor flow fluid sim, ice bounce ease-in. SCIENCE ACCURACY LOCK: vapor rises only from hot basin. SOUND: electronic music, water clinking and sizzling SFX. No embedded text.`

Hậu kỳ: ghép voice SC02; chữ "Thí nghiệm ba chậu nước" tại giây 0:03.

---

### VIDEO PROMPT SC03 ← khớp IMAGE PROMPT SC03
Reference image: SC03 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC02]. START FROM END STATE OF SC02. One continuous shot, 10 seconds. OPENING 0:00–0:02: hands NHÚNG inside basins static. BEAT-ACTION 0:02–0:06: hand in right basin makes a small wave; left hand remains still. BEAT-RESPONSE 0:06–0:09: water ripples spread in both basins. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: water ripple simulation. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, water splash. No embedded text.`

Hậu kỳ: ghép voice SC03; chữ "Tay trái nước lạnh, tay phải nước nóng" tại giây 0:04.

---

### VIDEO PROMPT SC04 ← khớp IMAGE PROMPT SC04
Reference image: SC04 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC02]. START FROM END STATE OF SC03. One continuous shot, 10 seconds. OPENING 0:00–0:02: hands are quickly withdrawn from side basins. BEAT-ACTION 0:02–0:06: both hands NHÚNG simultaneously into the middle purple basin. BEAT-RESPONSE 0:06–0:09: water in middle basin ripples. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: hand move 0.4s, ripple sim. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, water splash. No embedded text.`

Hậu kỳ: ghép voice SC04; chữ "Nhúng tay vào chậu ấm ở giữa" tại giây 0:04.

---

### VIDEO PROMPT SC05 ← khớp IMAGE PROMPT SC05
Reference image: SC05 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC02]. START FROM END STATE OF SC04. One continuous shot, 10 seconds. OPENING 0:00–0:02: character shows confused look. BEAT-ACTION 0:02–0:06: a neon yellow question mark HUD icon scales up and pulses next to a temperature sign. BEAT-RESPONSE 0:06–0:09: question mark continues pulsing. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: HUD scale-in 0.4s, pulse loop. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, soft digital beep. No embedded text.`

Hậu kỳ: ghép voice SC05; chữ "Giác quan không thể đo chính xác" tại giây 0:04.

---

### VIDEO PROMPT SC06 ← khớp IMAGE PROMPT SC06
Reference image: SC06 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC05: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: thermometer floats at center. BEAT-ACTION 0:02–0:06: liquid column inside thermometer rises up slightly then stabilizes. BEAT-RESPONSE 0:06–0:09: mercury surface glows, thermometer holds static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: mercury rise ease-in-out. SCIENCE ACCURACY LOCK: mercury column stays within bulb and tube. SOUND: electronic music, soft transition whoosh. No embedded text.`

Hậu kỳ: ghép voice SC06; chữ "Nhiệt kế đo chính xác nhiệt độ" tại giây 0:04.

---

### VIDEO PROMPT SC07 ← khớp IMAGE PROMPT SC07
Reference image: SC07 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC06. One continuous shot, 10 seconds. OPENING 0:00–0:02: aluminum block A (red) and copper block B (blue) touch. BEAT-ACTION 0:02–0:06: heat glow at contact boundary intensifies. BEAT-RESPONSE 0:06–0:09: blocks hold static, glowing red-orange at touch interface. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: glow pulse. SCIENCE ACCURACY LOCK: heat glow at boundary. SOUND: electronic music, metallic touch sound. No embedded text.`

Hậu kỳ: ghép voice SC07; chữ "Khối nóng A chạm khối lạnh B" tại giây 0:04.

---

### VIDEO PROMPT SC08 ← khớp IMAGE PROMPT SC08
Reference image: SC08 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC07. One continuous shot, 10 seconds. OPENING 0:00–0:02: boundary view static. BEAT-ACTION 0:02–0:06: orange-red energy particles flow from block A (left) to block B (right). BEAT-RESPONSE 0:06–0:09: particle stream flows continuously. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: particle flow loop. SCIENCE ACCURACY LOCK: particles flow from red (hot) to blue (cold). SOUND: electronic music, electrical hum. No embedded text.`

Hậu kỳ: ghép voice SC08; chữ "Nhiệt truyền từ vật nóng sang lạnh" tại giây 0:04.

---

### VIDEO PROMPT SC09 ← khớp IMAGE PROMPT SC09
Reference image: SC09 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC08. One continuous shot, 10 seconds. OPENING 0:00–0:02: both blocks are orange. BEAT-ACTION 0:02–0:06: a horizontal HUD line graph draws at the bottom. BEAT-RESPONSE 0:06–0:09: two graph lines merge flat at 50°C and glow steadily. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: graph draw 0.6s. SCIENCE ACCURACY LOCK: graph lines merge flat. SOUND: electronic music, success chime SFX. No embedded text.`

Hậu kỳ: ghép voice SC09; chữ "Đạt trạng thái cân bằng nhiệt" tại giây 0:04.

---

### VIDEO PROMPT SC10 ← khớp IMAGE PROMPT SC10
Reference image: SC10 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC09. One continuous shot, 10 seconds. OPENING 0:00–0:02: block B visible. BEAT-ACTION 0:02–0:06: block C (yellow) slides in and touches block B. BEAT-RESPONSE 0:06–0:09: block B and C hold static, touch interface glows yellow. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: block slide 0.5s. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, soft clack. No embedded text.`

Hậu kỳ: ghép voice SC10; chữ "Giới thiệu khối thứ ba C chạm B" tại giây 0:04.

---

### VIDEO PROMPT SC11 ← khớp IMAGE PROMPT SC11
Reference image: SC11 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC10. One continuous shot, 10 seconds. OPENING 0:00–0:02: blocks A, B, C visible. BEAT-ACTION 0:02–0:06: a glowing neon cyan triangle draws around the blocks. BEAT-RESPONSE 0:06–0:09: triangle glows steadily. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: triangle draw 0.6s. SCIENCE ACCURACY LOCK: triangle links all three blocks. SOUND: electronic music, electrical hum. No embedded text.`

Hậu kỳ: ghép voice SC11; chữ "Định luật không nhiệt động lực học" tại giây 0:04.

---

### VIDEO PROMPT SC12 ← khớp IMAGE PROMPT SC12
Reference image: SC12 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC11. One continuous shot, 10 seconds. OPENING 0:00–0:02: thermometer touches metal block. BEAT-ACTION 0:02–0:06: liquid column rises. BEAT-RESPONSE 0:06–0:09: liquid column stops, aligning with block temperature. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: column rise 0.7s. SCIENCE ACCURACY LOCK: column stops when thermal equilibrium is reached. SOUND: electronic music, soft ticking. No embedded text.`

Hậu kỳ: ghép voice SC12; chữ "Nhiệt kế đạt cân bằng nhiệt" tại giây 0:04.

---

### VIDEO PROMPT SC13 ← khớp IMAGE PROMPT SC13
Reference image: SC13 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC02]. START FROM END STATE OF SC12: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: beaker with ice cubes. BEAT-ACTION 0:02–0:06: a glowing '0°C' marker scales up next to thermometer. BEAT-RESPONSE 0:06–0:09: marker pulses gently, ice melts slowly. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: scale-in 0.4s, melting sim. SCIENCE ACCURACY LOCK: mercury column stays at 0°C. SOUND: electronic music, ice crack SFX. No embedded text.`

Hậu kỳ: ghép voice SC13; chữ "Mốc đá tan tinh khiết: 0°C" tại giây 0:04.

---

### VIDEO PROMPT SC14 ← khớp IMAGE PROMPT SC14
Reference image: SC14 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC02]. START FROM END STATE OF SC13. One continuous shot, 10 seconds. OPENING 0:00–0:02: boiling flask with bubbles. BEAT-ACTION 0:02–0:06: a glowing '100°C' marker HUD scales up next to thermometer. BEAT-RESPONSE 0:06–0:09: marker pulses, water boiling aggressively. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: scale-in 0.4s, boiling fluid sim. SCIENCE ACCURACY LOCK: mercury column stays at 100°C. SOUND: electronic music, boiling water SFX. No embedded text.`

Hậu kỳ: ghép voice SC14; chữ "Mốc hơi nước sôi: 100°C" tại giây 0:04.

---

### VIDEO PROMPT SC15 ← khớp IMAGE PROMPT SC15
Reference image: SC15 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC14: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: thermometer body visible. BEAT-ACTION 0:02–0:06: 100 glowing white scale divisions light up sequentially along the body. BEAT-RESPONSE 0:06–0:09: scales glow steady. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: scale light-up loop. SCIENCE ACCURACY LOCK: 100 divisions between 0 and 100. SOUND: electronic music, scale ticking chime. No embedded text.`

Hậu kỳ: ghép voice SC15; chữ "Chia thang đo thành 100 phần" tại giây 0:04.

---

### VIDEO PROMPT SC16 ← khớp IMAGE PROMPT SC16
Reference image: SC16 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC15: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: gas molecules visible. BEAT-ACTION 0:02–0:06: blue molecule spheres vibrate and move rapidly. BEAT-RESPONSE 0:06–0:09: molecules continue chaotic movement. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: molecule movement loop, motion blur. SCIENCE ACCURACY LOCK: chaotic movement. SOUND: electronic music, wind hum. No embedded text.`

Hậu kỳ: ghép voice SC16; chữ "Thang đo Kelvin và chuyển động hạt" tại giây 0:04.

---

### VIDEO PROMPT SC17 ← khớp IMAGE PROMPT SC17
Reference image: SC17 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC16. One continuous shot, 10 seconds. OPENING 0:00–0:02: molecules moving. BEAT-ACTION 0:02–0:06: a virtual slider on a HUD is pulled down towards 0 K. BEAT-RESPONSE 0:06–0:09: molecule spheres slow down significantly. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: slider movement 0.5s, molecules slow down. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, pitch lowering hum. No embedded text.`

Hậu kỳ: ghép voice SC17; chữ "Nhiệt độ giảm, phân tử chuyển động chậm" tại giây 0:04.

---

### VIDEO PROMPT SC18 ← khớp IMAGE PROMPT SC18
Reference image: SC18 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC17. One continuous shot, 10 seconds. OPENING 0:00–0:02: molecules moving slowly. BEAT-ACTION 0:02–0:06: temperature indicator hits 0 K; molecules freeze instantly. BEAT-RESPONSE 0:06–0:09: a thin layer of frost crystals grows over the frozen spheres. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: freeze instant, frost growth sim 0.6s. SCIENCE ACCURACY LOCK: molecules are completely still at 0 K. SOUND: electronic music, ice freezing snap. No embedded text.`

Hậu kỳ: ghép voice SC18; chữ "Độ không tuyệt đối: 0 Kelvin" tại giây 0:04.

---

### VIDEO PROMPT SC19 ← khớp IMAGE PROMPT SC19
Reference image: SC19 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC18. One continuous shot, 10 seconds. OPENING 0:00–0:02: frozen molecules visible. BEAT-ACTION 0:02–0:06: a glowing HUD text card scales up. BEAT-RESPONSE 0:06–0:09: card glows steadily. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: HUD scale-in 0.4s. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, wind hum. No embedded text.`

Hậu kỳ: ghép voice SC19; chữ "Giới hạn nhiệt độ thấp nhất vũ trụ" tại giây 0:04.

---

### VIDEO PROMPT SC20 ← khớp IMAGE PROMPT SC20
Reference image: SC20 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC19: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: empty HUD formula plate scales in. BEAT-ACTION 0:02–0:06: border of the plate glows yellow. BEAT-RESPONSE 0:06–0:09: plate holds static with soft pulse. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: scale-up 0.4s, glow 0.3s. SCIENCE ACCURACY LOCK: plate remains blank. SOUND: electronic music, laser draw. No embedded text.`

Hậu kỳ: ghép voice SC20; chữ trong khung "T (K) = t (°C) + 273" tại giây 0:04.

---

### VIDEO PROMPT SC21 ← khớp IMAGE PROMPT SC21
Reference image: SC21 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC20. One continuous shot, 10 seconds. OPENING 0:00–0:02: formula plate re-centered. BEAT-ACTION 0:02–0:06: plate rotates in 3D, changing border glow to green. BEAT-RESPONSE 0:06–0:09: plate holds static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: rotate 0.6s, color transition. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, soft chime. No embedded text.`

Hậu kỳ: ghép voice SC21; chữ trong khung "t (°C) = T (K) - 273" tại giây 0:04.

---

### VIDEO PROMPT SC22 ← khớp IMAGE PROMPT SC22
Reference image: SC22 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC21: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: three pedestals visible. BEAT-ACTION 0:02–0:06: three thermometers scale up on their pedestals. BEAT-RESPONSE 0:06–0:09: thermometers hold static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: scale-up 0.5s. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, pedestals rise hum. No embedded text.`

Hậu kỳ: ghép voice SC22; chữ "Ba loại nhiệt kế phổ biến" tại giây 0:04.

---

### VIDEO PROMPT SC23 ← khớp IMAGE PROMPT SC23
Reference image: SC23 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC22. One continuous shot, 10 seconds. OPENING 0:00–0:02: zoom in on liquid thermometer bulb. BEAT-ACTION 0:02–0:06: red liquid inside bulb expands and rises up capillary tube. BEAT-RESPONSE 0:06–0:09: column continues rising. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: liquid expansion simulation. SCIENCE ACCURACY LOCK: expansion matches heat. SOUND: electronic music, water dâng SFX. No embedded text.`

Hậu kỳ: ghép voice SC23; chữ "Nhiệt kế chất lỏng: chất lỏng nở ra" tại giây 0:04.

---

### VIDEO PROMPT SC24 ← khớp IMAGE PROMPT SC24
Reference image: SC24 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC23. One continuous shot, 10 seconds. OPENING 0:00–0:02: capillary tube visible. BEAT-ACTION 0:02–0:06: red liquid column stops, aligning with high division. BEAT-RESPONSE 0:06–0:09: scale division glows. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: static hold. SCIENCE ACCURACY LOCK: liquid level stays constant. SOUND: electronic music, scale ticking. No embedded text.`

Hậu kỳ: ghép voice SC24; chữ "Nguyên lý giãn nở vì nhiệt" tại giây 0:04.

---

### VIDEO PROMPT SC25 ← khớp IMAGE PROMPT SC25
Reference image: SC25 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC24: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: microscopic wire view. BEAT-ACTION 0:02–0:06: electron spheres collides with metal ion spheres vibrating rapidly. BEAT-RESPONSE 0:06–0:09: electron flow slows down, resistance glows. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: electron flow loop. SCIENCE ACCURACY LOCK: resistance increase with heat. SOUND: electronic music, electricity hum. No embedded text.`

Hậu kỳ: ghép voice SC25; chữ "Nhiệt kế điện trở: điện trở thay đổi" tại giây 0:04.

---

### VIDEO PROMPT SC26 ← khớp IMAGE PROMPT SC26
Reference image: SC26 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC25: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: human profile visible. BEAT-ACTION 0:02–0:06: súng hồng ngoại gun emits a soft red sensor beam scanning forehead. BEAT-RESPONSE 0:06–0:09: beam scans skin surface. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: beam scan animation. SCIENCE ACCURACY LOCK: sensor beam hits skin. SOUND: electronic music, click sound. No embedded text.`

Hậu kỳ: ghép voice SC26; chữ "Nhiệt kế hồng ngoại: đo bức xạ" tại giây 0:04.

---

### VIDEO PROMPT SC27 ← khớp IMAGE PROMPT SC27
Reference image: SC27 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC26. One continuous shot, 10 seconds. OPENING 0:00–0:02: close-up on gun LCD display. BEAT-ACTION 0:02–0:06: LCD screen glows blue, numbers stabilize. BEAT-RESPONSE 0:06–0:09: screen holds static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: screen activation 0.3s. SCIENCE ACCURACY LOCK: screen stays blank. SOUND: electronic music, beep beep. No embedded text.`

Hậu kỳ: ghép voice SC27; số hiển thị "36.5°C" và chữ "Hiển thị nhanh nhiệt độ" tại giây 0:04.

---

### VIDEO PROMPT SC28 ← khớp IMAGE PROMPT SC28
Reference image: SC28 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC27: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: cross-dissolve to 3D mind map diagram. BEAT-ACTION 0:02–0:06: branches glow with soft cyan and yellow light. BEAT-RESPONSE 0:06–0:09: mind map holds static. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: cross-dissolve 0.2s, glow 0.4s. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, chime. No embedded text.`

Hậu kỳ: ghép voice SC28; chữ sơ đồ: "Cân bằng nhiệt ‖ Thang Celsius/Kelvin ‖ Ba loại nhiệt kế" tại giây 0:04.

---

### VIDEO PROMPT SC29 ← khớp IMAGE PROMPT SC29
Reference image: SC29 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC28: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: character holding mug. BEAT-ACTION 0:02–0:06: steam rises from mug, character smiles and drinks. BEAT-RESPONSE 0:06–0:09: steam flow continues, cozy scene holds. CLOSING 0:09–10:00: hold final frame. ANIMATION RULES: steam flow loop. SCIENCE ACCURACY LOCK: none. SOUND: electronic music, soft wind hum. No embedded text.`

Hậu kỳ: ghép voice SC29; chữ "Nhiệt độ trong cuộc sống" tại giây 0:04.

---

### VIDEO PROMPT SC30 ← khớp IMAGE PROMPT SC30
Reference image: SC30 · Mode: image-to-video · Duration: 10s · Aspect ratio: 16:9

`3D REALISM CONTINUITY ANCHOR: [như SC01]. START FROM END STATE OF SC29: hard cut. One continuous shot, 10 seconds. OPENING 0:00–0:02: closing screen. BEAT-ACTION 0:02–0:06: red "Đăng ký" and "Like" buttons float in at bottom. BEAT-RESPONSE 0:06–0:09: buttons glow softly, setup static. CLOSING 0:09–10:00: hold final frame, end of video. ANIMATION RULES: button float 0.4s, static hold. SCIENCE ACCURACY LOCK: none. SOUND: electronic music resolves to final chord. No embedded text.`

Hậu kỳ: ghép voice SC30; chữ "Chào tạm biệt và hẹn gặp lại!" tại giây 0:03.
