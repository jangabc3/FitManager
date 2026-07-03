window.FitHeader.renderAdminShell("memberships");

const id = window.FitUtils.getQueryParam("id");
const members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);
const detail = document.querySelector("#membershipDetail");

if (!member) {
  detail.innerHTML = `<p class="subtle">회원권 정보를 찾을 수 없습니다.</p>`;
} else {
  const status = window.FitUtils.getMemberStatus(member);
  document.querySelector("#editLink").href = `./edit.html?id=${member.id}`;
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
      <p><strong>결제 상태:</strong> ${member.paymentStatus}</p>
    </div>
  `;
}

document.querySelector("#deleteBtn").addEventListener("click", () => {
  if (!member || !confirm(`${member.name} 회원권을 삭제할까요? 회원 정보도 함께 삭제됩니다.`)) return;
  window.FitStorage.saveMembers(members.filter((item) => item.id !== member.id));
  window.location.href = "./list.html";
});
