import csv

data1 = [
    ["STT", "Phân nhóm / Module trong Hệ sinh thái AI", "Mô tả ngắn gọn & Nghiệp vụ giải quyết", "Thời gian", "Chi phí (VNĐ)"],
    ["I", "CHI PHÍ HẠ TẦNG & CÔNG CỤ THÁNG 1", "Kích hoạt ngay tháng 1: Server VPS 24/7 (500k) + Email Brevo (1tr) + Thuê bao Google AI (1tr).", "Tháng 1", "2500000"],
    ["II", "THIẾT KẾ WORKFLOW & DỮ LIỆU GỐC", "Chuẩn hóa quy trình nghiệp vụ & xây dựng bộ não tri thức:", "5 – 7 ngày", "Đã bao gồm"],
    ["1", "• Thiết Kế Workflow Báo Giá B2B 5 Bước", "Chuẩn hóa quy trình: Zalo/Web -> Tra giá sỉ -> Kiểm tra Margin >= 20% -> Duyệt Giám Đốc 1-click -> PDF & CRM.", "5 – 7 ngày", "Đã bao gồm"],
    ["2", "• Thiết Kế Workflow SEO & Ma Trận 3 Website", "Phân luồng từ khóa chống ăn thịt 3 website (thanhoattinh.net, moitruongxuyenviet.com, vatlieuloc.net) & submit Indexing.", "3 – 5 ngày", "Đã bao gồm"],
    ["3", "• Xây Dựng Kho Tri Thức Hóa Lý (RAG)", "Số hóa 20 chuyên đề hóa lý (Iodine, CTC, Quatest 3, MSDS) sang Markdown làm kho chuẩn chống ảo giác cho AI.", "4 – 5 ngày", "Đã bao gồm"],
    ["4", "• Chuẩn Hóa Thư Viện Media Kho Bãi (Media Lake)", "Phân loại & gắn thẻ SEO cho 1.400+ hình ảnh kho hàng, bao bì, xe bốc xếp để AI tự động chèn vào bài viết/báo giá.", "3 – 4 ngày", "Đã bao gồm"],
    ["III", "TRIỂN KHAI 9 AI AGENT TỰ ĐỘNG HÓA", "Lập trình và kết nối các trợ lý ảo chuyên trách:", "10 – 15 ngày", "Đã bao gồm"],
    ["5", "• AI Soạn Báo Giá B2B Tự Động", "Tự trích xuất đơn hàng, tra giá sỉ/tồn kho 3 kho, xuất PDF có mộc và gửi Giám Đốc duyệt 1-click.", "5 – 7 ngày", "Đã bao gồm"],
    ["6", "• AI Trực Zalo OA & Web Chat 24/7", "Trực chat 24/7, tư vấn kỹ thuật nhanh và thu thập thông tin khách hàng (Cty, SĐT, địa chỉ, VAT).", "4 – 5 ngày", "Đã bao gồm"],
    ["7", "• AI Tìm Kiếm Khách Hàng Internet", "Tự quét danh bạ nhà máy KCN (dệt nhuộm, xi mạ, hóa chất...), bóc tách SĐT/MST và lọc trùng CRM.", "5 – 7 ngày", "Đã bao gồm"],
    ["8", "• AI Viết Content SEO Chuẩn E-E-A-T", "Tự viết bài kỹ thuật chuyên sâu 1.800 – 3.000 từ, chèn bảng thông số, ảnh kho thật và tạo nháp web.", "3 – 5 ngày", "Đã bao gồm"],
    ["9", "• AI Giám Sát Thứ Hạng SEO (SERP Robot)", "Kết nối API SERP Robot đo lường thứ hạng Top 1-10 hàng ngày cho 100+ từ khóa trên 3 domain.", "3 – 4 ngày", "Đã bao gồm"],
    ["10", "• AI Email Marketing B2B (Brevo Engine)", "Phân tệp khách trên Brevo; tạo mẫu email chào giá sỉ đầu tháng và nhắc lịch thay vật liệu định kỳ.", "3 – 4 ngày", "Đã bao gồm"],
    ["11", "• AI Đồng Bộ CRM (MISA AMIS v2)", "Đồng bộ 2 chiều dữ liệu khách hàng MISA AMIS - Brevo; tự động ghi nhận Deal từ Zalo vào CRM.", "3 – 5 ngày", "Đã bao gồm"],
    ["12", "• AI Nghiên Cứu Thị Trường & Xu Hướng", "Theo dõi xu hướng tìm kiếm Google Trends và quy chuẩn môi trường mới để đón đầu nhu cầu mua sắm.", "2 – 3 ngày", "Đã bao gồm"],
    ["IV", "TỐI ƯU WEBSITE & DUY TRÌ MARKETING", "Nâng cấp hạ tầng web & bảo đảm kinh doanh thông suốt:", "7 – 10 ngày", "Đã bao gồm"],
    ["13", "• Tối Ưu Giao Diện UI/UX & Điểm Chuyển Đổi", "Thiết kế lại layout 3 website hiện đại, bổ sung nút CTA 'Báo Giá 30s', tối ưu hiển thị Mobile-first.", "4 – 6 ngày", "Đã bao gồm"],
    ["14", "• Tối Ưu Tốc Độ & Kỹ Thuật (Core Web Vitals)", "Cấu hình LSCache, nén WebP toàn bộ ảnh, tối ưu PageSpeed Mobile 80-90+ và Desktop 95+.", "3 – 5 ngày", "Đã bao gồm"],
    ["15", "• Kiêm Nhiệm Duy Trì Marketing Hiện Tại", "Tiếp tục duy trì quản lý SEO và chạy email định kỳ trong suốt tháng cài đặt để doanh số không bị gián đoạn.", "Cả tháng 1", "Đã bao gồm"],
    ["TỔNG", "TỔNG CHI PHÍ THÁNG 1 (TRỌN GÓI TOÀN DIỆN)", "Bao gồm toàn bộ Hạ tầng (2.5tr) + 4 Nhóm công việc chuyên sâu (9.5tr) — Không phát sinh chi phí", "15 – 25 ngày", "12000000"]
]

with open("/home/trungdo/projects/tranganhai/BAO_GIA_THANG_1_CAI_DAT.csv", "w", encoding="utf-8-sig", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data1)

print("Updated BAO_GIA_THANG_1_CAI_DAT.csv with expanded workflows!")
