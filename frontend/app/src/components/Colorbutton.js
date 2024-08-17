// src/App.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import './css/global.css';

const colorCombinations = [
  // {
  //   // '--primary-color': '#ccd6fb', //same as background
  //   // '--secondary-color': '#b8c1e2', //darker color used for cards
  //   // '--lighter-color':'#e0e6fd',
  //   // '--font-heading-color': '#003300',
  //   // '--background-color': '#ccd6fb',
  //   // '--text-color': '#292b32',
  //   // '--border-radius':'0px'
  // },
  {
    '--primary-color': '#FFFFFF',
    '--secondary-color': '#FFFFFF',
    '--lighter-color':'#F5F5F5',
    '--accent-color': '#e67e22',
    '--background-color': '#FFFFFF',
    '--text-color': 'black',
    '--border-radius':'10px',
    '--button-color':'whitesmoke',
    '--semester-button':'white'
  },
  {
    '--primary-color': '#606060',
    '--secondary-color': '#606060',
    '--lighter-color':'#F5F5F5',
    '--accent-color': '#e67e22',
    '--background-color': '#808080',
    '--text-color': 'white',
    '--border-radius':'10px',
    '--button-color':'whitesmoke',
    '--semester-button':'#808080'
  },
];
const applyColors = (colorIndex) => {
  const newColors = colorCombinations[colorIndex];
  for (const [key, value] of Object.entries(newColors)) {
    document.documentElement.style.setProperty(key, value);
  }
};

const Color = () => {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const savedColorIndex = localStorage.getItem('colorIndex');
    if (savedColorIndex !== null) {
      setColorIndex(Number(savedColorIndex));
      applyColors(Number(savedColorIndex));
    }
  }, []);


  const toggleColors = () => {
    const nextIndex = (colorIndex + 1) % colorCombinations.length;
    setColorIndex(nextIndex);
    applyColors(nextIndex);
    localStorage.setItem('colorIndex', nextIndex);
  };


  return (
    
      <button className="button" onClick={toggleColors}>
        Tog
      </button>
  );
};

export default Color;
