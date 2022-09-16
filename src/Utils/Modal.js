import React from 'react';
import ReactDOM from 'react-dom';
const portalElement = document.getElementById('portal');
const Backdrop = (props) => {
  return (
    <div
      className='fixed top-0 left-0 w-[100%] h-[100vh] bg-[#00000079] z-20'
      onClick={props.onClose}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className='modal fixed top-[5vh] right-[5%] bg-white rounded-2xl p-4 shadow-2xl z-40'>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
