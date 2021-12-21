import React, { useState } from "react";

function App(props) {
  let { title } = props;
  let [count, setCount] = useState(0);
  let [search, setSearch] = useState("");
  let [data, setData] = useState(null); // null -> "loading" -> {}

  function onInputChange(event) {
    setSearch(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setData("loading"); // Triggers a re-render

    let baseUrl = `http://omdbapi.com/`;
    let apiKey = `40557eb1`;
    let queryParams = `?apikey=${apiKey}&t=${search}&plot=full`;
    let endpoint = baseUrl + queryParams;

    fetch(endpoint) // Made the AJAX request
      .then(function (res) {
        return res.json(); // Waited for all of the data to come back
      })
      .then(function (res) {
        setData(res); // Updated the state (which triggers a re-render)
      });
  }

  let markup = <h3>There is no data to show</h3>;

  if (data === "loading") {
    markup = <h3>Loading...</h3>;
  } else if (data !== null) {
    let { Title, Plot, Poster } = data;
    markup = (
      <div>
        <h3>{Title}</h3>
        <img src={Poster} />
        <p>{Plot}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={search} />
        <button>Search</button>
      </form>
      {markup}
    </div>
  );
}

export default App;
