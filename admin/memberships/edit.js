window.FitHeader.renderAdminShell("memberships");

const id = window.FitUtils.getQueryParam("id");
let members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);

if (!member) {
  alert("회원권 정보를 찾을 수 없습니다.");
  window.location.href = "./list.html";
}

document.querySelector("#membershipType").value = member.membershipType;
document.querySelector("#startDate").value = member.startDate;
document.querySelector("#endDate").value = member.endDate;

document.querySelector("#membershipForm").addEventListener("submit", (event) => {
  event.preventDefault();
  member.membershipType = document.querySelector("#membershipType").value.trim();
  member.startDate = document.querySelector("#startDate").value;
  member.endDate = document.querySelector("#endDate").value;
  window.FitStorage.saveMembers(members);
  window.location.href = `./detail.html?id=${member.id}`;
});
