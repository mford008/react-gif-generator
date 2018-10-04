import React, { Component } from 'react';
import GifTile from '../GifTile/GifTile.js';

const TileContainer = (props) => {
  const gifTiles = this.props.gifs.data.map((image) => {
    return <GifTile key={image.id} gif={image} />
  });

  return (
    <ul>{ gifTiles }</ul>
  );
};

export default TileContainer;
