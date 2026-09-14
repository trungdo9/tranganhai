import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.Workbook()

# Define styles
header_font = Font(name="Segoe UI", size=11, bold=True, color="FFFFFF")
header_fill = PatternFill(start_color="1E3A8A", end_color="1E3A8A", fill_type="solid") # Navy Blue

section_font = Font(name="Segoe UI", size=10, bold=True, color="1E3A8A")
section_fill = PatternFill(start_color="EFF6FF", end_color="EFF6FF", fill_type="solid") # Soft Blue

total_font = Font(name="Segoe UI", size=11, bold=True, color="065F46")
total_fill = PatternFill(start_color="D1FAE5", end_color="D1FAE5", fill_type="solid") # Soft Green

regular_font = Font(name="Segoe UI", size=10, color="1F2937")

align_center = Alignment(horizontal="center", vertical="center", wrap_text=True)
align_left = Alignment(horizontal="left", vertical="center", wrap_text=True)
align_right = Alignment(horizontal="right", vertical="center", wrap_text=True)

thin_border_side = Side(style='thin', color='CBD5E1')
cell_border = Border(left=thin_border_side, right=thin_border_side, top=thin_border_side, bottom=thin_border_side)
total_top_border = Side(style='thin', color='065F46')
total_bottom_border = Side(style='double', color='065F46')
total_border = Border(left=thin_border_side, right=thin_border_side, top=total_top_border, bottom=total_bottom_border)

# -------------------------------------------------------------
# SHEET 1: THÁNG 1 - CÀI ĐẶT & HẠ TẦNG (12 TRIỆU)
# -------------------------------------------------------------
ws1 = wb.active
ws1.title = "Tháng 1 - Cài Đặt (12Tr)"
ws1.views.sheetView[0].showGridLines = True

ws1.merge_cells("A1:E1")
ws1["A1"] = "BẢNG BÁO GIÁ DỊCH VỤ XÂY DỰNG HỆ THỐNG AI AGENT & ĐỒNG HÀNH MARKETING"
ws1["A1"].font = Font(name="Segoe UI", size=14, bold=True, color="1E3A8A")
ws1["A1"].alignment = Alignment(horizontal="left", vertical="center")

ws1["A2"] = "Khách hàng: CÔNG TY TNHH MÔI TRƯỜNG XUYÊN VIỆT (MST: 0311351506)"
ws1["A2"].font = Font(name="Segoe UI", size=10, bold=True, color="4B5563")
ws1["A3"] = "Giai đoạn: THÁNG 1 - THIẾT KẾ WORKFLOW + 9 AI AGENT + TỐI ƯU WEBSITE + HẠ TẦNG (TRỌN GÓI 12 TRIỆU)"
ws1["A3"].font = Font(name="Segoe UI", size=10, italic=True, color="059669")

headers = ["STT", "Phân nhóm / Module trong Hệ sinh thái AI", "Mô tả ngắn gọn & Nghiệp vụ giải quyết", "Thời gian", "Chi phí (VNĐ)"]

