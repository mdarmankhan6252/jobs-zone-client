import { FaArrowRightLong } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";


const FindRemoteJob = () => {
    const jobs = [0, 1, 2, 3, 4, 5]
  return (
    <div className="bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 py-16   md:py-24 md:px-8 ">
        <div className="flex items-center space-x-3">
          <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
          <p className="text-[16px]">Find a remote job</p><span className="hover:translate-x-5 duration-500 hover:transition-transform"><FaArrowRightLong size={20}></FaArrowRightLong> </span>
        </div>
        <div className="flex justify-between items-center my-12">
            <div >
                <h1 className="mb-3 md:mb-4 text-2xl md:text-3xl font-semibold">Explore 40,000+ remote job opportunities</h1>
                <p className="md-8  text-gray-600 md:text-xl text-lg ">Personalized filters make it quick and easy to find the jobs you care about.</p>
            </div>
            <div>
                <button className="btn hover:bg-[#553C9A] bg-[#6a4ac3] text-white font-semibold py-3 px-6 rounded-lg"> Search Job</button>
            </div>
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-8">
            {
                jobs.map((job, i) =><Link key={i} to={'/'}>
                    <div className="hover:shadow-[0px_0px_7px_0px] hover:shadow-gray-400 duration-300 p-8 border border-gray-300 rounded-xl">
                        <div className="flex justify-between items-center">
                            <span className="bg-[#DBEAFE] text-green-600 p-3 rounded-full"><BsBox size={25} ></BsBox></span>
                            <img src="https://i.ibb.co.com/2yNgPDZ/find-Remote-Job.png" alt="photo" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">Remote developer jobs</h2>
                            <p className="text-[16px] text-gray-600 line-clamp-2 ">Explore remote jobs at companies like Imprint, Kojo and PermitFlow </p>
                        </div>
                    </div>
                </Link>)
            }
            
        </div>
      </div>
    </div>
  );
};

export default FindRemoteJob;
