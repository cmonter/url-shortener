const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SIZE = 6;

const generateshortUrL = url => {
  console.log(`Generating short URL for ${url}`);
  let shortUrl = '';
  for(let i = 0; i<SIZE; i++){
    let randomIdx = Math.floor(Math.random() * characters.length);
    shortUrl += characters[randomIdx]
  }
  return shortUrl;
}

const appendOrigin = (origin, result) => {
  let data = { url: result.url, shortUrl: origin + '/' + result.shortUrl };
  console.log("DATA: ", data);
  return JSON.stringify(data);
}

module.exports = {
  generateshortUrL,
  appendOrigin
};