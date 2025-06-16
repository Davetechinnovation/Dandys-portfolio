import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import img from "../assets/Dandy-image.jpg";
import img1 from "../assets/dandy-chioma.jpg";
import img2 from "../assets/dandy-james.jpg";
import img3 from "../assets/Tdandy-tol.jpg";
import img4 from "../assets/dandy-angela.jpg";
import img5 from "../assets/dandy-samuel.jpg";
import img6 from "../assets/dandy-amada.jpg";
import Typewriter from "typewriter-effect";
import { Link, Menu, X } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { MdPhoneIphone } from "react-icons/md";
import { FaBug } from "react-icons/fa";
import Testimonial1Modal from "../components/Testimonial1Modal";
import Testimonial2Modal from "../components/Testimonial2Modal";
import Testimonial3Modal from "../components/Testimonial3Modal";
import Testimonial4Modal from "../components/Testimonial4Modal";
import Testimonial5Modal from "../components/Testimonial5Modal";
import Testimonial6Modal from "../components/Testimonial6Modal";

import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const testimonials = [
  {
    name: "——Chioma N.",
    text: "“Working with Dandy was a game changer. He took our outdated website and transformed it into a sleek, modern platform. His eye for design and ....",
    img: img1,
    imgAlt: "Chioma N. testimonial photo",
    modal: "testimonial1",
    aria: "Testimonial from Chioma N.",
  },
  {
    name: "——James A.",
    text: "“Dandy was incredibly responsive and professional throughout the entire project. He delivered a beautiful, functional site ahead of ....",
    img: img2,
    imgAlt: "James A. testimonial photo",
    modal: "testimonial2",
    aria: "Testimonial from James A.",
  },
  {
    name: "——Tolu E.",
    text: "“From the first meeting to final launch, Dandy understood our goals and exceeded expectations. The frontend is clean, fast, and ....”",
    img: img3,
    imgAlt: "Tolu E. testimonial photo",
    modal: "testimonial3",
    aria: "Testimonial from Tolu E.",
  },
  {
    name: "—— Angela M",
    text: '"I needed a developer who could bring my vision to life, and Dandy did exactly that. His ability to combine creativity with technical skill is top ....”',
    img: img4,
    imgAlt: "Angela M. testimonial photo",
    modal: "testimonial4",
    aria: "Testimonial from Angela M.",
  },
  {
    name: "—— Samuel D.",
    text: "“Dandy’s work ethic and talent are unmatched. He communicated clearly, met every milestone, and delivered a product we’re proud ....”",
    img: img5,
    imgAlt: "Samuel D. testimonial photo",
    modal: "testimonial5",
    aria: "Testimonial from Samuel D.",
  },
  {
    name: "——Amanda Blake.",
    text: '"Dandy turned our scattered ideas into a sleek, responsive app with precision and creativity. His design sense, clear communication, and ....”',
    img: img6,
    imgAlt: "Amanda Blake testimonial photo",
    modal: "testimonial6",
    aria: "Testimonial from Amanda Blake.",
  },
];