row_idx = 5
for col_idx, h in enumerate(headers, 1):
    cell = ws1.cell(row=row_idx, column=col_idx, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = align_center if col_idx in [1, 4] else (align_right if col_idx == 5 else align_left)
    cell.border = cell_border
ws1.row_dimensions[row_idx].height = 28

data_sheet1 = [
    ("I", "CHI PHÍ HẠ TẦNG & CÔNG CỤ THÁNG 1", "Kích hoạt ngay tháng 1: Server VPS 24/7 (500k) + Email Brevo (1tr) + Thuê bao Google AI (1tr).", "Tháng 1", 2500000, "section"),
    ("II", "THIẾT KẾ WORKFLOW & DỮ LIỆU GỐC", "Chuẩn hóa quy trình nghiệp vụ & xây dựng bộ não tri thức:", "5 – 7 ngày", "Đã bao gồm", "section"),
    ("1", "• Thiết Kế Workflow Báo Giá B2B 5 Bước", "Chuẩn hóa quy trình: Zalo/Web -> Tra giá sỉ -> Kiểm tra Margin >= 20% -> Duyệt Giám Đốc 1-click -> PDF & CRM.", "5 – 7 ngày", "Đã bao gồm", "item"),
    ("2", "• Thiết Kế Workflow SEO & Ma Trận 3 Website", "Phân luồng từ khóa chống ăn thịt 3 website (thanhoattinh.net, moitruongxuyenviet.com, vatlieuloc.net) & submit Indexing.", "3 – 5 ngày", "Đã bao gồm", "item"),
    ("3", "• Xây Dựng Kho Tri Thức Hóa Lý (RAG)", "Số hóa 20 chuyên đề hóa lý (Iodine, CTC, Quatest 3, MSDS) sang Markdown làm kho chuẩn chống ảo giác cho AI.", "4 – 5 ngày", "Đã bao gồm", "item"),
    ("4", "• Chuẩn Hóa Thư Viện Media Kho Bãi (Media Lake)", "Phân loại & gắn thẻ SEO cho 1.400+ hình ảnh kho hàng, bao bì, xe bốc xếp để AI tự động chèn vào bài viết/báo giá.", "3 – 4 ngày", "Đã bao gồm", "item"),
    ("III", "TRIỂN KHAI 9 AI AGENT TỰ ĐỘNG HÓA", "Lập trình và kết nối các trợ lý ảo chuyên trách:", "10 – 15 ngày", "Đã bao gồm", "section"),
    ("5", "• AI Soạn Báo Giá B2B Tự Động", "Tự trích xuất đơn hàng, tra giá sỉ/tồn kho 3 kho, xuất PDF có mộc và gửi Giám Đốc duyệt 1-click.", "5 – 7 ngày", "Đã bao gồm", "item"),
    ("6", "• AI Trực Zalo OA & Web Chat 24/7", "Trực chat 24/7, tư vấn kỹ thuật nhanh và thu thập thông tin khách hàng (Cty, SĐT, địa chỉ, VAT).", "4 – 5 ngày", "Đã bao gồm", "item"),
    ("7", "• AI Tìm Kiếm Khách Hàng Internet", "Tự quét danh bạ nhà máy KCN (dệt nhuộm, xi mạ, hóa chất...), bóc tách SĐT/MST và lọc trùng CRM.", "5 – 7 ngày", "Đã bao gồm", "item"),
    ("8", "• AI Viết Content SEO Chuẩn E-E-A-T", "Tự viết bài kỹ thuật chuyên sâu 1.800 – 3.000 từ, chèn bảng thông số, ảnh kho thật và tạo nháp web.", "3 – 5 ngày", "Đã bao gồm", "item"),
    ("9", "• AI Giám Sát Thứ Hạng SEO (SERP Robot)", "Kết nối API SERP Robot đo lường thứ hạng Top 1-10 hàng ngày cho 100+ từ khóa trên 3 domain.", "3 – 4 ngày", "Đã bao gồm", "item"),
    ("10", "• AI Email Marketing B2B (Brevo Engine)", "Phân tệp khách trên Brevo; tạo mẫu email chào giá sỉ đầu tháng và nhắc lịch thay vật liệu định kỳ.", "3 – 4 ngày", "Đã bao gồm", "item"),
    ("11", "• AI Đồng Bộ CRM (MISA AMIS v2)", "Đồng bộ 2 chiều dữ liệu khách hàng MISA AMIS - Brevo; tự động ghi nhận Deal từ Zalo vào CRM.", "3 – 5 ngày", "Đã bao gồm", "item"),
    ("12", "• AI Nghiên Cứu Thị Trường & Xu Hướng", "Theo dõi xu hướng tìm kiếm Google Trends và quy chuẩn môi trường mới để đón đầu nhu cầu mua sắm.", "2 – 3 ngày", "Đã bao gồm", "item"),
    ("IV", "TỐI ƯU WEBSITE & DUY TRÌ MARKETING", "Nâng cấp hạ tầng web & bảo đảm kinh doanh thông suốt:", "7 – 10 ngày", "Đã bao gồm", "section"),
    ("13", "• Tối Ưu Giao Diện UI/UX & Điểm Chuyển Đổi", "Thiết kế lại layout 3 website hiện đại, bổ sung nút CTA 'Báo Giá 30s', tối ưu hiển thị Mobile-first.", "4 – 6 ngày", "Đã bao gồm", "item"),
    ("14", "• Tối Ưu Tốc Độ & Kỹ Thuật (Core Web Vitals)", "Cấu hình LSCache, nén WebP toàn bộ ảnh, tối ưu PageSpeed Mobile 80-90+ và Desktop 95+.", "3 – 5 ngày", "Đã bao gồm", "item"),
    ("15", "• Kiêm Nhiệm Duy Trì Marketing Hiện Tại", "Tiếp tục duy trì quản lý SEO và chạy email định kỳ trong suốt tháng cài đặt để doanh số không bị gián đoạn.", "Cả tháng 1", "Đã bao gồm", "item"),
]

for row in data_sheet1:
    row_idx += 1
    stt, name, desc, time_val, cost_val, row_type = row
    ws1.cell(row=row_idx, column=1, value=stt).alignment = align_center
    ws1.cell(row=row_idx, column=2, value=name).alignment = align_left
    ws1.cell(row=row_idx, column=3, value=desc).alignment = align_left
    ws1.cell(row=row_idx, column=4, value=time_val).alignment = align_center
    
    cost_cell = ws1.cell(row=row_idx, column=5, value=cost_val)
    if isinstance(cost_val, (int, float)):
        cost_cell.number_format = '#,##0 "đ"'
        cost_cell.alignment = align_right
    else:
        cost_cell.alignment = align_center
        
    for col in range(1, 6):
        c = ws1.cell(row=row_idx, column=col)
        c.border = cell_border
        if row_type == "section":
            c.font = section_font
            c.fill = section_fill
        else:
            c.font = regular_font
    ws1.row_dimensions[row_idx].height = 24

# Total row
row_idx += 1
ws1.cell(row=row_idx, column=1, value="TỔNG").alignment = align_center
ws1.cell(row=row_idx, column=2, value="TỔNG CHI PHÍ THÁNG 1 (TRỌN GÓI TOÀN DIỆN)").alignment = align_left
ws1.cell(row=row_idx, column=3, value="Bao gồm toàn bộ Hạ tầng (2.5tr) + 4 Nhóm công việc chuyên sâu (9.5tr) — Không phát sinh chi phí").alignment = align_left
ws1.cell(row=row_idx, column=4, value="15 – 25 ngày").alignment = align_center
total_cell = ws1.cell(row=row_idx, column=5, value=12000000)
total_cell.number_format = '#,##0 "đ"'
total_cell.alignment = align_right

for col in range(1, 6):
    c = ws1.cell(row=row_idx, column=col)
    c.font = total_font
    c.fill = total_fill
    c.border = total_border
ws1.row_dimensions[row_idx].height = 28


# -------------------------------------------------------------
# SHEET 2: TỪ THÁNG 2 - DUY TRÌ & ĐỒNG HÀNH (8 TRIỆU / THÁNG)
# -------------------------------------------------------------
ws2 = wb.create_sheet(title="Từ Tháng 2 - Vận Hành (8Tr)")
ws2.views.sheetView[0].showGridLines = True

ws2.merge_cells("A1:E1")
ws2["A1"] = "BẢNG BÁO GIÁ DỊCH VỤ VẬN HÀNH HẠ TẦNG & ĐỒNG HÀNH MARKETING ĐỊNH KỲ"
ws2["A1"].font = Font(name="Segoe UI", size=14, bold=True, color="1E3A8A")
ws2["A1"].alignment = Alignment(horizontal="left", vertical="center")

ws2["A2"] = "Khách hàng: CÔNG TY TNHH MÔI TRƯỜNG XUYÊN VIỆT (MST: 0311351506)"
ws2["A2"].font = Font(name="Segoe UI", size=10, bold=True, color="4B5563")
ws2["A3"] = "Giai đoạn: TỪ THÁNG THỨ 2 TRỞ ĐI - TRỌN GÓI DUY TRÌ HẠ TẦNG & 9 HẠNG MỤC ĐỒNG HÀNH (8 TRIỆU / THÁNG)"
ws2["A3"].font = Font(name="Segoe UI", size=10, italic=True, color="059669")

headers2 = ["STT", "Hạng mục công việc hàng tháng", "Mô tả ngắn gọn & Khối lượng công việc chi tiết", "Chu kỳ", "Chi phí / Tháng (VNĐ)"]

row_idx = 5
for col_idx, h in enumerate(headers2, 1):
    cell = ws2.cell(row=row_idx, column=col_idx, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = align_center if col_idx in [1, 4] else (align_right if col_idx == 5 else align_left)
    cell.border = cell_border
ws2.row_dimensions[row_idx].height = 28

data_sheet2 = [
    ("I", "CHI PHÍ HẠ TẦNG & CÔNG CỤ HÀNG THÁNG", "Duy trì Server VPS 24/7 (500k) + Email Brevo (1tr) + Google AI subscription (1tr).", "Hàng tháng", 2500000, "section"),
    ("II", "PHÍ VẬN HÀNH DÀN AGENT & ĐỒNG HÀNH MARKETING", "Trọn gói công chuyên gia kỹ thuật đồng hành toàn diện cùng doanh nghiệp:", "Hàng tháng", 5500000, "section"),
    ("1", "• Vận Hành & Tinh Chỉnh Hệ Thống 9 AI Agent", "Giám sát Agent chạy 24/7; sửa lỗi kết nối API (Zalo, MISA, WP); tinh chỉnh prompt khi có sản phẩm mới.", "Hàng tháng", "Đã bao gồm", "item"),
    ("2", "• Sản Xuất & Xuất Bản SEO Kỹ Thuật", "Xuất bản 4 – 6 bài SEO kỹ thuật chuyên sâu/tháng (1 bài/tuần) chuẩn E-E-A-T, hình ảnh kho thật lên 3 website.", "Hàng tháng", "Đã bao gồm", "item"),
    ("3", "• Rà Soát & Tối Ưu Bài Viết Cũ (Refresh)", "Rà soát và cập nhật 2 – 3 bài viết cũ/tháng (bổ sung thông số mới, giá mới) để giữ vững thứ hạng Top Google.", "Hàng tháng", "Đã bao gồm", "item"),
    ("4", "• Giám Sát Thứ Hạng Từ Khóa Hàng Ngày", "Theo dõi hơn 100+ từ khóa chủ lực qua SERP Robot trên 3 website, phát hiện biến động để xử lý kịp thời.", "Hàng tháng", "Đã bao gồm", "item"),
    ("5", "• Vận Hành Agent Săn Khách Hàng Internet", "Định kỳ quét danh bạ nhà máy KCN, bóc tách SĐT/MST và lọc trùng CRM để nạp khách tiềm năng mới vào phễu.", "Hàng tháng", "Đã bao gồm", "item"),
    ("6", "• Thực Thi Email Marketing B2B Nuôi Dưỡng", "Thiết lập & gửi 2 – 4 chiến dịch Email B2B/tháng chào hàng đại lý & nhắc lịch thay vật liệu; đo lường tỷ lệ mở/click.", "Hàng tháng", "Đã bao gồm", "item"),
    ("7", "• Quản Trị Kỹ Thuật & Tốc Độ 3 Website", "Duy trì 3 website ổn định, bảo mật, tải nhanh; cập nhật giá mới, banner, thông số sản phẩm khi có yêu cầu.", "Hàng tháng", "Đã bao gồm", "item"),
    ("8", "• Xử Lý Sự Cố Khẩn Cấp & Backup Hàng Tuần", "Khắc phục sự cố kỹ thuật website trong vòng 2 – 4 giờ; tự động sao lưu (backup) dữ liệu định kỳ hàng tuần.", "Hàng tháng", "Đã bao gồm", "item"),
    ("9", "• Báo Cáo Hiệu Quả & Đối Soát Cuối Tháng", "Gửi báo cáo số liệu thật (thứ hạng từ khóa, số bài SEO, lead mới đã quét, tỷ lệ email) và kế hoạch tháng mới.", "Hàng tháng", "Đã bao gồm", "item"),
]

for row in data_sheet2:
    row_idx += 1
    stt, name, desc, time_val, cost_val, row_type = row
    ws2.cell(row=row_idx, column=1, value=stt).alignment = align_center
    ws2.cell(row=row_idx, column=2, value=name).alignment = align_left
    ws2.cell(row=row_idx, column=3, value=desc).alignment = align_left
    ws2.cell(row=row_idx, column=4, value=time_val).alignment = align_center
    
    cost_cell = ws2.cell(row=row_idx, column=5, value=cost_val)
    if isinstance(cost_val, (int, float)):
        cost_cell.number_format = '#,##0 "đ"'
        cost_cell.alignment = align_right
    else:
        cost_cell.alignment = align_center
        
    for col in range(1, 6):
        c = ws2.cell(row=row_idx, column=col)
        c.border = cell_border
        if row_type == "section":
            c.font = section_font
            c.fill = section_fill
        else:
            c.font = regular_font
    ws2.row_dimensions[row_idx].height = 24

# Total row
row_idx += 1
ws2.cell(row=row_idx, column=1, value="TỔNG").alignment = align_center
ws2.cell(row=row_idx, column=2, value="TỔNG CHI PHÍ TRỌN GÓI DUY TRÌ & ĐỒNG HÀNH HÀNG THÁNG").alignment = align_left
ws2.cell(row=row_idx, column=3, value="Bao gồm toàn bộ Hạ tầng (2.5tr) + Trọn gói 9 hạng mục kỹ thuật đồng hành hàng tháng (5.5tr)").alignment = align_left
ws2.cell(row=row_idx, column=4, value="Hàng tháng").alignment = align_center
total_cell2 = ws2.cell(row=row_idx, column=5, value=8000000)
total_cell2.number_format = '#,##0 "đ"'
total_cell2.alignment = align_right

for col in range(1, 6):
    c = ws2.cell(row=row_idx, column=col)
    c.font = total_font
    c.fill = total_fill
    c.border = total_border
ws2.row_dimensions[row_idx].height = 28


# -------------------------------------------------------------
# SHEET 3: CAM KẾT CHẤT LƯỢNG & BẢO MẬT (SLA)
# -------------------------------------------------------------
ws3 = wb.create_sheet(title="Cam Kết SLA & Bảo Mật")
ws3.views.sheetView[0].showGridLines = True

ws3.merge_cells("A1:D1")
ws3["A1"] = "CAM KẾT CHẤT LƯỢNG, BẢO MẬT & KHỐI LƯỢNG CÔNG VIỆC (SLA)"
ws3["A1"].font = Font(name="Segoe UI", size=14, bold=True, color="1E3A8A")

sla_headers = ["STT", "Trụ Cột Cam Kết", "Nội Dung Cam Kết Chi Tiết", "Thời Gian & Tiêu Chuẩn Đáp Ứng"]
row_idx = 3
for col_idx, h in enumerate(sla_headers, 1):
    cell = ws3.cell(row=row_idx, column=col_idx, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = align_center if col_idx in [1, 4] else align_left
    cell.border = cell_border
ws3.row_dimensions[row_idx].height = 26

sla_data = [
    ("1", "Nội Dung SEO Kỹ Thuật", "Xuất bản đều đặn 4 – 6 bài kỹ thuật chuyên sâu/tháng chuẩn E-E-A-T, đúng thông số hóa lý, hình ảnh kho bãi thật 100%.", "Hàng tháng (Báo cáo SERP Robot)"),
    ("2", "Email & Tìm Khách Hàng", "Gửi đều đặn 2 – 4 chiến dịch Email B2B/tháng; vận hành Agent quét khách hàng mới trên Internet bổ sung vào phễu chào hàng.", "Hàng tháng (Báo cáo Open/Click)"),
    ("3", "Quản Trị & Kỹ Thuật Web", "Duy trì 3 website hoạt động ổn định, bảo mật, tải nhanh; cập nhật thông tin sản phẩm, banner, bảng giá mới khi có yêu cầu.", "Xử lý sự cố trong 2 – 4 giờ"),
    ("4", "Chống Ảo Giác (Human-in-the-loop)", "100% nội dung AI được đối soát từ hồ sơ gốc (Quatest 3, MSDS) và có chuyên gia con người kiểm duyệt trước khi xuất bản/gửi đi.", "Cam kết không bịa đặt số liệu"),
    ("5", "Bảo Mật & Toàn Quyền Sở Hữu", "Ký thỏa thuận bảo mật NDA 100% dữ liệu CRM, giá vốn; Xuyên Việt nắm toàn bộ quyền quản trị cao nhất (Master Admin) hệ thống và tài khoản.", "Bảo mật tuyệt đối 100%"),
]

for row in sla_data:
    row_idx += 1
    stt, title_val, desc_val, time_val = row
    ws3.cell(row=row_idx, column=1, value=stt).alignment = align_center
    ws3.cell(row=row_idx, column=2, value=title_val).alignment = align_left
    ws3.cell(row=row_idx, column=3, value=desc_val).alignment = align_left
    ws3.cell(row=row_idx, column=4, value=time_val).alignment = align_center
    
    for col in range(1, 5):
        c = ws3.cell(row=row_idx, column=col)
        c.font = regular_font
        c.border = cell_border
    ws3.row_dimensions[row_idx].height = 26

# Column widths
ws1.column_dimensions["A"].width = 8
ws1.column_dimensions["B"].width = 46
ws1.column_dimensions["C"].width = 75
ws1.column_dimensions["D"].width = 16
ws1.column_dimensions["E"].width = 20

ws2.column_dimensions["A"].width = 8
ws2.column_dimensions["B"].width = 46
ws2.column_dimensions["C"].width = 75
ws2.column_dimensions["D"].width = 16
ws2.column_dimensions["E"].width = 20

ws3.column_dimensions["A"].width = 8
ws3.column_dimensions["B"].width = 32
ws3.column_dimensions["C"].width = 75
ws3.column_dimensions["D"].width = 35

output_path = "/home/trungdo/projects/tranganhai/BAO_GIA_DICH_VU_AI_AGENT_XUYEN_VIET.xlsx"
wb.save(output_path)
print("Updated Excel file successfully with expanded Month 1 workflows and deliverables!")
