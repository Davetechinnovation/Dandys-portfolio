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
              Freelance Web Developer (Self-Employed) — July 2024 → Aug 2025
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">Remote</p>
            <p className="px-4 flex flex-col gap-3 ">
              <li>
                Designed and built small-to-mid scale web applications for
                clients using React, Next.js, and Tailwind CSS.
              </li>
              <li>
                Developed backend APIs with Node.js + Express.js and managed
                databases like Mongodb and SQLite.
              </li>
              <li>
                Worked on features such as authentication, image upload, and
                basic API integrations.
              </li>
              <li>
                Delivered responsive, mobile-friendly solutions and improved
                project deployment workflows using Vercel and Render.
              </li>
              <li>
                Movie App (DandyPrime): A streaming platform built with
                React/Next.js and Tailwind CSS, integrating APIs for movies, TV
                shows, and sports.
              </li>
              <li>
                Transport System App: A logistics/transport booking system with
                Node.js + Express.js backend and SQLite database
              </li>
            </p>
          </div>
        </div>

        <div>
          <p className="flex  gap-1 py-2">
            <span className=" translate-y-2 flex-shrink-0 w-[16px] h-[16px] rounded-full bg-gradient-to-br from-[#000000] via-[#1b1b1b] to-[#101420]  "></span>
            <span className="font-semibold text-[19px] ">
              Intern — Junior Web Developer — Sept 2025 → Present
            </span>
          </p>
          <div>
            <p className="text-[16px] font-medium px-3 pb-2">
              DDM Academy – Awka, Nigeria (Onsite/Hybrid)
            </p>
            <p className="px-4 flex flex-col gap-3 ">
              <li>
                Assisting in building web applications with React, TypeScript,
                and Express.js.
              </li>
              <li>
                Learning real-world workflows: Git/GitHub collaboration,
                debugging, and API integration.
              </li>
              <li>
                Supporting database tasks (SQLite, Neon, PlanetScale) and cloud
                deployments.
              </li>
              <li>
                Gaining professional team experience while improving
                problem-solving and development speed.
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
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[85%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>85%</p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">Backend</h3>
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[75%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>70%</p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">
              {" "}
              Databases & Storage
            </h3>
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[82%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>82%</p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">
              {" "}
              Mobile App Development
            </h3>
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[30%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>30%</p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">
              Hosting & Deployment
            </h3>
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[70%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>70%</p>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-medium pb-2">
              Dev Tools & Utilities
            </h3>
            <div className="flex justify-between gap-4 items-center ">
              <p className="bg-[#252525] rounded-2xl w-full py-2 relative ">
                <p className="bg-[#6e6e6e] rounded-2xl max-w-[80%] w-full  py-2 absolute top-0 bottom-0  "></p>
              </p>
              <p>80%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
