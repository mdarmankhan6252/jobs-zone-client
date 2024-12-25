import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import bannerHorizontalMd from "../../assets/images/home-banner-horizontal-md.png";
import bannerHorizontalSm from "../../assets/images/home-banner-horizontal-sm.png";
import bannerVertical from "../../assets/images/home-banner-vertical.png";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row justify-between px-4 sm:px-8 xl:px-0">
      <div className="md:max-w-3xl pb-12 md:pb-24 xl:pb-[7.5rem] xl:pt-[8.5rem]">
        <h1 className="mb-3 text-balance text-3xl font-medium md:mb-4 md:text-[3rem] md:leading-[3.75rem] tracking-[-0.06rem]">
          The best remote job board and AI job search tools
        </h1>
        <p className="mb-8 text-base text-gray-700 md:mb-10 md:text-xl md:leading-[1.875rem]">
          Find <Link to="#">remote jobs</Link>, research <Link to="#">remote companies</Link>, and <Link to="#">track job applications</Link> for free. Unlock
          unlimited access to our <Link to="#">AI-powered resume builder</Link>, <Link to="#">cover letter generator</Link>, and{" "}
          <Link to="#">mock interviewer</Link> for just $9/month.
        </p>

        <div className="flex w-full flex-col-reverse gap-3 md:w-max md:flex-row">
          <a
            href="#"
            className="font-medium rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700  focus:ring-gray-100 text-base py-3 px-5"
          >
            Hire remote workers
          </a>
          <a
            href="#"
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-[#6b46c1] text-white hover:bg-[#553c9a] disabled:bg-[#e9d8fd] focus:ring-[#f5ebff] text-base py-3 px-5"
          >
            <LuSearch />
            Find a job
          </a>
        </div>
      </div>

      <div>
        <div className="relative w-full xl:max-w-[25rem] h-full mt-4 sm:mt-8 mb-9 sm:mb-12 xl:mt-0 xl:mb-0">
          {/* banner img for mobile */}
          <img src={bannerHorizontalSm} className="size-full object-cover block md:hidden" alt="Banner image horizontal for mobile" />

          {/* banner img for tablet */}
          <img src={bannerHorizontalMd} className="size-full object-cover hidden md:block xl:hidden" alt="Banner image horizontal tablet" />

          {/* banner img for desktop */}
          <img src={bannerVertical} className="size-full object-cover hidden xl:block" alt="Banner image vertical" />

          {/* button on hover */}
          <div
            id="search-all-job-overlay"
            className="absolute size-full top-0 hidden xl:flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500"
          >
            <a
              href="#"
              className="w-max inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-base py-3 px-5"
            >
              <LuSearch />
              Search all jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
