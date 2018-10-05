import React from 'react';
import Button from '../Button/Button.js';
import './Gif.css';

const Gif = ({gif, onGifSelect}) => {
  return (
    <li className='gif-tile'>
      <img className='gif-frame' src={gif.images.downsized.url} alt={gif.title} />
      <Button onClick={() => onGifSelect(gif)}>Details</Button>
      <Button>Share on Slack</Button>
    </li>
  )
};

export default Gif;
