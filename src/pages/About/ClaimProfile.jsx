import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const ClaimProfile = () => {
  const markets = [
    {
      no: 1,
      link: "#",
      name: "Remote Work",
    },
    {
      no: 2,
      link: "#",
      name: "Job Board",
    },
    {
      no: 3,
      link: "#",
      name: "Human Resources",
    },
    {
      no: 4,
      link: "#",
      name: "Remote Tools",
    },
    {
      no: 5,
      link: "#",
      name: "Recruitment",
    },
    {
      no: 6,
      link: "#",
      name: "Recruiting",
    },
  ];
  return (
    <div className="w-full">
      <section className="h-max w-full rounded-xl border border-gray-200 p-5 xl:p-6">
        <Link
          className="-mx-5 -mt-5 mb-5 flex justify-center rounded-t-xl bg-[#6B46C1] py-2 text-sm font-medium text-white transition-colors hover:bg-[#553C9A] xl:-mx-6 xl:-mt-6"
          to="#"
        >
          Claim this profile
        </Link>
        <Link className="mb-6 flex items-center gap-x-3" to="#">
          <span className="relative inline-block h-12 w-12 flex-shrink-0">
            <img alt="Jobs Zone Logo" className="absolute h-full w-full rounded-full bg-white" src={logo} />
          </span>
          <div className="flex items-center">
            <h2 className="text-xl font-medium text-gray-900">Jobs Zone</h2>
            <button>
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 h-4 w-4">
                <path
                  d="M4.329 2.043a1.396 1.396 0 012.055-.851l.911.533c.436.255.974.255 1.41 0l.911-.533a1.396 1.396 0 012.055.851l.268 1.021c.127.488.508.87.996.997l1.022.268a1.396 1.396 0 01.851 2.055l-.533.911a1.396 1.396 0 000 1.41l.533.911a1.396 1.396 0 01-.851 2.055l-1.022.268a1.396 1.396 0 00-.996.996l-.268 1.022a1.396 1.396 0 01-2.055.851l-.911-.533a1.396 1.396 0 00-1.41 0l-.911.533a1.396 1.396 0 01-2.055-.851l-.268-1.022a1.396 1.396 0 00-.997-.996l-1.02-.268a1.396 1.396 0 01-.852-2.055l.533-.911a1.396 1.396 0 000-1.41l-.533-.911a1.396 1.396 0 01.851-2.055l1.021-.268c.488-.127.87-.509.997-.997l.268-1.02z"
                  fill="#0788F5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.133 5.903a.75.75 0 00-1.266-.806L6.93 9.712l-1.344-1.68a.75.75 0 00-1.172.937l2 2.5a.75.75 0 001.22-.066l3.5-5.5z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </Link>
        <div className="mb-6 flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-sm font-medium text-gray-500">Company size</h3>
            <p className="inline-flex items-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                className="mr-2 h-5 w-5 text-gray-400"
                aria-labelledby="abp5icrv18k05bd6dtc0n4ddybfmc801"
              >
                <path
                  d="M18.333 17.5v-1.667a3.335 3.335 0 00-2.5-3.228m-2.916-9.863a3.334 3.334 0 010 6.182m1.25 8.576c0-1.553 0-2.33-.254-2.942a3.333 3.333 0 00-1.804-1.804c-.613-.254-1.39-.254-2.942-.254h-2.5c-1.554 0-2.33 0-2.943.254a3.334 3.334 0 00-1.804 1.804c-.253.612-.253 1.389-.253 2.942M11.25 5.833a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              1-10
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-sm font-medium text-gray-500">Founded in</h3>
            <p className="text-gray-900">2020</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-sm font-medium text-gray-500">Markets</h3>
            <div className="flex flex-wrap gap-2">
              {markets.map((market) => (
                <Link
                  key={market?.no}
                  className="inline-flex items-center border rounded-md font-medium h-max text-xs px-2 py-0.5 w-max bg-white hover:bg-gray-50"
                  to={market?.link}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height={8}
                    viewBox="0 0 8 8"
                    width={8}
                    className="-ml-0.5 mr-1 flex-shrink-0 fill-primary-500 stroke-primary-500"
                  >
                    <circle cx={4} cy={4} fill="#6B46C1" r={3} />
                  </svg>
                  <span className="max-w-[11.25rem] ">{market?.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-sm font-medium text-gray-500">Employees live in</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                className="inline-flex items-center justify-center border rounded-md font-medium w-max h-max rounded-l-2xl text-xs pr-2 pl-[0.1875rem] pt-[0.1875rem] pb-0.5 bg-white hover:bg-gray-50"
                to="#"
              >
                <img className="mr-1.5 h-4 w-4" title="au" src="https://hatscripts.github.io/circle-flags/flags/au.svg" />
                Australia
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500">Social media</h3>
            <div className="flex gap-x-3">
              <Link
                to="#"
                className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg duration-150 h-max border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 px-2.5 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-gray-500"
                  aria-labelledby="a52e448tcl6f4b5xzycxuz44bckowyj4"
                >
                  <path
                    d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg duration-150 h-max border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 px-2.5 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-gray-500"
                  aria-labelledby="aqmrn8dt75h0p99krxzpxqyeoza4k1x8"
                >
                  <path
                    d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg duration-150 h-max border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 px-2.5 py-2.5"
              >
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500">
                  <g clipPath="url(#clip0_7204_32067)" fill="currentColor">
                    <path d="M10 1.8c2.672 0 2.988.012 4.04.06.976.042 1.503.206 1.855.343.464.18.8.399 1.148.746.352.352.566.684.746 1.149.137.351.3.882.344 1.855.047 1.055.058 1.371.058 4.04 0 2.671-.011 2.987-.058 4.038-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.077 3.077 0 01-1.148.746c-.352.137-.883.301-1.856.344-1.055.047-1.371.059-4.039.059-2.672 0-2.988-.012-4.04-.059-.976-.043-1.503-.207-1.855-.344-.464-.18-.8-.398-1.148-.746a3.076 3.076 0 01-.746-1.148c-.137-.352-.3-.883-.344-1.856-.047-1.054-.058-1.37-.058-4.039 0-2.672.011-2.988.058-4.039.043-.976.207-1.504.344-1.855.18-.465.398-.801.746-1.149a3.076 3.076 0 011.148-.746c.352-.137.883-.3 1.856-.344 1.05-.046 1.367-.058 4.039-.058zM10 0C7.285 0 6.945.012 5.879.059 4.816.105 4.086.277 3.453.523A4.88 4.88 0 001.68 1.68 4.9 4.9 0 00.523 3.45C.277 4.085.105 4.811.06 5.874.012 6.945 0 7.285 0 10s.012 3.055.059 4.121c.046 1.063.218 1.793.464 2.426.258.66.598 1.219 1.157 1.773a4.888 4.888 0 001.77 1.153c.636.246 1.362.418 2.425.465 1.066.046 1.406.058 4.121.058 2.715 0 3.055-.012 4.121-.058 1.063-.047 1.793-.22 2.426-.465a4.888 4.888 0 001.77-1.153 4.888 4.888 0 001.152-1.77c.246-.636.418-1.363.465-2.425.047-1.066.058-1.406.058-4.121 0-2.715-.011-3.055-.058-4.121-.047-1.063-.22-1.793-.465-2.426A4.683 4.683 0 0018.32 1.68 4.889 4.889 0 0016.55.527C15.915.281 15.188.11 14.126.062 13.055.012 12.715 0 10 0z" />
                    <path d="M10 4.863A5.138 5.138 0 004.863 10a5.138 5.138 0 0010.273 0c0-2.836-2.3-5.137-5.136-5.137zm0 8.469a3.333 3.333 0 11.001-6.665A3.333 3.333 0 0110 13.332zM16.54 4.66a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7204_32067">
                      <path fill="#fff" d="M0 0H20V20H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg duration-150 h-max border border-gray-200 shadow-xs hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 text-base px-4.5 py-2.5 w-full"
          to="#"
        >
          Visit himalayas.app
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-labelledby="ashpavr6amrnb4gytsu97xfvwos80zy8"
            className="ml-2 h-5 w-5 -rotate-45 stroke-current"
          >
            <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default ClaimProfile;
