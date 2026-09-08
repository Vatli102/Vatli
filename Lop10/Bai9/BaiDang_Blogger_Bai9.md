# BÀI 9: CHUYỂN ĐỘNG THẲNG BIẾN ĐỔI ĐỀU (VẬT LÍ 10 - GDPT 2018)

Trong chương trước, chúng ta đã nghiên cứu về gia tốc – đại lượng đặc trưng cho sự biến đổi nhanh hay chậm của vận tốc theo thời gian. Trong nhiều tình huống chuyển động thực tế của đời sống và kỹ thuật, như máy bay chạy đà tăng tốc thẳng tắp trên đường băng, một đoàn tàu hỏa hãm phanh đều đặn trước khi vào ga, hay vật trượt trên mặt phẳng nghiêng nhẵn, vận tốc của vật biến thiên những lượng bằng nhau trong những khoảng thời gian bằng nhau. Chuyển động có tính chất như vậy được gọi là chuyển động thẳng biến đổi đều. Bài học này sẽ cung cấp hệ thống quy luật động học, đồ thị vận tốc – thời gian và các phương trình định lượng chuẩn mực của chuyển động thẳng biến đổi đều.

---

## 1. Khái niệm chuyển động thẳng biến đổi đều

### a) Định nghĩa
Chuyển động thẳng biến đổi đều là chuyển động có:
1. Quỹ đạo là một đường thẳng.
2. Gia tốc có hướng và độ lớn không đổi theo thời gian ($a = \text{const} \ne 0$).

Nói cách khác, trong chuyển động thẳng biến đổi đều, vận tốc của vật tăng hoặc giảm những lượng bằng nhau sau những khoảng thời gian bằng nhau.

### b) Phân loại chuyển động thẳng biến đổi đều
Tùy thuộc vào mối quan hệ giữa hướng của vectơ gia tốc và vectơ vận tốc, chuyển động thẳng biến đổi đều được chia làm hai loại:
* **Chuyển động thẳng nhanh dần đều:** Độ lớn của vận tốc (tốc độ) tăng đều đặn theo thời gian. Vectơ gia tốc cùng hướng với vectơ vận tốc:
  $$\vec{a} \uparrow\uparrow \vec{v} \iff a \cdot v > 0$$
* **Chuyển động thẳng chậm dần đều:** Độ lớn của vận tốc (tốc độ) giảm đều đặn theo thời gian cho đến khi dừng lại hoặc đổi chiều. Vectơ gia tốc ngược hướng với vectơ vận tốc:
  $$\vec{a} \uparrow\downarrow \vec{v} \iff a \cdot v < 0$$

> **Quy ước dấu:** Khi chọn chiều dương là chiều chuyển động ban đầu ($v_0 > 0$):
> - Nhanh dần đều: $a > 0 \implies a \cdot v > 0$.
> - Chậm dần đều: $a < 0 \implies a \cdot v < 0$.

---

## 2. Đồ thị vận tốc – thời gian $(v - t)$ của chuyển động thẳng biến đổi đều

### a) Dạng đường biểu diễn trên hệ trục $Ovt$
Vì gia tốc $a = \frac{\Delta v}{\Delta t} = \text{const}$, mối liên hệ giữa vận tốc $v$ và thời gian $t$ là một hàm bậc nhất:
$$v(t) = v_0 + a t$$

Do đó, trên hệ tọa độ vuông góc $(v - t)$:
* Đường biểu diễn vận tốc theo thời gian là một **đoạn thẳng xiên**.
* **Hệ số góc (độ dốc)** của đường thẳng chính là giá trị của gia tốc:
  $$\text{Độ dốc} = \tan\theta = \frac{\Delta v}{\Delta t} = a$$
  - Nếu đường thẳng dốc lên từ trái sang phải: $a > 0$ (vận tốc tăng theo thời gian).
  - Nếu đường thẳng dốc xuống từ trái sang phải: $a < 0$ (vận tốc giảm theo thời gian).

### b) Ý nghĩa hình học của diện tích dưới đồ thị $(v - t)$
Trong khoảng thời gian từ thời điểm $t_0 = 0$ đến thời điểm $t$, phần diện tích giới hạn bởi đồ thị vận tốc – thời gian $v(t)$, trục hoành thời gian và hai đường thẳng dóng $t = 0, t$ có hình dạng là một **hình thang vuông**:
* Đáy nhỏ có độ dài bằng $v_0$ (vận tốc ban đầu).
* Đáy lớn có độ dài bằng $v$ (vận tốc tại thời điểm $t$).
* Chiều cao hình thang có độ dài bằng $t$ (thời gian chuyển động).

Theo định lí hình học động học:
$$\text{Diện tích hình thang} = \frac{(v_0 + v) \cdot t}{2}$$

Đại lượng diện tích này có giá trị đúng bằng **độ dịch chuyển $d$** của vật trong khoảng thời gian $t$:
$$d = \frac{v_0 + v}{2} \cdot t$$

