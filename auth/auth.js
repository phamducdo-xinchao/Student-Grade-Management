// Đăng nhập / Đăng ký / Phân quyền  PTIT DB
// Vai trò: admin | teacher | student

const AUTH_KEY = "ptitdb_users_v1";
const SESSION_KEY = "ptitdb_session_v1";

// ── Tài khoản mặc định ──────────────────────────────────
const DEFAULT_USERS = [
    { username: "admin", password: "admin123", role: "admin", name: "Quản trị viên" },
    { username: "gv001", password: "gv001pass", role: "teacher", name: "TS. Nguyễn Minh Tuấn" },
    { username: "sv001", password: "sv001pass", role: "student", name: "Nguyễn Văn An" },
];

// ── Bootstrap dữ liệu người dùng ──────────────────────────────
function getUsers() {
    const raw = localStorage.getItem(AUTH_KEY);
    if (raw) return JSON.parse(raw);
    localStorage.setItem(AUTH_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
}

function saveUsers(users) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

// ── Session ────────────────────────────────────────────────────
function getSession() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
}

function startSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
        username: user.username,
        name: user.name,
        role: user.role,
    }));
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
}

// ── Render màn hình Auth ───────────────────────────────────────
function renderAuthScreen() {
    const div = document.createElement("div");
    div.id = "auth-screen";
    div.innerHTML = `
    <div class="auth-card">
      <div class="auth-head">
        <div class="auth-logo">Quản Lý Điểm</div>
        <div class="auth-tagline">Hệ thống quản lý đào tạo</div>
        <div class="auth-tabs">
          <button class="auth-tab active" id="tab-login"  onclick="authShowTab('login')">Đăng nhập</button>
          <button class="auth-tab"        id="tab-signup" onclick="authShowTab('signup')">Đăng ký</button>
        </div>
      </div>

      <div class="auth-body">

        <!-- ── ĐĂNG NHẬP ── -->
        <div class="auth-panel active" id="panel-login">
          <div class="auth-error" id="login-error"></div>

          <div class="auth-field">
            <label>Tên đăng nhập</label>
            <input type="text" id="login-user" placeholder="Nhập tên đăng nhập" autocomplete="username"
                   onkeydown="if(event.key==='Enter') authLogin()"/>
          </div>
          <div class="auth-field">
            <label>Mật khẩu</label>
            <input type="password" id="login-pass" placeholder="Nhập mật khẩu" autocomplete="current-password"
                   onkeydown="if(event.key==='Enter') authLogin()"/>
          </div>

          <button class="auth-btn" onclick="authLogin()">Đăng nhập →</button>

          <div style="margin-top:16px;padding:11px 13px;background:var(--bg);border-radius:8px;font-size:11px;color:var(--muted);line-height:1.7">
            <strong style="color:var(--text)">Tài khoản demo:</strong><br>
            👑 Admin &nbsp;&nbsp;&nbsp;: <code>admin</code> / <code>admin123</code><br>
            👩‍🏫 Giảng viên: <code>gv001</code> &nbsp;/ <code>gv001pass</code><br>
            👨‍🎓 Sinh viên &nbsp;: <code>sv001</code> &nbsp;/ <code>sv001pass</code>
          </div>
        </div>

        <!-- ── ĐĂNG KÝ ── -->
        <div class="auth-panel" id="panel-signup">
          <div class="auth-error" id="signup-error"></div>

          <div class="auth-field">
            <label>Họ và tên</label>
            <input type="text" id="su-name" placeholder="Nguyễn Văn A"/>
          </div>
          <div class="auth-field">
            <label>Tên đăng nhập</label>
            <input type="text" id="su-user" placeholder="Không dấu, không khoảng trắng"/>
          </div>
          <div class="auth-field">
            <label>Mật khẩu</label>
            <input type="password" id="su-pass" placeholder="Ít nhất 6 ký tự"/>
          </div>
          <div class="auth-field">
            <label>Xác nhận mật khẩu</label>
            <input type="password" id="su-pass2" placeholder="Nhập lại mật khẩu"/>
          </div>

          <div class="auth-field">
            <label>Vai trò</label>
            <div class="role-pills">
              <div class="role-pill selected" data-role="student" onclick="authSelectRole(this)">
                <div class="rp-icon">👨‍🎓</div>
                <span class="rp-label">Sinh viên</span>
              </div>
              <div class="role-pill" data-role="teacher" onclick="authSelectRole(this)">
                <div class="rp-icon">👩‍🏫</div>
                <span class="rp-label">Giảng viên</span>
              </div>
              <div class="role-pill" data-role="admin" onclick="authSelectRole(this)">
                <div class="rp-icon">👑</div>
                <span class="rp-label">Admin</span>
              </div>
            </div>
          </div>

          <button class="auth-btn" onclick="authSignup()">Tạo tài khoản →</button>
        </div>

      </div>
    </div>`;
    document.body.appendChild(div);
}

