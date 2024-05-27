document.getElementById('summarization_button').addEventListener('click', function() {
    const textToSummarize = document.getElementById('textToSummarize').value;

    // Replace 'https://api.example.com/textsum' with the actual TextSum API endpoint
    const apiUrl = 'https://c16e-176-28-255-1.ngrok-free.app/nutshell/summarize/';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ document: textToSummarize })
    })
    .then(response => response.json())
    .then(data => {
        // Assuming the response has a 'summary' field with the summarized text
        document.getElementById('summaryResult').innerText = data.summary;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
