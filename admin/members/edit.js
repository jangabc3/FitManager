window.FitHeader.renderAdminShell("members");

const id = window.FitUtils.getQueryParam("id");
let members = window.FitStorage.loadMembers();
const member = members.find((item) => item.id === id);

if (!member) {
  alert("회원 정보를 찾을 수 없습니다.");
  window.location.href = "./list.html";
}

for (const key of ["name", "phone", "membershipType", "startDate", "endDate", "paymentAmount", "paymentStatus"]) {
  document.querySelector(`#${key}`).value = member[key];
}

document.querySelector("#memberForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const updatedMember = {
    ...member,
    name: document.querySelector("#name").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    membershipType: document.querySelector("#membershipType").value.trim(),
    startDate: document.querySelector("#startDate").value,
    endDate: document.querySelector("#endDate").value,
    paymentAmount: Number(document.querySelector("#paymentAmount").value),
    paymentStatus: document.querySelector("#paymentStatus").value,
  };

  members = members.map((item) => (item.id === member.id ? updatedMember : item));
  window.FitStorage.saveMembers(members);
  window.location.href = `./detail.html?id=${member.id}`;
});
