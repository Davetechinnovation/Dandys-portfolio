import React, { useEffect, useRef } from "react";
import img4 from "../assets/dandy-amada.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial6 = ({ onClose, shouldClose }) => {
  const modalRef = useRef(null);
  const [isLeaving, setIsLeaving] = React.useState(false);

  // Animate in on mount
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.classList.add("animate-rotate-in");
    }
    return () => {
      // Clean up animation classes if needed
      if (modalRef.current) {
        modalRef.current.classList.remove("animate-rotate-in");
      }
    };
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setIsLeaving(true);
    if (modalRef.current) {
      modalRef.current.classList.remove("animate-rotate-in");
      modalRef.current.classList.add("animate-rotate-out");
    }
    setTimeout(() => {
      if (onClose) onClose();
    }, 500); // match animation duration
  };

  // If shouldClose is triggered from parent, play animation then call onClose
  React.useEffect(() => {
    if (shouldClose && !isLeaving) {
      handleClose();
    }
    // eslint-disable-next-line
  }, [shouldClose]);

  return (
    <div className="relative flex justify-center px-2 items-center">
      <div
        ref={modalRef}
        className="bg-[#1f1f1f] max-w-[500px] w-full py-4 px-3 rounded-lg relative"
      >
        <div className="flex gap-3 items-start ">
          <div className="flex flex-col items-center justify-end ">
            <div className="bg-[#383838] max-w-[70px] py-1 px-3 rounded-md  ">
              <div className="flex justify-center items-center  ">
                <img
                  src={img4}
                  alt=""
                  className="max-w-[60px] w-[50px] h-[50px] rounded-full object-cover "
                />
              </div>
            </div>
            <div className="pt-5">
              <FaQuoteLeft className="text-white sm:text-2xl text-xl " />
            </div>
          </div>

          <div className="text-white">
            <p className="font-semibold sm:text-[19px] text-[17px] flex gap-2 justify-between items-center ">
              <span>—Amanda Blake, Product Manager at TechNova Solutions</span>
              {onClose && (
                <span
                  onClick={handleClose}
                  className="bg-[#383838] px-3 rounded-lg cursor-pointer hover:bg-[#333333] transition-all duration-300"
                  aria-label="Close"
                >
                  X
                </span>
              )}
            </p>
            <p className="py-1 text-[gray] text-[15px] sm:text-[17px] italic  ">
              31 march, 2025
            </p>
            <p className="text-[15px] sm:text-[17px] italic ">
              “Dandy turned our scattered ideas into a sleek, responsive app
              with precision and creativity. His design sense, clear
              communication, and technical skill are rare — a standout developer
              I’d work with again in a heartbeat.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial6;
