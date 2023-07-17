const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "v9SSdlHMgAQQG9nPIO1sIQ==YHgrhwtyZvIC7nZe";

const options = {
    method : 'GET',
    headers : {
        "X-API-KEY" : apiKey,
    }
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

 async function getJoke(){
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loding...";
    
       const response = await fetch(apiURL, options);
       const data = await response.json();
       btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
    
       jokeEl.innerText = data[0].joke;
    } catch (error) {
        
        jokeEl.innerText = "An error occurred try again later.:";
        btnEl.disabled = false;
        btnEl.innerText = "Try again!";
    }
   
}
btnEl.addEventListener("click", getJoke)