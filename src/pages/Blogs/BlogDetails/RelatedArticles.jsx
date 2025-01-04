import { Link } from "react-router-dom";


const RelatedArticles = () => {
    return (
        <div className=" max-w-7xl mx-auto px-4 py-16  md:py-24 md:px-8 ">
      <div className="mb-12 md:mb-16 xl:flex xl:justify-between xl:items-center gap-12">
        <div className="md:max-w-3xl">
          <h1 className="mb-3 md:mb-4 text-2xl md:text-3xl font-medium">
          Related articles
          </h1>
          <p className="mb-8  text-gray-600 md:text-xl text-lg xl:mb-0">
          Read these articles next for actionable insights and advice.
          </p>
        </div>
        <div>
          <button className="btn hover:bg-[#553C9A]  bg-[#6a4ac3] text-white font-medium text-base py-3 px-5  min-w-max  rounded-lg">
            read more on the blog
          </button>
        </div>
      </div>
      {/* Card section */}
      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
        {/* card 1 */}
        <div className="transform transition ease-in hover:-translate-y-1">
          <Link to={"/"} className=" ">
            <div className="relative mb-5  h-[232px] md:mb-6 md:h-[232px]">
              <img
                className="w-full h-full object-cover absolute"
                src="https://images.unsplash.com/photo-1698047681432-006d2449c631?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxyZXN1bWV8ZW58MHx8fHwxNzMzMzk2ODg5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000"
              ></img>
            </div>
          </Link>
          <Link to={"/"}>
            <h2 className="text-[14px] block  font-medium mb-1  text-[#6b46c1]">
              Resumes & Cover Letters
            </h2>
          </Link>
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
              8 Best AI Resume Builders
            </h2>
            <p className="text-[16px] text-gray-600 mb-8 ">
              Compare the features, pricing, and pros & cons of popular AI
              resume builders.
            </p>
          </div>
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
              <time className="text-sm text-gray-600" dateTime="24/12/06">
                2024/12/06
              </time>
            </div>
          </Link>
        </div>
        {/* card 2 */}
        <div className="transform transition ease-in hover:-translate-y-1">
          <Link to={"/"} className=" ">
            <div className="relative mb-5  h-[232px] md:mb-6 md:h-[232px]">
              <img
                className="w-full h-full object-cover absolute"
                src="https://images.unsplash.com/photo-1698047681432-006d2449c631?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxyZXN1bWV8ZW58MHx8fHwxNzMzMzk2ODg5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000"
              ></img>
            </div>
          </Link>
          <Link to={"/"}>
            <h2 className="text-[14px] block  font-medium mb-1  text-[#6b46c1]">
              Interview Questions
            </h2>
          </Link>
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
              Data Scientist Interview Questions and Answers (All Levels)
            </h2>
            <p className="text-[16px] text-gray-600 mb-8 ">
              The expectations for data scientists evolve significantly as you
              progress through your career. This post provides questions and
              sample answers
            </p>
          </div>
          <Link to='/' className="flex items-center" >
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
              <time className="text-sm text-gray-600" dateTime="24/12/06">
                2024/12/06
              </time>
            </div>
          </Link>
        </div>
        {/* card 3 */}
        <div className="transform transition ease-in hover:-translate-y-1">
          <Link to='/' className=" ">
            <div className="relative mb-5 h-[232px] md:mb-6 md:h-[232px]">
              <img
                className="w-full h-full object-cover absolute"
                src="https://images.unsplash.com/photo-1698047681432-006d2449c631?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxyZXN1bWV8ZW58MHx8fHwxNzMzMzk2ODg5fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=2000"
              ></img>
            </div>
          </Link>
          <Link to={"/"}>
            <h2 className="text-[14px] block  font-medium mb-1  text-[#6b46c1]">
              Interviewing
            </h2>
          </Link>
          <div>
            <h2 className="text-lg md:text-xl font-medium mb-2 mt-4 text-gray-900">
              20 Phone Interview Questions and Answers
            </h2>
            <p className="text-[16px] text-gray-600 mb-8 ">
              By understanding common questions, practicing your responses using
              the STAR method, and presenting yourself professionally, you
              increase
            </p>
          </div>
          <Link to='/' className="flex items-center">
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
              <time className="text-sm text-gray-600" dateTime="24/12/06">
                2024/12/06
              </time>
            </div>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default RelatedArticles;