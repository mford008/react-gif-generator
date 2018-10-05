import React, {Component} from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
  if (!props.selection) {
    return <div></div>;
  }
  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div>
        <img src={ props.selection.images.original.url } />
        <p>Source: <a href={ props.selection.source }>{ props.selection.source }</a></p>
        <p><strong>Rating:</strong> { props.selection.rating }</p>

        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default GifModal;
