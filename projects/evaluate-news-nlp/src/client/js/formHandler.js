function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/analyze', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            articleURL: formText,
        })
    }).then(response => response.json())
    .then(data => {

        console.log("response from /analyze", data)

        document.getElementById('score_tag').innerHTML = "score_tag: " + data.score_tag
        document.getElementById('agreement').innerHTML = "agreement: " + data.agreement
        document.getElementById('subjectivity').innerHTML = "subjectivity: " + data.subjectivity
        document.getElementById('confidence').innerHTML = "confidence: " + data.confidence
        document.getElementById('irony').innerHTML = "irony: " + data.irony
    });
    //.then(res => res.json())
    //.then(function(res) {
    //    document.getElementById('results').innerHTML = res.main.temp
    //})
}

export { handleSubmit }
