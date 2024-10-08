chrome.declarativeNetRequest.getAvailableStaticRuleCount((count) => {
    document.getElementById("availableinformation").textContent = count;
  });

