const apiKey = '69285212f4e840e8ad18e67b5df2811e';

chrome.tabs.onUpdated.addListener(
    function(request, sender, sendResponse) {
        console.log(request.html);

        fetch('https://utassist.openai.azure.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: request.html
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.choices[0].text);
        })
        .catch(error => console.error(error));
    }
)
