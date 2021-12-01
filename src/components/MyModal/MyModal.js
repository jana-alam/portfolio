import React from "react";
import ReactModal from "react-modal";
import "./MyModal.css";

const MyModal = ({ isOpen, setIsOpen, singleProject }) => {
  const handleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={handleModalClose}>
        <div className="w-10/12 mx-auto">
          <img src={singleProject.img1} alt="" className="w-4/12" />
        </div>
        <button onClick={handleModalClose}>See MODAL</button>
      </ReactModal>
    </div>
  );
};

export default MyModal;
