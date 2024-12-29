
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import JobBoard from "./JobBoard";


const TalentProfile = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-16 md:px-8 md:py-24 ">
      <div className="no-scrollbar -mt-28 mb-8 flex flex-col items-center justify-items-center gap-y-6 overflow-x-auto md:-mx-8 md:-mt-44 md:mb-16 md:flex-row md:gap-x-6 md:px-8">
        {/* Card 1 */}
        <div className="mb-8 max-w-sm flex-shrink-0 rounded-2xl border border-gray-200 bg-white  px-6 py-8 shadow-lg md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-xl font-medium text-violet-700">
              Talent profile
            </h2>
          </div>
          <div className="mb-2 flex flex-row justify-center items-end ">
            <span className="mr-0.5 mt-2 self-start text-3xl font-medium text-gray-900 md:text-4xl">
              $
            </span>
            <span className="mr-1 text-5xl font-medium text-gray-900 md:text-6xl">
              0
            </span>
          </div>
          <p className="text-center text-gray-600 ">
            A Himalayas profile is the easiest way to find a remote job. Create
            yours today.
          </p>
          <div className="my-8 w-full">
            <div className="w-full border-b border-gray-200"></div>
          </div>
          <div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">
                Showcase your skills and preferences
              </p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Set salary expectations upfront</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Get matched with relevant jobs</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Save jobs and apply later</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">$9 / month to unlock AI features</p>
            </div>
            <div className="mb-8 flex flex-row items-center">
              <img
                className="mr-2 h-6 w-6 flex-shrink-0"
                src="https://i.ibb.co.com/m5gC4H0/Himalayas-Logo1.png"
                alt=""
              />
              <p className="text-gray-600">
                We contribute 10% of revenue to removing CO₂ from the atmosphere
              </p>
            </div>
          </div>
          <a
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] py-3 px-5 w-full"
            href="/"
          >
            Edit your profile
          </a>
        </div>
        {/* Card 2 */}
        <div className="mb-8 max-w-sm flex-shrink-0 rounded-2xl border border-gray-200 bg-white  px-6 py-8 shadow-lg md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-xl font-medium text-violet-700">
              Company profile
            </h2>
          </div>
          <div className="mb-2 flex flex-row justify-center items-end ">
            <span className="mr-0.5 mt-2 self-start text-3xl font-medium text-gray-900 md:text-4xl">
              $
            </span>
            <span className="mr-1 text-5xl font-medium text-gray-900 md:text-6xl">
              0
            </span>
          </div>
          <p className="text-center text-gray-600 ">
            Our company profiles are free to create. Hire your next remote
            employee with us.
          </p>
          <div className="my-8 w-full">
            <div className="w-full border-b border-gray-200"></div>
          </div>
          <div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Post unlimited jobs at no cost</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Showcase your company</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Add your team members</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Share tech stack and benefits</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Message talent on Himalayas</p>
            </div>
            <div className="mb-8 flex flex-row items-center">
              <img
                className="mr-2 h-6 w-6 flex-shrink-0"
                src="https://i.ibb.co.com/m5gC4H0/Himalayas-Logo1.png"
                alt=""
              />
              <p className="text-gray-600">
                We contribute 10% of revenue to removing CO₂ from the atmosphere
              </p>
            </div>
          </div>
          <a
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] py-3 px-5 w-full"
            href="/"
          >
            Create company profile
          </a>
        </div>
        {/* Card 3 */}
        <div className="mb-8 max-w-sm flex-shrink-0 rounded-2xl border border-gray-200 bg-white  px-6 py-8 shadow-lg md:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-2 text-xl font-medium text-violet-700">
              Pinned job post
            </h2>
          </div>
          <div className="mb-2 flex flex-row justify-center items-end ">
            <span className="mr-0.5 mt-2 self-start text-3xl font-medium text-gray-900 md:text-4xl">
              $
            </span>
            <span className="mr-1 text-5xl font-medium text-gray-900 md:text-6xl">
              199
            </span>
            <span className="mb-2 text-gray-600">per job</span>
          </div>

          <p className="text-center text-gray-600 ">
            <span className="text-violet-600 font-medium">
              20x more views and applications than a standard job post.
            </span>
          </p>
          <div className="my-8 w-full">
            <div className="w-full border-b border-gray-200"></div>
          </div>
          <div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Top placement in search results</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Highlighted to attract attention</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Job post is live for 30 days</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Priority support from founders</p>
            </div>
            <div className="mb-4 flex flex-row items-center">
              <IoIosCheckmarkCircleOutline className="mr-2 h-7 w-7 text-violet-600"></IoIosCheckmarkCircleOutline>
              <p className="text-gray-600">Paid extras to boost your job</p>
            </div>
            <div className="mb-8 flex flex-row items-center">
              <img
                className="mr-2 h-6 w-6 flex-shrink-0"
                src="https://i.ibb.co.com/m5gC4H0/Himalayas-Logo1.png"
                alt=""
              />
              <p className="text-gray-600">
                We contribute 10% of revenue to removing CO₂ from the atmosphere
              </p>
            </div>
          </div>
          <a
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] py-3 px-5 w-full"
            href="/"
          >
            Post a job
          </a>
        </div>
      </div>
      {/*  */}
      <JobBoard></JobBoard>
      
    </div>
  );
};

export default TalentProfile;
