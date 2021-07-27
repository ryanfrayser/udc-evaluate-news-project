
var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const mockAPIResponse = require('./meaningcloudAPI.js')

//Middleware
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());

//Express Setup
const app = express()

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

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

