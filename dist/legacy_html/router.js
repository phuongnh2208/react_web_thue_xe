(function () {
  "use strict";

  const routes = {
    home: "trang-chu-khach-hang.html",
    fleet: "danh-sach-xe.html",
    service: "dich-vu.html",
    location: "dia-diem.html",
    support: "ho-tro.html",
    detail: "chi-tiet-xe.html",
    payment: "thanh-toan.html",
    securePayment: "chon-phuong-thuc-thanh-toan.html",
    paymentConfirmed: "xac-nhan-thanh-toan.html",
    success: "thanh-cong-hop-dong-dien-tu.html",
    adminDashboard: "dashboard-tong-quan-admin.html",
    adminFleet: "quan-ly-doi-xe.html",
    adminMaintenance: "quan-ly-bao-duong.html",
    adminContracts: "quan-ly-hop-dong-cho-ky-so.html",
    adminAccounting: "quan-ly-ke-toan-thanh-toan.html",
    adminUsers: "quan-ly-nguoi-dung-phan-quyen.html"
  };

  const titles = {
    "trang-chu-khach-hang.html": "Trang Chu Khach Hang - Kinetic Concierge",
    "danh-sach-xe.html": "Danh Sach Xe - Kinetic Concierge",
    "dich-vu.html": "Dich Vu - Kinetic Concierge",
    "dia-diem.html": "Dia Diem - Kinetic Concierge",
    "ho-tro.html": "Ho Tro - Kinetic Concierge",
    "chi-tiet-xe.html": "Chi Tiet Xe - Kinetic Concierge",
    "thanh-toan.html": "Thanh Toan - Kinetic Concierge",
    "chon-phuong-thuc-thanh-toan.html": "Chon Phuong Thuc Thanh Toan - Kinetic Concierge",
    "xac-nhan-thanh-toan.html": "Xac Nhan Thanh Toan - Kinetic Concierge",
    "thanh-cong-hop-dong-dien-tu.html": "Thanh Cong Hop Dong Dien Tu - Kinetic Concierge",
    "dashboard-tong-quan-admin.html": "Dashboard Tong Quan Admin - Kinetic Concierge",
    "quan-ly-doi-xe.html": "Quan Ly Doi Xe - Kinetic Concierge",
    "quan-ly-bao-duong.html": "Quan Ly Bao Duong - Kinetic Concierge",
    "quan-ly-hop-dong-cho-ky-so.html": "Quan Ly Hop Dong Cho Ky So - Kinetic Concierge",
    "quan-ly-ke-toan-thanh-toan.html": "Quan Ly Ke Toan Thanh Toan - Kinetic Concierge",
    "quan-ly-nguoi-dung-phan-quyen.html": "Quan Ly Nguoi Dung Phan Quyen - Kinetic Concierge"
  };

  const page = location.pathname.split("/").pop();
  if (titles[page]) {
    document.title = titles[page];
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function goTo(path) {
    if (!path || path === "#") return;
    window.location.href = path;
  }

  function wireElement(element, path) {
    if (!element || !path) return;

    if (element.hasAttribute("data-router-ignore")) return;

    if (element.tagName === "A") {
      const currentHref = element.getAttribute("href");
      if (currentHref && currentHref !== "#") return;
      element.setAttribute("href", path);
      return;
    }

    if (element.tagName === "BUTTON") {
      if (element.hasAttribute("onclick")) return;
      element.setAttribute("type", "button");
    }

    element.style.cursor = "pointer";
    if (element.dataset.routerBound === "true") return;
    element.dataset.routerBound = "true";
    element.addEventListener("click", function () {
      goTo(path);
    });
  }

  function matchAny(content, tokens) {
    return tokens.some(function (token) {
      return content.includes(token);
    });
  }

  const rules = [
    { tokens: ["kinetic concierge"], path: routes.home },
    { tokens: ["trang chu", "trang chu khach hang"], path: routes.home },
    { tokens: ["doi xe", "danh sach xe", "quan ly doi xe", "quan ly phuong tien"], path: routes.fleet },
    { tokens: ["dich vu"], path: routes.service },
    { tokens: ["dia diem"], path: routes.location },
    { tokens: ["ho tro"], path: routes.support },
    { tokens: ["chinh sach bao mat", "dieu khoan dich vu", "thoa thuan thue xe", "lien he"], path: routes.home },
    { tokens: ["dang nhap"], path: routes.adminDashboard },
    { tokens: ["dang xuat"], path: routes.home },
    { tokens: ["tim doi xe", "kham pha bo suu tap", "ap dung loc"], path: routes.fleet },
    { tokens: ["quay lai dat xe", "quay lai"], path: routes.detail },
    { tokens: ["dat ngay"], path: page === "chi-tiet-xe.html" || page === "thanh-toan.html" ? routes.payment : routes.detail },
    { tokens: ["xac nhan va thanh toan"], path: routes.paymentConfirmed },
    { tokens: ["xac nhan thanh toan"], path: routes.paymentConfirmed },
    { tokens: ["xac nhan thanh cong", "tai hoa don"], path: routes.success },
    { tokens: ["lua chon phuong thuc thanh toan", "thanh toan bao mat"], path: routes.payment },
    { tokens: ["quan ly chuyen di", "dashboard tong quan"], path: routes.adminDashboard },
    { tokens: ["tong quan"], path: routes.adminDashboard },
    { tokens: ["bao tri", "bao duong"], path: routes.adminMaintenance },
    { tokens: ["don thue xe", "don hang thue", "hop dong cho ky so", "hop dong thue xe", "tao don thue moi", "thu xe moi"], path: routes.adminContracts },
    { tokens: ["ke toan", "cong no", "hoa don moi"], path: routes.adminAccounting },
    { tokens: ["phan quyen", "vai tro nguoi dung", "nguoi dung"], path: routes.adminUsers },
    { tokens: ["them nguoi dung moi"], path: routes.adminUsers },
    { tokens: ["them xe moi", "xuat file"], path: routes.adminFleet },
    { tokens: ["xuat bao cao", "xuat bao cao csv", "xuat csv"], path: routes.adminAccounting },
    { tokens: ["xem hoat dong gan day"], path: routes.adminDashboard },
    { tokens: ["tai ung dung"], path: routes.home }
  ];

  document.querySelectorAll("a, button").forEach(function (element) {
    const content = normalize(element.textContent);
    if (!content) return;

    for (const rule of rules) {
      if (matchAny(content, rule.tokens)) {
        wireElement(element, rule.path);
        break;
      }
    }
  });

  document.querySelectorAll("button").forEach(function (button) {
    if (button.querySelector('[data-icon="search"]')) {
      wireElement(button, routes.fleet);
    }
  });

  const brandElements = Array.from(document.querySelectorAll("div, a, button")).filter(function (element) {
    return normalize(element.textContent) === "kinetic concierge";
  });

  brandElements.forEach(function (element) {
    wireElement(element, routes.home);
  });
})();
