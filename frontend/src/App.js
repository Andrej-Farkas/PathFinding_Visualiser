import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Component mounted. Fetching data...");
    axios.get('http://127.0.0.1:5000/pathfinding')
      .then(response => {
        console.log("Data fetched:", response.data);
        setData(response.data.result);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    console.log("Data state updated:", data);
  }, [data]);

  return (
    <div className="App">
      <h1>Pathfinding Visualizer</h1>
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;