Thay biểu thức $v = v_0 + a t$ vào công thức diện tích trên, ta thu được:
$$d = \frac{v_0 + (v_0 + a t)}{2} \cdot t = v_0 t + \frac{1}{2} a t^2$$

---

## 3. Các công thức của chuyển động thẳng biến đổi đều

Cho một vật chuyển động thẳng biến đổi đều với vận tốc ban đầu là $v_0$ tại thời điểm $t_0 = 0$, gia tốc $a = \text{const}$:

### a) Công thức tính vận tốc
$$v = v_0 + a t$$
* $v_0$: Vận tốc ban đầu tại thời điểm $t_0 = 0$ ($\text{m/s}$).
* $a$: Gia tốc của chuyển động ($\text{m/s}^2$).
* $t$: Thời gian chuyển động ($\text{s}$).
* $v$: Vận tốc tại thời điểm $t$ ($\text{m/s}$).

### b) Công thức tính độ dịch chuyển
$$d = v_0 t + \frac{1}{2} a t^2$$
* Khi vật chuyển động thẳng theo một chiều dương xác định và không đổi chiều, độ dịch chuyển $d$ bằng quãng đường đi được $s$ ($d = s$):
  $$s = v_0 t + \frac{1}{2} a t^2$$

### c) Công thức xác định tọa độ
Nếu chọn gốc tọa độ $O$ trên quỹ đạo thẳng, tại thời điểm ban đầu $t_0 = 0$ vật có tọa độ ban đầu $x_0$, thì tọa độ của vật tại thời điểm $t$ là:
$$x = x_0 + d = x_0 + v_0 t + \frac{1}{2} a t^2$$

Đồ thị tọa độ – thời gian ($x - t$) của chuyển động thẳng biến đổi đều là một phần của đường cong **parabol**.

### d) Hệ thức độc lập thời gian (Liên hệ giữa $a, d, v$)
Xuất phát từ công thức vận tốc $v = v_0 + a t \implies t = \frac{v - v_0}{a}$, thay vào công thức độ dịch chuyển $d = \frac{v_0 + v}{2} \cdot t$, ta có:
$$d = \frac{v + v_0}{2} \cdot \frac{v - v_0}{a} = \frac{v^2 - v_0^2}{2a}$$

Biến đổi tương đương, ta nhận được **hệ thức độc lập thời gian**:
$$v^2 - v_0^2 = 2 a d$$

* Trường hợp vật chuyển động thẳng không đổi chiều ($d = s$):
  $$v^2 - v_0^2 = 2 a s$$
* Hệ thức này cho phép tính toán trực tiếp giữa vận tốc đầu, vận tốc cuối, gia tốc và độ dịch chuyển/quãng đường mà không cần biết khoảng thời gian $t$.

---

## 4. Bảng tổng hợp quy tắc dấu và đặc điểm động học

| Đại lượng / Tính chất | Chuyển động thẳng nhanh dần đều | Chuyển động thẳng chậm dần đều |
| :--- | :--- | :--- |
| **Quỹ đạo** | Đường thẳng | Đường thẳng |
| **Gia tốc $a$** | $a = \text{const} \ne 0$ | $a = \text{const} \ne 0$ |
| **Mối quan hệ vectơ** | $\vec{a}$ cùng hướng $\vec{v}$ ($\vec{a} \uparrow\uparrow \vec{v}$) | $\vec{a}$ ngược hướng $\vec{v}$ ($\vec{a} \uparrow\downarrow \vec{v}$) |
| **Điều kiện đại số** | $a \cdot v > 0$ ($a$ và $v$ cùng dấu) | $a \cdot v < 0$ ($a$ và $v$ trái dấu) |
| **Chọn chiều dương là chiều chuyển động ($v > 0$)** | $a > 0$ | $a < 0$ |
| **Đồ thị $v - t$** | Đường thẳng dốc lên ($\tan\theta > 0$) | Đường thẳng dốc xuống ($\tan\theta < 0$) |
| **Tốc độ $|v|$** | Tăng đều theo thời gian | Giảm đều theo thời gian |

---

## 5. Ứng dụng thực tiễn trong kỹ thuật và an toàn giao thông

### a) Tính toán chiều dài đường băng cất cánh và hạ cánh máy bay
Để máy bay phản lực thương mại cất cánh an toàn, máy bay phải tăng tốc từ trạng thái nghỉ ($v_0 = 0$) trên đường băng thẳng cho đến khi đạt vận tốc cất cánh cần thiết ($v_{\text{cất cánh}} \approx 70\text{ - }85\text{ m/s} \approx 250\text{ - }300\text{ km/h}$) với gia tốc chạy đà trung bình $a \approx 2\text{ m/s}^2$. 

Áp dụng hệ thức độc lập thời gian:
$$d_{\text{đường băng}} = d = \frac{v_{\text{cất cánh}}^2 - v_0^2}{2a} = \frac{80^2 - 0}{2 \cdot 2} = 1600\text{ m}$$
Nhờ mô hình chuyển động thẳng nhanh dần đều, các kỹ sư hàng không tính toán chính xác chiều dài tối thiểu của đường băng (thường từ $2500\text{ m}$ đến $3500\text{ m}$ tính cả hệ số an toàn khi có sự cố phải phanh khẩn cấp).

