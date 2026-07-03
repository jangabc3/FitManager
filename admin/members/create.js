window.FitHeader.renderAdminShell("members");

const form = document.querySelector("#memberForm");
document.querySelector("#startDate").value = window.FitUtils.getTodayIso();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const member = {
    id: window.FitStorage.createMemberId(),
    name: document.querySelector("#name").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    membershipType: document.querySelector("#membershipType").value,
    startDate: document.querySelector("#startDate").value,
    endDate: document.querySelector("#endDate").value,
    paymentAmount: Number(document.querySelector("#paymentAmount").value),
    paymentStatus: document.querySelector("#paymentStatus").value,
    attendanceDates: [],
  };

  if (new Date(member.endDate) < new Date(member.startDate)) {
    alert("만료일은 시작일보다 빠를 수 없습니다.");
    return;
  }

  const members = window.FitStorage.loadMembers();
  members.unshift(member);
  window.FitStorage.saveMembers(members);
  window.location.href = "./list.html";
});
