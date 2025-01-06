import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrDown } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { TbBoxMultiple } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'

const JobsMatches = () => {
  const [isOpen, setIsOpen] = useState(false)
  const axiosPublic = useAxiosPublic();

  const open = () => {
    setIsOpen(!isOpen)
  }


  const { data: jobs = [], isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await axiosPublic.get('/jobs')
      return res.data;
    }
  })

  if(isLoading){
    return <p>Loading...</p>
  }






  return (
    <div className="max-w-7xl mx-auto px-4 pb-16 pt-12 md:px-8 xl:flex xl:flex-row xl:gap-x-6 xl:pb-24 xl:pt-16 ">
      <div>
        <div className="mb-4 flex flex-row items-center justify-between ">
          <div className=" flex items-center gap-x-2 rounded-lg border border-gray-100 bg-gray-50 p-1">
            <Link
              to={"/"}
              className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-[14px]  hover:shadow text-gray-700 hover:bg-gray-50 focus:ring-gray-100 px-3 py-2"
            >
              Jobs
              <span className="text-center border rounded-md font-medium w-max h-max text-[18px] px-2 py-0.5 ml-2 bg-white">
                203
              </span>
            </Link>
            <Link
              to={"/"}
              className="flex gap-x-2  font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-[14px]  hover:shadow  text-gray-700 hover:bg-gray-50 focus:ring-gray-100 px-3 py-2"
            >
              Matches
              <span className="text-center border rounded-md font-medium w-max h-max text-[18px] px-2 py-0.5 ml-2 bg-white">
                0
              </span>
            </Link>
            <Link
              to={"/"}
              className="flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max text-[14px]  hover:shadow text-gray-700 hover:bg-gray-50 focus:ring-gray-100 px-3 py-2"
            >
              Saves
              <span className="text-center border rounded-md font-medium w-max h-max text-[18px] px-2 py-0.5 ml-2 bg-white">
                0
              </span>
            </Link>
          </div>
          <div className="hidden xl:block">
            <div className="flex relative items-center gap-x-2 border border-gray-200 py-3 px-4 rounded-md shadow ">
              <img
                className="w-[18px] h-[13px]"
                src="https://i.ibb.co.com/7gp2mK7/Downbar3.png"
                alt="Logo"
              />
              <p>Recent Jobs</p>
              <button onClick={open}><GrDown className={`${isOpen === true && 'rotate-180'}`}></GrDown></button>

              {isOpen && (<ul className="absolute top-[52px] left-0 w-full space-y-2 bg-white border border-gray-200 p-[8px] rounded-md ">
                <li>Recent best jobs </li>
                <li>Recent medium jobs </li>
                <li>Recent low jobs </li>
              </ul>)}
            </div>

          </div>
        </div>

        {/* jobs card. */}

        {jobs.map(job => <div key={job._id} className="flex flex-col gap-y-4 pb-4 xl:w-[850px] ">
          <div className="flex flex-shrink-0 cursor-pointer flex-col items-start gap-x-5 rounded-xl border border-violet-400 bg-white p-5 shadow-sm transition-shadow backface-hidden hover:shadow-xl md:flex-row md:p-6">
            <div className="w-[48px] h-[48px] md:w-max">
              <img
                className="h-full w-full rounded-full border border-gray-200 bg-white"
                referrerPolicy="no-referrer"
                src={job.author.photo}
                alt="Logo"
              />
            </div>
            <div className="w-full flex-1">
              <div>
                <div className="mb-2 flex justify-between gap-x-4 ">
                  <p className="text-xl font-medium text-gray-900  ">
                    {job.title}
                  </p>
                  <p className="hidden flex-shrink-0 text-gray-600 md:block">
                    Deadline : <span>{job.deadline}</span>
                  </p>
                </div>
              </div>

              <div className="mb-6 flex flex-col flex-wrap gap-y-2 md:flex-row md:gap-x-4">
                <div className="flex gap-x-4">
                  <p
                    className="flex items-center font-medium text-gray-900"
                  >
                    {job.companyName}
                    <VscVerifiedFilled className="ml-1.5 h-4 w-4 text-blue-500"></VscVerifiedFilled>
                  </p>

                  <p
                    className="flex items-center font-medium text-gray-900"
                  ><PiStarFour className="ml-1.5 h-4 w-4 "></PiStarFour>
                    <span>Benefits</span>
                  </p>
                  <p
                    className="flex items-center font-medium text-gray-900"
                  ><TbBoxMultiple className="ml-1.5 h-4 w-4 "></TbBoxMultiple >
                    <span>Benefits</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <p className="text-center border rounded-md font-medium w-max h-max px-[8px] py-[4px]">{job.jobType}</p>
                  <p className="text-center border rounded-md font-medium w-max h-max px-[8px] py-[4px]">{job.location}</p>
                  <p className="text-center border rounded-md font-medium w-max h-max px-[8px] py-[4px]">{job.experienceLevel}</p>
                </div>
                <div>
                  <span className="text-amber-400 "><FaStar size={20}></FaStar></span>
                </div>
              </div>
            </div>
          </div>
        </div>)}

        {
          <div className="text-center">
            <button className="text-white bg-purple-600  py-2 px-8 rounded-md hover:bg-purple-700">See More</button>
          </div>
        }


        {/* pagination */}


      </div>
      {/* Right Side  */}
      <div className="hidden w-full flex-col gap-y-6 xl:flex">
        <div className="w-[355px] rounded-xl bg-gray-50 p-6">
          <div className="w-12 rounded-lg  border border-gray-200 shadow-sm bg-white  text-gray-700 p-3 ">
            <IoSearchOutline className="h-6 w-6 text-gray-700"></IoSearchOutline>
          </div>
          {/* Card  */}
          <div className=" max-w-sm flex-shrink-0 rounded-2xl pt-4  ">
            <div className="">
              <h2 className="mb-2 text-xl font-medium ">
                Find your dream temote job
              </h2>
            </div>

            <p className="mb-5 text-gray-600 ">
              Create a profile and we'll match you with relevant remote jobs for free.
            </p>
            <div className="mb-6">
              <div className="mb-4 flex flex-row items-center">
                <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
                <p className="text-gray-600">Share your job search statuss</p>
              </div>
              <div className="mb-4 flex flex-row items-center">
                <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
                <p className="text-gray-600">Get discovered by top companies</p>
              </div>
              <div className="mb-4 flex flex-row items-center">
                <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
                <p className="text-gray-600">Set salary expectations upfront</p>
              </div>
              <div className="mb-4 flex flex-row items-center">
                <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
                <p className="text-gray-600">Automatically discover relevant role</p>
              </div>
            </div>
            <a
              className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] py-3 px-5 w-full"
              href="/"
            >
              Sign up for free
            </a>
          </div>

        </div>
        {/* Related Searches */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow transition-all ease-in-out md:p-6 flex flex-col cursor-default gap-y-6 md:hover:shadow-none">
          <h2 className="mb-0 mt-0 text-lg font-medium text-gray-900 md:text-xl ">Related Searches</h2>
          <div className="flex flex-col gap-y-4">
            <Link to={'/'}> <span>Python Software Developer</span></Link>
            <Link to={'/'}> <span>Python Engineer</span></Link>
            <Link to={'/'}> <span>Python Backend Engineer</span></Link>
            <Link to={'/'}> <span>Python Developer</span></Link>
            <Link to={'/'}> <span>PostgreSQL</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsMatches;
