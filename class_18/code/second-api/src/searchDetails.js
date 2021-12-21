import React from "react";

function SearchDetails(props) {
  let { data, location } = props;

  console.log(data);

  let markup = <h3>No data to show</h3>;
  if (data === "loading") {
    markup = <h3>Currently speaking to OpenWeatherMap</h3>;
  } else if (data !== null && data.cod === "404") {
    markup = <h3>Something went wrong...</h3>;
  } else if (data !== null) {
    markup = (
      <div>
        <h3>{location}</h3>
        <p>The current temperature is {data.main.temp}</p>
        <p>The minimum temperature is {data.main.temp_min}</p>
        <p>The maximum temperature is {data.main.temp_max}</p>
      </div>
    );
  }

  return markup;
}

export default SearchDetails;
