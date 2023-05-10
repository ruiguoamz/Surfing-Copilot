let html = document.documentElement.outerHTML;

chrome.runtime.sendMessage({html: html});