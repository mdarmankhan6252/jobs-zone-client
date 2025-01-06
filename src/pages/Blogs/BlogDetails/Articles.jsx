import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <div className="max-w-7xl mx-auto xl:grid xl:grid-cols-4 xl:gap-x-12 ">
      {/* Left */}
      <div className="self-start col-span-1 xl:sticky xl:top-[88px] ">
        <div className="px-4 md:px-8 xl:pr-0 overflow-visible">
          <p className="mp-5 font-medium text-gry-900 md:text-[14px]">
            In this article
          </p>
          <div className="text-sm xl:pb-8 font-medium border border-gray-100 p-4 rounded-lg">
            <ol className=" space-y-3">
              <li className="">
                <Link to={"/"} className="text-gray-900 underline">
                  Understanding Phone Interviews
                </Link>{" "}
              </li>
              <li className="">
                <Link to={"/"} className="text-gray-900 underline">
                  Preparing for the Call
                </Link>{" "}
              </li>
              <li className="">
                <Link to={"/"} className="text-gray-900 underline">
                  Common Interview Questions
                </Link>{" "}
              </li>
              <li className="">
                <Link to={"/"} className="text-gray-900 underline">
                  Key Interview Responses
                </Link>{" "}
              </li>
              <li className="">
                <Link to={"/"} className="text-gray-900 underline">
                  Navigating Tricky Questions
                </Link>{" "}
              </li>
            </ol>
          </div>
        </div>
        <div className="px-4 md:px-8 xl:pr-0">
          <div className="mb-12 hidden xl:block border-t border-gray-100">
            <p className="mb-5 mt-8 text-[14px] font-medium text-gray-900">
              Find your dream remote job
            </p>
            <div className="flex flex-col  gap-3">
              <button className="inline-flex gap-x-2 font-medium justify- items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100  border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] py-3 px-5 w-full ">
                <FcGoogle size={25}></FcGoogle> <span>Sign in with google</span>
              </button>
              <a
                className="inline-flex  gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-red-100 text-[16px] py-3 px-5 "
                href="/"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className="max-w-7xl col-span-2 mx-auto mb-12 mt-12   px-4 md:px-8 xl:mb-7 xl:mt-0 overflow-hidden relative overflow-y-auto">
        <div className="md:text-lg font-medium mb-5  mt-1 text-gray-900 w-full space-y-4">
          <p>
            Phone interviews have become a crucial step in the hiring process
            for many companies. They allow employers to efficiently screen
            candidates before inviting them for in-person meetings.
          </p>
          <strong>
            Preparing for common phone interview questions can significantly
            increase your chances of advancing to the next round.
          </strong>
          <p>
            These initial conversations typically cover your background, skills,
            and motivation for applying to the position. Recruiters and hiring
            managers use them to assess your communication abilities and
            determine if you're a good fit for the role. By understanding what
            interviewers are looking for and practicing your responses, you can
            present yourself as a strong candidate. Successful phone interviews
            require preparation and confidence. Research the company, review the
            job description, and have your resume on hand. Speak clearly, listen
            attentively, and be ready to provide specific examples that
            highlight your qualifications. Remember to prepare questions of your
            own to demonstrate your interest in the position.
          </p>
          <p>
            These initial conversations typically cover your background, skills,
            and motivation for applying to the position. Recruiters and hiring
            managers use them to assess your communication abilities and
            determine if you're a good fit for the role. By understanding what
            interviewers are looking for and practicing your responses, you can
            present yourself as a strong candidate. Successful phone interviews
            require preparation and confidence. Research the company, review the
            job description, and have your resume on hand. Speak clearly, listen
            attentively, and be ready to provide specific examples that
            highlight your qualifications. Remember to prepare questions of your
            own to demonstrate your interest in the position.
          </p>
          <p>
            These initial conversations typically cover your background, skills,
            and motivation for applying to the position. Recruiters and hiring
            managers use them to assess your communication abilities and
            determine if you're a good fit for the role. By understanding what
            interviewers are looking for and practicing your responses, you can
            present yourself as a strong candidate. Successful phone interviews
            require preparation and confidence. Research the company, review the
            job description, and have your resume on hand. Speak clearly, listen
            attentively, and be ready to provide specific examples that
            highlight your qualifications. Remember to prepare questions of your
            own to demonstrate your interest in the position.
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="mb-12 col-span-1 hidden max-w-[272px] pr-8 xl:block ">
        <div className="sticky top-[88px]">
          <div className="mb-8 border-b border-gray-100 pb-8">
            <p className="mb-5 text-[14px] font-medium text-gray-900">Share this article</p>
            <div className="flex gap-x-3">
              <Link to={''} className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"> <FaTwitter className="fill-current text-gray-500" size={25}></FaTwitter></Link>
              <Link to={''} className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"> <FaFacebook className="fill-current text-gray-500" size={25}></FaFacebook></Link>
              <Link to={''} className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled-border-gray-100 border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-700 px-2 py-2"> <FaLinkedin className="fill-current text-gray-500" size={25}></FaLinkedin></Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <p className="text-sm font-medium text-gray-900">Written by </p>
            <Link to={"/"} className="flex items-center">
              <span className="w-[50px] h-[50px] bg-white rounded-full flex justify-center border  border-gray-200 items-center  mr-3">
                <img className="p-2" src="https://i.ibb.co.com/9HKLJLq/JZLogo.png" alt="Logo" />
              </span>
              <div>
              <p className="font-medium text-gray-900 text-base">Jobszone</p>
              <time className="text-gray-600 text-base" >Dec 05, 2024</time>
              </div>
            </Link>
            <p className="text-gray-500">Jobszone is the best place to find remote jobs and talent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
