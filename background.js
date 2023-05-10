chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.html);
    }
);

chrome.tabs.onUpdated.addListener(
    function(request, sender, sendResponse) {
        console.log(request.html);
    }
)