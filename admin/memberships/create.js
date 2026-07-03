window.FitHeader.renderAdminShell("memberships");

document.querySelector("#startDate").value = window.FitUtils.getTodayIso();

document.querySelector("#membershipForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const members = window.FitStorage.loadMembers();
  members.unshift({
    id: window.FitStorage.createMemberId(),
    name: document.querySelector("#name").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    membershipType: document.querySelector("#membershipType").value.trim(),
    startDate: document.querySelector("#startDate").value,
    endDate: document.querySelector("#endDate").value,
    paymentAmount: Number(document.querySelector("#paymentAmount").value),
    paymentStatus: "완료",
    attendanceDates: [],
  });

  window.FitStorage.saveMembers(members);
  window.location.href = "./list.html";
});