```
  [ Vị trí xuất phát v_0 = 0 ] ========( Chạy đà: a = const > 0 )========> [ Vận tốc cất cánh v_cất cánh ]
  |------------------------------ Chiều dài đường băng L ------------------------------|
```

### b) Hệ thống phanh chống bó cứng bánh xe ABS trên ô tô hiện đại
Khi người lái đạp phanh gấp trên đường trơn ướt, lực phanh quá lớn có thể làm bánh xe bị bó cứng hoàn toàn (ngừng quay nhưng vẫn trượt lết trên mặt đường). Điều này khiến tài xế mất hoàn toàn khả năng bẻ lái điều khiển hướng và làm tăng đáng kể quãng đường phanh dừng khẩn cấp.

Hệ thống phanh ABS (Anti-lock Braking System) sử dụng cảm biến tốc độ bánh xe kết hợp van thủy lực điện tử để nhấp nhả phanh liên tục từ 15 đến 20 lần mỗi giây. Cơ chế này giúp giữ cho bánh xe luôn lăn ở giới hạn ma sát trượt tối ưu, duy trì gia tốc hãm âm đều đặn ($a < 0$), rút ngắn quãng đường phanh $s = \frac{0 - v_0^2}{2a}$ và giữ xe ổn định tuyệt đối theo quỹ đạo thẳng.

```
  [ Phát hiện bánh xe bó cứng ] ---> [ ECU nhấp nhả phanh (15-20 lần/s) ] ---> [ Duy trì gia tốc hãm tối ưu a < 0 ]
```

### c) Vận hành hãm phanh an toàn của tàu hỏa cao tốc Shinkansen
Các đoàn tàu siêu tốc như Shinkansen (Nhật Bản) hay TGV (Pháp) hoạt động với vận tốc thông thường lên tới $300\text{ km/h}$ ($\approx 83,3\text{ m/s}$). Để đảm bảo an toàn tuyệt đối và sự dễ chịu cho hành khách, máy tính điều khiển hãm phanh tự động duy trì gia tốc hãm không đổi $a \approx -0,7\text{ m/s}^2$ đến $-1,0\text{ m/s}^2$.

Quãng đường cần thiết để đoàn tàu giảm tốc từ $300\text{ km/h}$ về $0$:
$$s = \frac{0 - (83,3)^2}{2 \cdot (-0,8)} \approx 4337\text{ m} \approx 4,3\text{ km}$$
Thời gian hãm phanh:
$$t = \frac{0 - 83,3}{-0,8} \approx 104\text{ giây}$$
Việc duy trì gia tốc hãm không đổi giúp hệ thống điều độ đường sắt thiết lập các tín hiệu cảnh báo cách ga từ khoảng cách hơn 5 km.

### d) Điều khiển gia tốc thang máy siêu tốc trong các tòa nhà chọc trời
Tại các tòa tháp cao tầng (như Landmark 81, Burj Khalifa), thang máy có thể di chuyển với vận tốc cực đại lên tới $10\text{ - }18\text{ m/s}$. Để hành khách không bị choáng váng hoặc mất thăng bằng do thay đổi áp suất và quán tính đột ngột, bộ vi điều khiển thang máy được lập trình để tạo ra các giai đoạn:
1. **Khởi hành:** Chuyển động thẳng nhanh dần đều với gia tốc dễ chịu ($a \approx 1,0\text{ m/s}^2$) cho đến khi đạt vận tốc định mức.
2. **Hành trình chính:** Chuyển động thẳng đều ($a = 0, v = \text{const}$).
3. **Tiếp cận tầng đích:** Chuyển động thẳng chậm dần đều ($a \approx -1,0\text{ m/s}^2$) để dừng êm dịu đúng cốt sàn.

---

## Ghi nhớ trọng tâm bài học

* **Chuyển động thẳng biến đổi đều:** Quỹ đạo thẳng, gia tốc không đổi theo thời gian ($a = \text{const} \ne 0$).
* **Quy tắc dấu:**
  - Nhanh dần đều: $\vec{a} \uparrow\uparrow \vec{v} \iff a \cdot v > 0$.
  - Chậm dần đều: $\vec{a} \uparrow\downarrow \vec{v} \iff a \cdot v < 0$.
* **Bốn công thức cốt lõi:**
  1. Vận tốc: $v = v_0 + a t$
  2. Độ dịch chuyển: $d = v_0 t + \frac{1}{2} a t^2$
  3. Tọa độ: $x = x_0 + v_0 t + \frac{1}{2} a t^2$
  4. Hệ thức độc lập thời gian: $v^2 - v_0^2 = 2 a d$ (hoặc $v^2 - v_0^2 = 2 a s$ khi không đổi chiều).
* **Đồ thị $v - t$:** Là một đường thẳng xiên. Độ dốc bằng gia tốc $a = \tan\theta$. Diện tích hình thang dưới đồ thị biểu thị độ dịch chuyển $d$.
