// HTTP Requests are made up of 4 parts:
// - API Endpoint (URL)
// - HTTP Method (assumed as GET)
// - HTTP Headers (we don't need to provide these in this case)
// - Body Data (we don't need to provide any here)

// API Endpoint
let url = "http://api.open-notify.org/astros.json";

function turnIntoJSObject(response) {
  // Wait until the response data has been completely loaded
  // Translate it from JSON into a JS Object
  return response.json();
}

function handleData(info) {
  let paragraph = document.querySelector("p");
  let message = "There are " + info.number + " people in space";
  paragraph.innerText = message;

  let list = document.querySelector("ul");

  info.people.forEach(function (person) {
    let item = document.createElement("li");
    item.innerText = person.name;
    list.appendChild(item);
  });
}

// Make the AJAX request
fetch(url).then(turnIntoJSObject).then(handleData);
