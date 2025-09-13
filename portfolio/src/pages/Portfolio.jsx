import { AlertTriangle, ArrowUpRight } from "lucide-react";
import img from "../assets/Screenshot (23).png";
import img2 from "../assets/Screenshot (24).png";
import img1 from "../assets/Screenshot (25).png";
import img3 from "../assets/Screenshot (26).png";
import img4 from "../assets/Screenshot (28).png";
import img5 from "../assets/Screenshot (29).png";
import img6 from "../assets/waitlist.png"

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-white font-bold text-[25px] px-4 ">
        Check out My Projects
      </h1>

      <div className="sm:px-7 px-2 py-3 text-white grid md:grid-cols-3 e:grid-cols-2 grid-col-1 sm:gap-4 gap-5 ">
        <div className=" w-full border border-white  rounded-lg ">
          <img src={img} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://danraphservices.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className=" w-full border border-white  rounded-lg ">
          <img src={img2} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://danraph-transport.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className=" w-full border border-white  rounded-lg ">
          <img src={img1} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://danraph-services-drivers.vercel.app/drivers/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className=" w-full border border-white  rounded-lg ">
          <img src={img3} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://danraph-transport-admin.vercel.app/admin/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className=" w-full border border-white  rounded-lg ">
          <img src={img4} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://danraph-transport.vercel.app/users/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className=" w-full border border-white  rounded-lg ">
          <img src={img5} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://dandy-prime-tv20.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <p className="flex items-center  gap-3 text-yellow-400 ">
              <span>
                <AlertTriangle />
              </span>{" "}
              <span>Still under development</span>
            </p>
          </div>
        </div>

        <div className=" w-full border border-white  rounded-lg ">
          <img src={img6} alt="" className="w-full rounded-t-lg " />
          <div className="py-1 flex justify-center items-center ">
            <a
              href="https://join.ecocruise.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#444444] px-4 py-1 rounded-full flex items-center gap-1 hover:bg-transparent border-2 border-[#444444] duration-500 transition-all"
            >
              <span>View live Demo</span>
              <ArrowUpRight />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
