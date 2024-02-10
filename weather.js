const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '20b7a9f917msh7cc03b3e35cf8c0p150535jsnd7ea8daf4108',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {     // this replaces the value of search
  cityName.innerHTML = city

  fetch(url + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity                   // this replaces the values given by API to the destined place in html
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
  e.preventDefault()                         // this recognises the click on search button and trigger the API
  getWeather(city.value)
})

getWeather("delhi")