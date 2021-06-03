const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SIZE = 6;

const generateshortUrL = url => {
  console.log("Generating short URL");
  let shortUrl = '';
  for(let i = 0; i<SIZE; i++){
    let randomIdx = Math.floor(Math.random() * characters.length);
    shortUrl += characters[randomIdx]
  }
  return shortUrl;
  
}

module.exports = generateshortUrL;