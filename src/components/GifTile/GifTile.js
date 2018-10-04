import React, { Component } from 'react';
import Button from '../Button/Button.js';
import './GifTile.css';

const GifTile = (image) => {
  return (
    <li className='gif-tile'>
      <img src={image.gif.url} />
    </li>
  )
};

export default GifTile;
