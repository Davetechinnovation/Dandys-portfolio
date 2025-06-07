import React, { useState } from "react";
import Testimonial5 from "./Testimonial5";

const Testimonial5Modal = ({ onClose }) => {
  const [shouldClose, setShouldClose] = useState(false);

  const handleRequestClose = () => {
    setShouldClose(true);
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 pointer-events-auto select-auto"
      onClick={handleRequestClose}
      onTouchStart={handleRequestClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <Testimonial5 onClose={handleModalClose} shouldClose={shouldClose} />
      </div>
    </div>
  );
};

export default Testimonial5Modal;
