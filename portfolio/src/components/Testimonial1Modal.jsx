import React, { useState } from "react";
import Testimonial1 from "./Testimonial1";

const Testimonial1Modal = ({ onClose }) => {
  const [shouldClose, setShouldClose] = useState(false);

  // When background is clicked, trigger close animation in modal
  const handleRequestClose = () => {
    setShouldClose(true);
  };

  // Only unmount after animation
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
        <Testimonial1 onClose={handleModalClose} shouldClose={shouldClose} />
      </div>
    </div>
  );
};

export default Testimonial1Modal;
