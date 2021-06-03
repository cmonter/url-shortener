const inputURL = document.getElementById('inputURL');
const btn = document.getElementById('btn');
const shortURLTag = document.getElementById('shortURL');

btn.addEventListener('click', async () => {
  try{
    const response = await fetch(`http://localhost:4000/shorturl`, {
      method: 'POST',
      body: JSON.stringify({
        url: inputURL.value
      }),
	    headers: {'Content-type': 'application/json; charset=UTF-8'}
    });
    const data = await response.json();
    if(data.shortUrl){
      shortURLTag.href = data.url;
      shortURLTag.textContent = data.shortUrl;
    }else{
      console.log(data)
    }
  }catch(error){
    console.log(`Error: ${error}`);
  }
});