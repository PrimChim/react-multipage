import '../assets/css/Root.css';
import { useState, useEffect } from 'react';

const backgroundColors = ['#388d80', '#4583aa', '#bc382e'];

export default function Root() {
  const [bgColor, setBgColor] = useState(backgroundColors[0]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = 'background-color 1.5s ease-in-out';

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % backgroundColors.length;
      const newColor = backgroundColors[index];
      setBgColor(newColor);
      document.body.style.backgroundColor = newColor;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [bgColor]);

  return (
    <div className="main">
      <h1>Publish your passions, your way</h1>
      <p>Create a unique and beautiful blog easily.</p>
      <button className="primary-btn">
        Create Your Blog
      </button>
    </div>
  );
}
