import React, { useState } from "react";
import Testimonial4 from "./Testimonial4";

const Testimonial4Modal = ({ onClose }) => {
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
        <Testimonial4 onClose={handleModalClose} shouldClose={shouldClose} />
      </div>
    </div>
  );
};

export default Testimonial4Modal;
