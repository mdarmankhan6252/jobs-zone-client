import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 py-12  md:pt-16 md:px-8 ">
      <a href="/">
        {" "}
        <img
          className="mb-8 h-6 md:h-8"
          src="https://i.ibb.co.com/C9d23Nw/Himalayas.png"
          alt=""
        />{" "}
        <span className="sr-only">Himalayas logo</span>{" "}
      </a>
      <a href="mailto:hi@himalayas.app" className="font-medium text-gray-600">
        hi@himalayas.app
      </a>
      <div className="mb-12 mt-8 flex items-center justify-between md:mb-16 text-gray-500">
        <div className="flex flex-row items-center gap-3">
          <a
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700  focus:ring-gray-100 px-2.5 py-2.5"
            href="/"
          >
            <FaFacebook size={25} className="h-5 w-5 fill-current"></FaFacebook>
            <span className="sr-only">Facebook</span>
          </a>
          <a
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700  focus:ring-gray-100 px-2.5 py-2.5"
            href="https://www.linkedin.com/company/himalayasapp"
          >
            <FaLinkedin className="h-5 w-5 fill-current"></FaLinkedin>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <a className="h-10 w-auto cursor-pointer" target="_blank" href="/">
          <img
            src="https://cdn-images.himalayas.app/google-play.png"
            width="135"
            className="cursor-pointer"
            height="40"
            alt="Google"
          />
        </a>
      </div>
      <div className="md-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-2 md:gap-x-24 xl:grid-cols-3">
        <div className="flex flex-col gap-3 text-[16px] font-medium text-gray-600">
          <p className="mb-1 text-sm font-medium text-gray-900">Himalayas</p>
          <a href="/">Himalayas</a>
          <a href="/">About us</a>
          <a href="/">Community</a>
          <a href="/">Tech stack</a>
          <a href="/">Employee benefits</a>
          <a href="/">Terms and conditions</a>
          <a href="/">Privacy policy</a>
          <a href="/">Contact us</a>
        </div>
        <div className="flex flex-col gap-3 text-[16px] font-medium text-gray-600">
          <p className="mb-1 text-sm font-medium text-gray-900">
            For job seekers
          </p>
          <a href="/">Create your profile</a>
          <a href="/">AI job search tools</a>
          <a href="/">Job application tracker</a>
          <a href="/">AI resume builder</a>
          <a href="/">AI cover letter generator</a>
          <a href="/">Cover letter examples</a>
          <a href="/">AI interview prep</a>
          <a href="/">Free resume builder</a>
          <a href="/">Resume summary generator</a>
          <a href="/">Resume bullet points generator</a>
          <a href="/">Resume skills section generator</a>
          <a href="/">Browse remote jobs</a>
          <a href="/">Remote jobs RSS</a>
          <a href="/">Remote jobs API</a>
          <a href="/">Discover remote companies</a>
          <a href="/">Remote work advice</a>
          <a href="/">Community rewards</a>
        </div>
        <div className="flex flex-col gap-3 text-[16px] font-medium text-gray-600">
          <p className="mb-1 text-sm font-medium text-gray-900">
            For companies
          </p>
          <a href="/">Post a remote job</a>
          <a href="/">Job description generator</a>
          <a href="/">Interview question generator</a>
          <a href="/">Remote talent marketplace</a>
          <a href="/">Create a company profile</a>
          <a href="/">Add your tech stack</a>
          <a href="/">Share employee benefits</a>
          <a href="/">Pricing</a>
        </div>
        <div className="flex flex-col gap-3 text-[16px] font-medium text-gray-600">
          <p className="mb-1 text-sm font-medium text-gray-900">
            Remote work statistics
          </p>
          <a href="/">Top remote job categories</a>
          <a href="/">Top remote job skills</a>
          <a href="/">Top countries for remote jobs</a>
          <a href="/">Top industries for remote jobs</a>
          <a href="/">Top countries for remote companies</a>
          <a href="/">Top industries for remote companies</a>
        </div>
        <div className="flex flex-col gap-3 text-[16px] font-medium text-gray-600">
          <p className="mb-1 text-sm font-medium text-gray-900">Other tools</p>
          <a href="/">Job search checklist</a>
          <a href="/">Job application checklist</a>
          <a href="/">Resume checklist</a>
          <a href="/">Cover letter checklist</a>
          <a href="/">Interview preparation checklist</a>
          <a href="/">Transferable skills checklist</a>
          <a href="/">Resignation letter generator</a>
          <a href="/">Letter of recommendation generator</a>
        </div>
      </div>
      <div className="flex w-full flex-col border-t border-gray-100 py-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="mb-2 font-medium text-gray-900">
            Join the remote work revolution
          </p>
          <p className="mb-5 text-gray-600 xl:mb-0">
            Join over 20,000 job seekers who get tailored alerts and access to
            top recruiters.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-3 md:flex-row"><button className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100 border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-base py-3 px-5 w-full md:w-max">
        <FcGoogle size={25} className="h-auto"></FcGoogle> Sign up with Google</button>
        <a className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] py-3 px-5 w-full md:w-max" href="/signup">Sign up</a></div>
      </div>
      <div className="w-full border-t border-gray-100 pt-8"><p className="text-gray-600">© 2024 Himalayas. All rights reserved. Built with <a className="font-medium hover:text-gray-700" href="/">Untitled UI</a>. Logos provided by <a className="font-medium hover:text-gray-700" href="/">Logo.dev</a></p></div>
    </div>
  );
};

export default Footer;
