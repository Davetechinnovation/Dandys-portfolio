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
import img7 from "../assets/clients-logo.png";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import img8 from "../assets/client-logo1.png";
import img9 from "../assets/client-logo-2.png";
import img10 from "../assets/client-logo-3.jpg";
import img16 from "../assets/neon.jpeg";
import img11 from "../assets/supabase-original.svg";
import img12 from "../assets/sqlite-original-wordmark.svg";
import img13 from "../assets/vscode-original.svg";
import img14 from "../assets/render.png";
import img15 from "../assets/github-original.svg";
import img17 from "../assets/cloudflare-original.svg";
import img18 from "../assets/figma-original.svg";

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
                  className="fixed inset-0 w-full h-full  bg-black bg-opacity-50 z-30 transition-opacity duration-300"
                  style={{ pointerEvents: "auto" }}
                  onClick={() => setIsOpen(false)}
                  onTouchStart={() => setIsOpen(false)}
                />
              )}
              <div
                className={`fixed top-0 left-0 w-full h-[80%] shadow-2xl shadow-black  rounded-b-full bg-gradient-to-br from-black via-[#1b1b1b] to-[#101420]  z-40 transition-transform duration-500 ease-in-out ${
                  isOpen
                    ? "translate-y-0"
                    : "-translate-y-full pointer-events-none"
                }`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <p
                  onClick={() => setIsOpen(!isOpen)}
                  className=" text-white flex flex-col items-end translate-y-16 px-12 "
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
                    <section aria-labelledby="testimonials">
                      <h2
                        id="testimonials"
                        className="text-[25px] font-bold py-3 "
                      >
                        Testimonials
                      </h2>
                      <div>
                        <div className="relative ">
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
                            className="flex flex-nowrap pl-4 w-full gap-5 py-5 overflow-x-auto gradient-scroll scrollbar-hide relative"
                            style={{ scrollBehavior: "smooth" }}
                          >
                            {testimonials.map((testimonial, idx) => (
                              <article
                                key={idx}
                                className="bg-[#2c2c2c] shadow-lg shadow-[#0f0f0f] max-w-[400px] min-w-[300px] cursor-pointer  w-full px-3 rounded-lg relative"
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

                    <section aria-labelledby="Technologies">
                      <div className=" sm:px-2 px-[2px] py-1 border  rounded-l-lg rounded-r-lg  bg-gradient-to-br from-[#1f1f1f6e] via-[#3b3b3b79] to-[#0f172a60]">
                        <h2 className="text-[25px] font-bold  ">
                          Technologies
                        </h2>
                        <div className="flex flex-wrap items-center justify-center  gap-4 py-4 ">
                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <circle cx="64" cy="64" r="64"></circle>
                              <path
                                fill="url(#a)"
                                d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
                              ></path>
                              <path
                                fill="url(#b)"
                                d="M81.778 38.4h8.533v51.2h-8.533z"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="a"
                                  x1="109"
                                  x2="144.5"
                                  y1="116.5"
                                  y2="160.5"
                                  gradientTransform="scale(.71111)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#fff"></stop>
                                  <stop
                                    offset="1"
                                    stop-color="#fff"
                                    stop-opacity="0"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="b"
                                  x1="121"
                                  x2="120.799"
                                  y1="54"
                                  y2="106.875"
                                  gradientTransform="scale(.71111)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#fff"></stop>
                                  <stop
                                    offset="1"
                                    stop-color="#fff"
                                    stop-opacity="0"
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <g fill="#61DAFB">
                                <circle cx="64" cy="64" r="11.4"></circle>
                                <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                              </g>
                            </svg>
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Vite</title>
                              <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
                            </svg>
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="#fff"
                                d="M22.67 47h99.67v73.67H22.67z"
                              ></path>
                              <path
                                data-name="original"
                                fill="#007acc"
                                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                              ></path>
                            </svg>
                          </div>
                          <div className="max-w-[40px] ma w-full ">
                            <svg viewBox="0 0 128 128">
                              <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="#5a29e4"
                                d="m 34,43.977569 27.379067,-22.912155 0.0385,91.494586 -9.3189,7.74007 -0.15403,-76.091455 z"
                              ></path>
                              <path
                                fill="#5a29e4"
                                d="M 96.961687,82.322502 69.582627,105.23466 69.544127,13.74007 78.863017,6 l 0.15403,76.091452 z"
                              ></path>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="url(#a)"
                                d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
                              ></path>
                              <path
                                fill="url(#b)"
                                d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
                              ></path>
                              <path
                                fill="url(#c)"
                                d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="a"
                                  x1="34.513"
                                  x2="27.157"
                                  y1="15.535"
                                  y2="30.448"
                                  gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#3F873F"></stop>
                                  <stop
                                    offset=".33"
                                    stop-color="#3F8B3D"
                                  ></stop>
                                  <stop
                                    offset=".637"
                                    stop-color="#3E9638"
                                  ></stop>
                                  <stop
                                    offset=".934"
                                    stop-color="#3DA92E"
                                  ></stop>
                                  <stop offset="1" stop-color="#3DAE2B"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="b"
                                  x1="30.009"
                                  x2="50.533"
                                  y1="23.359"
                                  y2="8.288"
                                  gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop
                                    offset=".138"
                                    stop-color="#3F873F"
                                  ></stop>
                                  <stop
                                    offset=".402"
                                    stop-color="#52A044"
                                  ></stop>
                                  <stop
                                    offset=".713"
                                    stop-color="#64B749"
                                  ></stop>
                                  <stop
                                    offset=".908"
                                    stop-color="#6ABF4B"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="c"
                                  x1="21.917"
                                  x2="40.555"
                                  y1="22.261"
                                  y2="22.261"
                                  gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop
                                    offset=".092"
                                    stop-color="#6ABF4B"
                                  ></stop>
                                  <stop
                                    offset=".287"
                                    stop-color="#64B749"
                                  ></stop>
                                  <stop
                                    offset=".598"
                                    stop-color="#52A044"
                                  ></stop>
                                  <stop
                                    offset=".862"
                                    stop-color="#3F873F"
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Lucide</title>
                              <path d="M18.483 1.123a1.09 1.09 0 0 0-.752.362 1.09 1.09 0 0 0 .088 1.54 11.956 11.956 0 0 1 4 8.946 7.62 7.62 0 0 1-7.637 7.636 7.62 7.62 0 0 1-7.637-7.636 3.255 3.255 0 0 1 3.273-3.273c1.82 0 3.273 1.45 3.273 3.273a1.09 1.09 0 0 0 1.09 1.09 1.09 1.09 0 0 0 1.092-1.09c0-3-2.455-5.455-5.455-5.455s-5.454 2.455-5.454 5.455c0 5.408 4.408 9.818 9.818 9.818 5.41 0 9.818-4.41 9.818-9.818A14.16 14.16 0 0 0 19.272 1.4a1.09 1.09 0 0 0-.789-.277ZM9.818 2.15C4.408 2.151 0 6.561 0 11.97a14.16 14.16 0 0 0 4.8 10.637 1.09 1.09 0 0 0 1.54-.096 1.09 1.09 0 0 0-.095-1.54 11.957 11.957 0 0 1-4.063-9 7.62 7.62 0 0 1 7.636-7.637 7.62 7.62 0 0 1 7.637 7.636 3.256 3.256 0 0 1-3.273 3.273 3.256 3.256 0 0 1-3.273-3.273 1.09 1.09 0 0 0-1.09-1.09 1.09 1.09 0 0 0-1.092 1.09c0 3 2.455 5.455 5.455 5.455s5.454-2.455 5.454-5.455c0-5.408-4.408-9.818-9.818-9.818z" />
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path d="M64.002 8.576 128 119.424H0Zm0 0"></path>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="#A41E11"
                                d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z"
                              ></path>
                              <path
                                fill="#D82C20"
                                d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"
                              ></path>
                              <path
                                fill="#A41E11"
                                d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"
                              ></path>
                              <path
                                fill="#D82C20"
                                d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"
                              ></path>
                              <path
                                fill="#A41E11"
                                d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z"
                              ></path>
                              <path
                                fill="#D82C20"
                                d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z"
                              ></path>
                              <ellipse
                                fill="#fff"
                                cx="38.4"
                                cy="35.4"
                                rx="15.5"
                                ry="6"
                              ></ellipse>
                              <path
                                fill="#7A0C00"
                                d="M93.3 27.7l17.2 6.8-17.2 6.8z"
                              ></path>
                              <path
                                fill="#AD2115"
                                d="M74.3 35.3l19-7.6v13.6l-1.9.8z"
                              ></path>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <svg viewBox="0 0 128 128">
                              <path
                                fill="#dfdedf"
                                d="M106.01 71.762H21.86v-4.745a5.773 5.773 0 015.773-5.773h72.602a5.773 5.773 0 015.774 5.773z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M100.147 126.796H27.722a5.863 5.863 0 01-5.862-5.862V71.762h84.15v49.172a5.862 5.862 0 01-5.863 5.862z"
                              ></path>
                              <path
                                fill="#00d8a2"
                                d="M91.832 44.428l10.297-4.971v-4.971l-23.79-11.36 23.79-12.25V6.081l-9.942-4.615L64.02 15.49 35.377 1.466l-9.23 4.971v4.26l22.368 12.25-22.369 11.362v5.148l9.587 4.97L64.137 29.87z"
                              ></path>
                              <path d="M35.671.07a.66.66 0 00-.593.001L24.905 5.243a.66.66 0 00-.36.587v5.31c0 .251.142.48.366.592l7.202 3.559L30.7 30.739l-5.687 2.823a.66.66 0 00-.366.58l-.094 5.22a.66.66 0 00.36.6l4.722 2.389-.28 3.063-6.436 16.688a6.422 6.422 0 00-1.792 4.45v54.99A6.464 6.464 0 0027.583 128h72.834a6.464 6.464 0 006.456-6.458V66.553a6.424 6.424 0 00-1.608-4.25l-6.586-20.12 4.05-1.96a.66.66 0 00.371-.595v-5.455a.657.657 0 00-.368-.592l-5.163-2.537-1.294-16.066 6.463-3.246a.66.66 0 00.362-.59V5.917a.658.658 0 00-.358-.585L92.483.075a.66.66 0 00-.6-.002l-27.568 13.99a.657.657 0 01-.591.002zm-.287 2.345L64.02 17.26 92.178 2.42l7.17 3.673-26.073 13.12c-1.043.525-1.04 2.013.003 2.535l25.804 12.916-6.689 3.467L64.02 23.59 35.147 38.425l-6.595-3.786L55.21 21.388c1.056-.524 1.049-2.033-.014-2.546v.002L28.458 5.934zm65.49 5.404v2.359l-22.64 11.367v-.002c-.033-.02-2.387-1.132-2.387-1.132zm-73.77.14L52.04 20.397l-2.521 1.008-22.415-11.099zm66.103 8.56l1.04 12.895-13.507-6.636zm-58.04.281L47 22.647l-12.956 6.432zm29.966 10.345l25.765 12.73v2.56l-25.765-13.2v-2.088zm-2.227.004v2.087L36.488 42.603v-2.356zm.816 4.273a.658.658 0 01.595.002L91.626 45.31a.66.66 0 00.585.006l3.193-1.547 1.315 16.327H31.205l1.278-13.947.76-1.97 2.233 1.129a.66.66 0 00.595 0zm-36.951 4.765l7.49 4.298v1.713l-7.49-3.79zm74.104.055v2.405L93.123 42.4v-2.14zM99.489 54.88l1.724 5.27a6.33 6.33 0 00-.796-.056h-.51zM28.294 57l-.282 3.094h-.429a6.64 6.64 0 00-.491.024zm-.71 5h72.833a4.55 4.55 0 014.547 4.55v4.258H23.036v-4.256a4.55 4.55 0 014.547-4.551zm.63 3.113a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.925 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm4.772 0a1.441 1.441 0 000 2.882 1.441 1.441 0 100-2.882zm-14.875 7.603h81.928v48.825a4.55 4.55 0 01-4.547 4.55H27.583a4.55 4.55 0 01-4.547-4.55zm4.994 19.144v10.954h1.775v-4.157h2.292c.25 0 .487-.02.71-.06.224-.039.436-.1.633-.177a2.836 2.836 0 001.028-.7 2.992 2.992 0 00.646-1.076c.071-.205.124-.423.16-.656.036-.232.055-.478.055-.737 0-.257-.019-.501-.055-.733a3.677 3.677 0 00-.162-.655 2.94 2.94 0 00-1.133-1.488 2.796 2.796 0 00-.55-.288 3.22 3.22 0 00-.627-.17 4.19 4.19 0 00-.705-.057zm45.23 1.34v2.182h-1.546v1.562h1.547v2.993c0 .242.016.467.047.677.03.21.076.404.139.583.062.18.14.343.235.492.094.148.204.282.33.4.127.12.265.226.415.316.15.09.312.167.486.227.173.06.359.107.556.137.197.03.406.045.626.045.148 0 .298-.011.45-.033.152-.022.306-.054.462-.098.157-.044.315-.101.476-.168.161-.067.325-.145.491-.235l-.55-1.592a3.23 3.23 0 01-.626.26c-.1.03-.198.05-.294.065-.095.015-.19.022-.28.022-.088 0-.17-.007-.248-.02a1.074 1.074 0 01-.216-.058.839.839 0 01-.444-.41 1.175 1.175 0 01-.08-.213 1.678 1.678 0 01-.05-.252 2.418 2.418 0 01-.017-.29v-2.848h2.357v-1.562H75.17V93.2zm-43.455.514h2.292c.03 0 .058 0 .086.002a1.886 1.886 0 01.397.055c.025.006.05.014.073.021.024.008.048.015.07.024a1.17 1.17 0 01.253.133 1.22 1.22 0 01.164.135l.051.05a1.693 1.693 0 01.165.23c.012.02.022.041.033.062.01.021.022.042.031.063a1.61 1.61 0 01.053.135l.022.07c.007.025.015.048.021.073l.016.076a1.827 1.827 0 01.035.321l.002.087c0 .029 0 .057-.002.086 0 .028-.002.056-.004.084l-.008.082a1.747 1.747 0 01-.023.159l-.016.076c-.006.025-.014.048-.021.072a1.662 1.662 0 01-.139.339 1.346 1.346 0 01-.12.176c-.014.019-.03.037-.045.055v.002a1.222 1.222 0 01-.468.317c-.022.009-.046.016-.07.024l-.072.021a1.728 1.728 0 01-.314.051 2.003 2.003 0 01-.17.008h-2.292zm20.078 1.45c-.239 0-.467.018-.685.051-.219.033-.428.081-.627.147a3.288 3.288 0 00-1.072.6v-.58H45.59v10.656h1.909v-4.005c.162.13.334.245.514.343.181.097.371.178.57.242.199.065.406.115.622.147.217.033.443.05.678.05.238 0 .47-.024.693-.07.222-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.024 4.024 0 001.016-1.05 3.507 3.507 0 00.33-.649c.088-.228.153-.467.196-.718.044-.251.065-.514.065-.789s-.021-.537-.065-.789a3.611 3.611 0 00-.527-1.372 3.829 3.829 0 00-1.017-1.061 3.422 3.422 0 00-.603-.339 3.22 3.22 0 00-.644-.201 3.448 3.448 0 00-.687-.069zm9.282 0c-.238 0-.466.018-.685.051-.219.033-.428.081-.626.147a3.288 3.288 0 00-1.073.6v-.58h-1.909v10.656h1.909v-4.005c.163.13.334.245.515.343.18.097.37.178.57.242.198.065.405.115.622.147.217.033.442.05.677.05.239 0 .469-.024.691-.07.223-.045.437-.113.644-.203.207-.09.407-.203.599-.339a4.05 4.05 0 00.803-.753 3.6 3.6 0 00.395-.613 3.81 3.81 0 00.346-1.051c.044-.251.065-.514.065-.789s-.02-.537-.065-.789a3.844 3.844 0 00-.346-1.055 3.57 3.57 0 00-.18-.317 3.841 3.841 0 00-.464-.587 3.999 3.999 0 00-.556-.474 3.238 3.238 0 00-1.247-.54 3.428 3.428 0 00-.685-.069zm8.574 0c-.264 0-.516.024-.758.069a3.453 3.453 0 00-1.323.536 3.78 3.78 0 00-1.04 1.046 3.533 3.533 0 00-.339.655 3.69 3.69 0 00-.203.728c-.045.255-.069.52-.069.8a4.577 4.577 0 00.153 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.452 3.452 0 001.317.537c.24.045.491.068.752.068.202 0 .397-.012.587-.035.19-.023.373-.059.55-.106a3.73 3.73 0 00.989-.423 3.3 3.3 0 00.798-.696c.115-.139.222-.288.317-.449.096-.16.18-.334.257-.518l-1.707-.36c-.094.159-.202.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.367.059-.573.059-.112 0-.222-.01-.325-.03a1.56 1.56 0 01-.576-.233 1.971 1.971 0 01-.67-.73 2.256 2.256 0 01-.14-.323 2.67 2.67 0 01-.096-.36h5.493v-.652a4.735 4.735 0 00-.092-.775 3.858 3.858 0 00-.216-.7 3.517 3.517 0 00-.804-1.185 3.91 3.91 0 00-.56-.446 3.498 3.498 0 00-1.274-.515 3.838 3.838 0 00-.713-.067zm14.702 0c-.263 0-.516.024-.758.069a3.453 3.453 0 00-1.323.536 3.76 3.76 0 00-.818.748 3.528 3.528 0 00-.56.953 3.685 3.685 0 00-.204.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.153 1.172 3.675 3.675 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.563.466a3.473 3.473 0 001.318.537c.24.045.491.068.751.068.203 0 .398-.012.588-.035a4.14 4.14 0 00.552-.106 3.698 3.698 0 00.986-.423 3.3 3.3 0 00.799-.696c.115-.139.221-.288.317-.449.096-.16.18-.334.256-.518l-1.705-.36c-.094.159-.201.297-.323.416-.12.12-.256.218-.405.298-.149.08-.314.14-.491.18-.177.04-.368.059-.574.059a1.654 1.654 0 01-.624-.118 1.654 1.654 0 01-.532-.344 1.971 1.971 0 01-.414-.53 2.256 2.256 0 01-.14-.324 2.67 2.67 0 01-.096-.36h5.492v-.652a4.743 4.743 0 00-.092-.775 3.856 3.856 0 00-.215-.7 3.51 3.51 0 00-.805-1.185 3.914 3.914 0 00-.56-.446 3.498 3.498 0 00-1.272-.515 3.858 3.858 0 00-.712-.067zm8.574 0c-.264 0-.516.024-.758.069a3.566 3.566 0 00-1.323.536 3.746 3.746 0 00-.817.748 3.529 3.529 0 00-.56.953 3.685 3.685 0 00-.203.728c-.045.255-.068.52-.068.8a4.577 4.577 0 00.152 1.172 3.676 3.676 0 00.268.687 3.48 3.48 0 00.65.886c.177.178.365.333.564.466a3.456 3.456 0 001.317.537c.24.045.49.068.75.068.203 0 .4-.012.59-.035a4.11 4.11 0 00.55-.106 3.724 3.724 0 00.986-.423 3.307 3.307 0 001.116-1.145c.095-.16.182-.334.258-.518l-1.707-.36c-.094.159-.201.297-.323.416-.121.12-.256.218-.405.298-.15.08-.312.14-.49.18-.177.04-.369.059-.575.059a1.654 1.654 0 01-.622-.118 1.654 1.654 0 01-.533-.344 1.971 1.971 0 01-.413-.53 2.256 2.256 0 01-.14-.324 2.672 2.672 0 01-.099-.36h5.495v-.652a4.742 4.742 0 00-.094-.775 3.853 3.853 0 00-.213-.7 3.51 3.51 0 00-.807-1.185 3.9 3.9 0 00-.558-.446 3.498 3.498 0 00-1.274-.515 3.836 3.836 0 00-.713-.067zm9.599.118a3.03 3.03 0 00-1.116.2 2.82 2.82 0 00-.943.598 3.512 3.512 0 00-.274.286 4.098 4.098 0 00-.255.331v-1.313h-1.908v7.213h1.908v-2.328c0-.258.015-.5.041-.726.027-.226.066-.437.12-.63.053-.194.12-.37.2-.53.08-.162.174-.306.281-.435a1.96 1.96 0 01.805-.58c.16-.064.334-.112.522-.144a3.6 3.6 0 01.605-.047h.42l.1-1.838a.894.894 0 00-.214-.045 2.874 2.874 0 00-.292-.012zm-63.684.1v4.396c0 .224.016.438.049.64.032.203.082.394.148.576a2.783 2.783 0 001.03 1.339c.154.106.319.195.493.266.175.071.359.125.554.16.196.036.402.055.619.055.234 0 .458-.019.67-.055.21-.036.411-.09.6-.162a2.828 2.828 0 00.998-.65v.65h1.909v-7.215h-1.909v3.196c0 .208-.008.402-.027.584a3.897 3.897 0 01-.082.507 2.6 2.6 0 01-.141.426c-.056.13-.121.245-.196.349a1.396 1.396 0 01-.56.466 1.61 1.61 0 01-.364.115c-.13.026-.273.04-.423.04-.112 0-.217-.01-.317-.03a1.309 1.309 0 01-.526-.233 1.356 1.356 0 01-.212-.2 1.384 1.384 0 01-.178-.248 1.585 1.585 0 01-.127-.29 1.98 1.98 0 01-.074-.329 2.557 2.557 0 01-.024-.362v-3.991zm13.054 1.446a2.487 2.487 0 01.425.037 1.959 1.959 0 01.56.196c.057.03.113.065.168.102.027.018.054.039.08.059.027.02.053.039.078.06l.077.069.074.07a1.87 1.87 0 01.343.498 2.028 2.028 0 01.14.395 2.542 2.542 0 01.073.444 3.164 3.164 0 01-.027.703 2.368 2.368 0 01-.184.603 1.96 1.96 0 01-.211.343 1.863 1.863 0 01-.443.409 1.945 1.945 0 01-.936.327 2.209 2.209 0 01-.415 0 2.133 2.133 0 01-.378-.077 1.932 1.932 0 01-.528-.256 2.37 2.37 0 01-.474-.419 1.85 1.85 0 01-.387-.728 2.206 2.206 0 01-.077-.433 2.895 2.895 0 01.028-.689 2.186 2.186 0 01.201-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.374 2.374 0 01.337-.227 1.954 1.954 0 01.358-.152 1.879 1.879 0 01.576-.085zm9.282 0a2.479 2.479 0 01.423.037 1.964 1.964 0 01.56.196c.057.03.114.065.168.102.027.018.054.039.08.059l.079.06c.026.022.051.046.076.069l.075.07a1.838 1.838 0 01.342.498 2.044 2.044 0 01.143.395 2.758 2.758 0 01.078.683 2.707 2.707 0 01-.078.677 2.167 2.167 0 01-.239.566 1.995 1.995 0 01-.246.32 2.123 2.123 0 01-.478.357 1.83 1.83 0 01-.558.196 2.3 2.3 0 01-.622.03 2.133 2.133 0 01-.378-.077 1.93 1.93 0 01-.53-.256 2.231 2.231 0 01-.326-.266 1.975 1.975 0 01-.381-.494 1.882 1.882 0 01-.153-.387 2.206 2.206 0 01-.076-.433 2.895 2.895 0 01.027-.689 2.186 2.186 0 01.202-.6 1.893 1.893 0 01.235-.35 2.109 2.109 0 01.307-.299 2.235 2.235 0 01.335-.227 1.954 1.954 0 01.358-.152 1.952 1.952 0 01.577-.085zm8.472 0a1.809 1.809 0 01.245.016 1.809 1.809 0 01.072.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.484 1.484 0 01.303.292 1.615 1.615 0 01.16.25c.025.046.047.092.067.141l.03.075a2.228 2.228 0 01.053.156l.023.082h-3.484a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.021-.049 1.599 1.599 0 01.136-.243 1.599 1.599 0 01.178-.21 1.599 1.599 0 01.043-.042 1.599 1.599 0 01.213-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.077-.01 1.904 1.904 0 01.252-.02zm14.703 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.245.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.44 1.44 0 01.21.184c.017.017.032.035.048.053l.047.055.043.058a1.488 1.488 0 01.115.192 2.065 2.065 0 01.15.374l.023.082h-3.485v-.002a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.178-.211 1.599 1.599 0 01.043-.041 1.599 1.599 0 01.214-.172 1.904 1.904 0 01.223-.133 1.904 1.904 0 01.06-.03 1.904 1.904 0 01.24-.096 1.904 1.904 0 01.246-.058 1.904 1.904 0 01.076-.01 1.904 1.904 0 01.253-.02zm8.574 0a1.809 1.809 0 01.244.016 1.809 1.809 0 01.073.01 1.809 1.809 0 01.244.054 1.809 1.809 0 01.227.092 1.809 1.809 0 01.07.034 1.809 1.809 0 01.212.127 1.482 1.482 0 01.464.542c.024.046.046.092.067.141l.03.075a2.271 2.271 0 01.052.156l.023.082h-3.486a1.599 1.599 0 01.088-.266 1.599 1.599 0 01.022-.049 1.599 1.599 0 01.135-.243 1.599 1.599 0 01.176-.207 1.599 1.599 0 01.053-.05 1.599 1.599 0 01.207-.167 1.904 1.904 0 01.225-.135 1.904 1.904 0 01.053-.026 1.904 1.904 0 01.243-.098 1.904 1.904 0 01.249-.058 1.904 1.904 0 01.074-.01 1.904 1.904 0 01.255-.02z"></path>
                            </svg>
                          </div>

                          <div className="max-w-[40px] w-full ">
                            <img src={img16} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img11} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img12} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img13} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img15} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img14} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img17} alt="" />
                          </div>
                          <div className="max-w-[40px] w-full ">
                            <img src={img18} alt="" />
                          </div>
                         
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="clients">
                      <div className="pb-5">
                        <h2 className="text-[25px] font-bold py-3 ">
                          <span className=" border-b-[3px] border-transparent ">
                            Cli
                          </span>
                          ents
                        </h2>
                        <div className="bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a] rounded-md overflow-hidden">
                          <div className="relative w-full h-[120px]">
                            <div className="absolute top-0 left-0 flex animate-infinite-scroll whitespace-nowrap h-full">
                              {/* Logo row 1 */}
                              <div className="flex flex-nowrap items-center space-x-8 h-full">
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img7}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img8}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img9}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[130px] w-[130px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img10}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                              </div>

                              {/* Logo row 2 (duplicate for seamless loop) */}
                              <div className="flex flex-nowrap pl-8  items-center space-x-8 h-full">
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img7}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img8}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[200px] w-[200px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img9}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                                <div className="min-w-[130px] w-[130px] flex-shrink-0 flex items-center justify-center">
                                  <img
                                    src={img10}
                                    alt="Clients Logo"
                                    className="w-full rounded-md"
                                  />
                                </div>
                              </div>
                            </div>
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
