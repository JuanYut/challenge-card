import React, { useState, useEffect } from 'react';
import './App.css';
// * My Components
import Card from './components/Card';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=3')
      .then(response => response.json())
      .then(jsonThing => setImages(jsonThing));
  }, []);

  return (
    <div className='App'>
      <Card
        images={images}
        title='Picsum API'
        description='Images from Picsum API'
      />
    </div>
  );
}

export default App;
