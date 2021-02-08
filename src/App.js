import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "PWA-Birdifier"
  }, []);

  return (
    <div className="site-wrapper">
      <h1>Heello</h1>
    </div>
  );
}

export default App;
