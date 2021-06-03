const express = require('express');
const mongoose = require('mongoose');
const { generateshortUrL, appendOrigin } = require('./utils');
const DB_URL = 'mongodb://127.0.0.1:4444/shortlinks';
const Link = require('./models/link');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.post('/shorturl', async (req, res) => {
  let origin = req.get('origin');
  try{
    const existingURL = await Link.find({url: req.body.url})
    if(existingURL.length > 0){
      let result = existingURL[0]._doc;
      let data = appendOrigin(origin, result)
      res.send(data);
    }
    else{
      let shortUrl = generateshortUrL(req.body.url); //verify if not duplicated
      const link = new Link({ url: req.body.url, shortUrl });
      const result = await link.save();
      let data = appendOrigin(origin, result);
      res.send(data);
    }
  }catch(error){
    res.send(error);
  }

});

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Server Running in http://localhost:${PORT}`);
  });
})
.catch(error => res.send(error))


//shorturl?url=https://google.com