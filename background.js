chrome.tabs.onUpdated.addListener(
    function(request, sender, sendResponse) {
        console.log(request.html);
    }
)
