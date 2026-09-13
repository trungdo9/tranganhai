# Báo cáo Phase 01: Đối chiếu nguồn dữ liệu 6 mốc (7 khung giờ)

Nguồn sự thật duy nhất: `plans/marketing/tranganhai/articles/nhat-ky-24h-doi-ai-agent-doanh-nghiep-phan-phoi-vat-tu.md`

## 1. Bảng đối chiếu mốc và dòng nguồn

| # | Mốc (giờ) | Chu kỳ | Vai trò | Cổng chặn (nguồn) | Dòng trong bài |
|---|---|---|---|---|---|
| 1 | 02:00 · 06:00 | 2 lần/tuần · Thứ Tư & Chủ Nhật | Nghiên cứu xu hướng tìm kiếm | Giãn 120s giữa 2 từ khoá chống rate limit; từ khoá thiếu dữ liệu cấm nội suy | L24-32, L88 |
| 2 | 07:00 | Hằng ngày | Đồng bộ dữ liệu nền | Giá là chân lý duy nhất cấm suy diễn; PII không ra log console | L34-42, L89 |
| 3 | 08:30 | 2 lần/tuần · Thứ Hai & Thứ Năm | Đo thứ hạng & lập kế hoạch | Dry-run trước; cấm gọi API đo thứ hạng trực tiếp tốn credit | L44-51, L90 |
| 4 | 09:00 | Hằng ngày | Viết nội dung chuyên môn | Trần tuần 2 bài/tuần chặn trước khi viết; chỉ dùng số liệu đã kiểm chứng | L52-61, L91 |
| 5 | 19:00 | Hằng ngày | Kiểm định & xuất bản | 30 tiêu chí; dry-run cảnh báo thì hạ nháp; hàng đợi trống không commit | L62-70, L92 |
| 6 | 08:00 → 21:00 | 6 khung giờ · Hằng ngày | Tư vấn & thu lead đa kênh | Không tự chốt giá/đơn, không hứa hẹn giao hàng; chạm giá chuyển người thật | L72-81, L93 |

## 2. Mảng dữ liệu đã đóng băng

```ts
const MILESTONES: DayMilestone[] = [
  {
    hours: "02:00 · 06:00",
    cadence: "2 lần/tuần · Thứ Tư & Chủ Nhật",
    role: "Nghiên cứu xu hướng tìm kiếm",
    work: "Đo nhu cầu thị trường theo lô từ khoá xoay vòng, kết luận mùa vụ hay suy giảm thật cho từng nhóm nội dung, ghi nhận định trực tiếp vào kế hoạch chiến dịch.",
    gate: "Giãn 120 giây giữa hai từ khoá để không bị chặn tần suất; từ khoá thiếu dữ liệu phải ghi rõ là thiếu, cấm nội suy.",
  },
  {
    hours: "07:00",
    cadence: "Hằng ngày",
    role: "Đồng bộ dữ liệu nền",
    work: "Kéo bảng giá và tồn kho từ hệ thống quản trị về kho dữ liệu chung, rồi đối soát danh bạ khách doanh nghiệp — thêm mới, cập nhật, phân loại theo chức danh.",
    gate: "Giá chỉ có một nguồn chân lý, cấm suy diễn lại giá; không in tên, email hay số điện thoại đầy đủ ra log.",
  },
  {
    hours: "08:30",
    cadence: "2 lần/tuần · Thứ Hai & Thứ Năm",
    role: "Đo thứ hạng & lập kế hoạch",
    work: "Đo vị trí trang đích trên kết quả tìm kiếm, phát hiện và phân xử xung đột trang đích giữa các website cùng doanh nghiệp, đối soát việc còn tồn của chu kỳ trước.",
    gate: "Bắt buộc chạy dry-run trước; cấm gọi lệnh đo thứ hạng trực tiếp vì mỗi lần gọi tốn credit trả tiền.",
  },
  {
    hours: "09:00",
    cadence: "Hằng ngày",
    role: "Viết nội dung chuyên môn",
    work: "Tra kho tri thức trước khi viết, chọn đúng một bài cho lượt này, viết theo quy chuẩn biên tập rồi tự chấm bộ tiêu chí chất lượng của kênh.",
    gate: "Cổng trần tuần (2 bài/tuần) chặn ngay ở bước đầu, trước khi viết một chữ; chỉ dùng số liệu đã được người kiểm chứng.",
  },
  {
    hours: "19:00",
    cadence: "Hằng ngày",
    role: "Kiểm định & xuất bản",
    work: "Quét hàng đợi bản nháp, xử lý tối đa 5 file mỗi ca theo thứ tự cũ nhất trước, chấm bộ 30 tiêu chí, làm giàu nội dung rồi mới xuất bản và thông báo.",
    gate: "Trượt tiêu chí hoặc dry-run còn cảnh báo thì hạ xuống bản nháp và báo cáo; hàng đợi trống thì chỉ báo cáo rồi dừng, không đụng vào file nào.",
  },
  {
    hours: "08:00 → 21:00",
    cadence: "6 khung giờ · Hằng ngày",
    role: "Tư vấn & thu lead đa kênh",
    work: "Nhận yêu cầu khách từ website, fanpage, email và kênh nhắn tin; tra thông số kỹ thuật từ kho dữ liệu chung, phân loại mức độ sẵn sàng giao dịch và soạn phản hồi.",
    gate: "Không tự chốt giá, không tự chốt đơn, không cam kết thời gian giao hàng — chạm tới giá hoặc chốt đơn là chuyển cho người thật.",
  },
];
```

## 3. Kiểm tra các tiêu chí chất lượng

- [x] Số mốc: 6 mốc
- [x] Số khung giờ: 7 khung giờ (02:00, 06:00, 07:00, 08:30, 09:00, 19:00, 08:00-21:00)
- [x] Cổng chặn: Cả 6 mốc đều có trường `gate` cụ thể, không rỗng
- [x] Ẩn danh: Không có tên doanh nghiệp, mã sản phẩm, SKU, số điện thoại hay email khách hàng
