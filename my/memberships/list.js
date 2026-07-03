window.FitHeader.renderCustomerShell("my-memberships");

const member = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const panel = document.querySelector("#membershipPanel");

if (!member) {
  panel.innerHTML = `<p class="subtle">조회할 회원 정보가 없습니다.</p>`;
} else {
  const status = window.FitUtils.getMemberStatus(member);
  panel.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Membership</p>
        <h2>${member.name}님의 회원권</h2>
      </div>
      <span class="status-pill ${status.className}">${status.label}</span>
    </div>
    <div class="member-detail">
      <p><strong>회원권:</strong> ${member.membershipType}</p>
      <p><strong>시작일:</strong> ${member.startDate}</p>
      <p><strong>만료일:</strong> ${member.endDate}</p>
      <p><strong>남은 기간:</strong> ${window.FitUtils.getDaysLeftText(member.endDate)}</p>
    </div>
    <p><a class="mini-button" href="./detail.html?id=${member.id}">상세 보기</a></p>
  `;
}
