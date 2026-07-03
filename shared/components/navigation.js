window.FitNavigation = (() => {
  function getSectionPrefix(sectionName) {
    const normalizedPath = window.location.pathname.replaceAll("\\", "/");
    return normalizedPath.includes(`/${sectionName}/`) && !normalizedPath.endsWith(`/${sectionName}/index.html`) ? "../" : "";
  }

  function renderAdminNavigation(activePage) {
    const prefix = getSectionPrefix("admin");
    const links = [
      ["admin-home", "관리자 메인", `${prefix}index.html`],
      ["members", "회원 관리", `${prefix}members/list.html`],
      ["memberships", "회원권 관리", `${prefix}memberships/list.html`],
      ["payments", "결제 관리", `${prefix}payments/list.html`],
    ];

    return links
      .map(([key, label, href]) => `<a class="${activePage === key ? "active" : ""}" href="${href}">${label}</a>`)
      .join("");
  }

  function renderCustomerNavigation(activePage) {
    const prefix = getSectionPrefix("my");
    const links = [
      ["my-home", "마이페이지", `${prefix}index.html`],
      ["my-memberships", "내 회원권", `${prefix}memberships/list.html`],
      ["my-payments", "내 결제", `${prefix}payments/list.html`],
      ["my-attendances", "내 출석", `${prefix}attendances/list.html`],
    ];

    return links
      .map(([key, label, href]) => `<a class="${activePage === key ? "active" : ""}" href="${href}">${label}</a>`)
      .join("");
  }

  return {
    renderAdminNavigation,
    renderCustomerNavigation,
  };
})();
