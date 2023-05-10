let html = document.documentElement.outerHTML;

console.log(html);

chrome.runtime.sendMessage({html: html});
chrome.tabs.sendMesage({html:html});
