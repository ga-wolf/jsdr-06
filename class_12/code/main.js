// HTTP Requests are made up of 4 parts:
// - API Endpoint (URL)
// - HTTP Method
// - HTTP Headers
// - Body Data

let url = "http://api.open-notify.org/astros.json";

let httpOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// Make the AJAX request
fetch(url, httpOptions);
