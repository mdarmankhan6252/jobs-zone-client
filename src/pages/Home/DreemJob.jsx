import { FcGoogle } from "react-icons/fc";

const DreemJob = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 pb-16  md:pb-24 md:px-8 ">
      <div className="flex flex-col gap-y-6 overflow-hidden rounded-2xl bg-gray-50 md:gap-y-10 xl:flex-row xl:items-center xl:gap-x-0 xl:py-5">
        <div className="flex flex-col gap-y-6 px-6 pt-10 md:gap-y-8 md:px-16 md:pt-16 xl:p-16 ">
          <div className="flex flex-col gap-y-2 md:gap-y-4 xl:w-[30rem]">
            <h1 className="text-2xl md:text-4xl font-medium">
              Find your dream job
            </h1>
            <p className="text-gray-600 md:text-xl text-lg">
              Sign up now and join over 20,000 remote workers who receive
              personalized job alerts, curated job matches, and more for free!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="inline-flex gap-x-2 font-medium justify- items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100  border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] py-3 px-5 w-full md:w-max ">
              <FcGoogle size={25}></FcGoogle> <span>Sign in with google</span>
            </button>
            <a
              className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-red-100 text-[16px] py-3 px-5 w-full md:w-max"
              href="/"
            >
              Sign up
            </a>
          </div>
        </div>
        <div>
          <div className="relative flex items-center xl:items-baseline ">
            <img
              alt="Pic"
              width="1200"
              height="800"
              className="translate-x-6 text-transparent translate-y-6 transform rounded-xl border-4 border-gray-900 object-cover object-left-top md:translate-x-12 xl:translate-x-6 xl:translate-y-7"
              src="https://cdn-images.himalayas.app/himalayas-profile-mockup.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreemJob;
