import React, { useState, useEffect } from 'react';
import './App.css';
// * My Component
import Card from './components/Card';

function App() {
  const [images, setImages] = useState([]);
  let auxArray = [];

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=5')
      .then(response => response.json())
      .then(jsonThing => setImages(jsonThing));
  }, []);

  const addUrls = () => {
    images.forEach(ele => {
      auxArray.push(ele.download_url);
    });
    return auxArray;
  };

  return (
    <div className='App'>
      <Card
        images={addUrls()}
        title='Picsum API'
        description='Images from Picsum API'
      />
    </div>
  );
}

export default App;
