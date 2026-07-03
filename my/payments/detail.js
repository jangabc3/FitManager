window.FitHeader.renderCustomerShell("my-payments");

const member = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const detail = document.querySelector("#paymentDetail");

if (!member) {
  detail.innerHTML = `<p class="subtle">결제 정보를 찾을 수 없습니다.</p>`;
} else {
  const paymentClass = member.paymentStatus === "미납" ? "status-bad" : "status-good";
  detail.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">${member.membershipType}</p>
        <h2>${window.FitUtils.formatCurrency(member.paymentAmount)}</h2>
      </div>
      <span class="status-pill ${paymentClass}">${member.paymentStatus}</span>
    </div>
    <div class="payment-detail">
      <p><strong>회원:</strong> ${member.name}</p>
      <p><strong>연락처:</strong> ${member.phone}</p>
      <p><strong>회원권 만료일:</strong> ${member.endDate}</p>
    </div>
  `;
}
