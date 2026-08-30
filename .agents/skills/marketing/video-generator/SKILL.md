---
name: video-generator
description: AI Short Video Production, VieNeu TTS & Remotion Programmatic Video Automation — Tự động tạo kịch bản video ngắn (TikTok, Reels, YouTube Shorts 9:16) và video B2B (16:9) từ bài viết blog/sản phẩm, tích hợp VieNeu TTS API (Trọng Nghĩa, Tuấn Huy, Trúc Ly), lập trình hiệu ứng chuyển động cao cấp bằng Remotion React và xuất video MP4 Full HD.
---

# Video Generator, VieNeu TTS & Remotion Video Automation (SKILL)

## 1. Mục Đích & Tổng Quan
Skill này cung cấp quy trình khép kín tự động hóa sản xuất nội dung video ngắn (TikTok, Reels, YouTube Shorts tỉ lệ 9:16) và video giới thiệu sản phẩm B2B cho hệ sinh thái **thanhoattinh.net** (Công ty TNHH Môi Trường Xuyên Việt).

### 🎯 3 Trụ Cột Công Nghệ:
1. **Biên tập Kịch bản Kỹ Sư Thực Chiến (Anti-AI Feel)**: Bóc tách 3 lớp nội dung (Visual B-Roll, Chữ On-Screen giật tít, Voiceover văn nói đời thường kèm phiên âm chuẩn).
2. **Giọng Đọc Tự Nhiên VieNeu TTS API**: Tích hợp trực tiếp `VIENEU_TTS_TOKEN` với 598+ giọng tiếng Việt đa vùng miền (Bắc/Trung/Nam), hỗ trợ Engine V3 & V4, tự động ngắt nhịp và xử lý cảm xúc.
3. **Chuyển Động Programmatic Video với Remotion (`remotion-dev/remotion`)**: Lập trình video bằng React/TypeScript để tạo chuyển động Spring Physics, hiệu ứng Ken Burns 60fps, phụ đề Karaoke nhảy màu từng từ (Word-by-word highlight) và thanh tiến trình chuẩn thương hiệu Xuyên Việt (`#1B5E43`, `#D2342A`, `#3FBF7F`).

---

## 2. Tích Hợp VieNeu TTS API (`api.vieneu.io`)

### A. Cấu Hình & Credentials
Được lưu tập trung tại **`.agents/.env`**:
```env
VIENEU_TTS_TOKEN=vn_sk_cc3637...
```

### B. Danh Sách Voice ID Khuyên Dùng Cho Dự Án Môi Trường Xuyên Việt:
* 🎙️ **`Trọng Nghĩa`** *(Engine `v3`)*: Nam miền Nam truyền cảm, gần gũi, cực kỳ thích hợp cho video review xưởng, hướng dẫn kỹ thuật thực tế cho khách hàng miền Nam/Miền Tây.
* 🎙️ **`Tuấn Huy`** *(Engine `v4`)*: Nam miền Bắc trầm ấm, dứt khoát, chuẩn phong cách kỹ sư chuyên gia tư vấn dự án công nghiệp lớn.
* 🎙️ **`Minh Đức`** *(Engine `v3`)*: Nam miền Bắc phong cách thời sự/tin tức nhanh, phù hợp video giật tít cảnh báo môi trường.
* 🎙️ **`Trúc Ly`** *(Engine `v3`)*: Nữ miền Nam tự nhiên, trong trẻo, phù hợp video mẹo lọc nước sinh hoạt gia đình, hồ cá.
* 🎙️ **`Bảo Khánh`** *(Engine `v4`)*: Nam trầm ấm, storytelling sâu sắc cho video hồ sơ năng lực công ty.

### C. Kỹ Thuật Viết Kịch Bản & Thẻ Cảm Xúc (Emotion Tags):
* **Trường emotion**: `natural` (hội thoại thường ngày) hoặc `storytelling` (kể chuyện dẫn dắt).
* **Thẻ nội tuyến**: Chèn `[cười]`, `[thở dài]`, `[hắng giọng]` trực tiếp trong văn bản để tăng tính chân thật của con người.
* **Quy tắc phiên âm bắt buộc**:
  * `VOCs` $\rightarrow$ `V-O-C`
  * `Iodine` $\rightarrow$ `I-o-đin`
  * `CTC` $\rightarrow$ `C-T-C`
  * `Pa` $\rightarrow$ `Pát-xcan`
  * `QCVN 20` $\rightarrow$ `quy chuẩn Q-C-V-N hai mươi`
  * `0903 018 135` $\rightarrow$ `không chín không ba, không một tám, một ba năm`

---

## 3. Kiến Trúc Programmatic Video Bằng Remotion (`claude-remotion-skill`)

Skill này tích hợp toàn diện chuẩn motion design từ **`remotion-motion-graphics`** (`.claude/skills/software/remotion-motion-graphics/`):

