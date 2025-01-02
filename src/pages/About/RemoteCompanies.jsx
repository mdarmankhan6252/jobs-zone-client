import { Link } from "react-router-dom";

const RemoteCompanies = () => {
  const companies = [
    {
      name: "likeMagic",
      logo: "https://cdn-images.himalayas.app/x5oa4wy7xsbwa0jgm3da3jfpyo2u",
      jobs: 0,
      description:
        "likeMagic is an innovative hospitality solution that empowers the modern guest and hoteliers with an exceptional experience and lean processes throughout the entire guest journey.",
      tags: [
        {
          title: "SaaS",
          link: "#",
        },
        {
          title: "Hospitality",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Benefits",
          link: "#",
        },
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
    {
      name: "Reinteractive",
      logo: "https://cdn-images.himalayas.app/hrsydb6mmdgxfu4r2y33p5oijbl7",
      jobs: 0,
      description: "At reinteractive, we design, build & host amazing applications.",
      tags: [
        {
          title: "Web Development",
          link: "#",
        },
        {
          title: "Ruby on Rails",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
    {
      name: "AdQuick",
      logo: "https://cdn-images.himalayas.app/bq1gnrmhqb646jmhk18c9vxrzqfc",
      jobs: 0,
      description: "Simply put, AdQuick is the easiest way to buy outdoor advertising.",
      tags: [
        {
          title: "Advertising",
          link: "#",
        },
        {
          title: "Media Buying",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Benefits",
          link: "#",
        },
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
    {
      name: "Pinterest",
      logo: "https://cdn-images.himalayas.app/qq7ln1fba8bvz0o39c6rhfs9avxj",
      jobs: 27,
      description: "Pinterest's mission is to bring everyone the inspiration to create a life they love.",
      tags: [
        {
          title: "Social Media",
          link: "#",
        },
        {
          title: "Advertising",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Salaries",
          link: "#",
        },
        {
          title: "Benefits",
          link: "#",
        },
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
    {
      name: "TrueAccord",
      logo: "https://cdn-images.himalayas.app/pq19eukzrxs73ztbciy0ibv3vkn5",
      jobs: 0,
      description:
        "TrueAccord is the leader in digital collections. By focusing on great user experiences, TrueAccord provides businesses with superior debt collection results.",
      tags: [
        {
          title: "Debt Collection",
          link: "#",
        },
        {
          title: "Machine Learning",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Benefits",
          link: "#",
        },
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
    {
      name: "Appticz",
      logo: "https://cdn-images.himalayas.app/f5ctnq4ry8ezyglidqyodxftmdvw",
      jobs: 0,
      description:
        "Appticz is the best mobile app development services provider in India that specializes in creating innovative and high-quality mobile applications for businesses across various industries.",
      tags: [
        {
          title: "Mobile App Development",
          link: "#",
        },
        {
          title: "UI UX Design",
          link: "#",
        },
      ],
      extra: [
        {
          title: "Benefits",
          link: "#",
        },
        {
          title: "Tech stack",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex items-center mb-8">
          <div className="flex flex-row-reverse">
            <span className="relative inline-block h-10 w-10 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs flex-shrink-0">
              <img alt="Branex LLC logo" className="h-full w-full rounded-full bg-white" src="https://cdn-images.himalayas.app/8hemznup28ug7ygrodetq21jjcfw" />
            </span>
            <span className="relative inline-block h-10 w-10 -mr-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs flex-shrink-0">
              <img alt="Sticky logo" className="h-full w-full rounded-full bg-white" src="https://cdn-images.himalayas.app/ubn20k44qf1dwixcgv1xiswzamar" />
            </span>
            <span className="relative inline-block h-10 w-10 -mr-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs flex-shrink-0">
              <img alt="Pressable logo" className="h-full w-full rounded-full bg-white" src="https://cdn-images.himalayas.app/3rpw0jcqx3nnmp8o8rsfxfl8z7bw" />
            </span>
          </div>
          <Link className="ml-3 inline-flex items-center text-base font-medium text-gray-900" to="#">
            Top remote companies
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-labelledby="ashpavr6amrnb4gytsu97xfvwos80zy8"
                className="ml-2 h-5 w-5 stroke-current"
              >
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="mb-12 md:mb-16 xl:flex xl:justify-between">
          <div className="md:max-w-3xl">
            <h2 className="mb-3 text-2xl font-medium md:mb-4 md:text-3xl">Remote companies like Jobs Zone</h2>
            <p className="mb-8 text-lg text-gray-600 md:text-xl xl:mb-0">
              Find your next opportunity by exploring profiles of companies that are similar to Jobs Zone. Compare culture, benefits, and job openings on Jobs
              Zone.
            </p>
          </div>
          <Link
            className="font-medium items-center justify-center rounded-lg transition-colors h-max border border-transparent bg-[#6b46c1] text-white hover:bg-[#553c9a] text-base py-3 px-5"
            to="/companies"
          >
            View all companies
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs transition-all ease-in-out md:p-6 md:hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-wrap justify-between mb-4 items-start">
                <span className="relative inline-block h-10 w-10 md:h-12 md:w-12 after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-full after:border after:border-gray-900 after:border-opacity-10 after:shadow-xs flex-shrink-0">
                  <img alt={`${company.name} logo`} className="h-full w-full rounded-full bg-white" src={company.logo} />
                </span>
                {company.jobs > 0 && (
                  <Link className="border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 bg-white hover:bg-gray-50" to="#">
                    {company.jobs} jobs
                  </Link>
                )}
                <h3 className="mb-2 mt-4 text-lg font-medium text-gray-900 md:mt-5 md:text-xl inline-flex w-full items-center">
                  <Link to="#">{company.name}</Link>
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {company.extra.map((item) => (
                    <Link key={item.title} className="inline-flex items-center text-gray-600 underline" to={item.link}>
                      {item.title === "Salaries" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="mr-1 h-4 w-4 text-gray-400">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.5 14.6667C8.5 15.9553 9.5447 17 10.8333 17H13c1.3807 0 2.5-1.1193 2.5-2.5S14.3807 12 13 12h-2c-1.3807 0-2.5-1.1193-2.5-2.5S9.6193 7 11 7h2.1667C14.4553 7 15.5 8.0447 15.5 9.3333M12 5.5V7m0 10v1.5M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
                          />
                        </svg>
                      )}
                      {item.title === "Benefits" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" className="mr-2 h-5 w-5 text-gray-400">
                          <path
                            d="M4.5 22v-5m0-10V2M2 4.5h5m-5 15h5M13 3l-1.734 4.509c-.282.733-.423 1.1-.643 1.408a3 3 0 01-.706.707c-.308.219-.675.36-1.408.642L4 12l4.509 1.734c.733.282 1.1.423 1.408.643.273.194.512.433.707.706.219.308.36.675.642 1.408L13 21l1.734-4.509c.282-.733.423-1.1.643-1.408.194-.273.433-.512.706-.707.308-.219.675-.36 1.408-.642L22 12l-4.509-1.734c-.733-.282-1.1-.423-1.408-.642a3 3 0 01-.706-.707c-.22-.308-.36-.675-.643-1.408L13 3z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {item.title === "Tech stack" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="mr-2 h-5 w-5 text-gray-400">
                          <path
                            d="M1.667 12.083l8.035 4.018c.11.055.164.082.221.093.05.01.103.01.154 0a.907.907 0 00.221-.093l8.035-4.018M1.667 7.917l8.035-4.018c.11-.055.164-.082.221-.093.05-.01.103-.01.154 0 .057.011.112.038.221.093l8.035 4.018-8.035 4.017a.91.91 0 01-.221.093.418.418 0 01-.154 0c-.057-.01-.112-.038-.221-.093L1.667 7.917z"
                            stroke="currentColor"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-base text-gray-600 mb-6 line-clamp-2">{company.description}</p>
              <div className="flex gap-2">
                {company.tags.map((tag) => (
                  <Link
                    key={tag.title}
                    className="inline-flex items-center border rounded-md font-medium w-max h-max text-xs px-2 py-0.5 bg-white hover:bg-gray-50"
                    to={tag.link}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height={8}
                      viewBox="0 0 8 8"
                      width={8}
                      className="-ml-0.5 mr-1 flex-shrink-0 fill-[#9f7aea] stroke-[#9f7aea]"
                    >
                      <circle cx={4} cy={4} fill="#currentColor" r={3} />
                    </svg>
                    <span className="max-w-[11.25rem] truncate">{tag.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemoteCompanies;
