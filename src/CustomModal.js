import React from 'react';
import Modal from 'react-modal';

// HACK: This feature will hopefully be added to react-modal soon...
  // Note: The componentWillUnmount also needs to be overridden
Modal.prototype.componentDidMount = function () {
  this.node = document.createElement('div');
  this.node.className = 'ReactModalPortal';
  document.querySelector('.modal-container').appendChild(this.node);
  this.renderPortal(this.props);
};


const CustomModal = (props) => (
  <Modal overlayClassName="ReactModal__Overlay" className="ReactModal__Content" {...props} />
);


export default CustomModal;
