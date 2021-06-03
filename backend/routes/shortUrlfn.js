const validUrl = require('valid-url');
const Link = require('../models/link');
const { generateshortUrL, appendOrigin } = require('../utils');

const shortUrlRoute = async (req, res) => {
  let origin = req.get('origin');
  try{
    if(!validUrl.isUri(req.body.url)) throw new Error ('Invalid URL');
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
    console.log("Error: ", error);
    res.send(error);
  }
};

module.exports = shortUrlRoute;