import { AiFillFlag } from "react-icons/ai";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { SlRocket } from "react-icons/sl";

const JobBoard = () => {
  return (
    <>
      <h2 className="mb-3 text-2xl font-medium text-gray-900 md:mb-4 md:text-3xl">
        A job board built for the remote world
      </h2>
      <p className="mb-12 max-w-3xl text-lg text-gray-600 md:mb-16 md:text-xl">
        Designed to match remote job openings to the right people across the
        globe, Himalayas is the best place to find and post remote jobs.
      </p>
      <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 md:gap-y-6 2xl:grid-cols-3">
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <path
                stroke="currentColor"
                d="m13.0001 14-3-3m5.0103-7.5V2m3.9394 3.0607L20.0104 4m-1.0606 9 1.0606 1.0607m-9-9L9.9498 4m10.5606 5h1.5M6.1314 20.8686l9.2373-9.2372c.396-.396.594-.5941.6682-.8224a1 1 0 0 0 0-.618c-.0742-.2284-.2722-.4264-.6682-.8224l-.7372-.7372c-.3961-.396-.5941-.594-.8224-.6682a1 1 0 0 0-.618 0c-.2284.0742-.4264.2722-.8224.6682l-9.2372 9.2372c-.396.396-.594.5941-.6682.8224a1 1 0 0 0 0 .618c.0741.2283.2722.4264.6682.8224l.7372.7372c.396.396.594.5941.8224.6682a1 1 0 0 0 .618 0c.2283-.0741.4264-.2722.8224-.6682"
              ></path>
            </svg>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Powerful AI tools
          </h4>
          <p className="text-base text-gray-600">
            For $9 / month, unlock our powerful AI interview preparation tool,
            cover letter generator, and resume builder.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <g>
                <path
                  d="M6.667 11.667s1.25 1.666 3.333 1.666 3.333-1.666 3.333-1.666M12.5 7.5h.008M7.5 7.5h.008M18.333 10a8.333 8.333 0 11-16.666 0 8.333 8.333 0 0116.666 0zm-5.416-2.5a.417.417 0 11-.834 0 .417.417 0 01.833 0zm-5 0a.417.417 0 11-.834 0 .417.417 0 01.833 0z"
                  stroke="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6930_46917">
                  <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Access top talent
          </h4>
          <p className="text-[16px] text-gray-600">
            List your open positions and get in front of the most responsive,
            remote-ready talent looking to get hired right now.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <path
                d="M7.5 14.583H2.917M5.417 10h-3.75M7.5 5.417H3.333M14.167 2.5l-5.498 7.696c-.243.34-.364.51-.36.653a.417.417 0 00.163.314c.112.087.321.087.74.087h4.121L12.5 17.5l5.497-7.696c.243-.34.365-.51.36-.653a.417.417 0 00-.162-.314c-.113-.087-.322-.087-.74-.087h-4.122z"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Cut through the noise
          </h4>
          <p className="text-base text-gray-600">
            Our filters work hard, so you don't have to. Restrict roles to
            specific geographies or timezones, and never see an irrelevant
            candidate or job.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <SlRocket className="h-5 w-5 text-gray-700 md:h-6 md:w-6"></SlRocket>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Get seen and get ready to hire
          </h4>
          <p className="text-[16px] text-gray-600">
            Himalayas promotes where active-job seekers spend their time: in our
            search, through personalized job notifications, and in Google.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <AiFillFlag className="h-5 w-5 text-gray-700 md:h-6 md:w-6"></AiFillFlag>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Claim your company profile
          </h4>
          <p className="text-base text-gray-600">
            Tell your company's story by creating a company profile, and shine a
            spotlight on your people, culture, and tech stack.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <RiGroupLine className="h-5 w-5 text-gray-700 md:h-6 md:w-6"></RiGroupLine>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Collaborate with your team
          </h4>
          <p className="text-base text-gray-600">
            Scale your recruitment efforts by inviting team members, hiring
            managers, and recruiters to manage your Himalayas account.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <g>
                <path
                  d="M5.078 9.357A6.676 6.676 0 015 8.333c0-3.681 3.004-6.666 6.71-6.666s6.71 2.985 6.71 6.666c0 .832-.153 1.628-.433 2.362-.058.153-.087.23-.1.289a.75.75 0 00-.02.16c-.001.062.007.129.024.263l.335 2.725c.037.295.055.443.006.55a.417.417 0 01-.215.21c-.108.046-.255.024-.55-.019l-2.653-.389c-.139-.02-.208-.03-.271-.03a.742.742 0 00-.167.018c-.062.013-.14.042-.299.101a6.735 6.735 0 01-3.392.35m-4.326 3.41c2.471 0 4.474-2.052 4.474-4.583S8.83 9.167 6.36 9.167c-2.47 0-4.473 2.052-4.473 4.583 0 .509.08.998.23 1.456.063.193.095.29.105.356a.71.71 0 01.009.177 2.04 2.04 0 01-.054.293l-.51 2.301 2.496-.34c.136-.019.205-.028.264-.028.063 0 .096.004.157.016.059.012.145.042.319.104.457.16.947.248 1.457.248z"
                  stroke="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6930_47003">
                  <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Support when you need it
          </h4>
          <p className="text-base text-gray-600">
            Our team is here to help you get the most out of Himalayas. We'll
            help you create a profile, post your first job, and more.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <path
                d="M9.167 2.5H6.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 00-1.093 1.092C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.093C4.4 17.5 5.1 17.5 6.5 17.5h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 001.092-1.093c.273-.535.273-1.235.273-2.635v-2.667M10 6.667h3.333V10m-.416-7.083v-1.25M16.2 3.8l.883-.884m.009 4.166h1.25M2.5 11.123c.543.084 1.1.127 1.667.127a10.82 10.82 0 008.85-4.583"
                stroke="currentColor"
              ></path>
            </svg>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Measure what matters
          </h4>
          <p className="text-base text-gray-600">
            Track your job's performance with our analytics dashboard, and get
            insights into how your job is performing.
          </p>
        </div>
        <div>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-xs md:mb-5 md:h-12 md:w-12 md:rounded-[10px]">
            <IoIosCheckmarkCircleOutline className="h-5 w-5 text-gray-700 md:h-6 md:w-6"></IoIosCheckmarkCircleOutline>
          </div>
          <h4 className="mb-1 text-lg font-medium md:mb-2 md:text-xl">
            Find who you're looking for
          </h4>
          <p className="text-base text-gray-600">
            Search our database of 20k+ of remote-ready candidates, leverage our
            powerful filters, and reach out to the ones you want to interview.
          </p>
        </div>
      </div>
    </>
  );
};

export default JobBoard;
