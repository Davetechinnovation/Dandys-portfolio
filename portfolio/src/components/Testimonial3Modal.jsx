import React, { useState } from "react";
import Testimonial3 from "./Testimonial3";

const Testimonial3Modal = ({ onClose }) => {
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
      <div onClick={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()}>
        <Testimonial3 onClose={handleModalClose} shouldClose={shouldClose} />
      </div>
    </div>
  );
};

export default Testimonial3Modal;
