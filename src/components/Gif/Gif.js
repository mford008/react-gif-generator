import React from 'react';
import Button from '../Button/Button.js';
import './Gif.css';

const Gif = ({gif, onGifSelect, onSlackButtonClick}) => {
  return (
    <li className='gif-tile'>
      <img className='gif-frame' src={gif.images.fixed_width.url} alt={gif.title} />
      <Button onClick={() => onGifSelect(gif)}>Details</Button>
      <Button onClick={() => onSlackButtonClick(gif)}>Share on Slack</Button>
    </li>
  )
};

export default Gif;
