import {
  FaChevronRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 md:px-8 xl:mb-24 ">
      <div className="flex flex-col border-y border-gray-200 pb-12 pt-6 md:flex-row md:justify-between">
        <div className="mb-4 flex gap-x-2">
          <Link
            to={""}
            className="inline-flex items-center border rounded-sm font-medium w-max h-max px-[6px] py-[2px] bg-white hover:bg-gray-50"
          >
            Interviewing
          </Link>
          <Link
            to={""}
            className="inline-flex items-center border rounded-sm font-medium w-max h-max px-[6px] py-[2px] bg-white hover:bg-gray-50"
          >
            Interview questions
          </Link>
        </div>
        <div className="flex gap-x-3">
          <Link
            to={""}
            className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white  focus:ring-gray-700 px-2 py-2"
          >
            <LuCopy className=" " size={25}></LuCopy>
            <span className="text-gray-700">Copy link</span>
          </Link>
          <Link
            to={""}
            className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"
          >
            <FaFacebook
              className="fill-current text-gray-500"
              size={25}
            ></FaFacebook>
          </Link>
          <Link
            to={""}
            className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"
          >
            <FaLinkedin
              className="fill-current text-gray-500"
              size={25}
            ></FaLinkedin>
          </Link>
          <Link
            to={""}
            className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"
          >
            <FaLinkedin
              className="fill-current text-gray-500"
              size={25}
            ></FaLinkedin>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <ol className="no-scrollbar -mx-4 flex overflow-x-auto items-center gap-x-2 px-4 md:mx-0 md:px-0">
          <li>Home</li>
          <li>
            <FaChevronRight size={15} className="opacity-30"></FaChevronRight>
          </li>
          <li>Advice </li>
          <li>
            <FaChevronRight size={15} className="opacity-30"></FaChevronRight>
          </li>
          <li>Interviewing</li>
          <li>
            <FaChevronRight size={15} className="opacity-30"></FaChevronRight>
          </li>
          <li>20 Phone Interview questions and answers</li>
        </ol>
      </div>
    </div>
  );
};

export default SocialLink;