### 💎 10 Non-Negotiable Motion Rules (Bắt Buộc Tuân Thủ):
1. **NEVER use linear interpolation**: Mọi `interpolate()` bắt buộc có easing curve (`theme.ease.out`); mọi chuyển động vào ưu tiên dùng `spring()` với preset (`springs.snappy`, `springs.smooth`, `springs.bouncy`). Luôn khai báo `extrapolateLeft/Right: "clamp"`.
2. **Entrances animate 2–3 properties together**: Tuyệt đối không chỉ fade opacity đơn thuần. Phải kết hợp đồng thời: `opacity` + `translateY` + `scale`.
3. **Stagger everything**: Phân tầng xuất hiện các thành phần theo offset 3–6 frames (Words: 3 frames, Cards/Metrics: 4-5 frames). Không để tất cả thành phần hiện lên cùng 1 lúc.
4. **Exits exist and are faster than entrances**: Hiệu ứng biến mất (exit) phải diễn ra dứt khoát và nhanh hơn lúc xuất hiện (~10 frames vs ~20 frames).
5. **Five-Layer Stack trong mọi scene (Dưới lên trên)**:
   - **Layer 1**: `<BgMesh />` (Gradient/mesh chuyển động sóng mềm).
   - **Layer 2**: Visual Assets (Ken Burns Stills slow scale $1 \rightarrow 1.08$ hoặc `<OffthreadVideo>`).
   - **Layer 3**: Graphics, Kinetic Type, Word-by-word Captions & Spring UI Cards.
   - **Layer 4**: `<Grade />` (Color grading overlay).
   - **Layer 5**: `<Grain />` + `<Vignette />` (Hạt noise mờ + tối góc điện ảnh).
6. **Every still image gets Ken Burns**: Ảnh tĩnh luôn có chuyển động zoom chậm và pan trôi nhẹ (`KenBurns`), không bao giờ để ảnh đứng yên.
7. **Idle elements breathe**: Mọi đối tượng đứng trên màn hình $>2\text{s}$ phải có vi chuyển động "thở" bằng sóng sin (`Math.sin(frame / 15) * 2px`).
8. **All timing derives from `fps`**: Tính toán thời gian dựa trên `useVideoConfig().fps`, không dùng số frame ngẫu nhiên.
9. **One theme object (`theme.ts`)**: Mọi màu sắc (`#1B5E43`, `#D2342A`, `#3FBF7F`, `#FFE082`), easings, spring configs đặt tập trung tại `theme.ts`.
10. **Render $\rightarrow$ Inspect frames $\rightarrow$ Fix $\rightarrow$ Re-render loop**: Luôn trích xuất các frame kiểm tra trước khi bàn giao video.

---

### 🎨 17 Motion Patterns Sẵn Có (`references/motion-patterns.md`):
* `Premium entrance` (fade + rise + scale)
* `Word-by-word text reveal` (Kinetic word highlight)
* `Background mesh` (BgMesh)
* `Procedural grain & Vignette`
* `Ken Burns for stills`
* `Animated counter & Staggered badges`
* `Word-synced captions over footage`

---

## 4. Hướng Dẫn Thực Thi CLI (`scripts/`)

### A. Tạo Video & Giọng Đọc VieNeu Tự Động
```bash
# 1. Tạo video ngắn Than Tổ Ong bằng giọng Trọng Nghĩa (v3)
node scripts/generate-video-short.js --topic="than-to-ong" --voice="Trọng Nghĩa" --engine="v3" --tts

# 2. Tạo video Than Ấn Độ bằng giọng Tuấn Huy (v4)
node scripts/generate-video-short.js --topic="than-an-do" --voice="Tuấn Huy" --engine="v4" --tts

# 3. Tạo video từ một bài viết blog bất kỳ
node scripts/generate-video-short.js --post="wiki/posts/cach-su-dung-than-hoat-tinh-an-do.md" --voice="Trọng Nghĩa" --tts
```

### B. Render File Video MP4 Full HD Bằng FFmpeg
```bash
# Render trực tiếp file MP4 1080x1920 (9:16) khớp thời lượng audio VieNeu
node scripts/render-mp4.js
```

---

## 5. Cấu Trúc Thư Mục Video Thành Phẩm (`wiki/video-scripts/`)
* `short-video-than-to-ong.mp4`: Video hoàn chỉnh Full HD chuẩn bị đăng TikTok / Reels / Shorts.
* `voiceover-than-to-ong.mp3`: File âm thanh giọng đọc VieNeu TTS chất lượng cao.
* `short-video-than-to-ong.html`: Trình chiếu tương tác 9:16 trên web để xem trước và kiểm tra thời lượng.
* `images/`: Kho tài nguyên ảnh B-Roll chuẩn tỉ lệ dọc lấy từ `wiki/media/image-sitemap.md`.
