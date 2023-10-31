
// const apiKey = "ff29eba9c21982317cb7142a083fd325";
// const getWeatherButton = document.getElementById ("getWeather");
// const locationInput = document.getElementById("location");
// const cityElement = document.getElementById("city");
// const temperatureElement = document.getElementById("temperature");
// const resultContainer = document.getElementById("result");
// const descriptionElement = document.getElementById("description")

// getWeatherButton.addEventListener('click', () => {
//   const location = locationInput.value;

//   fetch(`https://api.openweathermap.org/data/2.5/weather/weather?q=${location}&appid=$(apikey)`)
//   .then((response) => response.json())
//   .then((data) => {
//     cityElement.textContent = `${data.name}`;
//     temperatureElement.textContent =`Temperature: ${Math.round(data.main.temp - 273.15)}°c `;
//     descriptionElement.textContent = `Description: ${data.weather[0].description}`;
//     resultContainer.style.display = "block";
//   })
//     .catch((error) => {
//       console.error("Error fetching data:" + error);
//       alert("Error fetching weather data. Please check the location and try again")
//     })
      
// })

const apiKey = "ff29eba9c21982317cb7142a083fd325";
const getWeatherButton = document.getElementById("getWeather");
const locationInput = document.getElementById("location");
const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const resultContainer = document.getElementById("result");
const descriptionElement = document.getElementById("description");

getWeatherButton.addEventListener('click', () => {
  const location = locationInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => {
    cityElement.textContent = `${data.name}`;
    temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)} °C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    resultContainer.style.display = "block";
  })
    .catch((error) => {
      console.error("Error fetching data: " + error);
      alert("Error fetching weather data. Please check the location and try again");
    })



});