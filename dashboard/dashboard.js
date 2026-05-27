function renderDashboard() {
    const main = document.getElementById("main");
    if (!main) return;

    // Xóa dashboard cũ nếu còn sót
    const old = document.getElementById("dashboard-view");
    if (old) old.remove();

    // Tính số liệu
    const svCount = DB.sinh_vien.length;
    const gvCount = DB.giang_vien.length;
    const mhCount = DB.mon_hoc.length;
    const diemCount = DB.diem.length;
    const lopCount = DB.lop.length;
    const khoaCount = DB.khoa.length;

    const gradeDist = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    DB.diem.forEach(d => {
        if (gradeDist[d.xep_loai] !== undefined) gradeDist[d.xep_loai]++;
    });

    const gradeColors = {
        A: { bg: "#d4f4e8", color: "#0a6e4a", pill: "#b8eedd" },
        B: { bg: "#daeafa", color: "#0f4e90", pill: "#b8d8f8" },
        C: { bg: "#fef0cc", color: "#7a4d00", pill: "#fde4a0" },
        D: { bg: "#fde4d4", color: "#8f2c0a", pill: "#fbc8a8" },
        F: { bg: "#fcd4d4", color: "#8f0a0a", pill: "#f8b0b0" },
    };

    const statsCards = [
        { icon: "👨‍🎓", val: svCount, lbl: "Sinh viên" },
        { icon: "👩‍🏫", val: gvCount, lbl: "Giảng viên" },
        { icon: "📚", val: mhCount, lbl: "Môn học" },
        { icon: "📊", val: diemCount, lbl: "Bản ghi điểm" },
        { icon: "🎒", val: lopCount, lbl: "Lớp học" },
        { icon: "🏛️", val: khoaCount, lbl: "Khoa" },
    ];

    const statsHtml = statsCards.map(s => `
        <div class="dash-stat-card">
            <div class="dsc-val">${s.val}</div>
            <div class="dsc-lbl">${s.icon} ${s.lbl}</div>
        </div>`).join("");

    const gradeHtml = Object.entries(gradeDist).map(([g, cnt]) => {
        const c = gradeColors[g];
        return `
        <div class="dash-grade-card" style="background:${c.bg}">
            <div class="dgc-pill" style="background:${c.pill};color:${c.color}">${g}</div>
            <div class="dgc-count" style="color:${c.color}">${cnt}</div>
            <div class="dgc-label">sinh viên</div>
        </div>`;
    }).join("");



    // Tạo div mới, KHÔNG ghi đè innerHTML của #main
    const dv = document.createElement("div");
    dv.id = "dashboard-view";
    dv.innerHTML = `
        <div class="dash-section-title">🏠 Tổng quan hệ thống</div>

        <div class="dash-stats-grid">${statsHtml}</div>

        <div class="dash-block">
            <div class="dash-block-title">📊 Phân bố xếp loại điểm</div>
            <div class="dash-grade-grid">${gradeHtml}</div>
        </div>

        `;

    // Chèn vào #main (KHÔNG xóa các phần tử con hiện có)
    main.appendChild(dv);
}