chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"]
    });
  }
});
