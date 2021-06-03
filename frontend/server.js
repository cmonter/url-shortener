const express = require('express');
const path = require('path');
const fetch = require("node-fetch");
const PORT = 3000;

const app = express();

app.use(express.static("public"))

app.get('/:shortUrl', async (req, res) => {
  let shorturl = req.params.shortUrl;
  try{
    const response = await fetch(`http://localhost:4000/${shorturl}`, {
      method: 'GET',
	    headers: {'Content-type': 'application/json; charset=UTF-8'}
    });
    const data = await response.json();
    if(data.error) res.sendFile(path.join(__dirname, 'public/error.html'));
    else res.redirect(data.url);
  }catch(error){
    console.log("ERROR: ", error);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend server Running in http://localhost:${PORT}`);
});