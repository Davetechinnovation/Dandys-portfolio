import React, { useEffect, useRef } from "react";
import img1 from "../assets/dandy-chioma.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial1 = ({ onClose }) => {
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

  return (
    <div className="relative">
      <div className="flex justify-center items-center min-h-screen fixed top-0 bottom-0 left-0 mx-2  right-0 z-50">
        <div
          ref={modalRef}
          className="bg-[#1f1f1f] max-w-[500px] w-[500px] py-4 px-3 rounded-lg relative"
        >
          <div className="flex gap-3 items-start ">
            <div className="flex flex-col items-center justify-end ">
              <div className="bg-[#383838] max-w-[70px] py-1 px-3 rounded-md  ">
                <div className="flex justify-center items-center  ">
                  <img
                    src={img1}
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
                <span>—Chioma N. Startup Founder</span>
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
              <p className="py-1 text-[gray] text-[15px] sm:text-[17px] italic  ">15 October, 2024</p>
              <p className="text-[15px] sm:text-[17px] italic ">
                “Working with Dandy was a game changer. He took our outdated
                website and transformed it into a sleek, modern platform. His
                eye for design and attention to performance made all the
                difference. Highly recommended!”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
