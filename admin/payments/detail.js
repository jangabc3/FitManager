window.FitHeader.renderAdminShell("payments");

const id = window.FitUtils.getQueryParam("id");
const members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);
const detail = document.querySelector("#paymentDetail");

if (!member) {
  detail.innerHTML = `<p class="subtle">결제 정보를 찾을 수 없습니다.</p>`;
} else {
  const paymentClass = member.paymentStatus === "미납" ? "status-bad" : "status-good";
  document.querySelector("#editLink").href = `./edit.html?id=${member.id}`;
  detail.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">${member.name}</p>
        <h2>${window.FitUtils.formatCurrency(member.paymentAmount)}</h2>
      </div>
      <span class="status-pill ${paymentClass}">${member.paymentStatus}</span>
    </div>
    <div class="payment-detail">
      <p><strong>회원권:</strong> ${member.membershipType}</p>
      <p><strong>연락처:</strong> ${member.phone}</p>
    </div>
  `;
}

document.querySelector("#deleteBtn").addEventListener("click", () => {
  if (!member || !confirm(`${member.name} 결제 정보를 삭제할까요? 금액은 0원으로 변경됩니다.`)) return;
  member.paymentAmount = 0;
  member.paymentStatus = "미납";
  window.FitStorage.saveMembers(members);
  window.location.href = "./list.html";
});
