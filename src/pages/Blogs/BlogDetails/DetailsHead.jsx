import { Link } from "react-router-dom";

const DetailsHead = () => {
  return (
    <div className="basic-baground pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto mb-12 px-4  md:px-8 ">
        <div className="flex flex-col gap-x-8 lg:grid lg:grid-cols-2 lg:pb-16">
          <div className="mb-28 md:mb-36 lg:py-10 lg:pr-8">
            <Link to={"/"} className="mb-3 font-medium text-violet-700">
              Interveiwing
            </Link>
            <h1 className="mb-3 text-3xl font-medium text-gray-900 md:mb-5 md:text-4xl ">
              20 Phone Interview Questions and Answers
            </h1>
            <p className="mb-8 text-gray-700 md:text-gl text-justify">
              By understanding common questions, practicing your responses using
              the STAR method, and presenting yourself professionally, you
              increase your chances of advancing to the next stage of the hiring
              process.
            </p>
            <Link className="flex items-center">
              <span className="relative inline-block h-10 w-10 mr-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs flex-shrink-0">
                <img
                  alt="Himalayas"
                  width="40"
                  height="40"
                  className="absolute h-full w-full rounded-full bg-white"
                  src="https://cdn.getmidnight.com/113180fa10fcf7a118ecdbcd21c4cd24/2024/08/Himalayas-App-Logo.jpeg"
                ></img>
                <span className="flex h-full w-full items-center justify-center rounded-full bg-gray-50 font-medium text-primary-700">
                  HI
                </span>
              </span>
              <div>
                <p className="font-medium text-sm text-gray-900">Himalayas</p>
                <span className="text-sm text-gray-600" >
                  2024/12/06
                </span>
              </div>
            </Link>
          </div>
          <div className="mb-5">
            <div className="relative h-52 md:h-[400px] lg:h-96 ">
              <img
                className="h-full w-full object-cover"
                src="https://i.ibb.co.com/cQGrZXk/Interview1.jpg"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHead;
