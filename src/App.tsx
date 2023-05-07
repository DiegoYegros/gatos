import React, { useEffect, useState } from 'react';
import './App.css';
import Img from './Img.tsx';
import './tailwind.output.css';

function App() {
  const [imageSrc, setImageSrc] = useState('https://cataas.com/cat/says/hello');

  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, [imageSrc]);

  return (
    <div className="App min-h-screen relative"> 
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <header className="App-header min-h-full">
        <Img imageSrc={imageSrc} setImageSrc={setImageSrc}/>
      </header>
    </div>
  );
}

export default App;
