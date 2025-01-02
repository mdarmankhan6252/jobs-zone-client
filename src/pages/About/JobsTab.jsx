import { Link } from "react-router-dom";

const JobsTab = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <h2 className="mb-4 text-2xl font-medium text-gray-900 md:mb-5">0 remote jobs at Jobs Zone</h2>
        <div className="my-8 flex flex-col items-center rounded-xl border border-gray-200 p-8 shadow-xs md:my-12">
          <span className="rounded-lg h-max border border-gray-200 shadow-xs p-3 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              aria-labelledby="anqh775nuw13b5kkjc6v8z5crs2decf2"
              className="h-6 w-6 text-gray-700"
            >
              <path
                d="M21 21l-3.5-3.5m2.5-6a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="mb-2 max-w-[360px] text-center text-xl font-medium text-gray-900">Jobs Zone has no job openings</h3>
          <p className="mb-8 max-w-[360px] text-center text-gray-600">
            Don&apos;t worry, there are over 40,000 remote jobs on Jobs Zone that you can apply to today.
          </p>
          <Link
            className="font-medium rounded-lg transition-colors h-max border border-transparent bg-[#6b46c1] text-white hover:bg-[#553c9a] text-base py-3 px-5"
            to="/jobs"
          >
            Browse remote jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsTab;
