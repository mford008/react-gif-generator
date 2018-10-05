import React, {Component} from 'react';
import Modal from 'react-modal';
// import './GifModal.css';

const GifModal = (props) => {
  if (!props.selection) {
    return <div></div>;
  }
  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className='gif-modal'>
        <img src={ props.selection.images.original.url } />
        <p>Source: <a href={ props.selection.source }>{ props.selection.source }</a></p>
        <p>Title: { props.selection.title }</p>
        <p>User: {props.selection.username}</p>
        <p>Rating: { props.selection.rating }</p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
