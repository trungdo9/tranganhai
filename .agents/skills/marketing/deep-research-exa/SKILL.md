---
name: deep-research-exa
description: Deep Research & Knowledge Extraction qua Exa.ai API — Tìm kiếm neural search, trích xuất tài liệu học thuật (ASTM, EPA, AWWA, ScienceDirect) và làm giàu kho tri thức wiki/knowledge/.
---

# Deep Research qua Exa.ai API (SKILL)

## Mục Đích
Sử dụng công nghệ Neural Search của Exa.ai để thu thập các nghiên cứu khoa học, tiêu chuẩn kiểm định quốc tế và thông số kỹ thuật chuyên sâu ngành than hoạt tính, xử lý nước, cơ điện và B2B công nghiệp, nạp vào `wiki/knowledge/` hoặc phục vụ viết bài SEO/GEO đạt chuẩn E-E-A-T cao nhất.

## Cấu Hình & Môi Trường (.env)
Script tự động đọc `EXA_API_KEY` từ các file cấu hình theo thứ tự:
1. `.agents/.env`
2. `.claude/.env`
3. `.env`
4. Biến môi trường hệ thống `process.env.EXA_API_KEY`

```bash
# Khóa Exa API đã được đồng bộ sẵn sàng:
EXA_API_KEY=9d0bd6a6-cd6e-4f26-8532-6746b9dfaa29
```

## Khi Nào Sử Dụng
- Khi cần tìm kiếm số liệu kiểm nghiệm chính xác (ASTM D4607, AWWA B604, BET surface area, VOC adsorption kinetics).
- Khi mở rộng cụm chủ đề mới trong `wiki/knowledge/` hoặc viết bài phân tích sản phẩm kỹ thuật chuyên sâu (>1.500 từ).
- Khi cần đối chiếu cơ chế lọc nước, xử lý khí thải, van cơ điện công nghiệp từ các nguồn khoa học quốc tế uy tín (US EPA, ScienceDirect, WQA, ASTM, v.v.).
- Làm nguồn nghiên cứu tham khảo cho giai đoạn Stage-2 (Content Brief) & Stage-3 (Deep Content Writing) của kỹ năng `seo-writing`.

## Lệnh Thực Thi CLI

```bash
# 1. Nghiên cứu 1 chủ đề kỹ thuật và xuất kết quả ra màn hình:
node scripts/exa-deep-research.js "ASTM D4607 activated carbon iodine number test procedure"

# 2. Nghiên cứu và lưu trực tiếp tài liệu vào file tri thức Markdown:
node scripts/exa-deep-research.js "granular activated carbon EBCT empty bed contact time design drinking water" --save=wiki/knowledge/cam-nang-van-hanh-va-xu-ly-su-co-than-hoat-tinh.md

# 3. Giới hạn nguồn từ các domain khoa học uy tín & số lượng kết quả:
node scripts/exa-deep-research.js "activated carbon VOC adsorption isotherm Langmuir Freundlich" --domains=sciencedirect.com,epa.gov,wqa.org --num=5

# 4. Chạy trực tiếp từ thư mục skill:
node .agents/skills/marketing/deep-research-exa/scripts/exa-deep-research.js "tiêu chuẩn than hoạt tính xử lý nước cấp" --num=3
```

## Sử Dụng Dưới Dạng Node.js Module Trong Mã Nguồn

```javascript
const { searchExa } = require('./scripts/exa-deep-research');

async function runResearch() {
  const result = await searchExa('tiêu chuẩn Quatest than hoạt tính gáo dừa', {
    numResults: 3,
    type: 'neural',
    useAutoprompt: true
  });
  console.log(result.results);
}
```

## Các Domain Ưu Tiên Nghiên Cứu
- `sciencedirect.com` (Báo cáo khoa học vật liệu bề mặt & hấp phụ)
- `epa.gov` (Tiêu chuẩn nước uống và xử lý khí thải của Cơ quan Bảo vệ Môi trường Hoa Kỳ)
- `wqa.org` (Hiệp hội Chất lượng Nước Hoa Kỳ)
- `astm.org` (Tiêu chuẩn kiểm nghiệm vật liệu quốc tế)
- `awwa.org` (Hiệp hội Công trình Nước Hoa Kỳ)

## Cấu Trúc File Tri Thức Đầu Ra (`wiki/knowledge/<topic>.md`)
Mọi dữ liệu trích xuất từ Exa.ai cần được chuẩn hóa theo cấu trúc:
1. **Khái niệm & Bản chất cơ chế**: Nguyên lý hóa lý cốt lõi.
2. **Thông số kỹ thuật định lượng có đơn vị**: Khối lượng, diện tích bề mặt ($m^2/g$), chỉ số hấp phụ ($mg/g$), độ sụt áp ($kPa$).
3. **Công thức toán học/thủy lực**: $EBCT$, $q_e = \frac{(C_0 - C_e)V}{m}$, đẳng nhiệt Langmuir/Freundlich.
4. **Ứng dụng thiết kế B2B**: Cách ứng dụng số liệu vào thực tế công trình của doanh nghiệp.
