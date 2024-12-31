import { useState } from "react";
import logo from "../../assets/logo.png";

const AboutHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  let headerText;
  if (activeTab === "Overview") {
    headerText = "Jobs Zone";
  } else if (activeTab === "Jobs") {
    headerText = "Jobs Zone's remote jobs";
  } else if (activeTab === "Salaries") {
    headerText = "Jobs Zone's remote salaries";
  } else if (activeTab === "Benefits") {
    headerText = "Jobs Zone's employee benefits";
  } else if (activeTab === "Tech_Stack") {
    headerText = "Jobs Zone's Tech Stack";
  } else {
    headerText = "Jobs Zone";
  }
  return (
    <div className="bg-[#F5F6F8] px-4 pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-16 md:px-8 md:pt-20">
        <div>
          <div className="flex flex-col gap-x-6 md:flex-row">
            <span className="inline-block h-16 w-16 mb-5 md:mb-0 md:h-20 md:w-20">
              <img alt="Jobs Zone Logo" className="h-full w-full rounded-full bg-white border-2 border-white shadow-sm md:border-4" src={logo} />
            </span>
            <div className="flex flex-1 flex-col">
              <div className="mb-3 flex items-center md:mb-5">
                <h1 className=" text-3xl font-medium text-gray-900 md:text-5xl">{headerText}</h1>
              </div>
              <p className="mb-8 text-gray-700 md:mb-16 md:text-xl">COVID-19 has caused a permanent shift towards remote work.</p>
            </div>
            <button className="gap-x-2 font-medium items-center justify-center rounded-lg duration-300 h-max border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 text-base py-3 px-5 hidden w-max xl:block">
              Share company
            </button>
          </div>
          <div className="-mx-4 overflow-x-auto">
            <div className="inline-flex items-center justify-center gap-x-4 px-4">
              <button
                onClick={() => setActiveTab("Overview")}
                className={
                  activeTab === "Overview"
                    ? "border-[#6B46C1] text-[#6B46C1] duration-150 border-transparent border-b-2 pb-4 text-sm font-medium md:text-base md:pb-3.5 px-1"
                    : "border-transparent border-b-2 pb-4 text-sm font-medium text-gray-500 hover:border-[#6B46C1] hover:text-[#6B46C1] md:text-base md:pb-3.5 px-1"
                }
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("Jobs")}
                className={
                  activeTab === "Jobs"
                    ? "border-[#6B46C1] text-[#6B46C1] duration-150 border-transparent border-b-2 pb-4 text-sm font-medium md:text-base md:pb-3.5 px-1"
                    : "border-transparent border-b-2 pb-4 text-sm font-medium text-gray-500 hover:border-[#6B46C1] hover:text-[#6B46C1] md:text-base md:pb-3.5 px-1"
                }
              >
                Jobs{" "}
                <div className="items-center border rounded-md w-max h-max border-gray-200 px-2 py-0.5 ml-2 hidden bg-white text-xs font-medium text-gray-900 md:inline-flex">
                  0
                </div>
              </button>
              <button
                onClick={() => setActiveTab("Salaries")}
                className={
                  activeTab === "Salaries"
                    ? "border-[#6B46C1] text-[#6B46C1] duration-150 border-transparent border-b-2 pb-4 text-sm font-medium md:text-base md:pb-3.5 px-1"
                    : "border-transparent border-b-2 pb-4 text-sm font-medium text-gray-500 hover:border-[#6B46C1] hover:text-[#6B46C1] md:text-base md:pb-3.5 px-1"
                }
              >
                Salaries
              </button>
              <button
                onClick={() => setActiveTab("Benefits")}
                className={
                  activeTab === "Benefits"
                    ? "border-[#6B46C1] text-[#6B46C1] duration-150 border-transparent border-b-2 pb-4 text-sm font-medium md:text-base md:pb-3.5 px-1"
                    : "border-transparent border-b-2 pb-4 text-sm font-medium text-gray-500 hover:border-[#6B46C1] hover:text-[#6B46C1] md:text-base md:pb-3.5 px-1"
                }
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("Tech_Stack")}
                className={
                  activeTab === "Tech_Stack"
                    ? "border-[#6B46C1] text-[#6B46C1] duration-150 border-transparent border-b-2 pb-4 text-sm font-medium md:text-base md:pb-3.5 px-1"
                    : "border-transparent border-b-2 pb-4 text-sm font-medium text-gray-500 hover:border-[#6B46C1] hover:text-[#6B46C1] md:text-base md:pb-3.5 px-1"
                }
              >
                Tech Stack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
