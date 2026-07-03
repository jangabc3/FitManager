window.FitHeader.renderAdminShell("payments");

let members = window.FitStorage.loadMembers();

function renderPayments() {
  document.querySelector("#paymentTableBody").innerHTML = members
    .map((member) => {
      const paymentClass = member.paymentStatus === "미납" ? "status-bad" : "status-good";

      return `
        <tr>
          <td><strong>${member.name}</strong><p class="subtle payment-note">${member.phone}</p></td>
          <td>${member.membershipType}</td>
          <td>${window.FitUtils.formatCurrency(member.paymentAmount)}</td>
          <td><span class="status-pill ${paymentClass}">${member.paymentStatus}</span></td>
          <td>
            <div class="actions">
              <a class="mini-button" href="./detail.html?id=${member.id}">상세</a>
              <a class="mini-button" href="./edit.html?id=${member.id}">수정</a>
              <button class="mini-button success" data-id="${member.id}" type="button">상태 변경</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (!button) return;

  const member = members.find((item) => item.id === button.dataset.id);
  if (!member) return;

  member.paymentStatus = member.paymentStatus === "미납" ? "완료" : "미납";
  window.FitStorage.saveMembers(members);
  renderPayments();
});

renderPayments();
