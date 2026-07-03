window.FitHeader.renderAdminShell("payments");

const members = window.FitStorage.loadMembers();
const memberSelect = document.querySelector("#memberId");

memberSelect.innerHTML = members.map((member) => `<option value="${member.id}">${member.name} · ${member.membershipType}</option>`).join("");

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const member = members.find((item) => item.id === memberSelect.value);
  if (!member) return;

  member.paymentAmount = Number(document.querySelector("#paymentAmount").value);
  member.paymentStatus = document.querySelector("#paymentStatus").value;
  window.FitStorage.saveMembers(members);
  window.location.href = "./list.html";
});
