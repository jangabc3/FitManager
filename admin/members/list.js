window.FitHeader.renderAdminShell("members");

let members = window.FitStorage.loadMembers();
const memberSearch = document.querySelector("#memberSearch");

function getFilteredMembers() {
  const keyword = memberSearch.value.trim().toLowerCase();
  if (!keyword) return members;

  return members.filter((member) => member.name.toLowerCase().includes(keyword) || member.phone.toLowerCase().includes(keyword));
}

function renderMembers() {
  const visibleMembers = getFilteredMembers();
  const tableBody = document.querySelector("#memberTableBody");

  if (visibleMembers.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" class="subtle">검색 결과가 없습니다.</td></tr>`;
    return;
  }

  tableBody.innerHTML = visibleMembers
    .map((member) => {
      const status = window.FitUtils.getMemberStatus(member);
      const paymentClass = member.paymentStatus === "미납" ? "status-bad" : "status-good";

      return `
        <tr>
          <td><strong>${member.name}</strong><p class="subtle">${member.phone}</p></td>
          <td>${member.membershipType}</td>
          <td>${member.endDate}</td>
          <td><span class="status-pill ${status.className}">${status.label} · ${window.FitUtils.getDaysLeftText(member.endDate)}</span></td>
          <td><span class="status-pill ${paymentClass}">${member.paymentStatus}</span></td>
          <td>${window.FitUtils.getRecentAttendance(member)}</td>
          <td>
            <div class="actions">
              <a class="mini-button" href="./detail.html?id=${member.id}">상세</a>
              <a class="mini-button" href="./edit.html?id=${member.id}">수정</a>
              <a class="mini-button" href="./attendance.html?id=${member.id}">출석</a>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

memberSearch.addEventListener("input", renderMembers);
renderMembers();
