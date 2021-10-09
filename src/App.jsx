import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import axios from "axios";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);

  // Fetch data
  async function fetchData() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setDestinations(data);
      setIsLoading(false);
    } catch (error) {
      if (error) {
        setisError(true);
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //
  function handleClick(id) {
    setDestinations(
      destinations.filter((destination) => id !== destination.id)
    );
  }

  // Load loading message
  if (isLoading) {
    return (
      <div className="app">
        <h3>Loading...</h3>
      </div>
    );
  }

  // Load Error Message
  if (isError) {
    return (
      <div className="app">
        <h3>Something's wrong. Please try again</h3>
      </div>
    );
  }

  // Load refresh button
  if (destinations.length === 0) {
    return (
      <div className="app">
        <h3>No tours left</h3>
        <button className="success" onClick={fetchData}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main className="app">
      <Heading />
      {destinations.map((destination) => {
        return (
          <Card
            key={destination.id}
            data={destination}
            handleClick={handleClick}
          />
        );
      })}
    </main>
  );
}

export default App;
