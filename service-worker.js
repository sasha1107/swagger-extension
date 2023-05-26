function clickCategory() {
    document.querySelectorAll('h4').forEach((item) => item.click());
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },

            function: clickCategory,
        });
    }
});
