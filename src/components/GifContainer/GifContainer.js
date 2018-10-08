import React from 'react';
import Gif from '../Gif/Gif.js';
import '../GifContainer/GifContainer.css';

const GifContainer = (props) => {
    const gifs = props.gifs.map((image) => {
        return <Gif key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect}
                    onSlackButtonClick={props.onSlackButtonClick} />
    });

    return (
        <div className="gif-container">{gifs}</div>
    );
};

export default GifContainer;
