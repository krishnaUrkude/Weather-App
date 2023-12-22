const apiKey="4049c658d82741e8a2defd1340c29c85";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchInput=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");


const WeatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl + city+ `&appid=${apiKey}`);
    // ye tab kam karega jab user input galat ho wrong name of the city

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    }
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" km/hr.";

    // codition ke according image change honga;

    if(data.weather[0].main=="Clouds"){
            WeatherIcon.src="images/clouds.png";
    }
   else if(data.weather[0].main=="Clear"){
            WeatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
            WeatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
            WeatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
            WeatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=="Smoke"){
            WeatherIcon.src="images/snow.png";
    };

    document.querySelector(".weather").style.display="block";
    
}
SearchBtn.addEventListener('click',()=>{
checkWeather(SearchInput.value);
});
