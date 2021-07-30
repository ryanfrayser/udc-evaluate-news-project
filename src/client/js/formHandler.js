const axios = require('axios');

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('website').value

    //Check for valid URL
    Client.validURL(formText)

    console.log("::: Valid URL -> Form Submitted :::")

    axios.post('http://localhost:8081/meaning', {formText})

    .then (function(res) {
        document.getElementById('url').innerHTML = `Site Results for: ${formText}`
        document.getElementById('agreement').innerHTML = `Agreement Type: ${res.data.agreement}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.data.confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.data.subjectivity}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.data.irony}`;
    })
}
