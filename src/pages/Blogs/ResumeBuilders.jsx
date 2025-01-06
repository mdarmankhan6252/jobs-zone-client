import { Link } from "react-router-dom";


const ResumeBuilders = () => {
  return (
    <div className="basic-baground">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4 pb-12 pt-16 md:pb-16 md:pt-20 md:px-8 ">
        <span className="sr-only">
          <h1>Himalayas Blog</h1>
        </span>
        <img
          className="h-16 w-auto md:h-[78px]"
          src="https://i.ibb.co.com/1dDH1kv/jobszone-Logo4.png"
          alt="Logo"
        />
        <p className="mb-12 mt-4 text-gray-700 md:mb-16 md:mt-6 md:text-xl">
          Advice for remote workers and empolyees
        </p>
        {/*  ***** */}
        <div className="flex flex-col xl:flex-row-reverse xl:gap-x-8">
          <Link
            to={"/"}
            className="relative mb-8  h-[232px] md:h-[360px] xl:mb-0"
          >
            <img className="h-full w-full object-cover new-style"
              src="https://i.ibb.co.com/yN0H81h/resume-builder.jpg"
              alt="photo"
            />
          </Link>
          <div className="">
            <Link to={"/"} className="mb-2 block font-medium text-violet-700">
              Resume & Cover Letters
            </Link>
            <Link to={"/"}>
              <h2 className="mb-3 text-2xl font-medium text-gray-900 md:mb-5 md:text-4xl">
                8 Best AI Resume Builders
              </h2>
              <p className="mb-8 line-clamp-4 text-lg text-gray-500 md:line-clamp-2 lg:line-clamp-4">
                Compare the features, pricing, and pros &amp; cons of popular AI
                resume builders.
              </p>
            </Link>
            <Link to={"/"} className="flex items-center">
              <span className="w-[50px] h-[50px] bg-white rounded-full flex justify-center border  border-gray-200 items-center  mr-3">
                <img className="p-2" src="https://i.ibb.co.com/9HKLJLq/JZLogo.png" alt="Logo" />
              </span>
              <div>
                <p className="font-medium text-gray-900 text-base">Jobszone</p>
                <time className="text-gray-600 text-base" >Dec 05, 2024</time>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilders;