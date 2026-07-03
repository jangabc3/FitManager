window.FitHeader.renderCustomerShell("my-attendances");

const member = window.FitUtils.getCurrentMember(window.FitStorage.loadMembers());
const list = document.querySelector("#attendanceList");

if (!member || member.attendanceDates.length === 0) {
  list.innerHTML = `<p class="subtle attendance-empty">출석 내역이 없습니다.</p>`;
} else {
  document.querySelector("#attendanceTitle").textContent = `총 ${member.attendanceDates.length}회 출석`;
  list.innerHTML = [...member.attendanceDates]
    .sort()
    .reverse()
    .map((date) => `<article class="list-item"><strong>${date}</strong><span class="subtle">출석 완료</span></article>`)
    .join("");
}
