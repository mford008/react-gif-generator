import React from 'react';
import Gif from '../Gif/Gif.js';

const SearchGifContainer = (props) => {
    const searched_gifs = props.searched_gifs.map((image) => {
        return <Gif key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect}
                    onSlackButtonClick={props.onSlackButtonClick} />
    });

    return (
        <div className="gif-container">{searched_gifs}</div>
    );
};

export default SearchGifContainer;
