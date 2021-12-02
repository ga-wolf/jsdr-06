// Make an AJAX Request

// What is the Base URL?

// What are the required query parameters?
// - q (City Name)
// - appid (API Key)

// What are the optional query parameters?
// - units (metric or imperial)

function waitForData(response) {
  return response.json();
}

function handleData(data) {
  let maxTemp = data.main.temp_max;
  let minTemp = data.main.temp_min;
  let currentTemp = data.main.temp;

  let resultsDiv = document.querySelector("#results");
  let markup = `
    <p>Current Temperature: ${currentTemp} degrees</p>
    <p>Minimum Temperature: ${minTemp} degrees</p>
    <p>Maximum Temperature: ${maxTemp} degrees</p>
  `;
  resultsDiv.innerHTML = markup;

  let utter = new SpeechSynthesisUtterance(
    `The current temperature is ${currentTemp}`,
  );
  speechSynthesis.speak(utter);
}

function requestWeather(location) {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "7dfe309afec3ee637c6130947b96f76b";
  const queryString = `?q=${location}&appid=${apiKey}&units=metric`;
  const apiEndpoint = baseUrl + queryString;
  fetch(apiEndpoint).then(waitForData).then(handleData);
}

let form = document.querySelector("form");

function onSubmit(event) {
  event.preventDefault(); // Stop the browser from refreshing
  let input = document.querySelector("input");
  let location = input.value;
  requestWeather(location);
}

form.addEventListener("submit", onSubmit);

function onListenButtonClick() {
  let recognition = new webkitSpeechRecognition();
  recognition.onresult = function (data) {
    let text = data.results[0][0].transcript;
    requestWeather(text);
    recognition.stop();
  };
  recognition.start();
}

let button = document.querySelector("button");
button.addEventListener("click", onListenButtonClick);
