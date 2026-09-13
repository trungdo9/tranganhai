# Phase 01 — Chốt dữ liệu 6 mốc (7 khung giờ)

**Interfaces:** none — phase này chỉ tạo ra mảng dữ liệu nội bộ của phase-02.

## Context Links

- Nguồn duy nhất: `plans/marketing/tranganhai/articles/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`
  (bài đã lên sóng: `https://tranganhai.vercel.app/blog/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu`)
- Bài khung lý thuyết đi kèm: `plans/marketing/tranganhai/articles/ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh.md`
- Luật trần sản lượng theo kênh: `CLAUDE.md` mục #1

## Overview

- **Ngày:** 2026-09-13 · **Ưu tiên:** P1 · **Trạng thái:** pending
- Chốt danh sách mốc trước khi viết giao diện, để phần render chỉ còn là ánh xạ dữ liệu. Không có
  bước này thì mỗi lần sửa câu chữ lại phải sửa cả cấu trúc JSX.

## Key Insights

- **6 mốc, 7 khung giờ** — mốc 02:00 (Thứ Tư) và 06:00 (Chủ Nhật) là **cùng một vai** chạy hai
  khung khác nhau để trải tải, nên gộp thành một mốc. Ghi rõ điều này trong nhãn giờ, đừng tách
  thành hai thẻ khiến người đọc tưởng có hai hệ thống.
- **Thứ tự trong ngày là một phần nội dung:** ca 07:00 phải chạy trước mọi ca khác vì nó tạo ra
  nguồn giá chân lý. Nêu được quan hệ nhân quả này là điểm khác biệt so với một danh sách giờ.
- **Mỗi mốc phải có một cổng chặn cụ thể**, không phải mô tả chung. Cổng là thứ chứng minh hệ
  thống có kiểm soát; bỏ cổng đi thì section chỉ còn là brochure.
- Toàn bộ số liệu là **số thiết kế ca** (khung giờ, tần suất, trần tuần, số tiêu chí). Không có
  số liệu kết quả kinh doanh nào tồn tại trong nguồn.

## Requirements

### Chức năng

- Danh sách 6 mốc, mỗi mốc gồm: nhãn giờ · chu kỳ · tên vai trò · việc làm · cổng chặn.
- Mảng dữ liệu nằm ngay trong `AgentDaySection.tsx` (phase-02), typed bằng `interface`.

### Phi chức năng

- Mọi giá trị trong mảng phải truy được về bài nguồn. Không thêm con số mới.
- Không có từ ngữ nhận diện khách hàng (tên doanh nghiệp, tên người, mã sản phẩm, số SKU).

## Architecture

```
article (nguồn sự thật)
        │  đọc thủ công, đối chiếu từng dòng
        ▼
DayMilestone[]  ← mảng const trong AgentDaySection.tsx
        │  .map()
        ▼
<ol> timeline  →  thẻ mốc (giờ · vai · việc · cổng)
```

Không có lớp dữ liệu trung gian, không fetch, không JSON rời. Nguồn sự thật của nội dung vẫn là
bài viết; mảng trong component là bản chụp một chiều khi build.

## Related Code Files

- Đọc (không sửa): `plans/marketing/tranganhai/articles/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`
- Đọc (không sửa): `plans/marketing/tranganhai/articles/ai-agent-theo-ca-truc-mo-hinh-doi-van-hanh.md`
- Tạo ở phase-02: `web/src/components/AgentDaySection.tsx`

## Implementation Steps

1. Mở bài nguồn, đọc mục **"Cuối ngày, cái gì còn lại?"** — bảng 6 dòng trong bài là bản chốt
   của danh sách mốc.
2. Đối chiếu từng mốc với phần thân bài tương ứng (các H2 theo giờ) để lấy đúng câu chữ về
   cổng chặn, không tự diễn giải lại.
3. Viết mảng theo đúng thứ tự thời gian, mốc 02:00/06:00 gộp đầu tiên.
4. Kiểm tra chéo: đếm số mốc (phải là 6), đếm số khung giờ được nhắc (phải là 7), và xác nhận
   mỗi mốc có trường `gate` không rỗng.
5. Chạy lệnh kiểm ở Exit gate; nếu lệch, sửa bài nguồn trước — **không** sửa mảng cho khớp bài.

## Todo List

- [ ] Đọc bảng 6 dòng ở mục cuối bài nguồn
- [ ] Đối chiếu 6 mốc với các H2 theo giờ, lấy nguyên câu chữ về cổng chặn
- [ ] Xác nhận mốc 02:00 + 06:00 là cùng một vai (một thẻ, hai khung giờ)
- [ ] Xác nhận không có tên doanh nghiệp / mã sản phẩm / số liệu nội bộ trong câu chữ
- [ ] Ghi chú đối chiếu vào `reports/phase-01-source-mapping.md`

## Success Criteria

- 6 mốc, 7 khung giờ, mỗi mốc có `gate` cụ thể (không rỗng, không chung chung).
- Mọi giá trị đều có thể chỉ ra dòng tương ứng trong bài nguồn.
- Không xuất hiện tên khách hàng hay số liệu nội bộ.

## Risk Assessment

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Gộp/tách mốc 02:00–06:00 sai, khiến số khung giờ hiển thị lệch | Trung bình | Giữ một thẻ, ghi hai khung giờ trong trường `hours`; đếm bằng lệnh ở Exit gate |
| Tự diễn giải lại cổng chặn rồi làm mất nghĩa gốc | Trung bình | Chép nguyên câu chữ từ bài nguồn; ghi bảng đối chiếu vào `reports/` |
| Vô tình đưa số liệu kết quả kinh doanh vào | Thấp | Chỉ dùng số xuất hiện trong bài nguồn; bài nguồn đã tự khai không có số ROI |

## Security Considerations

- Không có dữ liệu cá nhân trong phase này — nội dung là mô tả cơ chế hệ thống.
- Không sao chép URL nội bộ, token, hay đường dẫn máy cá nhân vào nội dung hiển thị.

## Next Steps

- phase-02 dùng mảng đã chốt; nếu phải sửa một mốc, sửa ở bài nguồn rồi chép lại.

**Exit gate:** `grep -c '^  {' plans/260913-1338-agent-day-operations-section/reports/phase-01-source-mapping.md` → trả về `6`
