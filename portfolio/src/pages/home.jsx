import { useState, useEffect, useRef } from "react";
import img from "../assets/Dandy's-image.jpg";
import Typewriter from "typewriter-effect";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Listen for screen resize to auto-close hamburger if switching to desktop nav
  useEffect(() => {
    function handleResize() {
      // Tailwind's 'sm' is 640px, so use 640 as the breakpoint
      if (window.innerWidth >= 640 && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  const startY = useRef(null);
  // Gesture handlers for swipe up to close
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (startY.current === null) return;
    const endY = e.changedTouches[0].clientY;
    if (startY.current - endY > 80) {
      // 80px threshold for swipe up
      setIsOpen(false);
    }
    startY.current = null;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <div className="bg-[#111111] min-h-screen px-3 py-4  sm:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-4 overflow-x-auto ">
        <div className="gradient-scroll bg-[#222222] h-auto lg:my-5 rounded-xl overflow-hidden select-none">
          <div
            className=" my-2 mx-3 w-[70px] h-8 flex items-center bg-[#111111] rounded-full px-2 cursor-pointer transition-colors duration-300"
            onClick={() => setToggle((prev) => !prev)}
          >
            <div
              className={`bg-[#292929] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                toggle ? "translate-x-[30px]" : ""
              }`}
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-10 pb-6">
            <div className="bg-gradient-to-br from-[#1f1f1f] via-[#444444] to-[#202a44] max-w-[160px] w-[160px] justify-center items-center flex rounded-md py-3 ">
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center pt-3 ">
              <p className="text-[white]">
                DaveTechInnovation <br /> ( Dandy )
              </p>
              <button className="text-white px-3 py-1 my-2 bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a] rounded-lg border-4 border-gray-600   hover:!bg-transparent  duration-500 transition-transition  hover:scale-90 ">
                Full Stack Web Developer
              </button>
            </div>
          </div>
          <hr className="pb-10 mx-2" />
          <div className="flex flex-col justify-center items-center">
            <div className=" lg-custom:grid lg-custom:grid-cols-3 mx-5 overflow-x-auto lg-customm:grid-cols-2  lg-custom:gap-9 lg-custom:mx-5 flex flex-col gap-4 pb-10">
              <div className="flex  gap-3 items-center">
                <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#mailGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="mailGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1f1f1f" />
                        <stop offset="50%" stopColor="#444444" />
                        <stop offset="100%" stopColor="#202a44" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>

                <div className="text-white">
                  <p className="flex flex-col">
                    <span>Email:</span>
                    <a
                      href="mailto:dandaveudoka@gmail.com"
                      className="underline"
                    >
                      dandaveudoka@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#smartphoneGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="smartphoneGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1f1f1f" />
                        <stop offset="50%" stopColor="#444444" />
                        <stop offset="100%" stopColor="#202a44" />
                      </linearGradient>
                    </defs>
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>

                <div className="text-white">
                  <p className="flex flex-col">
                    <span>Phone:</span>
                    <a href="tel:+2349168071385" className="underline">
                      +234 916 807 138 5
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
                  <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#1f1f1f] via-[#444444] to-[#202a44]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"srk
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient
                          id="whatsappGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#1f1f1f" />
                          <stop offset="50%" stopColor="#444444" />
                          <stop offset="100%" stopColor="#202a44" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#whatsappGradient)"
                        d="M20.52 3.48A11.84 11.84 0 0012 0a11.91 11.91 0 00-10.34 18l-1.6 5.84 6-1.57A11.85 11.85 0 0012 24a11.9 11.9 0 0011.87-12 11.83 11.83 0 00-3.35-8.52zM12 22a9.94 9.94 0 01-5.09-1.39l-.36-.22-3.56.92.95-3.47-.23-.36A9.92 9.92 0 1122 12 10 10 0 0112 22zm5.46-7.11c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.11 8.11 0 01-2.39-1.48 9 9 0 01-1.67-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2 2 0 00.3-.51 1.3 1.3 0 00-.06-.52c-.07-.15-.67-1.61-.92-2.2s-.5-.51-.67-.52h-.57a1.1 1.1 0 00-.8.37A3.34 3.34 0 006 9.44c0 2 .9 3.91 2.1 5.34a11.77 11.77 0 005.45 3.84c.76.23 1.35.36 1.81.23a3 3 0 002-.72 2.47 2.47 0 001.05-1.83c.08-.31.08-.57 0-.63s-.27-.15-.56-.3z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-white">
                  <p className="flex flex-col">
                    <span>Whatsapp:</span>
                    <a
                      href="https://api.whatsapp.com/send?phone=2349168071385&text=Hello%20Dandy%2C%20I%20got%20your%20number%20from%20your%20portfolio%20and%20would%20like%20to%20connect%20I%20am%20_________."
                      target="_blank"
                      class="underline"
                    >
                      Lets Chat On Whatsapp
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#instagramGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="instagramGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1f1f1f" />
                        <stop offset="50%" stopColor="#444444" />
                        <stop offset="100%" stopColor="#202a44" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>

                <div className="text-white">
                  <p className="flex flex-col">
                    <span>Instagram:</span>
                    <a
                      href="https://www.instagram.com/davetech_innovation/"
                      className="underline"
                    >
                      @Davetechinnovation
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#smartphoneGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <defs>
                      <linearGradient
                        id="smartphoneGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#1f1f1f" />
                        <stop offset="50%" stopColor="#444444" />
                        <stop offset="100%" stopColor="#202a44" />
                      </linearGradient>
                    </defs>
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>

                <div className="text-white">
                  <p className="flex flex-col">
                    <span>Twitter:</span>
                    <a href="https://x.com/Davetechinnov" className="underline">
                      @Davetechinnovation
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#222222] min-h-screen rounded-xl">
          <div className="">
            {/* Hamburger Button */}
            <div className="flex flex-col justify-end items-end px-8 translate-y-5 text-white ">
              <button
                className="sm:hidden "
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <nav className=" sm:flex hidden max-w-[450px] w-[450px] bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  flex-col items-end  px-8 rounded-bl-3xl ml-auto">
              <ul className="text-white flex gap-10  py-3 px-4">
                <li className="cursor-pointer text-white hover:underline ">
                  Home
                </li>
                <li className="cursor-pointer text-white hover:underline ">
                  Resume
                </li>
                <li className="cursor-pointer text-white hover:underline ">
                  Portfolio
                </li>
                <li className="cursor-pointer text-white hover:underline ">
                  Contact
                </li>
              </ul>
            </nav>

            {/* Overlay to block background interaction when menu is open */}
            {isOpen && (
              <div
                className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-30 transition-opacity duration-300"
                style={{ pointerEvents: "auto" }}
              />
            )}
            <div
              className={`fixed -top-14 left-0 w-full h-[100dvh]   rounded-b-full bg-gradient-to-br from-black via-[#1b1b1b] to-[#101420]  z-40 transition-transform duration-500 ease-in-out ${
                isOpen
                  ? "translate-y-0"
                  : "-translate-y-full pointer-events-none"
              }`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <p
                onClick={() => setIsOpen(!isOpen)}
                className=" text-white flex flex-col items-end translate-y-20 px-14 "
              >
                <X size={28} />
              </p>
              <div className="flex flex-col h-full items-center justify-center">
                <ul className="text-white text-xl space-y-8">
                  <li className="cursor-pointer hover:underline">Home</li>
                  <li className="cursor-pointer hover:underline">Resume</li>
                  <li className="cursor-pointer hover:underline">Portfolio</li>
                  <li className="cursor-pointer hover:underline">Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sm:px-9 px-5 text-white pt-6 overflow-y-auto custom-scrollbar">
            <p className="sm:text-[30px] text-[28px] italic pb-3 ">
              Welcome to My Abode
            </p>
            <p className="text-[20px] font-serif pb-2 ">
              Hello <span class="wave-hand">👋</span>
              <span class="wave-hand">👋</span> I'm Dandy,
            </p>

            <div className="text-white">
              <div className="sm:text-[20px] text-[18px] font-serif py- min-h-[125px] ">
                <Typewriter
                  options={{
                    loop: true,
                    delay: 50,
                    deleteSpeed: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      // Step 0: Type intro, pause, never delete intro until the end
                      .typeString(`A Full-Stack Web Developer,`)
                      .pauseFor(1000)

                      // Add a small line break or margin for the next lines
                      .typeString(`<br/><br/>`)

                      // Step 1: Skilled in, Frontend Web Development,
                      .typeString(
                        `<span class='font-serif'>Skilled in,</span><br/><span>Frontend Web Development,</span>`
                      )
                      .pauseFor(2000)

                      // Step 2: Delete Frontend Web Development only
                      .deleteChars("Frontend Web Development,".length)
                      .typeString("Backend Web Development,")
                      .pauseFor(2000)

                      // Step 3: Delete Skilled in, + Backend Web Development,
                      .deleteChars(
                        "Backend Web Development,".length +
                          "Skilled in,".length +
                          1
                      )
                      // +1 for line break count adjustment

                      // Step 4: Master in, HTML,
                      .typeString(
                        `<span class=''>Master in,</span><br/><span>HTML,</span>`
                      )
                      .pauseFor(1500)

                      // Step 5: Delete HTML only (keep "Master in,")
                      .deleteChars("HTML,".length)

                      // Step 6: Write CSS,
                      .typeString("Tailwind CSS,")
                      .pauseFor(1500)

                      // Step 7: Delete Tailwind CSS only
                      .deleteChars("Tailwind CSS,".length)

                      // Step 8: Write JavaScript.
                      .typeString("JavaScript.")
                      .pauseFor(2000)

                      // Step 9: Delete JavaScript. + delete "Master in," too before next phrase
                      .deleteChars(
                        "JavaScript.".length + "Master in,".length + 1
                      )
                      // +1 for line break after "Master in,"

                      // Step 10: Type the final phrase
                      .typeString(
                        "And Lastly,<br/>Well Knowledged in React Framework."
                      )
                      .pauseFor(2500)

                      // Step 11: Delete everything including intro and all typed content
                      .deleteAll()
                      .pauseFor(500)

                      // Step 12: Restart cycle
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="text-white sm:px-8 px-3 py-5  ">
              <div class=" rounded-lg bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a]">
                <div class=" rounded-lg py-4 ">
                  <p className="pb-2 text-[30px] ">💡 About Me</p>
                  <p className="sm:px-9 px-2  tracking-wide ">
                    I’m Dandy, a passionate Full-Stack Web Developer with a
                    creative eye and a problem-solving mindset. I specialize in
                    building clean, responsive, and interactive web experiences
                    using tools like React, Tailwind CSS, and Node.js. From
                    crafting beautiful frontend interfaces to setting up solid
                    backend foundations. <br /> <br />I love bringing ideas to
                    life through code. I began my coding journey at 16, and ever
                    since, I’ve been constantly pushing boundaries — learning,
                    experimenting, and improving every day. I pay attention to
                    detail, care about user experience, and enjoy creating
                    solutions that are fast, functional, and visually
                    compelling. Whether it’s building a Landing page, a web app,
                    or diving into new tech stacks, I’m always excited to take
                    on new challenges and grow as a developer. Let’s create
                    something amazing together 🚀
                  </p>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
