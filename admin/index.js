window.FitHeader.renderAdminShell("admin-home");

const members = window.FitStorage.loadMembers();
const todayIso = window.FitUtils.getTodayIso();

function renderDashboard() {
  const expiringMembers = members.filter((member) => {
    const daysLeft = window.FitUtils.getDaysUntil(member.endDate);
    return daysLeft >= 0 && daysLeft <= 7;
  });
  const unpaidMembers = members.filter((member) => member.paymentStatus === "미납");
  const todayAttendance = members.filter((member) => member.attendanceDates.includes(todayIso));

  document.querySelector("#totalMembers").textContent = members.length;
  document.querySelector("#expiringMembers").textContent = expiringMembers.length;
  document.querySelector("#unpaidMembers").textContent = unpaidMembers.length;
  document.querySelector("#todayAttendance").textContent = todayAttendance.length;

  const recentMembers = members.slice(0, 5);
  const recentList = document.querySelector("#recentMembers");

  if (recentMembers.length === 0) {
    recentList.innerHTML = `<p class="subtle">등록된 회원이 없습니다.</p>`;
    return;
  }

  recentList.innerHTML = recentMembers
    .map((member) => {
      const status = window.FitUtils.getMemberStatus(member);
      return `
        <article class="list-item">
          <div>
            <strong>${member.name}</strong>
            <p class="subtle">${member.phone} · ${member.membershipType}</p>
          </div>
          <span class="status-pill ${status.className}">${status.label}</span>
        </article>
      `;
    })
    .join("");
}

renderDashboard();