// ── Tab switch ─────────────────────────────────────────────────
function authShowTab(tab) {
    document.getElementById("panel-login").classList.toggle("active", tab === "login");
    document.getElementById("panel-signup").classList.toggle("active", tab === "signup");
    document.getElementById("tab-login").classList.toggle("active", tab === "login");
    document.getElementById("tab-signup").classList.toggle("active", tab === "signup");
    document.getElementById("login-error").classList.remove("show");
    document.getElementById("signup-error").classList.remove("show");
}

function authSelectRole(el) {
    document.querySelectorAll(".role-pill").forEach(p => p.classList.remove("selected"));
    el.classList.add("selected");
}

// ── Đăng nhập ─────────────────────────────────────────────────
function authLogin() {
    const errEl = document.getElementById("login-error");
    const uname = document.getElementById("login-user").value.trim();
    const pwd = document.getElementById("login-pass").value;

    if (!uname || !pwd) {
        showAuthError(errEl, "Vui lòng điền đầy đủ thông tin.");
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.username === uname && u.password === pwd);

    if (!user) {
        showAuthError(errEl, "Tên đăng nhập hoặc mật khẩu không đúng.");
        document.getElementById("login-pass").classList.add("error");
        return;
    }

    startSession(user);
    bootApp(user);
}

// ── Đăng ký ───────────────────────────────────────────────────
function authSignup() {
    const errEl = document.getElementById("signup-error");
    const name = document.getElementById("su-name").value.trim();
    const uname = document.getElementById("su-user").value.trim();
    const pwd = document.getElementById("su-pass").value;
    const pwd2 = document.getElementById("su-pass2").value;
    const roleEl = document.querySelector(".role-pill.selected");
    const role = roleEl ? roleEl.dataset.role : "student";

    if (!name || !uname || !pwd || !pwd2) {
        showAuthError(errEl, "Vui lòng điền đầy đủ tất cả các trường."); return;
    }
    if (/\s/.test(uname)) {
        showAuthError(errEl, "Tên đăng nhập không được chứa khoảng trắng."); return;
    }
    if (pwd.length < 6) {
        showAuthError(errEl, "Mật khẩu phải có ít nhất 6 ký tự."); return;
    }
    if (pwd !== pwd2) {
        showAuthError(errEl, "Mật khẩu xác nhận không khớp."); return;
    }

    const users = getUsers();
    if (users.find(u => u.username === uname)) {
        showAuthError(errEl, `Tên đăng nhập "${uname}" đã tồn tại.`); return;
    }

    const newUser = { username: uname, password: pwd, role, name };
    users.push(newUser);
    saveUsers(users);

    startSession(newUser);
    bootApp(newUser);
}

function showAuthError(el, msg) {
    el.textContent = msg;
    el.classList.add("show");
}

// ── Khởi động app sau khi đăng nhập ──────────────────────────
function bootApp(user) {
    // 1) Ẩn màn auth
    const screen = document.getElementById("auth-screen");
    if (screen) {
        screen.style.animation = "authFadeOut .25s ease forwards";
        setTimeout(() => screen.remove(), 260);
    }

    // 2) Hiện layout
    document.body.classList.add("auth-ready");

    // 3) Áp vai trò lên body
    document.body.classList.remove("role-admin", "role-teacher", "role-student");
    document.body.classList.add("role-" + user.role);

    // 4) Thêm thông tin người dùng vào topbar
    renderUserChip(user);

    // 5) Thêm role hint sidebar
    injectRoleHint(user);

    // 6) Đánh dấu các bảng không cho giảng viên edit
    applyTeacherRestriction();

    // 7) Nếu sinh viên thì tự nhảy sang tab Điểm và lọc điểm của chính mình
    if (user.role === "student") {
        applyStudentDiemFilter(user);
    }
}

