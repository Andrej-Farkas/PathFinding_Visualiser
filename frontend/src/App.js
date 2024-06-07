import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';  // Import CSS for styling the grid

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

  const renderGrid = () => {
    const grid = Array(5).fill(null).map(() => Array(5).fill(null));

    if (data) {
      data.forEach(point => {
        grid[point[0]][point[1]] = 'path';
      });
    }

    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div key={cellIndex} className={`cell ${cell ? 'path' : ''}`}></div>
        ))}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Pathfinding Visualizer</h1>
      <div className="grid">
        {renderGrid()}
      </div>
    </div>
  );
}

export default App;
