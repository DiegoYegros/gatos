import React, { useEffect, useState } from 'react';


interface ImgProps{
    imageSrc: string;
    setImageSrc: (src: string )=> void;
}
const Img = ({imageSrc, setImageSrc}: ImgProps) => {
  const [refresh, setRefresh] = useState(0);
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    getRandomFact();
  }, []);

  const handleClick = () => {
    const url = 'https://cataas.com/cat/says/hello';
    setRefresh(refresh + 1);
    setImageSrc(url + '?' + refresh);
  };

  const getRandomFact = () => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setRandomFact(data.fact))
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="relative min-h-full">
      <div className="relative z-10">
        <h1>Random Fact about cats</h1>
        <p className="leading-none font-medium hidden lg:block">{randomFact}</p>
        <button onClick={() => { handleClick(); getRandomFact(); }}>Actualizar</button>
      </div>
    </div>
  );
};

export default Img;
