import React from "react";

const Resume = () => {
  return (
    <div className="text-white px-5 pb-6 bg-[#222222] lg-custommm:max-h-[125vh] sm-customm:max-h-[130vh] lg-custommm:overflow-y-auto rounded-xl scrollbar-hide">
      <h1 className="text-[28px] font-bold ">Resume</h1>
      <div className="flex items-center gap-2 pt-3 ">
        <div className="shadow-2xl bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#educationGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient
                id="educationGradient"
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
            <path d="M22 10l-10-5L2 10l10 5 10-5z" />
            <path d="M22 10v6a1 1 0 0 1-1 1h-3" />
            <path d="M6 12v5a1 1 0 0 0 1 1h3" />
          </svg>
        </div>

        <div>
          <h2 className="text-[23px] font-semibold ">Education</h2>
        </div>
      </div>

      <article className="px-6">
        <p className="flex  gap-1 py-2">
          <span className=" translate-y-2 w-[16px] flex-shrink-0 h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
          <span className="font-medium leading-loose ">
            Pinecrest College, Enugu, Nigeria <br /> Senior Secondary
            Certificate Examination (SSCE) <br /> Graduated: 2024
          </span>
        </p>
      </article>

      <div className="flex gap-2 items-center">
        <div className="shadow-lg bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] p-1 rounded-xl">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#experienceGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <linearGradient
                id="experienceGradient"
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
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
          </svg>
        </div>
        <h2 className="text-[23px] font-semibold">Experience</h2>
      </div>

      <article className="px-6 flex flex-col gap-4">
        <div>
          <p className="flex  gap-1 py-2">
            <span className=" translate-y-2 flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
            <span className="font-semibold text-[19px] ">
              Full Stack Intern — Jan 2024 → June 2024
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">
              PixelFrame Technologies – Lagos, Nigeria (On-site)
            </p>
            <p className="px-4 flex flex-col gap-3 ">
              <li>
                Assisted senior devs with building UIs using HTML, CSS & React.
              </li>
              <li>
                Learned basic backend development with Node.js and Express.
              </li>
              <li>Helped test and connect APIs using Postman and MongoDB.</li>
            </p>
          </div>
        </div>

        <div>
          <p className="flex  gap-1 py-2">
            <span className=" translate-y-2 flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
            <span className="font-semibold text-[19px] ">
              Junior Full Stack Developer — July 2024 → Nov 2024
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">
              CodeLoop Digital – Abuja, Nigeria (Remote)
            </p>
            <p className="px-4 flex flex-col gap-3 ">
              <li>
                Built full-stack features using React + Express.js + MongoDB.
              </li>
              <li>
                Created secure login/register flows using JWT and cookies.
              </li>
              <li>
                Integrated APIs for logistics tracking & admin dashboards.
              </li>
            </p>
          </div>
        </div>

        <div>
          <p className="flex  gap-1 py-2">
            <span className=" translate-y-2 flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
            <span className="font-semibold text-[19px] ">
              Full Stack Developer — Dec 2024 → March 2025
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">
              DevSphere Innovations – Port Harcourt, Nigeria (Hybrid)
            </p>
            <p className="px-4 flex flex-col gap-3 max-w-[600px] ">
              <li>
                Developed internal dashboard apps with React and Tailwind.
              </li>
              <li>
                Built RESTful APIs with Node.js and integrated different
                databases such as SQLite, PlanetScale, and Neon.
              </li>
              <li>
                Integrated APIs for logistics tracking & admin dashboards.
              </li>
            </p>
          </div>
        </div>

        <div>
          <p className="flex  gap-1 py-2">
            <span className=" translate-y-2 flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
            <span className="font-semibold text-[19px] ">
              Full Stack Engineer — April 2025 → Present
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">
              StackHive Technologies – Remote (UK 🇬🇧)
            </p>
            <p className="px-4 flex flex-col gap-3 ">
              <li>
                Building full-stack features using React, TypeScript, and
                Express.
              </li>
              <li>
                Managing authentication, image upload, and PDF generation APIs.
              </li>
              <li>
                Working with cloud DBs like Neon and PlanetScale, deployed on
                Vercel & Render.
              </li>
            </p>
          </div>
        </div>
      </article>

      <div className="sm:p-3">
        <h2 className="text-[25px] font-bold py-2 ">My skills</h2>
        <div className=" p-5 rounded-2xl bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420] flex flex-col gap-2 ">
          <div>
            <h3 className="text-[20px] font-medium pb-2">Frontend</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[90%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">Backend</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[75%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2"> Databases & Storage</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[85%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2"> Mobile App Development</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[35%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">Hosting & Deployment</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[75%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>


          <div>
            <h3 className="text-[20px] font-medium pb-2">Dev Tools & Utilities</h3>
            <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
              <p className="bg-[#171d2c] rounded-2xl max-w-[90%] w-full  py-2 absolute top-0 bottom-0  "></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
