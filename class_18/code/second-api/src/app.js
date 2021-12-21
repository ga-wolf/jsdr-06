import React, { useState } from "react";
import SearchDetails from "./searchDetails";

function App() {
  let [location, setLocation] = useState("");
  let [data, setData] = useState(null);

  function onInputChange(event) {
    setLocation(event.target.value);
  }

  function waitForData(res) {
    return res.json();
  }

  function onFormSubmit(event) {
    event.preventDefault();
    setData("loading");

    let baseUrl = `https://api.openweathermap.org/data/2.5/weather`;
    let apiKey = `7dfe309afec3ee637c6130947b96f76b`;
    let queryParams = `?q=${location}&appid=${apiKey}&units=metric`;
    let endpoint = baseUrl + queryParams;

    fetch(endpoint).then(waitForData).then(setData);
  }

  let students = ["Suguna", "Julia", "Emma", "Rob", "Nancy"];
  let studentMarkup = students.map(function (s) {
    return <li>{s}</li>;
  });

  let dangerousElement = "<h1>THIS IS DANGEROUS</h1>";

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: dangerousElement }}></div>
      <ul>{studentMarkup}</ul>
      <h1>Weather + React</h1>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={onInputChange} value={location} />
        <button>Search</button>
      </form>
      <SearchDetails location={location} data={data} />
    </div>
  );
}

export default App;
