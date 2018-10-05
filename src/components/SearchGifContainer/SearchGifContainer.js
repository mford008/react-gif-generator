import React from 'react';
import Gif from '../Gif/Gif.js';

const SearchGifContainer = (props) => {
    const searchedGifs = props.searchedGifs.map((image) => {
        return <Gif key={image.id}
                        gif={image} />
    });

    return (
        <div className="gif-container">{searchedGifs}</div>
    );
};

export default SearchGifContainer;
