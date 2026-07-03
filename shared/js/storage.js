window.FitStorage = (() => {
  const STORAGE_KEY = "fitdesk-members";

  function loadMembers() {
    const savedMembers = localStorage.getItem(STORAGE_KEY);

    if (savedMembers) {
      return JSON.parse(savedMembers);
    }

    saveMembers(window.FitSampleData);
    return window.FitSampleData;
  }

  function saveMembers(members) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
  }

  function createMemberId() {
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }

    return `member-${Date.now()}`;
  }

  return {
    STORAGE_KEY,
    loadMembers,
    saveMembers,
    createMemberId,
  };
})();
