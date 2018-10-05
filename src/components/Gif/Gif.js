import React from 'react';
import Button from '../Button/Button.js';
import './Gif.css';

const Gif = (image) => {
  return (
    <li className='gif-tile'>
      <img className='gif-frame' src={image.gif.images.downsized.url} alt={image.gif.title} />
      <Button>Details</Button>
      <Button>Share on Slack</Button>
    </li>
  )
};

export default Gif;
