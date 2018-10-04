import React from 'react';
import GifTile from '../GifTile/GifTile.js';

const TileContainer = (props) => {
  const gifTiles = props.gifs.map((image) => {
    return <GifTile key={image.id} gif={image} />
  });

  return (
    <ul>{gifTiles}</ul>
  );
};

export default TileContainer;
