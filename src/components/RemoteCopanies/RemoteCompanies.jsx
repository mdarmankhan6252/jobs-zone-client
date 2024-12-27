import mozila365 from "../../assets/images/mozila365.png";
import nethermide from "../../assets/images/nethermide.png";
import resturent from "../../assets/images/resturent.png";
import RemoteCompaniesCard from "./RemoteCopaniesCard";

const RemoteCompanies = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-wrap items-center gap-4 py-10 space-y-6">
        {/* Company Logos */}
        <div className="flex items-center -space-x-3">
          <img
            src={mozila365}
            alt="Mozilla"
            className="z-30 w-10 h-10 border border-gray-200 rounded-full"
          />
          <img
            src={resturent}
            alt="Restaurant365"
            className="z-20 w-10 h-10 border border-gray-200 rounded-full"
          />
          <img
            src={nethermide}
            alt="Nethermide"
            className="z-10 w-10 h-10 border border-gray-200 rounded-full"
          />
        </div>
        {/* Company Info */}
        <div className="flex items-center justify-center">
          <p className="-mt-6 text-sm font-medium text-gray-700 ">
            3,813 remote companies
          </p>
          <span className="-mt-6 text-lg text-gray-500">→</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Text Content */}
        <div className="text-left ">
          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Discover the world's best remote companies
          </h1>
          <p className="mt-2 text-lg text-gray-600text-left">
            Discover tech stacks, employee benefits, and open roles.
          </p>
        </div>
        {/* Button */}

        <button className="px-6 py-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
          View all companies
        </button>
      </div>
      <RemoteCompaniesCard />
    </div>
  );
};

export default RemoteCompanies;
