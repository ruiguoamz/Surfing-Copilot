console.log('This is a popup!');

const sendMessageId = document.getElementById("sendMessageId");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        console.log("button clicked");
        console.log(document);
    }
}

function handleInstalled(details) {
    console.log(details.reason);
    browser.tabs.create({
      url: "https://www.baidu.com"
    });
}

chrome.runtime.onInstalled.addListener(handleInstalled);