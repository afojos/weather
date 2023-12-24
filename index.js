const apiKey = "1c7c551054f620b32d97e7b4d5e040de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".container_srch input");
const searchBtn = document.querySelector(".container_srch button");
const weatherIcon = document.querySelector(".weather_icon");


async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&APPID=${apiKey}`)

    if(response.status == 404){
       document.querySelector(".error").style.display = "block";
       document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
   
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';



    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "./img/cloud.png";
    }else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "./img/clear.png";
}else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "./img/rain.png";
}
else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "./img/drizzle.png";
}
else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "./img/mist.png";
}

document.querySelector(".weather").style.display = "block";  
 document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);

})

