let userInput = document.querySelector('input');
let search = document.querySelector('button');
let result = document.querySelector('#result');


async function getWeather() {
    const weatherSearch = userInput.value.trim();
    const apiKey = ``;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=${apiKey}&units=metric`;
    
    if(weatherSearch === ""){
        result.innerHTML = "Please type a Place";
        return;
    }
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("city not found");
        }

        const data = await response.json(); 

        result.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    }

    catch(error){
        result.innerHTML = `${error.message}`
    }
}

search.addEventListener("click", getWeather);