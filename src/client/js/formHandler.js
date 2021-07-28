const axios = require('axios');

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('website').value

    //Check for valid URL
    Client.runAPI(formText)

    console.log("::: Valid URL -> Form Submitted :::")

    axios.post('/meaning', {formText})

    .then (function(res) {res.json();
    })

    .then (function(res) {
        document.getElementById('results').innerHTML = res.agreement;
    })
}
