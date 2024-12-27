import nethermide from "../../assets/images/nethermide.png";

const RemoteCompaniesCard = () => {
  return (
    <div className="p-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        {/* Top section with logo and button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <img
            src={nethermide}
            alt="Nethermind Logo"
            className="w-10 h-10 rounded-full"
          />
          <button className="px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200">
            42 jobs
          </button>
        </div>

        {/* Company name and links */}
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold text-gray-800">Nethermind</h2>
          <div className="flex justify-between mt-2 text-blue-600">
            <a href="#" className="text-sm hover:underline">
              Benefits
            </a>
            <a href="#" className="text-sm hover:underline">
              Tech stack
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="px-4 py-2 text-sm text-gray-600">
          The easiest solutions to the hardest problems in blockchain.
        </p>

        {/* Tags */}
        <div className="flex gap-2 px-4 py-2">
          <span className="px-3 py-1 text-xs text-purple-800 bg-purple-100 rounded-full">
            Blockchain
          </span>
          <span className="px-3 py-1 text-xs text-purple-800 bg-purple-100 rounded-full">
            Ethereum
          </span>
        </div>
      </div>
    </div>
  );
};

export default RemoteCompaniesCard;
