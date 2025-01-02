import { useState } from "react";
import { GrDown } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";

const RemoteJob = () => {
  const [isOpen, setIsOpen] = useState(false)

  const open =() =>{
    setIsOpen(!isOpen)
  }


  return (
    <div className="job-baground">
      {/* pt-40 instead pt-16  */}
      <div className="max-w-7xl mx-auto px-4 pt-40 ">
        <h2 className="mb-3 text-3xl font-medium text-gray-900 md:mb-5 md:text-5xl">
          Remote Jobs
        </h2>
        <p className="mb-8 text-gray-700 md:text-xl xl:mb-10">
          Discover the best remote and work from home jobs at top remote
          companies.
        </p>
        <div className="flex flex-col w-full">
          <div className="mb-6 flex w-full flex-col xl:mb-12">
            <div className="flex  flex-col gap-y-3 xl:flex-row xl:gap-x-[3px]">
              <div className="bg-[#FFFFFF] flex w-full flex-row gap-x-2 py-3 xl:py-4 items-center relative overflow-visible pl-[42px] pr-[14px] xl:rounded-none outline-none rounded-lg xl:border-none focus-within:border-violet-400 xl:focus-within:border-none  focus-within:ring-4 xl:focus-within:ring-0 focus-within:ring-violet-100  ">
                <LuSearch className="w-7 h-7 "></LuSearch>
                <span className="w-full flex justify-between items-center">
                  <input
                    type="text"
                    className="w-full outline-none text-xl"
                    placeholder="Job title or skill"
                  />
                  <button className="btn btn-primary" onClick={open}><GrDown className={`${isOpen === true && 'rotate-180'}`}></GrDown></button>
                </span>
                {isOpen && (<p className="absolute top-12 right-4">Good jobs</p>)}
              </div>
              <div className="bg-[#FFFFFF] flex w-full flex-row gap-x-2 py-3 xl:py-4 items-center relative overflow-visible pl-[42px] pr-[14px] xl:rounded-none outline-none rounded-lg xl:border-none focus-within:border-violet-400 xl:focus-within:border-none  focus-within:ring-4 xl:focus-within:ring-0 focus-within:ring-violet-100 ">
                <LuSearch className="w-7 h-7 "></LuSearch>
                <span className="w-full flex justify-between items-center">
                  <input
                    type="text"
                    className="w-full outline-none text-xl"
                    placeholder="Country or timezone"
                  />
                  <GrDown></GrDown>
                </span>
              </div>
              <div className="mt-1 flex h-min gap-x-3 items-center xl:mt-0 xl:bg-white xl:px-4  py-3 xl:py-4">
                <button className="hidden xl:block">Clear</button>
                <button className="inline-flex gap-x-2  font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-red-100 text-[16px] py-3 px-5 w-full ">
                  Search
                </button>
              </div>
            </div>
            {/* Hidden section */}
            <div className="mt-[1px] hidden gap-x-4 xl:gap-x-8 bg-white px-8 py-4 xl:flex xl:pr-28">
                <button className="flex w-full gag-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] px-4 py-2 justify-between ">
                    <span>Experience level</span><GrDown className="text-gray-700 ml-2 h-4 w-4 shrink-0 "></GrDown>
                </button>
                <button className="flex w-full gag-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] px-4 py-2 justify-between ">
                    <span>Salary range</span><GrDown className="text-gray-700 ml-2 h-4 w-4 shrink-0 "></GrDown>
                </button>
                <button className="flex w-full gag-x-2 font-medium items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] px-4 py-2 justify-between ">
                    <span>Job type</span><GrDown className="text-gray-700 ml-2 h-4 w-4 shrink-0 "></GrDown>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteJob;
