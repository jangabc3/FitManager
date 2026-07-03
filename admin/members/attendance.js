window.FitHeader.renderAdminShell("members");

const id = window.FitUtils.getQueryParam("id");
let members = window.FitStorage.loadMembers();
const todayIso = window.FitUtils.getTodayIso();
const panel = document.querySelector("#attendancePanel");

function getMember() {
  return members.find((item) => item.id === id) || members[0];
}

function renderAttendance() {
  const member = getMember();

  if (!member) {
    panel.innerHTML = `<p class="subtle">출석을 관리할 회원이 없습니다.</p>`;
    return;
  }

  const checkedToday = member.attendanceDates.includes(todayIso);
  const attendanceItems = [...member.attendanceDates]
    .sort()
    .reverse()
    .map((date) => `<article class="list-item"><strong>${date}</strong><span class="subtle">출석 완료</span></article>`)
    .join("");

  panel.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">${member.phone}</p>
        <h2>${member.name} 출석 기록</h2>
      </div>
      <button id="toggleAttendanceBtn" class="primary-button" type="button">
        ${checkedToday ? "오늘 출석 취소" : "오늘 출석 등록"}
      </button>
    </div>
    <p class="subtle attendance-date">최근 출석 ${window.FitUtils.getRecentAttendance(member)} · 총 ${member.attendanceDates.length}회</p>
    <div class="stack-list">${attendanceItems || `<p class="subtle">출석 내역이 없습니다.</p>`}</div>
  `;

  document.querySelector("#toggleAttendanceBtn").addEventListener("click", () => {
    if (member.attendanceDates.includes(todayIso)) {
      member.attendanceDates = member.attendanceDates.filter((date) => date !== todayIso);
    } else {
      member.attendanceDates.push(todayIso);
    }

    window.FitStorage.saveMembers(members);
    renderAttendance();
  });
}

renderAttendance();
