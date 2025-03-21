import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="flex items-center md:flex-row flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12">
      <div className="w-full lg:max-w-3xl pb-8 py-20 space-y-6">
        <h1 style={{ lineHeight: '3.5rem' }} className="font-semibold text-4xl sm:text-5xl">
          Top Remote Job Board with Powerful AI Job Search Tools
        </h1>
        <p className="md:text-lg text-gray-900/90 font-medium">
          Find remote jobs, research top remote companies, and track your job applications—all for free! Unlock unlimited access to our AI-powered resume builder, cover letter generator, and mock interview practice for just $9/month.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/jobs"
            className="border py-3 px-6 "
          >
            Hire remote workers
          </Link>
          <Link
            to="/jobs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-medium rounded-lg bg-[#6b46c1] text-white hover:bg-[#553c9a] focus:ring-4 focus:ring-[#f5ebff] disabled:bg-[#e9d8fd] text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-5"
          >
            <LuSearch />
            Find a job
          </Link>
        </div>
      </div>

      <div className="w-full lg:max-w-[25rem] mt-6 sm:mt-8 mb-6 sm:mb-12 lg:mt-0 lg:mb-0">
        <div className="relative w-full h-auto">
          <img
            src={banner}
            className="w-full h-auto object-cover rounded-lg"
            alt="Banner image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;