const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const { read } = require('fs');
const { response } = require('express');
const { ValidationError } = require('webpack');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8081
const API_KEY = process.env.MEAN_CLOUD_API_KEY;
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'



app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        var url = req.body.url;

        //Fetching Meaning Cloud API using fetch node package
        const result = await fetch(`${BASE_API_URL}?key=${API_KEY}&url=${req.body.url}&lang=en`);

        // Recieving data result in json
        const data = await result.json();
        console.log('server data: ', data);


        // Sample struct including only the Wanted information from data array
        const sample =
        {
            text: data.sentence_list[0].text ,
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony
        }

       res.send(sample);

        console.log(sample);

    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;
