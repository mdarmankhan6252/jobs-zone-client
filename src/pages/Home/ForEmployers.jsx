import { Link } from "react-router-dom";

const ForEmployers = () => {
  return (
    <div className="bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 py-16  md:pt-24 md:px-8 ">
        <div className="mb-12 md:mb-16 xl:flex xl:justify-between xl:items-center ">
          <div className="md:max-w-3xl">
            <p className="text-sm  md:text-[16px] text-[#6B46C1] font-medium mb-2 ">
              For employers
            </p>
            <h1 className="mb-3 md:mb-4 text-2xl md:text-3xl font-semibold">
              Hire talented remote employees
            </h1>
            <p className="md-8  text-gray-600 md:text-xl text-lg ">
              Himalayas has a suite of tools to help you hire the best remote
              talent all over the world. Find talent, post jobs, and promote
              your employer brand to tens of thousands of motivated job seekers.
              It only takes a few minutes to create your company profile.
            </p>
          </div>
          <div>
            <button className="btn hover:bg-[#553C9A]  bg-[#6a4ac3] text-white font-medium text-base py-3 px-5 hidden min-w-max xl:block rounded-lg">
              create company profile
            </button>
          </div>
        </div>
        {/* Card section */}
        <div className=" grid grid-cols-1 gap-6 no-scrollbar overflow-x-auto bg-gray-50 pb-16 sm:px-4 md:-mx-8 md:flex md:px-8 md:pb-24 xl:place-content-center md:gap-8">
          <Link to={"/"}>
            <div className="shadow-xl bg-white border border-gray-200 rounded-xl p-5 transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer  px-6 overflow-hidden py-8 md:w-96 md:flex-shrink-0 md:px-8 md:py-8">
              <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-01.jpg')]">
                <div className="absolute inset-0 bg-feature-card-gradient"></div>
                <img
                  alt="pic"
                  width="768"
                  height="528"
                  src="https://cdn-images.himalayas.app/feature-card-one.webp"
                ></img>
              </div>
              <div className="flex flex-wrap justify-between ">
                <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
                  Create a free company profile
                </h2>
              </div>
              <p className="text-[16px] text-gray-600 mb-8 ">
                Use your company profile to tell your story, build up your
                remote brand, and recruit the best. Job seekers come to us to
                research and discover remote companies.
              </p>
              <a
                className="inline-flex gap-x-2 font-medium hover:bg-[#553C9A]  bg-[#6a4ac3] outline-none items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent  text-white hover:bg-primary-800   text-base py-3 px-5 min-w-full"
                href="/"
              >
                Create a company profile
              </a>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="shadow-xl bg-white border border-gray-200 rounded-xl p-5 transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer overflow-hidden px-6 py-8 md:w-96 md:flex-shrink-0 md:px-8 md:py-8">
              <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-02.jpg')]">
                <div className="absolute inset-0 bg-feature-card-gradient"></div>
                <img
                  alt="pic"
                  width="768"
                  height="528"
                  src="https://cdn-images.himalayas.app/feature-card-two.webp"
                ></img>
              </div>
              <div className="flex flex-wrap justify-between ">
                <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
                  Sophisticated job listings
                </h2>
              </div>
              <p className="text-[16px] text-gray-600 mb-8 ">
                Specify time zone, visa, and skill requirements and get in front
                of the most relevant candidates. Promote your jobs to the
                world's best remote talent.
              </p>
              <a
                className="inline-flex gap-x-2 font-medium hover:bg-[#553C9A]  bg-[#6a4ac3] outline-none items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent  text-white hover:bg-primary-800   text-base py-3 px-5 min-w-full"
                href="/"
              >
                Post a job
              </a>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="shadow-xl bg-white border border-gray-200 rounded-xl p-5 transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer overflow-hidden px-6 py-8 md:w-96 md:flex-shrink-0 md:px-8 md:py-8">
              <div className="relative -mx-6 -mt-8 md:-mx-8 bg-[url('https://cdn-images.himalayas.app/gradient-bg-03.jpg')]">
                <div className="absolute inset-0 bg-feature-card-gradient"></div>
                <img
                  alt="pic"
                  width="768"
                  height="528"
                  src="https://cdn-images.himalayas.app/feature-card-three.webp"
                ></img>
              </div>
              <div className="flex flex-wrap justify-between ">
                <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
                  Share tech stack and culture
                </h2>
              </div>
              <p className="text-[16px] text-gray-600 mb-8 ">
                Showcase your tech stack, company culture, perks and benefits,
                and more. We'll help you tell your story to make sure you
                attract the best talent.
              </p>
              <a
                className="inline-flex gap-x-2 font-medium hover:bg-[#553C9A]  bg-[#6a4ac3] outline-none items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent  text-white hover:bg-primary-800   text-base py-3 px-5 min-w-full"
                href="/"
              >
                Showcase employee brand
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForEmployers;
