// DỮ LIỆU – từ btl2.sql
// ════════════════════════════════════════════════════════════════
const DB = {
    khoa: [
        { ma_khoa: "KTDT", ten_khoa: "Khoa Kỹ thuật Điện tử" },
        { ma_khoa: "CNTT", ten_khoa: "Khoa Công nghệ Thông tin" },
        { ma_khoa: "VT", ten_khoa: "Khoa Viễn thông" },
        { ma_khoa: "QTKD", ten_khoa: "Khoa Quản trị Kinh doanh" },
        { ma_khoa: "TC", ten_khoa: "Khoa Tài chính" },
        { ma_khoa: "KTXD", ten_khoa: "Khoa Kỹ thuật Xây dựng" },
        { ma_khoa: "NGON", ten_khoa: "Khoa Ngôn ngữ" },
        { ma_khoa: "TOAN", ten_khoa: "Khoa Toán - Tin" },
        { ma_khoa: "LY", ten_khoa: "Khoa Vật lý" },
        { ma_khoa: "HOA", ten_khoa: "Khoa Hóa học" },
        { ma_khoa: "SINH", ten_khoa: "Khoa Sinh học" },
        { ma_khoa: "SU", ten_khoa: "Khoa Lịch sử" },
        { ma_khoa: "DIA", ten_khoa: "Khoa Địa lý" },
        { ma_khoa: "TRIET", ten_khoa: "Khoa Triết học" },
        { ma_khoa: "PHAP", ten_khoa: "Khoa Pháp luật" },
    ],
    lop: [
        { ma_lop: "D25CNTT1", ten_lop: "D25CNTT1", khoa: "Công nghệ Thông tin" },
        { ma_lop: "D25CNTT2", ten_lop: "D25CNTT2", khoa: "Công nghệ Thông tin" },
        { ma_lop: "D25VT1", ten_lop: "D25VT1", khoa: "Viễn thông" },
        { ma_lop: "D25VT2", ten_lop: "D25VT2", khoa: "Viễn thông" },
        { ma_lop: "D25KTDT1", ten_lop: "D25KTDT1", khoa: "Kỹ thuật Điện tử" },
        { ma_lop: "D25KTDT2", ten_lop: "D25KTDT2", khoa: "Kỹ thuật Điện tử" },
        { ma_lop: "D25QTKD1", ten_lop: "D25QTKD1", khoa: "Quản trị Kinh doanh" },
        { ma_lop: "D25QTKD2", ten_lop: "D25QTKD2", khoa: "Quản trị Kinh doanh" },
        { ma_lop: "D24CNTT1", ten_lop: "D24CNTT1", khoa: "Công nghệ Thông tin" },
        { ma_lop: "D24CNTT2", ten_lop: "D24CNTT2", khoa: "Công nghệ Thông tin" },
        { ma_lop: "D24VT1", ten_lop: "D24VT1", khoa: "Viễn thông" },
        { ma_lop: "D24KTDT1", ten_lop: "D24KTDT1", khoa: "Kỹ thuật Điện tử" },
        { ma_lop: "D24QTKD1", ten_lop: "D24QTKD1", khoa: "Quản trị Kinh doanh" },
        { ma_lop: "D23CNTT1", ten_lop: "D23CNTT1", khoa: "Công nghệ Thông tin" },
        { ma_lop: "D23VT1", ten_lop: "D23VT1", khoa: "Viễn thông" },
    ],
    sinh_vien: [
        { ma_sinh_vien: "B25001", ho_ten: "Nguyễn Văn An", ngay_sinh: "2007-03-15", gioi_tinh: "Nam", email: "an.nguyen@ptit.edu.vn", ma_lop: "D25CNTT1" },
        { ma_sinh_vien: "B25002", ho_ten: "Trần Thị Bình", ngay_sinh: "2007-06-20", gioi_tinh: "Nữ", email: "binh.tran@ptit.edu.vn", ma_lop: "D25CNTT1" },
        { ma_sinh_vien: "B25003", ho_ten: "Lê Hoàng Cường", ngay_sinh: "2007-01-10", gioi_tinh: "Nam", email: "cuong.le@ptit.edu.vn", ma_lop: "D25CNTT2" },
        { ma_sinh_vien: "B25004", ho_ten: "Phạm Thị Dung", ngay_sinh: "2007-09-25", gioi_tinh: "Nữ", email: "dung.pham@ptit.edu.vn", ma_lop: "D25VT1" },
        { ma_sinh_vien: "B25005", ho_ten: "Hoàng Văn Em", ngay_sinh: "2007-12-05", gioi_tinh: "Nam", email: "em.hoang@ptit.edu.vn", ma_lop: "D25VT1" },
        { ma_sinh_vien: "B25006", ho_ten: "Ngô Thị Phương", ngay_sinh: "2007-04-18", gioi_tinh: "Nữ", email: "phuong.ngo@ptit.edu.vn", ma_lop: "D25KTDT1" },
        { ma_sinh_vien: "B25007", ho_ten: "Vũ Đình Giang", ngay_sinh: "2007-07-22", gioi_tinh: "Nam", email: "giang.vu@ptit.edu.vn", ma_lop: "D25KTDT1" },
        { ma_sinh_vien: "B25008", ho_ten: "Đặng Thị Hoa", ngay_sinh: "2007-02-14", gioi_tinh: "Nữ", email: "hoa.dang@ptit.edu.vn", ma_lop: "D25QTKD1" },
        { ma_sinh_vien: "B25009", ho_ten: "Bùi Văn Hùng", ngay_sinh: "2007-08-30", gioi_tinh: "Nam", email: "hung.bui@ptit.edu.vn", ma_lop: "D25QTKD1" },
        { ma_sinh_vien: "B25010", ho_ten: "Lý Thị Lan", ngay_sinh: "2007-11-11", gioi_tinh: "Nữ", email: "lan.ly@ptit.edu.vn", ma_lop: "D25CNTT2" },
        { ma_sinh_vien: "B25011", ho_ten: "Trịnh Văn Minh", ngay_sinh: "2007-05-07", gioi_tinh: "Nam", email: "minh.trinh@ptit.edu.vn", ma_lop: "D25VT2" },
        { ma_sinh_vien: "B25012", ho_ten: "Đinh Thị Ngọc", ngay_sinh: "2007-10-19", gioi_tinh: "Nữ", email: "ngoc.dinh@ptit.edu.vn", ma_lop: "D25VT2" },
        { ma_sinh_vien: "B25013", ho_ten: "Phan Văn Phúc", ngay_sinh: "2007-03-28", gioi_tinh: "Nam", email: "phuc.phan@ptit.edu.vn", ma_lop: "D25KTDT2" },
        { ma_sinh_vien: "B25014", ho_ten: "Cao Thị Quỳnh", ngay_sinh: "2007-06-03", gioi_tinh: "Nữ", email: "quynh.cao@ptit.edu.vn", ma_lop: "D25KTDT2" },
        { ma_sinh_vien: "B25015", ho_ten: "Đỗ Minh Sơn", ngay_sinh: "2007-09-16", gioi_tinh: "Nam", email: "son.do@ptit.edu.vn", ma_lop: "D25QTKD2" },
    ],
    giang_vien: [
        { id: "GV001", ho_ten: "TS. Nguyễn Minh Tuấn", email: "tuan.nm@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "CNTT" },
        { id: "GV002", ho_ten: "ThS. Trần Thị Hương", email: "huong.tt@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "CNTT" },
        { id: "GV003", ho_ten: "PGS.TS. Lê Văn Dũng", email: "dung.lv@ptit.edu.vn", trinh_do: "Phó Giáo sư", ma_khoa: "VT" },
        { id: "GV004", ho_ten: "TS. Phạm Quốc Bảo", email: "bao.pq@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "VT" },
        { id: "GV005", ho_ten: "ThS. Hoàng Thị Lan", email: "lan.ht@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "KTDT" },
        { id: "GV006", ho_ten: "GS.TS. Vũ Mạnh Cường", email: "cuong.vm@ptit.edu.vn", trinh_do: "Giáo sư", ma_khoa: "KTDT" },
        { id: "GV007", ho_ten: "TS. Ngô Thị Phượng", email: "phuong.nt@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "QTKD" },
        { id: "GV008", ho_ten: "ThS. Đặng Văn Hưng", email: "hung.dv@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "QTKD" },
        { id: "GV009", ho_ten: "TS. Bùi Thị Mai", email: "mai.bt@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "CNTT" },
        { id: "GV010", ho_ten: "ThS. Lý Văn Nam", email: "nam.lv@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "VT" },
        { id: "GV011", ho_ten: "TS. Trịnh Thị Oanh", email: "oanh.tt@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "KTDT" },
        { id: "GV012", ho_ten: "ThS. Đinh Văn Phong", email: "phong.dv@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "TOAN" },
        { id: "GV013", ho_ten: "TS. Phan Thị Quế", email: "que.pt@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "TOAN" },
        { id: "GV014", ho_ten: "ThS. Cao Văn Rồng", email: "rong.cv@ptit.edu.vn", trinh_do: "Thạc sĩ", ma_khoa: "CNTT" },
        { id: "GV015", ho_ten: "TS. Đỗ Thị Sen", email: "sen.dt@ptit.edu.vn", trinh_do: "Tiến sĩ", ma_khoa: "VT" },
    ],
    mon_hoc: [
        { ma_mon_hoc: "INT1101", ten_mon_hoc: "Nhập môn lập trình", so_tin_chi: 3, ma_khoa: "CNTT" },
        { ma_mon_hoc: "INT1201", ten_mon_hoc: "Cấu trúc dữ liệu và giải thuật", so_tin_chi: 3, ma_khoa: "CNTT" },
        { ma_mon_hoc: "INT1301", ten_mon_hoc: "Cơ sở dữ liệu", so_tin_chi: 3, ma_khoa: "CNTT" },
        { ma_mon_hoc: "INT1401", ten_mon_hoc: "Mạng máy tính", so_tin_chi: 3, ma_khoa: "CNTT" },
        { ma_mon_hoc: "INT1501", ten_mon_hoc: "Lập trình hướng đối tượng", so_tin_chi: 3, ma_khoa: "CNTT" },
        { ma_mon_hoc: "VT2101", ten_mon_hoc: "Kỹ thuật truyền dẫn", so_tin_chi: 3, ma_khoa: "VT" },
        { ma_mon_hoc: "VT2201", ten_mon_hoc: "Thông tin di động", so_tin_chi: 3, ma_khoa: "VT" },
        { ma_mon_hoc: "VT2301", ten_mon_hoc: "Xử lý tín hiệu số", so_tin_chi: 3, ma_khoa: "VT" },
        { ma_mon_hoc: "KT3101", ten_mon_hoc: "Điện tử tương tự", so_tin_chi: 3, ma_khoa: "KTDT" },
        { ma_mon_hoc: "KT3201", ten_mon_hoc: "Vi xử lý và vi điều khiển", so_tin_chi: 3, ma_khoa: "KTDT" },
        { ma_mon_hoc: "QT4101", ten_mon_hoc: "Quản trị học", so_tin_chi: 3, ma_khoa: "QTKD" },
        { ma_mon_hoc: "QT4201", ten_mon_hoc: "Marketing căn bản", so_tin_chi: 3, ma_khoa: "QTKD" },
        { ma_mon_hoc: "TOAN101", ten_mon_hoc: "Giải tích 1", so_tin_chi: 4, ma_khoa: "TOAN" },
        { ma_mon_hoc: "TOAN102", ten_mon_hoc: "Đại số tuyến tính", so_tin_chi: 3, ma_khoa: "TOAN" },
        { ma_mon_hoc: "TOAN103", ten_mon_hoc: "Xác suất thống kê", so_tin_chi: 3, ma_khoa: "TOAN" },
    ],
    hoc_ky: [
        { ma_hk: "HK1_2223", nam_hoc: "2022-2023 HK1" },
        { ma_hk: "HK2_2223", nam_hoc: "2022-2023 HK2" },
        { ma_hk: "HK3_2223", nam_hoc: "2022-2023 HK3" },
        { ma_hk: "HK1_2324", nam_hoc: "2023-2024 HK1" },
        { ma_hk: "HK2_2324", nam_hoc: "2023-2024 HK2" },
        { ma_hk: "HK3_2324", nam_hoc: "2023-2024 HK3" },
        { ma_hk: "HK1_2425", nam_hoc: "2024-2025 HK1" },
        { ma_hk: "HK2_2425", nam_hoc: "2024-2025 HK2" },
        { ma_hk: "HK3_2425", nam_hoc: "2024-2025 HK3" },
        { ma_hk: "HK1_2526", nam_hoc: "2025-2026 HK1" },
        { ma_hk: "HK2_2526", nam_hoc: "2025-2026 HK2" },
        { ma_hk: "HK3_2526", nam_hoc: "2025-2026 HK3" },
        { ma_hk: "HK1_2627", nam_hoc: "2026-2027 HK1" },
        { ma_hk: "HK2_2627", nam_hoc: "2026-2027 HK2" },
        { ma_hk: "HK3_2627", nam_hoc: "2026-2027 HK3" },
    ],
    lop_hoc_phan: [
        { ma_lop_hoc_phan: "LHP001", ma_mon_hoc: "INT1101", ma_hk: "HK1_2526", id: "GV001" },
        { ma_lop_hoc_phan: "LHP002", ma_mon_hoc: "INT1201", ma_hk: "HK1_2526", id: "GV002" },
        { ma_lop_hoc_phan: "LHP003", ma_mon_hoc: "INT1301", ma_hk: "HK1_2526", id: "GV009" },
        { ma_lop_hoc_phan: "LHP004", ma_mon_hoc: "INT1401", ma_hk: "HK1_2526", id: "GV014" },
        { ma_lop_hoc_phan: "LHP005", ma_mon_hoc: "INT1501", ma_hk: "HK1_2526", id: "GV001" },
        { ma_lop_hoc_phan: "LHP006", ma_mon_hoc: "VT2101", ma_hk: "HK1_2526", id: "GV003" },
        { ma_lop_hoc_phan: "LHP007", ma_mon_hoc: "VT2201", ma_hk: "HK1_2526", id: "GV004" },
        { ma_lop_hoc_phan: "LHP008", ma_mon_hoc: "VT2301", ma_hk: "HK1_2526", id: "GV010" },
        { ma_lop_hoc_phan: "LHP009", ma_mon_hoc: "KT3101", ma_hk: "HK1_2526", id: "GV005" },
        { ma_lop_hoc_phan: "LHP010", ma_mon_hoc: "KT3201", ma_hk: "HK1_2526", id: "GV006" },
        { ma_lop_hoc_phan: "LHP011", ma_mon_hoc: "QT4101", ma_hk: "HK1_2526", id: "GV007" },
        { ma_lop_hoc_phan: "LHP012", ma_mon_hoc: "QT4201", ma_hk: "HK1_2526", id: "GV008" },
        { ma_lop_hoc_phan: "LHP013", ma_mon_hoc: "TOAN101", ma_hk: "HK1_2526", id: "GV013" },
        { ma_lop_hoc_phan: "LHP014", ma_mon_hoc: "TOAN102", ma_hk: "HK1_2526", id: "GV012" },
        { ma_lop_hoc_phan: "LHP015", ma_mon_hoc: "TOAN103", ma_hk: "HK1_2526", id: "GV013" },
    ],
    diem: [
        { ma_sinh_vien: "B25001", ma_lop_hoc_phan: "LHP001", diem_chuyen_can: 9.0, diem_giua_ky: 8.5, diem_cuoi_ky: 8.0, diem_tong_ket: 8.5, xep_loai: "A" },
        { ma_sinh_vien: "B25002", ma_lop_hoc_phan: "LHP001", diem_chuyen_can: 8.0, diem_giua_ky: 7.5, diem_cuoi_ky: 7.0, diem_tong_ket: 7.5, xep_loai: "B" },
        { ma_sinh_vien: "B25003", ma_lop_hoc_phan: "LHP002", diem_chuyen_can: 7.0, diem_giua_ky: 6.5, diem_cuoi_ky: 6.0, diem_tong_ket: 6.5, xep_loai: "C" },
        { ma_sinh_vien: "B25004", ma_lop_hoc_phan: "LHP006", diem_chuyen_can: 9.5, diem_giua_ky: 9.0, diem_cuoi_ky: 9.0, diem_tong_ket: 9.2, xep_loai: "A" },
        { ma_sinh_vien: "B25005", ma_lop_hoc_phan: "LHP006", diem_chuyen_can: 6.0, diem_giua_ky: 5.5, diem_cuoi_ky: 5.0, diem_tong_ket: 5.5, xep_loai: "D" },
        { ma_sinh_vien: "B25006", ma_lop_hoc_phan: "LHP009", diem_chuyen_can: 8.5, diem_giua_ky: 8.0, diem_cuoi_ky: 7.5, diem_tong_ket: 8.0, xep_loai: "B" },
        { ma_sinh_vien: "B25007", ma_lop_hoc_phan: "LHP009", diem_chuyen_can: 9.0, diem_giua_ky: 9.5, diem_cuoi_ky: 9.0, diem_tong_ket: 9.2, xep_loai: "A" },
        { ma_sinh_vien: "B25008", ma_lop_hoc_phan: "LHP011", diem_chuyen_can: 7.5, diem_giua_ky: 7.0, diem_cuoi_ky: 6.5, diem_tong_ket: 7.0, xep_loai: "B" },
        { ma_sinh_vien: "B25009", ma_lop_hoc_phan: "LHP011", diem_chuyen_can: 5.0, diem_giua_ky: 4.5, diem_cuoi_ky: 4.0, diem_tong_ket: 4.5, xep_loai: "D" },
        { ma_sinh_vien: "B25010", ma_lop_hoc_phan: "LHP003", diem_chuyen_can: 8.0, diem_giua_ky: 8.5, diem_cuoi_ky: 8.0, diem_tong_ket: 8.2, xep_loai: "A" },
        { ma_sinh_vien: "B25011", ma_lop_hoc_phan: "LHP007", diem_chuyen_can: 6.5, diem_giua_ky: 6.0, diem_cuoi_ky: 5.5, diem_tong_ket: 6.0, xep_loai: "C" },
        { ma_sinh_vien: "B25012", ma_lop_hoc_phan: "LHP007", diem_chuyen_can: 9.0, diem_giua_ky: 8.5, diem_cuoi_ky: 8.0, diem_tong_ket: 8.5, xep_loai: "A" },
        { ma_sinh_vien: "B25013", ma_lop_hoc_phan: "LHP010", diem_chuyen_can: 7.0, diem_giua_ky: 7.5, diem_cuoi_ky: 7.0, diem_tong_ket: 7.2, xep_loai: "B" },
        { ma_sinh_vien: "B25014", ma_lop_hoc_phan: "LHP010", diem_chuyen_can: 3.5, diem_giua_ky: 3.0, diem_cuoi_ky: 3.0, diem_tong_ket: 3.2, xep_loai: "F" },
        { ma_sinh_vien: "B25015", ma_lop_hoc_phan: "LHP012", diem_chuyen_can: 8.0, diem_giua_ky: 7.5, diem_cuoi_ky: 7.0, diem_tong_ket: 7.5, xep_loai: "B" },
    ],
};

// ════════════════════════════════════════════════════════════════
// CẤU HÌNH BẢNG
// ════════════════════════════════════════════════════════════════
const TABLES = {
    khoa: {
        label: "Khoa",
        icon: "🏛️",
        pk: "ma_khoa",
        cols: [
            { k: "ma_khoa", l: "Mã khoa", t: "text", pk: true },
            { k: "ten_khoa", l: "Tên khoa", t: "text" },
        ],
    },
    lop: {
        label: "Lớp",
        icon: "🎒",
        pk: "ma_lop",
        cols: [
            { k: "ma_lop", l: "Mã lớp", t: "text", pk: true },
            { k: "ten_lop", l: "Tên lớp", t: "text" },
            { k: "khoa", l: "Khoa", t: "text" },
        ],
    },
    sinh_vien: {
        label: "Sinh viên",
        icon: "👨‍🎓",
        pk: "ma_sinh_vien",
        cols: [
            { k: "ma_sinh_vien", l: "Mã SV", t: "text", pk: true },
            { k: "ho_ten", l: "Họ và tên", t: "text" },
            { k: "ngay_sinh", l: "Ngày sinh", t: "date" },
            { k: "gioi_tinh", l: "Giới tính", t: "select", opts: ["Nam", "Nữ"] },
            { k: "email", l: "Email", t: "email" },
            { k: "ma_lop", l: "Mã lớp", t: "text", fk: true },
        ],
    },
    giang_vien: {
        label: "Giảng viên",
        icon: "👩‍🏫",
        pk: "id",
        cols: [
            { k: "id", l: "Mã GV", t: "text", pk: true },
            { k: "ho_ten", l: "Họ và tên", t: "text" },
            { k: "email", l: "Email", t: "email" },
            { k: "trinh_do", l: "Trình độ", t: "select", opts: ["Thạc sĩ", "Tiến sĩ", "Phó Giáo sư", "Giáo sư"] },
            { k: "ma_khoa", l: "Mã khoa", t: "text", fk: true },
        ],
    },
    mon_hoc: {
        label: "Môn học",
        icon: "📚",
        pk: "ma_mon_hoc",
        cols: [
            { k: "ma_mon_hoc", l: "Mã môn", t: "text", pk: true },
            { k: "ten_mon_hoc", l: "Tên môn học", t: "text" },
            { k: "so_tin_chi", l: "Tín chỉ", t: "number" },
            { k: "ma_khoa", l: "Mã khoa", t: "text", fk: true },
        ],
    },
    hoc_ky: {
        label: "Học kỳ",
        icon: "📅",
        pk: "ma_hk",
        cols: [
            { k: "ma_hk", l: "Mã HK", t: "text", pk: true },
            { k: "nam_hoc", l: "Năm học", t: "text" },
        ],
    },
    lop_hoc_phan: {
        label: "Lớp học phần",
        icon: "🗂️",
        pk: "ma_lop_hoc_phan",
        cols: [
            { k: "ma_lop_hoc_phan", l: "Mã LHP", t: "text", pk: true },
            { k: "ma_mon_hoc", l: "Mã môn", t: "text", fk: true },
            { k: "ma_hk", l: "Mã HK", t: "text", fk: true },
            { k: "id", l: "Mã GV", t: "text", fk: true },
        ],
    },
    diem: {
        label: "Điểm",
        icon: "📊",
        pk: null,
        cols: [
            { k: "ma_sinh_vien", l: "Mã SV", t: "text", fk: true },
            { k: "ma_lop_hoc_phan", l: "Mã LHP", t: "text", fk: true },
            { k: "diem_chuyen_can", l: "Chuyên cần", t: "number" },
            { k: "diem_giua_ky", l: "Giữa kỳ", t: "number" },
            { k: "diem_cuoi_ky", l: "Cuối kỳ", t: "number" },
            { k: "diem_tong_ket", l: "Tổng kết", t: "number" },
            { k: "xep_loai", l: "Xếp loại", t: "select", opts: ["A", "B", "C", "D", "F"] },
        ],
    },
};

// ════════════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════════════
let activeTable = "khoa";
let currentPage = 1;
let filteredRows = [];
let editingPk = null; // null = add mode, else pk value
let pendingDelPk = null;
const PAGE_SIZE = 8;
const STORAGE_KEY = "btl2_sql_database_v1";

// ════════════════════════════════════════════════════════════════
// LOCAL STORAGE HANDLERS
// ════════════════════════════════════════════════════════════════
function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DB));
    } catch (e) {
        console.error("Lỗi khi lưu dữ liệu vào LocalStorage:", e);
    }
}

function loadFromLocalStorage() {
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
        try {
            const parsed = JSON.parse(localData);
            // Sao chép an toàn dữ liệu từ LocalStorage vào bộ nhớ RAM của biến DB
            Object.keys(parsed).forEach((key) => {
                if (DB[key] !== undefined) {
                    DB[key] = parsed[key];
                }
            });
        } catch (e) {
            console.error("Lỗi khi giải mã dữ liệu LocalStorage. Sử dụng DB mặc định.", e);
        }
    } else {
        // Lưu lần đầu để đồng bộ nếu chưa có gì trong kho lưu trữ
        saveToLocalStorage();
    }
}

// ════════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════════
function getPk(row) {
    const cfg = TABLES[activeTable];
    if (cfg.pk) return row[cfg.pk];
    return row.ma_sinh_vien + "__" + row.ma_lop_hoc_phan;
}

function getPkVal(row) {
    const cfg = TABLES[activeTable];
    if (cfg.pk) return row[cfg.pk];
    if (row.ma_sinh_vien && row.ma_lop_hoc_phan) return row.ma_sinh_vien + "__" + row.ma_lop_hoc_phan;
    return Object.values(row)[0];
}

function gradeBadge(v) {
    return `<span class="badge badge-${v}">${v}</span>`;
}
function genderBadge(v) {
    return `<span class="badge badge-${v === "Nam" ? "Nam" : "Nu"}">${v}</span>`;
}
function trinhDoBadge(v) {
    const cls = { "Giáo sư": "badge-gs", "Phó Giáo sư": "badge-pgs", "Tiến sĩ": "badge-ts", "Thạc sĩ": "badge-ths" }[v] || "";
    return `<span class="badge ${cls}">${v}</span>`;
}
function scoreCell(v) {
    const n = parseFloat(v);
    if (isNaN(n)) return "—";
    const cls = n >= 8 ? "score-high" : n >= 5 ? "score-mid" : "score-low";
    return `<span class="${cls}">${n.toFixed(1)}</span>`;
}

// ════════════════════════════════════════════════════════════════
// RENDER
// ════════════════════════════════════════════════════════════════
function render() {
    const cfg = TABLES[activeTable];
    const rows = DB[activeTable];
    const q = document.getElementById("search-input").value.toLowerCase();

    filteredRows = rows.filter((r) =>
        cfg.cols.some((c) =>
            String(r[c.k] ?? "")
                .toLowerCase()
                .includes(q),
        ),
    );

    document.getElementById("ph-icon").textContent = cfg.icon;
    document.getElementById("ph-title").textContent = "Bảng " + cfg.label;
    document.getElementById("ph-sub").textContent = filteredRows.length + " bản ghi" + (q ? ` (lọc từ ${rows.length})` : "");

    const thCells =
        cfg.cols
            .map((c) => {
                let tag = "";
                if (c.pk) tag = `<span class="tag-pk">PK</span>`;
                else if (c.fk) tag = `<span class="tag-fk">FK</span>`;
                return `<th>${c.l}${tag}</th>`;
            })
            .join("") + "<th style='text-align:center;width:110px'>Thao tác</th>";
    document.getElementById("thead").innerHTML = `<tr>${thCells}</tr>`;

    const start = (currentPage - 1) * PAGE_SIZE;
    const slice = filteredRows.slice(start, start + PAGE_SIZE);

    if (slice.length === 0) {
        const empty = `<tr><td colspan="${cfg.cols.length + 1}">
    <div class="empty-state"><div class="es-icon">🔍</div>
    Không có bản ghi nào${q ? " khớp tìm kiếm" : ""}.</div></td></tr>`;
        document.getElementById("tbody").innerHTML = empty;
    } else {
        document.getElementById("tbody").innerHTML = slice
            .map((row) => {
                const cells = cfg.cols
                    .map((c) => {
                        const val = row[c.k];
                        let cell = val ?? "—";
                        if (c.k === "xep_loai") cell = gradeBadge(val);
                        else if (c.k === "gioi_tinh") cell = genderBadge(val);
                        else if (c.k === "trinh_do") cell = trinhDoBadge(val);
                        else if (c.k === "diem_tong_ket") cell = scoreCell(val);
                        return `<td title="${val ?? ""}">${cell}</td>`;
                    })
                    .join("");

                const pk = getPkVal(row);
                const pkSafe = encodeURIComponent(JSON.stringify(pk));
                return `<tr>
    ${cells}
    <td style="text-align:center">
        <button class="btn-edit" onclick="openEdit('${pkSafe}')">✏️ Sửa</button>
        <button class="btn-del"  onclick="openDel('${pkSafe}')" style="margin-left:4px">🗑️ Xóa</button>
    </td>
    </tr>`;
            })
            .join("");
    }

    renderPagination();
    updateCounts();
    updateTopStats();
}

function renderPagination() {
    const total = Math.ceil(filteredRows.length / PAGE_SIZE);
    if (total <= 1) {
        document.getElementById("pagination").innerHTML = "";
        return;
    }

    let html = `<span class="pg-info">Trang ${currentPage}/${total}</span>`;
    for (let i = 1; i <= total; i++) {
        html += `<button class="pg-btn${i === currentPage ? " active" : ""}" onclick="goPage(${i})">${i}</button>`;
    }
    document.getElementById("pagination").innerHTML = html;
}

function updateCounts() {
    Object.keys(TABLES).forEach((k) => {
        const el = document.getElementById("cnt-" + k);
        if (el) el.textContent = DB[k].length;
    });
}

function updateTopStats() {
    // Cập nhật số lượng Sinh viên
    const svEl = document.getElementById("stat-sv");
    if (svEl) svEl.textContent = DB.sinh_vien.length;

    // Cập nhật số lượng Giảng viên
    const gvEl = document.getElementById("stat-gv");
    if (gvEl) gvEl.textContent = DB.giang_vien.length;

    // Cập nhật số lượng Môn học
    const mhEl = document.getElementById("stat-mh");
    if (mhEl) mhEl.textContent = DB.mon_hoc.length;

    // Cập nhật số lượng Điểm F
    const fEl = document.getElementById("stat-f");
    if (fEl) {
        const countF = DB.diem.filter(d => d.xep_loai === "F").length;
        fEl.textContent = countF;
    }
}

// ════════════════════════════════════════════════════════════════
// NAV
// ════════════════════════════════════════════════════════════════
document.querySelectorAll(".nav-item").forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelectorAll(".nav-item").forEach((x) => x.classList.remove("active"));
        el.classList.add("active");
        activeTable = el.dataset.table;
        currentPage = 1;
        document.getElementById("search-input").value = "";
        render();
    });
});

function goPage(p) {
    currentPage = p;
    render();
}
function applyFilter() {
    currentPage = 1;
    render();
}

// ════════════════════════════════════════════════════════════════
// MODAL HELPERS
// ════════════════════════════════════════════════════════════════
function openModal(id) {
    document.getElementById(id).classList.add("show");
}
function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}

// ════════════════════════════════════════════════════════════════
// FORM MODAL
// ════════════════════════════════════════════════════════════════
function buildFormFields(rowData) {
    const cfg = TABLES[activeTable];
    const isEdit = rowData !== null;
    let html = "";

    const cols = cfg.cols;
    let i = 0;
    while (i < cols.length) {
        const c = cols[i];
        const nextC = cols[i + 1];
        const canPair = nextC && c.t === "number" && nextC.t === "number";

        if (canPair) {
            html += `<div class="field-row-2">
    ${fieldHtml(c, rowData, isEdit)}
    ${fieldHtml(nextC, rowData, isEdit)}
    </div>`;
            i += 2;
        } else {
            html += fieldHtml(c, rowData, isEdit);
            i++;
        }
    }
    return html;
}

function fieldHtml(c, rowData, isEdit) {
    const val = rowData ? (rowData[c.k] ?? "") : "";
    const readOnly = isEdit && (c.pk || (c.fk && TABLES[activeTable].pk === null));
    let tag = c.pk ? `<span class="tag-pk">PK</span>` : c.fk ? `<span class="tag-fk">FK</span>` : "";

    if (c.t === "select") {
        const opts = c.opts.map((o) => `<option value="${o}"${val === o ? " selected" : ""}>${o}</option>`).join("");
        return `<div class="field-group">
    <label>${c.l}${tag}</label>
    <select id="f_${c.k}" ${readOnly ? "disabled" : ""}>
    <option value="">-- Chọn --</option>${opts}
    </select>
</div>`;
    }

    return `<div class="field-group">
<label>${c.l}${tag}</label>
<input id="f_${c.k}" type="${c.t}" value="${val}"
    ${readOnly ? `readonly style="background:#f0f3f9;color:var(--muted);cursor:not-allowed"` : ""} 
    placeholder="${c.l}"/>
</div>`;
}

function openAdd() {
    editingPk = null;
    const cfg = TABLES[activeTable];
    document.getElementById("modal-title").textContent = "Thêm bản ghi mới";
    document.getElementById("modal-sub").textContent = "Bảng " + cfg.label;
    document.getElementById("btn-save").textContent = "Thêm bản ghi";
    document.getElementById("modal-body").innerHTML = buildFormFields(null);
    openModal("form-modal");
}

function openEdit(pkJson) {
    const pk = JSON.parse(decodeURIComponent(pkJson));
    const cfg = TABLES[activeTable];
    const row = DB[activeTable].find((r) => getPkVal(r) === pk);
    if (!row) return;

    editingPk = pk;
    document.getElementById("modal-title").textContent = "Chỉnh sửa bản ghi";
    document.getElementById("modal-sub").textContent = "Bảng " + cfg.label;
    document.getElementById("btn-save").textContent = "Lưu thay đổi";
    document.getElementById("modal-body").innerHTML = buildFormFields(row);
    openModal("form-modal");
}

function openDel(pkJson) {
    const pk = JSON.parse(decodeURIComponent(pkJson));
    const cfg = TABLES[activeTable];
    const row = DB[activeTable].find((r) => getPkVal(r) === pk);
    if (!row) return;

    pendingDelPk = pk;
    document.getElementById("del-table-name").textContent = cfg.label;
    document.getElementById("del-preview").textContent = cfg.cols
        .slice(0, 3)
        .map((c) => `${c.k}: ${row[c.k] ?? "—"}`)
        .join("   ·   ");
    openModal("del-modal");
}

function confirmDelete() {
    const idx = DB[activeTable].findIndex((r) => getPkVal(r) === pendingDelPk);
    if (idx !== -1) {
        DB[activeTable].splice(idx, 1);
        saveToLocalStorage(); // <--- Ghi lại thay đổi vào LocalStorage
    }
    closeModal("del-modal");
    if (currentPage > Math.ceil(filteredRows.length / PAGE_SIZE)) currentPage = 1;
    render();
    showToast("🗑️ Đã xóa bản ghi.", "warn");
}

function saveRecord() {
    const cfg = TABLES[activeTable];
    const newRow = {};
    for (const c of cfg.cols) {
        const el = document.getElementById("f_" + c.k);
        if (!el) continue;
        const v = el.value;
        newRow[c.k] = c.t === "number" ? (v === "" ? null : parseFloat(v)) : v;
    }

    if (editingPk === null) {
        // THÊM MỚI (ADD)
        DB[activeTable].push(newRow);
        saveToLocalStorage(); // <--- Lưu vào LocalStorage
        showToast("✅ Đã thêm bản ghi mới!", "ok");
    } else {
        // CHỈNH SỬA (EDIT)
        const idx = DB[activeTable].findIndex((r) => getPkVal(r) === editingPk);
        if (idx !== -1) {
            // Giữ lại giá trị PK cũ
            if (cfg.pk) newRow[cfg.pk] = DB[activeTable][idx][cfg.pk];
            DB[activeTable][idx] = newRow;
            saveToLocalStorage(); // <--- Lưu vào LocalStorage
        }
        showToast("✅ Đã cập nhật bản ghi!", "ok");
    }
    closeModal("form-modal");
    render();
}

// ════════════════════════════════════════════════════════════════
// TOAST
// ════════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg, type) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.className = type;
    clearTimeout(toastTimer);
    setTimeout(() => el.classList.add("show"), 10);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2800);
}

// ════════════════════════════════════════════════════════════════
// INIT (KHỞI TẠO)
// ════════════════════════════════════════════════════════════════
loadFromLocalStorage(); // Tải dữ liệu từ LocalStorage trước khi render
render();