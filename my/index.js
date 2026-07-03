window.FitHeader.renderCustomerShell("my-home");

const currentMember = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const summary = document.querySelector("#memberSummary");

if (!currentMember) {
  summary.innerHTML = `<p class="subtle">조회할 회원 정보가 없습니다.</p>`;
} else {
  const status = window.FitUtils.getMemberStatus(currentMember);

  summary.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Current Member</p>
        <h2>${currentMember.name}</h2>
      </div>
      <span class="status-pill ${status.className}">${status.label}</span>
    </div>
    <p class="subtle">${currentMember.phone} · ${currentMember.membershipType} · ${window.FitUtils.getDaysLeftText(currentMember.endDate)}</p>
  `;
}
