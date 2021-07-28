
var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios').default;

//Express Setup
const app = express();

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());

//Middleware
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Initialize bundled dist folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


//Meaningcloud API Call
dotenv.config();
const apiKey = process.env.API_KEY;


app.post ('/meaning', async (req,res) => {
    console.log (req.body.formText);

     const response = await axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&url=${req.body.formText}&lang=en`);

    try {
        const data = await response.data;

        console.log(data);
        res.send(data);
    }
    catch(error){
        console.log("Problem with API Request::::", error)
    };
})


// //Test Mock API from Starter code
// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })