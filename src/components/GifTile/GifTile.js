import React from 'react';
import './GifTile.css';

const GifTile = (image) => {
  return (
    <li className='gif-tile'>
      <img src={image.gif.images.downsized.url} alt={image.gif.title} />
    </li>
  )
};

export default GifTile;
