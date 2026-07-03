window.FitHeader.renderAdminShell("members");

const id = window.FitUtils.getQueryParam("id");
const members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);
const detail = document.querySelector("#memberDetail");

if (!member) {
  detail.innerHTML = `<p class="subtle">회원 정보를 찾을 수 없습니다.</p>`;
} else {
  const status = window.FitUtils.getMemberStatus(member);
  document.querySelector("#editLink").href = `./edit.html?id=${member.id}`;
  detail.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">${member.phone}</p>
        <h2>${member.name}</h2>
      </div>
      <span class="status-pill ${status.className}">${status.label}</span>
    </div>
    <div class="member-detail">
      <p><strong>회원권:</strong> ${member.membershipType}</p>
      <p><strong>이용 기간:</strong> ${member.startDate} ~ ${member.endDate}</p>
      <p><strong>남은 기간:</strong> ${window.FitUtils.getDaysLeftText(member.endDate)}</p>
      <p><strong>결제:</strong> ${window.FitUtils.formatCurrency(member.paymentAmount)} / ${member.paymentStatus}</p>
      <p><strong>총 출석:</strong> ${member.attendanceDates.length}회</p>
    </div>
  `;
}

document.querySelector("#deleteBtn").addEventListener("click", () => {
  if (!member || !confirm(`${member.name} 회원을 삭제할까요?`)) return;
  window.FitStorage.saveMembers(members.filter((item) => item.id !== member.id));
  window.location.href = "./list.html";
});
