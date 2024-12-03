//variaveis e seleção de elementos

//ApiKey = bf282934bf5280625d50394071da8659

const apiKey = "bf282934bf5280625d50394071da8659"
const apicountryIMG = 'https://countryflagsapi.netlify.app/flag/'

const cityInpput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

//elementos para preencher os dados
const cityElement = document.getElementById("name-city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//funções
//esta função faz a requisição para a api do clima e mostra os elementos
const GetWeather = async (city)=>{
    //faz a requisição
    const apicountryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const res = await fetch(apicountryURL)
    const data = await res.json()

    //mostra os elementos
    cityElement.innerText = data.name
    tempElement.innerText = Math.round(data.main.temp); // Arredonda a temperatura em Fahrenheit  
    descElement.innerText = data.weather[0].description//certo
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)//outra api
    countryElement.setAttribute("src", apicountryIMG+data.sys.country+".svg")//outra api
    umidityElement.innerText = `${data.main.humidity}%` //certo
    windElement.innerText = `${data.wind.speed}km/h`//certo
    console.log(countryElement)

}


//eventos
//quando o button é clicado, ele recebe o valor do inpt e chama a função getWeather
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInpput.value 
    GetWeather(city);
});
