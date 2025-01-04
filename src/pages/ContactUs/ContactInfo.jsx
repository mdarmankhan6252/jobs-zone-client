import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-y-10 gap-x-4 justify-center md:justify-between items-center py-28">
      <div className="text-center w-full max-w-[305px]">
        <div className="inline-flex size-14 flex-col justify-center items-center rounded-xl bg-[#d8d1eb4d] shadow-sm">
          <FiPhone className="text-2xl text-[#6b46c1]" />
        </div>

        <h5 className="mt-6 text-lg">Phone</h5>

        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

        <Link
          to="tel:+8801234567890"
          className="text-[#6b46c1] mt-5 block after:content-[''] after:block after:h-0.5 after:w-0 hover:after:w-1/2 after:bg-[#6b46c1] after:mt-2 after:mx-auto after:rounded-full after:transition-all after:duration-300 after:ease-in-out"
        >
          +880 123 456 7890
        </Link>
      </div>

      <div className="text-center w-full max-w-[305px]">
        <div className="inline-flex size-14 flex-col justify-center items-center rounded-xl bg-[#d8d1eb4d] shadow-sm">
          <LuMail className="text-2xl text-[#6b46c1]" />
        </div>

        <h5 className="mt-6 text-lg">Email</h5>

        <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>

        <Link
          to="mailto:contact@jobszone.com"
          className="text-[#6b46c1] mt-5 block after:content-[''] after:block after:h-0.5 after:w-0 hover:after:w-1/2 after:bg-[#6b46c1] after:mt-2 after:mx-auto after:rounded-full after:transition-all after:duration-300 after:ease-in-out"
        >
          contact@jobszone.com
        </Link>
      </div>

      <div className="text-center w-full max-w-[305px]">
        <div className="inline-flex size-14 flex-col justify-center items-center rounded-xl bg-[#d8d1eb4d] shadow-sm">
          <CiLocationOn className="text-2xl text-[#6b46c1]" />
        </div>

        <h5 className="mt-6 text-lg">Location</h5>

        <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, Houston, USA 485</p>

        <Link
          to="#"
          className="text-[#6b46c1] mt-5 block after:content-[''] after:block after:h-0.5 after:w-0 hover:after:w-1/2 after:bg-[#6b46c1] after:mt-2 after:mx-auto after:rounded-full after:transition-all after:duration-300 after:ease-in-out"
        >
          View on Google map
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
