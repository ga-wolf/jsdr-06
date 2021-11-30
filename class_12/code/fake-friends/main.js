let apiEndpoint = "https://randomuser.me/api/?results=50";

function turnResponseIntoObject(res) {
  // We recognise the data that comes back is JSON
  // Translate it from JSON to a JS object once it has been fully loaded
  return res.json();
}

function handleInformation(data) {
  console.log(data);
}

fetch(apiEndpoint).then(turnResponseIntoObject).then(handleInformation);

// 1. Make the API request
// 2. The HTTP response will start coming back
// - turnResponseIntoObject will be called and provided with information
// 3. Once the data has been fully sent back...
//    Translate it from JSON into a JS object
// 4. Once the data has been translated into the JS object
//    Call handleInformation and provide that data
