window.FitUtils = (() => {
  function getTodayIso() {
    return new Date().toISOString().slice(0, 10);
  }

  function getDaysUntil(endDate) {
    const today = new Date(getTodayIso());
    const end = new Date(endDate);

    return Math.ceil((end - today) / (1000 * 60 * 60 * 24));
  }

  function formatCurrency(amount) {
    return `${new Intl.NumberFormat("ko-KR").format(Number(amount))}원`;
  }

  function getRecentAttendance(member) {
    if (!member.attendanceDates || member.attendanceDates.length === 0) {
      return "없음";
    }

    return [...member.attendanceDates].sort().at(-1);
  }

  function getMemberStatus(member) {
    if (member.paymentStatus === "미납") {
      return { label: "미납", className: "status-bad" };
    }

    const daysLeft = getDaysUntil(member.endDate);

    if (daysLeft < 0) {
      return { label: "만료", className: "status-bad" };
    }

    if (daysLeft <= 7) {
      return { label: "만료 예정", className: "status-warn" };
    }

    return { label: "이용 중", className: "status-good" };
  }

  function getDaysLeftText(endDate) {
    const daysLeft = getDaysUntil(endDate);

    if (daysLeft < 0) {
      return `${Math.abs(daysLeft)}일 지남`;
    }

    return `${daysLeft}일 남음`;
  }

  function getCurrentMember(members) {
    return members[0] || null;
  }

  function getMemberById(id) {
    return window.FitStorage.loadMembers().find((member) => member.id === id) || null;
  }

  function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  return {
    getTodayIso,
    getDaysUntil,
    formatCurrency,
    getRecentAttendance,
    getMemberStatus,
    getDaysLeftText,
    getCurrentMember,
    getMemberById,
    getQueryParam,
  };
})();
