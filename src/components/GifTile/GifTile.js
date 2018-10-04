import React, { Component } from 'react';
import Button from '../Button/Button.js';

const GifTile = (image) => {
  return (
    <li>
      <img src={image.gif.url} />
    </li>
  )
};


export default GifTile;
