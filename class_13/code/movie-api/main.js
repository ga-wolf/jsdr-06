// Make an AJAX Request
// - API Endpoint

// What are the query parameters we need to provide?
//  - apikey (required)
//  - t (optional - title of the movie)
//  - plot=full (optional - full plot of the movie)

function waitForData(response) {
  return response.json();
}

function handleData(data) {
  let poster = data.Poster;
  let title = data.Title;
  let plot = data.Plot;

  let resultsDiv = document.querySelector("#results");
  let markup = `
    <h2>${title}</h2>
    <img src="${poster}">
    <p>${plot}</p>
  `;
  resultsDiv.innerHTML = markup;
}

function requestMovieDetails(title) {
  const url = "http://www.omdbapi.com/";
  const apiKey = "40557eb1";
  const queryString = `?plot=full&t=${title}&apikey=${apiKey}`;
  const apiEndpoint = url + queryString;
  fetch(apiEndpoint).then(waitForData).then(handleData);
}

requestMovieDetails("Jaws");

let form = document.querySelector("form");

function onSubmit(event) {
  // Stop the page from refreshing
  event.preventDefault();
  // Find the DOM Node
  let input = document.querySelector("input");
  // Get what the user has typed in
  let title = input.value;
  // Make the AJAX request
  requestMovieDetails(title);
}

form.addEventListener("submit", onSubmit);
