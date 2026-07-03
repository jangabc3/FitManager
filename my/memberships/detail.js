window.FitHeader.renderCustomerShell("my-memberships");

const member = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const detail = document.querySelector("#membershipDetail");

if (!member) {
  detail.innerHTML = `<p class="subtle">회원권 정보를 찾을 수 없습니다.</p>`;
} else {
  const status = window.FitUtils.getMemberStatus(member);
  detail.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">${member.name}</p>
        <h2>${member.membershipType}</h2>
      </div>
      <span class="status-pill ${status.className}">${status.label}</span>
    </div>
    <div class="member-detail">
      <p><strong>이용 기간:</strong> ${member.startDate} ~ ${member.endDate}</p>
      <p><strong>남은 기간:</strong> ${window.FitUtils.getDaysLeftText(member.endDate)}</p>
      <p><strong>최근 출석:</strong> ${window.FitUtils.getRecentAttendance(member)}</p>
      <p><strong>총 출석:</strong> ${member.attendanceDates.length}회</p>
    </div>
  `;
}
