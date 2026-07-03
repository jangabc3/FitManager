window.FitHeader.renderAdminShell("memberships");

const members = window.FitStorage.loadMembers();

document.querySelector("#membershipTableBody").innerHTML = members
  .map((member) => {
    const status = window.FitUtils.getMemberStatus(member);

    return `
      <tr>
        <td><strong>${member.name}</strong><p class="subtle membership-note">${member.phone}</p></td>
        <td>${member.membershipType}</td>
        <td>${member.startDate}</td>
        <td>${member.endDate}</td>
        <td>${window.FitUtils.getDaysLeftText(member.endDate)}</td>
        <td><span class="status-pill ${status.className}">${status.label}</span></td>
        <td>
          <div class="actions">
            <a class="mini-button" href="./detail.html?id=${member.id}">상세</a>
            <a class="mini-button" href="./edit.html?id=${member.id}">수정</a>
          </div>
        </td>
      </tr>
    `;
  })
  .join("");
