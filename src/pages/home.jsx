import React, { useState } from 'react';
import img from "../assets/Dandy's-image.jpg";
import Typewriter from 'typewriter-effect';

const navLinks = [
  "Home",
  "Resume",
  "Portfolio",
  "Contact",
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <div className='bg-[#111111] min-h-screen p-4 sm:p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-4 overflow-x-auto'>
        {/* Sidebar */}
        <div className="gradient-scroll bg-[#222222] h-[100dvh] overflow-y-auto lg:my-5 rounded-xl">
          <div className='flex flex-col justify-center items-center pt-10 pb-6'>
            <div className='bg-gradient-to-br from-[#1f1f1f] via-[#444444] to-[#202a44] max-w-[160px] w-[160px] justify-center items-center flex rounded-md py-3 '>
              <div className="w-[130px] h-[130px] rounded-full overflow-hidden">
                <img src={img} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className='text-center pt-3 '>
              <p className='text-[white]'>DaveTechInnovation <br /> ( Dandy )</p>
              <button className='text-white px-3 py-1 my-2 bg-gradient-to-br from-[#1f1f1f] via-[#3b3b3b] to-[#0f172a] rounded-lg border-4 border-gray-600 hover:!bg-transparent duration-500 transition-transition hover:scale-90'>
                Full Stack Web Developer
              </button>
            </div>
          </div>
          <hr className='pb-10 mx-2'/>
          <div className='flex flex-col justify-center items-center'>
            <div className='lg-custom:grid lg-custom:grid-cols-3 mx-5 overflow-x-auto lg-customm:grid-cols-2 lg-custom:gap-9 lg-custom:mx-5 flex flex-col gap-4 pb-10'>
              <div className='flex  gap-3 items-center'>
                <div className='shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl'>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="url(#mailGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id="mailGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1f1f1f" />
                        <stop offset="50%" stopColor="#444444" />
                        <stop offset="100%" stopColor="#202a44" />
                      </linearGradient>
                    </defs>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                <div className='text-white'>
                  <p className='flex flex-col'><span>Email:</span> 
                    <a href="mailto:dandaveudoka@gmail.com" className='underline'>dandaveudoka@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className='bg-[#222222] min-h-screen rounded-xl'>
          {/* Responsive Navbar */}
          <nav className="relative w-full">
            {/* Hamburger Button: shown only on small screens */}
            <button
              className="lg:hidden absolute top-4 right-6 z-30 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex max-w-[450px] w-[450px] bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] flex-col items-end py-1 px-8 rounded-bl-3xl ml-auto">
              <ul className='text-white flex gap-10 py-3 px-4'>
                {navLinks.map(link => (
                  <li key={link} className='cursor-pointer text-white hover:underline'>{link}</li>
                ))}
              </ul>
            </div>

            {/* Overlay for closing menu when clicked outside */}
            {menuOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-30 z-20"
                onClick={handleMenuClose}
                aria-label="Close menu overlay"
              />
            )}

            {/* Mobile Nav w/ Slide Down */}
            <div className={`
              lg:hidden
              fixed top-0 left-0 right-0 z-30
              transition-transform duration-500 ease-in-out
              ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
              <div className="bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] max-w-[95vw] mx-auto mt-5 rounded-bl-3xl shadow-lg">
                <ul className='text-white flex flex-col gap-6 py-5 px-6 items-end'>
                  {navLinks.map(link => (
                    <li
                      key={link}
                      className='cursor-pointer text-lg font-medium hover:underline'
                      onClick={handleMenuClose}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          {/* Main Section */}
          <div className="px-9 text-white py-6">
            <p className="text-[30px] italic pb-2">Welcome to My Abode</p>
            <div className="text-white">
              <div className="text-[20px] font-serif py-2">
                <Typewriter
                  options={{
                    loop: true,
                    delay: 50,
                    deleteSpeed: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`Hello<span class="wave-han">👋</span><span class="wave-han">👋</span> I'm Dandy,<br/>A Full-Stack Web Developer,`)
                      .pauseFor(1000)
                      .typeString(`<br/><br/>`)
                      .typeString(`<span class='text-[25px] font-serif'>Skilled in,</span><br/><span>Frontend Web Development,</span>`)
                      .pauseFor(2000)
                      .deleteChars("Frontend Web Development,".length)
                      .typeString("Backend Web Development,")
                      .pauseFor(2000)
                      .deleteChars("Backend Web Development,".length + "Skilled in,".length + 1)
                      .typeString(`<span class='text-[25px] font-serif'>Master in,</span><br/><span>HTML,</span>`)
                      .pauseFor(1500)
                      .deleteChars("HTML,".length)
                      .typeString("Tailwind CSS,")
                      .pauseFor(1500)
                      .deleteChars("Tailwind CSS,".length)
                      .typeString("JavaScript.")
                      .pauseFor(2000)
                      .deleteChars("JavaScript.".length + "Master in,".length + 1)
                      .typeString("And Lastly,<br/>Well Knowledged in React Framework.")
                      .pauseFor(2500)
                      .deleteAll()
                      .pauseFor(500)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
