window.FitHeader.renderCustomerShell("my-payments");

const member = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const panel = document.querySelector("#paymentPanel");

if (!member) {
  panel.innerHTML = `<p class="subtle">결제 정보를 찾을 수 없습니다.</p>`;
} else {
  const paymentClass = member.paymentStatus === "미납" ? "status-bad" : "status-good";
  panel.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">Payment</p>
        <h2>${member.name}님의 결제 정보</h2>
      </div>
      <span class="status-pill ${paymentClass}">${member.paymentStatus}</span>
    </div>
    <div class="payment-detail">
      <p><strong>회원권:</strong> ${member.membershipType}</p>
      <p><strong>결제금액:</strong> ${window.FitUtils.formatCurrency(member.paymentAmount)}</p>
    </div>
    <p><a class="mini-button" href="./detail.html?id=${member.id}">상세 보기</a></p>
  `;
}
