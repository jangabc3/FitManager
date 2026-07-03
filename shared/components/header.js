window.FitHeader = (() => {
  function renderAdminShell(activePage) {
    document.querySelector("#sidebar").innerHTML = `
      <div class="brand">
        <div class="brand-mark">F</div>
        <div>
          <strong>FitDesk</strong>
          <span>Admin</span>
        </div>
      </div>
      <nav class="nav-menu" aria-label="관리자 메뉴">
        ${window.FitNavigation.renderAdminNavigation(activePage)}
      </nav>
    `;
  }

  function renderCustomerShell(activePage) {
    document.querySelector("#sidebar").innerHTML = `
      <div class="brand">
        <div class="brand-mark">F</div>
        <div>
          <strong>FitDesk</strong>
          <span>Member</span>
        </div>
      </div>
      <nav class="nav-menu" aria-label="회원 메뉴">
        ${window.FitNavigation.renderCustomerNavigation(activePage)}
      </nav>
    `;
  }

  return {
    renderAdminShell,
    renderCustomerShell,
  };
})();
