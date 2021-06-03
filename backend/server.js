const express = require('express');
const mongoose = require('mongoose');
const validUrl = require('valid-url');
const { generateshortUrL, appendOrigin } = require('./utils');
const DB_URL = 'mongodb://127.0.0.1:4444/shortlinks';
const Link = require('./models/link');
const cors = require('cors');
const shortUrlRoute = require('./shortUrlfn');

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.post('/shorturl', shortUrlRoute);

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Server Running in http://localhost:${PORT}`);
  });
})
.catch(error => res.send(error))


//shorturl?url=https://google.com