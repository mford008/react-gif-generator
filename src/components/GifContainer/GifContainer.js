import React from 'react';
import Gif from '../Gif/Gif.js';

const GifContainer = (props) => {
    const gifs = props.gifs.map((image) => {
        return <Gif key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect} />
    });

    return (
        <div className="gif-container">{gifs}</div>
    );
};

export default GifContainer;
