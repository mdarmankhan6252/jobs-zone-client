import { FaArrowRightLong } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";


const FindRemoteJob = () => {
  return (
    <>
      <div className="bg-[#F9F9FB] px-3 py-24">
        <div className="flex items-center space-x-3">
          <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
          <p className="text-lg">Find a remote job</p><span className="hover:translate-x-5 duration-500 hover:transition-transform"><FaArrowRightLong size={20}></FaArrowRightLong> </span>
        </div>
        <div className="flex justify-between items-center my-12">
            <div >
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Explore 40,000+ remote job opportunities</h1>
                <p className="text-sm md:text-xl text-[#888E9A] mt-2">Personalized filters make it quick and easy to find the jobs you care about.</p>
            </div>
            <div>
                <button className="btn hover:bg-[#553C9A] bg-[#6a4ac3] text-white font-semibold py-3 px-6 rounded-lg"> Search Job</button>
            </div>
        </div>
        {/* Card section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
            <Link to={'/'}>
            <div className="hover:shadow-xl p-8 border-2 border-gray-300 rounded-xl">
                <div className="flex justify-between items-center">
                    <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                    <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                </div>
                <div>
                    <h2 className="text-[#121926] text-lg md:text-xl font-bold pt-4 pb-2">Remote developer jobs</h2>
                    <p>Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                </div>
            </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default FindRemoteJob;
