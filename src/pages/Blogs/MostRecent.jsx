import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const MostRecent = () => {
  const [recent, setRecent] = useState([]);

  const axiosPublic = useAxiosPublic();

  const recentBlogs = async () => {
    const { data } = await axiosPublic.get("recent-blogs");
    setRecent(data);
    console.log(data);
  };

  useEffect(() => {
    recentBlogs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row ">
      <div className="mt-8 flex-shrink-0 px-4 md:mb-4 md:mt-16 md:px-8 xl:mb-24 xl:h-auto">
        <div className="xl:sticky xl:top-[88px] xl:w-[280px]">
          <div className="pb-4 ">
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 pb-4">
              <p>Topics</p>
              <IoIosArrowDown className="h-5 w-5 hover:rotate-180 text-gray-900 transition-transform duration-200"></IoIosArrowDown>
            </div>
            <div className="flex items-center justify-between border-y border-gray-100 py-3">
              <p>Audiences</p>
              <IoIosArrowDown className="h-5 w-5 hover:rotate-180 text-gray-900 transition-transform duration-200"></IoIosArrowDown>
            </div>
            <div className="mb-12 hidden xl:block">
              <p className="mb-5 mt-8 text-sm font-medium text-gray-900">
                Find your dream remote job
              </p>
              <div className="flex flex-col  gap-3">
                <button className="inline-flex gap-x-2 font-medium justify- items-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max disabled:text-gray-300 disabled:border-gray-100  border border-gray-200 shadow-sm hover:bg-gray-50 hover:text-gray-800 bg-white text-gray-700 focus:ring-gray-100 text-[16px] py-3 px-5 w-full  ">
                  <FcGoogle size={25}></FcGoogle>{" "}
                  <span>Sign in with google</span>
                </button>
                <Link
                  to={"/"}
                  className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-red-100 text-[16px] py-3 px-5 w-full "
                  href="/"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right sight   */}
      <div className="my-12 scroll-mt-24 px-4 md:px-8 flex-1">
        <div className="">
          <div className="mb-6 flex flex-row  justify-between items-center">
            <h2 className="text-[20px] font-medium text-gray-900">
              Most recent
            </h2>
            <h2>
              <Link
                to={"/"}
                className="inline-flex items-center gap-x-2 font-medium text-violet-700"
              >
                <span>View all</span>
                <HiOutlineArrowSmallRight className="h-5 w-5"></HiOutlineArrowSmallRight>
              </Link>
            </h2>
          </div>
          {/* Card section */}
          <div className="grid grid-cols-1 border-b border-gray-100 md:grid-cols-2 md:gap-x-6">
            {recent?.map((blog, index) => (
              <div
                key={index}
                className="mb-12 transition transform ease-in hover:-translate-y-1"
              >
                <Link to={"/"}>
                  <div className="relative mb-5 h-52 md:mb-6 md:h-56">
                    <img
                      className="h-full w-full object-cover"
                      src={blog.image}
                      alt="pic"
                    />
                  </div>
                </Link>
                <Link
                  to={"/"}
                  className="mb-1 block text-sm font-medium text-violet-700"
                >
                  <span>{blog.category}</span>{" "}
                </Link>
                <Link
                  to={"/"}
                  className="mb-1 block text-sm font-medium text-violet-700"
                >
                  <h3 className="mb-2 text-lg font-medium text-gray-900 md:text-xl">
                    {blog.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-base text-gray-600 md:mb-6">
                    {blog.content}
                  </p>
                </Link>
                <Link to={"/"} className="flex items-center">
                  <span className="w-[50px] h-[50px] bg-white rounded-full flex justify-center border  border-gray-200 items-center  mr-3">
                    <img
                      className="p-2"
                      src="https://i.ibb.co.com/9HKLJLq/JZLogo.png" // todo : change this posted users image link
                      alt="Logo"
                    />
                  </span>
                  <div>
                    <p className="font-medium text-gray-900 text-base">
                      {blog.author}
                    </p>
                    <time className="text-gray-600 text-base">{blog.date}</time>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
