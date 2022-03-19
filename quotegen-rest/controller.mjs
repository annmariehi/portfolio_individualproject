import express from 'express';

//importing module that writes/reads to local text files
import * as fs from 'fs';

//text file that communicates between text_to_speech microservice and this project
let file = './text_to_speech/text_to_read.txt';


//port that runs rest API, passed by proxy to localhost:8000
const PORT = 3000; 
const app = express();
app.use(express.json());

//writes random quote generated on ui side to text_to_read.txt
app.post('/', (req, res) => {
    fs.writeFile(file, req.body.squote, (err) => {
        if (err) {
            console.log('is no working');
            res.status(500).json({ Error: 'Request failed' });
        } else {
            res.status(201);
        }
    });

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})