// ── Thêm user chip vào topbar ─────────────────────────────────
function renderUserChip(user) {
    const topbar = document.getElementById("topbar");
    if (!topbar) return;

    const statsBar = topbar.querySelector(".stats-bar");
    if (statsBar) statsBar.style.marginLeft = "0";

    const roleLabel = { admin: "Admin", teacher: "Giảng viên", student: "Sinh viên" }[user.role] || user.role;
    const roleClass = { admin: "rb-admin", teacher: "rb-teacher", student: "rb-student" }[user.role] || "";
    const initials = user.name.split(" ").slice(-2).map(w => w[0]).join("").toUpperCase().slice(0, 2);

    const chip = document.createElement("div");
    chip.id = "user-chip";
    chip.innerHTML = `
      <div class="uc-avatar">${initials}</div>
      <div class="uc-info">
        <div class="uc-name">${user.name}</div>
        <div class="uc-role">
          <span class="role-badge ${roleClass}">${roleLabel}</span>
        </div>
      </div>
      <button id="btn-logout" onclick="authLogout()">Đăng xuất</button>`;

    topbar.appendChild(chip);
}

// ── Role hint trong sidebar ────────────────────────────────────
function injectRoleHint(user) {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    const hint = document.createElement("div");
    hint.className = "role-hint";
    const msgs = {
        student: "👁️ Chế độ xem — chỉ đọc",
        teacher: "✏️ Giảng viên — chỉ sửa Điểm",
    };
    hint.textContent = msgs[user.role] || "";
    sidebar.insertBefore(hint, sidebar.firstChild);
}

// ── Giảng viên: chỉ được chỉnh bảng Điểm ─────────────────────
function applyTeacherRestriction() {
    const main = document.getElementById("main");
    if (!main) return;

    const origSwitch = window.switchTable;
    window.switchTable = function (tableName) {
        origSwitch(tableName);
        if (document.body.classList.contains("role-teacher")) {
            if (tableName === "diem") {
                main.classList.remove("no-teacher-edit");
            } else {
                main.classList.add("no-teacher-edit");
            }
        }
    };

    // Trạng thái ban đầu
    if (document.body.classList.contains("role-teacher")) {
        main.classList.add("no-teacher-edit"); // mặc định đang ở khoa
    }
}

// ── Sinh viên: lọc điểm theo mã SV ─────
function applyStudentDiemFilter(user) {
    // Tìm sinh viên có tên khớp với tên user đăng nhập
    // Nếu không khớp, hiện tất cả điểm (chế độ demo)
    const svMatch = (typeof DB !== "undefined") &&
        DB.sinh_vien.find(sv =>
            sv.ho_ten.toLowerCase().includes(user.name.toLowerCase()) ||
            user.name.toLowerCase().includes(sv.ho_ten.toLowerCase())
        );

    if (svMatch) {
        // Lưu filter vào state toàn cục để render() của main.js có thể dùng
        window._studentMaSV = svMatch.ma_sinh_vien;
    }

    // Khi SV click sang bảng Điểm, tự động filter
    const origSwitch = window.switchTable;
    window.switchTable = function (tableName) {
        origSwitch(tableName);
        if (document.body.classList.contains("role-student") && tableName === "diem" && window._studentMaSV) {
            const searchInput = document.getElementById("search-input");
            if (searchInput) {
                searchInput.value = window._studentMaSV;
                if (typeof applyFilter === "function") applyFilter();
            }
        }
    };
}

// ── Đăng xuất ─────────────────────────────────────────────────
function authLogout() {
    clearSession();
    // Hard reload sạch state
    window.location.reload();
}

// ════════════════════════════════════════════════════════════════
// INIT – chạy ngay khi DOM sẵn
// ════════════════════════════════════════════════════════════════
(function initAuth() {
    // Thêm keyframe fadeOut cho auth screen
    const style = document.createElement("style");
    style.textContent = `
        @keyframes authFadeOut {
            to { opacity: 0; transform: scale(.96); }
        }
    `;
    document.head.appendChild(style);

    const session = getSession();
    if (session) {
        // Đã có session hợp lệ → vào thẳng
        document.body.classList.add("auth-ready");
        document.addEventListener("DOMContentLoaded", () => bootApp(session));
    } else {
        // Chưa đăng nhập → hiện màn auth
        document.addEventListener("DOMContentLoaded", () => {
            renderAuthScreen();
        });
    }
})();
