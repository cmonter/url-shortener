const Link = require('../models/link');

const getShortUrl = async (req, res) => {
  let shortURL = req.params.shortUrl;
  const existingURL = await Link.find({shortUrl: shortURL});
  if(existingURL.length > 0){
    let url = existingURL[0].url
    res.json({url: url});
  }else{
    res.status(404);
    res.json({error: "Short URL not found"});
  }
};

module.exports = getShortUrl;