const Home = () => {
  // Navbar scroll effect: top-5 when scrolling up, top-0 when scrolling down
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const [showTestimonialModal, setShowTestimonialModal] = useState(null);
  const [selectedPage, setSelectedPage] = useState("home");
  // Navbar scroll effect: top-5 when scrolling up, top-0 when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 0); // true if scrolled, false if at top

      if (currentScrollY < lastScrollY.current) {
        setIsScrollingUp(true); // Scrolling up
      } else if (currentScrollY > lastScrollY.current) {
        setIsScrollingUp(false); // Scrolling down
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Testimonial Carousel Scroll State ---
  const testimonialScrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll arrow visibility
  const updateTestimonialScroll = () => {
    const container = testimonialScrollRef.current;
    if (!container) return;
    // Allow for small rounding errors
    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth - 5
    );
  };

  useEffect(() => {
    const container = testimonialScrollRef.current;
    if (!container) return;
    updateTestimonialScroll();
    container.addEventListener("scroll", updateTestimonialScroll);
    window.addEventListener("resize", updateTestimonialScroll);
    return () => {
      container.removeEventListener("scroll", updateTestimonialScroll);
      window.removeEventListener("resize", updateTestimonialScroll);
    };
  }, []);
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

  // Disable background scroll and pointer events when modal is open
  useEffect(() => {
    if (showTestimonialModal) {
      document.body.classList.add("overflow-hidden");
    } else if (!isOpen) {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showTestimonialModal, isOpen]);

  return (
    <>
      <Helmet>
        <title>Dandy — Full Stack Web Developer | Hire Me</title>

        <meta
          name="description"
          content="Dandy (Dandave Udoka) is a full stack developer skilled in React, Node.js, JavaScript & Tailwind CSS. Available for freelance and remote work."
        />

        <meta
          name="keywords"
          content="Full stack developer Nigeria, React developer, Node.js expert, Tailwind CSS, JavaScript developer, Nigerian web developer, frontend developer, backend developer, hire developer Nigeria, freelance developer, remote web developer, software engineer Nigeria, Lagos, Abuja, Port Harcourt, Enugu modern web development, responsive design, bug fixing, API development, web performance, developer portfolio"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dandys-portfolio.vercel.app/" />
        <meta name="author" content="Dandy, Dandave Udoka" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Dandy | Full Stack Web Developer" />
        <meta
          property="og:description"
          content="Dandy (Dandave Udoka) is a full stack developer skilled in React, Node.js, JavaScript & Tailwind CSS. Available for freelance and remote work."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dandys-portfolio.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://dandys-portfolio.vercel.app/Dandy-image.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dandy | Full Stack Web Developer" />
        <meta
          name="twitter:description"
          content="Dandy (Dandave Udoka) is a full stack developer skilled in React, Node.js, JavaScript & Tailwind CSS. Available for freelance and remote work."
        />
        <meta
          name="twitter:image"
          content="https://dandys-portfolio.vercel.app/Dandy-image.jpg"
        />
        {/* Optional Twitter handles */}
        <meta name="twitter:site" content="@Davetechinnov" />
        <meta name="twitter:creator" content="@Davetechinnov" />
      </Helmet>

      {/* JSON-LD Structured Data */}
      <Helmet>
        {/* WebSite Structured Data */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Dandy's Portfolio",
      "url": "https://dandys-portfolio.vercel.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dandys-portfolio.vercel.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    `}
        </script>

        {/* WebPage Structured Data */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dandy — Full Stack Web Developer",
      "url": "https://dandys-portfolio.vercel.app",
      "description": "Dandy (Dandave Udoka) is a full stack developer skilled in React, Node.js, JavaScript & Tailwind CSS. Available for freelance and remote work.",
      "author": {
        "@type": "Person",
        "name": "Dandy (Dandave Udoka)"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Freelance"
      }
    }
    `}
        </script>
      </Helmet>

      <div
        className={`bg-[#111111] min-h-screen px-3 py-4 sm:p-5 min-w-[300px] overflow-x-auto${
          showTestimonialModal ? " pointer-events-none select-none" : ""
        }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-4 overflow-x-auto${
            showTestimonialModal ? " pointer-events-none select-none" : ""
          }`}
        >
          <div className="gradient-scroll bg-[#222222] lg-custommm:max-h-[125vh] lg-custommm:overflow-y-auto lg:my-5 rounded-xl overflow-hidde select-none">
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
            <header className="flex flex-col justify-center items-center pt-6 pb-6">
              <div className="bg-gradient-to-br from-[#1f1f1f] via-[#444444] to-[#202a44] max-w-[160px] w-[160px] justify-center items-center flex rounded-md py-3 ">
                <div className="w-[130px] h-[130px] rounded-full overflow-hidden">
                  <img
                    src={img}
                    alt="Dandy Udoka, Full Stack Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center pt-3 ">
                <h1 className="text-[white] text-xl font-bold">
                  DaveTechInnovation <br /> ( Dandy )
                </h1>
                <button className="text-white px-3 py-1 my-2 bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a] rounded-lg border-4 border-gray-600 hover:!bg-transparent duration-500 transition-transition hover:scale-90 ">
                  Full Stack Web Developer
                </button>
              </div>
            </header>
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
                        viewBox="0 0 24 24"
                        srk
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
                        rel="noopener noreferrer"
                        className="underline"
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
                        target="_blank"
                        rel="noopener noreferrer"
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
                      <a
                        href="https://x.com/Davetechinnov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        @Davetechinnovation
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main
            className="bg-[#222222] lg-custommm:max-h-[125vh] sm-customm:max-h-[130vh] lg-custommm:overflow-y-auto rounded-xl scrollbar-hide"
            tabIndex="-1"
          >
            <div>
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

              <nav
                className={`sm:flex lg:fixed right-5 ${
                  isScrollingUp ? "top-5" : "top-0"
                } hidden max-w-[450px] w-[450px] bg-gradient-to-br ${
                  hasScrolled
                    ? "from-[#000000] via-[#1b1b1b] to-[#101420] shadow-lg shadow-black " // light + shadow
                    : "from-[#000000] via-[#1b1b1b] to-[#101420]" // dark, no shadow
                } flex-col items-end px-8 rounded-bl-3xl ml-auto`}
              >
                <ul className="text-white flex gap-10  py-3 px-4">
                  <li
                    className={`cursor-pointer text-white hover:underline ${
                      selectedPage === "home" ? "underline" : ""
                    }`}
                    onClick={() => setSelectedPage("home")}
                  >
                    Home
                  </li>
                  <li
                    className={`cursor-pointer text-white hover:underline ${
                      selectedPage === "resume" ? "underline" : ""
                    }`}
                    onClick={() => setSelectedPage("resume")}
                  >
                    Resume
                  </li>
                  <li
                    className={`cursor-pointer text-white hover:underline ${
                      selectedPage === "portfolio" ? "underline" : ""
                    }`}
                    onClick={() => setSelectedPage("portfolio")}
                  >
                    Portfolio
                  </li>
                  <li
                    className={`cursor-pointer text-white hover:underline ${
                      selectedPage === "contact" ? "underline" : ""
                    }`}
                    onClick={() => setSelectedPage("contact")}
                  >
                    Contact
                  </li>
                </ul>
              </nav>

              {/* Overlay to block background interaction when menu is open */}
              {isOpen && (
                <div
                  className="fixed inset-0 w-full h-full bg-black bg-opacity-50 z-30 transition-opacity duration-300"
                  style={{ pointerEvents: "auto" }}
                  onClick={() => setIsOpen(false)}
                  onTouchStart={() => setIsOpen(false)}
                />
              )}
              <div
                className={`fixed -top-20 left-0 w-full h-[100dvh]   rounded-b-full bg-gradient-to-br from-black via-[#1b1b1b] to-[#101420]  z-40 transition-transform duration-500 ease-in-out ${
                  isOpen
                    ? "translate-y-0"
                    : "-translate-y-full pointer-events-none"
                }`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className=" text-white flex flex-col items-end translate-y-24 px-10 "
                >
                  <X size={28} />
                </p>
                <div className="flex flex-col h-full items-center justify-center">
                  <ul className="text-white text-xl space-y-8">
                    <li
                      className={`cursor-pointer hover:underline ${
                        selectedPage === "home" ? "underline" : ""
                      }`}
                      onClick={() => {
                        setSelectedPage("home");
                        setIsOpen(false);
                      }}
                    >
                      Home
                    </li>
                    <li
                      className={`cursor-pointer hover:underline ${
                        selectedPage === "resume" ? "underline" : ""
                      }`}
                      onClick={() => {
                        setSelectedPage("resume");
                        setIsOpen(false);
                      }}
                    >
                      Resume
                    </li>
                    <li
                      className={`cursor-pointer hover:underline ${
                        selectedPage === "portfolio" ? "underline" : ""
                      }`}
                      onClick={() => {
                        setSelectedPage("portfolio");
                        setIsOpen(false);
                      }}
                    >
                      Portfolio
                    </li>
                    <li
                      className={`cursor-pointer hover:underline ${
                        selectedPage === "contact" ? "underline" : ""
                      }`}
                      onClick={() => {
                        setSelectedPage("contact");
                        setIsOpen(false);
                      }}
                    >
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-10">
              {selectedPage === "home" && (
                <div>
                  <div className="sm:px-9 px-5  text-white pt-6 overflow-y-auto custom-scrollbar">
                    <p className="sm:text-[30px] text-[28px] italic pb-3 font-extrabold ">
                      Welcome to My Abode
                    </p>
                    <p className="text-[22px] font-serif pb-2 ">
                      Hello <span className="wave-hand">👋</span>
                      <span className="wave-hand">👋</span> I'm Dandy,
                    </p>
                    <p className="text-[20px] font-serif ">
                      A Full-Stack Web Developer,
                    </p>

                    <div className="text-white">
                      <div className="sm:text-[20px] text-[18px] font-serif pt-[30px] min-h-[115px] ">
                        <Typewriter
                          options={{
                            loop: true,
                            delay: 50,
                            deleteSpeed: 40,
                          }}
                          onInit={(typewriter) => {
                            typewriter

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

                  <div className="text-white sm:px-8 px-3 py-5  ">
                    <section
                      className="rounded-lg bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a]"
                      aria-labelledby="about-heading"
                    >
                      <div className="rounded-lg py-4 ">
                        <h2
                          id="about-heading"
                          className="pb-2 text-[30px] font-extrabold "
                        >
                          💡 About Me
                        </h2>
                        <p className="sm:px-9 px-2  tracking-wide ">
                          I’m Dandy, a passionate Full-Stack Web Developer with
                          a creative eye and a problem-solving mindset. I
                          specialize in building clean, responsive, and
                          interactive web experiences using tools like React,
                          Tailwind CSS, and Node.js. From crafting beautiful
                          frontend interfaces to setting up solid backend
                          foundations. <br /> <br />I love bringing ideas to
                          life through code. I began my coding journey at 16,
                          and ever since, I’ve been constantly pushing
                          boundaries — learning, experimenting, and improving
                          every day. I pay attention to detail, care about user
                          experience, and enjoy creating solutions that are
                          fast, functional, and visually compelling. Whether
                          it’s building a Landing page, a web app, or diving
                          into new tech stacks, I’m always excited to take on
                          new challenges and grow as a developer. Let’s create
                          something amazing together 🚀
                        </p>
                      </div>
                    </section>

                    <section className="py-3" aria-labelledby="whatido-heading">
                      <h2
                        id="whatido-heading"
                        className="py-4  text-[25px] font-extrabold "
                      >
                        What I Do
                      </h2>
                      <div>
                        <div className="grid sm-custom:grid-cols-2 grid-cols-1 gap-5  ">
                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <FaLaptopCode
                                size={30}
                                title="Full-Stack Development"
                              />
                            </p>
                            <p>
                              <span className="sm:text-[20px] text-[18px] py-3 font-medium">
                                Full-Stack Development
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I build complete web solutions from scratch —
                                combining React for dynamic user interfaces with
                                Node.js and Express on the backend to ensure
                                speed, scalability, and stability.
                              </span>
                            </p>
                          </div>

                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <FiMonitor className="text-2xl text-white" />
                            </p>
                            <p>
                              <span className="text-[20px] py-2 font-medium">
                                Frontend Design & Engineering
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I set up robust server-side logic, manage user
                                authentication, and connect to databases using
                                tools like Express.js and several Databases. I
                                ensure seamless data flow and app reliability.
                              </span>
                            </p>
                          </div>

                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <TbApi
                                size={30}
                                title="Backend Logic & API Integration"
                              />
                            </p>
                            <p>
                              <span className="text-[20px] py-2 font-medium">
                                Backend Logic & API Integration
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I set up robust server-side logic, manage user
                                authentication, and connect to databases using
                                tools like Express.js and SQLite. I ensure
                                seamless data flow and app reliability.
                              </span>
                            </p>
                          </div>

                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <FiTool className="text-2xl text-white" />
                            </p>
                            <p>
                              <span className="text-[20px] py-2 font-medium">
                                Developer Tools & Utilities best icon
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I create helpful tools like formatters,
                                encoders, converters, and manyother tools to
                                support other developers and improve
                                productivity — always built with speed,
                                simplicity, and functionality in mind.
                              </span>
                            </p>
                          </div>

                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <MdPhoneIphone className="text-2xl text-white" />
                            </p>
                            <p>
                              <span className="text-[20px] py-2 font-medium">
                                Mobile-First Responsive Design
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I design with a mobile-first mindset, ensuring
                                every interface feels natural, responsive, and
                                smooth on smaller screens. From layouts to touch
                                elements, I make sure users on smartphones and
                                tablets enjoy a seamless experience.
                              </span>
                            </p>
                          </div>

                          <div className=" flex  gap-3 border-l-2 border-l-[#3b3b3b] px-3 py-4 leading-relaxed border-r-2 rounded-l-lg rounded-r-lg border-r-[#0f172a] shadow-lg shadow-[#3b3b3b] ">
                            <p className=" translate-y-1 ">
                              <FaBug className="text-2xl text-white" />
                            </p>
                            <p>
                              <span className="text-[20px] py-2 font-medium">
                                Problem Solving & Debugging
                              </span>
                              <br />
                              <span className="sm:text-[16px] text-[14px] tracking-widest ">
                                I enjoy digging into challenges, breaking down
                                complex bugs, and finding efficient solutions.
                                Whether it’s a frontend glitch or backend issue,
                                I approach every problem with logic, patience,
                                and a goal to make things better and cleaner.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section aria-labelledby="testimonials-heading">
                      <h2
                        id="testimonials-heading"
                        className="text-[25px] font-bold py-3 "
                      >
                        Testimonials
                      </h2>
                      <div>
                        <div className="relative">
                          {/* Gradient edges */}
                          <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-2 z-10"
                            style={{
                              background:
                                "linear-gradient(to right, #222 80%, transparent)",
                            }}
                          />
                          <div
                            className="pointer-events-none absolute right-0 top-0 h-full w-2 z-10"
                            style={{
                              background:
                                "linear-gradient(to left, #222 80%, transparent)",
                            }}
                          />
                          {/* Scroll Arrows */}
                          {/* Left Arrow: only show if canScrollLeft */}
                          {canScrollLeft && (
                            <button
                              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#222] bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-lg transition disabled:opacity-30"
                              style={{ display: "flex" }}
                              aria-label="Scroll testimonials left"
                              onClick={() => {
                                const container = testimonialScrollRef.current;
                                if (!container) return;
                                const card = container.children[0];
                                if (card) {
                                  const scrollAmount = card.offsetWidth + 20; // 20px gap
                                  container.scrollBy({
                                    left: -scrollAmount,
                                    behavior: "smooth",
                                  });
                                }
                              }}
                              disabled={!canScrollLeft}
                            >
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="15 18 9 12 15 6" />
                              </svg>
                            </button>
                          )}
                          {/* Right Arrow: only show if canScrollRight */}
                          {canScrollRight && (
                            <button
                              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#222] bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 shadow-lg transition disabled:opacity-30"
                              style={{ display: "flex" }}
                              aria-label="Scroll testimonials right"
                              onClick={() => {
                                const container = testimonialScrollRef.current;
                                if (!container) return;
                                const card = container.children[0];
                                if (card) {
                                  const scrollAmount = card.offsetWidth + 20; // 20px gap
                                  container.scrollBy({
                                    left: scrollAmount,
                                    behavior: "smooth",
                                  });
                                }
                              }}
                              disabled={!canScrollRight}
                            >
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </button>
                          )}
                          <div
                            ref={testimonialScrollRef}
                            id="testimonial-scroll"
                            className="flex pl-4  flex-nowrap gap-5 py-5 overflow-x-auto gradient-scroll scrollbar-hide relative"
                            style={{ scrollBehavior: "smooth" }}
                          >
                            {testimonials.map((testimonial, idx) => (
                              <article
                                key={idx}
                                className="bg-[#2c2c2c] shadow-lg shadow-[#0f0f0f] cursor-pointer min-w-[300px] sm:min-w-[400px] max-w-[400px] w-full px-3  rounded-lg relative  "
                                onClick={() =>
                                  setShowTestimonialModal(testimonial.modal)
                                }
                                aria-label={testimonial.aria}
                              >
                                <p className="translate-x-[90px] font-semibold text-[17px] pt-3 pb-1 ">
                                  {testimonial.name}
                                </p>
                                <p className="pb-2 italic ">
                                  {testimonial.text}
                                </p>
                                <div className="bg-[#1f1f1f] max-w-[70px] py-1 px-3 rounded-lg absolute -top-5 left-5 ">
                                  <div className="flex justify-center items-center  ">
                                    <img
                                      src={testimonial.img}
                                      alt={testimonial.imgAlt}
                                      className="max-w-[60px] w-[50px] h-[50px] rounded-full object-cover "
                                    />
                                  </div>
                                </div>
                              </article>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              )}
              {selectedPage === "resume" && <Resume />}
              {selectedPage === "portfolio" && <Portfolio />}
              {selectedPage === "contact" && <Contact />}
            </div>
            {/* Testimonial Modal with animated close */}
            {showTestimonialModal === "testimonial1" && (
              <Testimonial1Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}
            {showTestimonialModal === "testimonial2" && (
              <Testimonial2Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}

            {showTestimonialModal === "testimonial3" && (
              <Testimonial3Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}

            {showTestimonialModal === "testimonial4" && (
              <Testimonial4Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}

            {showTestimonialModal === "testimonial5" && (
              <Testimonial5Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}

            {showTestimonialModal === "testimonial6" && (
              <Testimonial6Modal
                onClose={() => setShowTestimonialModal(null)}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
