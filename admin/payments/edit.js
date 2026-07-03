window.FitHeader.renderAdminShell("payments");

const id = window.FitUtils.getQueryParam("id");
const members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);

if (!member) {
  alert("결제 정보를 찾을 수 없습니다.");
  window.location.href = "./list.html";
}

document.querySelector("#paymentAmount").value = member.paymentAmount;
document.querySelector("#paymentStatus").value = member.paymentStatus;

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  member.paymentAmount = Number(document.querySelector("#paymentAmount").value);
  member.paymentStatus = document.querySelector("#paymentStatus").value;
  window.FitStorage.saveMembers(members);
  window.location.href = `./detail.html?id=${member.id}`;
});
