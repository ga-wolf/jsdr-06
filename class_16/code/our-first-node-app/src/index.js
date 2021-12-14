const express = require("express");
// Very similar to our import statement
// Can you import the default export from express
// And make it accessible here

const cors = require("cors");

const app = express();
app.use(cors());

// The biggest thing that the backend does is:
// - Receives an HTTP Request
// - Sends back an HTTP Response

// If there is a GET request to /
//  Call this callback function

// GET localhost:3000/
app.get("/", function (req, res) {
  res.send("THIS WORKED");
});

// GET localhost:3000/about
app.get("/about", function (req, res) {
  // What do we need to send back?
  let data = { page: "About Us", content: "..." };
  res.json(data);
});

// GET localhost:3000/profile/ANYTHING
app.get("/profile/:username", function (req, res) {
  // Get the dynamic piece of info from the URL
  let username = req.params.username;
  // Get the record from the database that that corresponds to
  // Send it back to the browser as JSON
  let profileData = {
    name: username,
    followers: 100 * Math.random(),
    following: 200 * Math.random(),
  };
  res.json(profileData);
});

app.listen(3000);

// TO ACCESS IT FROM THE FRONT END:

// function waitForJson(res) {
//   return res.json();
// }

// function logData(data) {
//   console.log(data);
// }

// fetch("http://localhost:3000/profile/ben").then(waitForJson).then(logData);
