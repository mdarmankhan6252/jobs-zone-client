/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Overview = ({ activeTabState }) => {
  const handleBenefitsBtn = () => {
    // scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // focus on the benefits tab
    activeTabState.setActiveTab("Benefits");
  };

  const handleTechStackBtn = () => {
    // scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // focus on the tech stack tab
    activeTabState.setActiveTab("Tech_Stack");
  };
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium text-gray-900 md:mb-5">About Jobs Zone</h2>
      <article className="pb-8 md:pb-12 md:text-lg border-b border-gray-200">
        <p className="mb-4 md:mb-5">
          COVID-19 has caused a permanent shift towards remote work.{" "}
          <Link to="#" className="font-medium text-[#6b46c1] ">
            Twitter and Square
          </Link>{" "}
          have said that staff can work remotely permanently. Shopify is closing its offices until 2021 “
          <Link to="#" className="font-medium text-[#6b46c1] ">
            And after that, most will permanently work remotely. Office centricity is over
          </Link>
          ”. Brian Armstrong wrote that Coinbase will be{" "}
          <Link
            to="https://www.google.com/search?q=brain+armstrong+remote-first&oq=brain+armstrong+remote-first&aqs=chrome..69i57j0j46l2j0l4.3496j0j4&sourceid=chrome&ie=UTF-8"
            className="font-medium text-[#6b46c1] "
          >
            embracing a remote-first culture
          </Link>
          . And Mark Zuckerberg has said Facebook will “aggressively open up remote hiring” and{" "}
          <Link to="https://www.businessinsider.com/facebook-half-of-all-employees-remote-2030-2020-5?r=AU&IR=T" className="font-medium text-[#6b46c1] ">
            expects half of his employees to be remote by 2030
          </Link>
          .
        </p>
        <p className="mb-4 md:mb-5">
          Even prior to COVID, we saw Stripe announce its{" "}
          <Link to="https://stripe.com/blog/remote-hub" className="font-medium text-[#6b46c1] ">
            fifth engineering hub would be remote
          </Link>{" "}
          in 2019. Their reason?
        </p>
        <blockquote className="relative mb-5 mt-1 inline-block w-full border-l-4 border-[#6b46c1] pl-4 font-medium italic">
          <p>
            Our users are everywhere. We have to be, too. Our remotes keep us close to our customers, which is key to building great products. They are deeply
            embedded in the rhythms of their cities. They see how people purchase food differently in bodegas, konbini, and darshinis. They know why it is
            important to engineer robustness in the face of slow, unreliable internet connections. They have worked in and run businesses that don’t have access
            to global payments infrastructure.
          </p>
        </blockquote>
        <p className="mb-4 md:mb-5">
          Stripe reflected on the success of their{" "}
          <Link to="https://stripe.com/blog/remote-hub-one-year" className="font-medium text-[#6b46c1] ">
            remote engineering hub one year
          </Link>{" "}
          in:
        </p>
        <blockquote className="relative mb-5 mt-1 inline-block w-full border-l-4 border-[#6b46c1] pl-4 font-medium italic">
          <p>
            Over the last year, we’ve tripled the number of permanently remote engineers, up to 22% of our engineering population. We also hired more remote
            employees across all other teams, and tripled the number of remote Stripes across the company…One of our goals in establishing the remote hub was to
            connect more closely with our customers. A year ago, when an overwhelming majority of our engineering staff was located in two cities, it was more
            difficult to support a global user population with products that felt locally native in supporting commerce.
          </p>
        </blockquote>
        <p className="mb-4 md:mb-5">
          And it wouldn’t be right to write about remote work without acknowledging companies like Automattic and Basecamp that have been remote for over well
          over a decade. Hell, Basecamp even wrote{" "}
          <em>
            <Link to="https://basecamp.com/books/remote" className="font-medium text-[#6b46c1] ">
              the
            </Link>
          </em>
          <Link to="https://basecamp.com/books/remote" className="font-medium text-[#6b46c1] ">
            {" "}
            book about remote work
          </Link>
          !
        </p>
        <p className="mb-4 md:mb-5">
          We think Matt Mullenweg, CEO of Automattic, put it best in a recent{" "}
          <Link
            to="https://stratechery.com/2020/america-wakes-up-an-interview-with-matt-mullenweg-about-working-from-home/"
            className="font-medium text-[#6b46c1] "
          >
            interview with Ben Thompson
          </Link>{" "}
          of{" "}
          <Link to="https://stratechery.com/" className="font-medium text-[#6b46c1] ">
            Stratechery
          </Link>{" "}
          when he said:
        </p>
        <blockquote className="relative mb-5 mt-1 inline-block w-full border-l-4 border-[#6b46c1] pl-4 font-medium italic">
          <p>
            I honestly think we’ll look back 20 or 30 years from now at how offices currently work for knowledge workers just as we look at using leeches to
            cure sickness. It’s so bizarre when you think of the autonomy you removed from people being in the office. Your things are better when you work from
            home. The temperature, the music, the seat, your desk, your control over the environment, going to the bathroom, exercising, eating, all of these
            things, you have so much more control over that we just take for granted. Tech and traditional offices remove so much agency from people. You know
            they say it about democracy — once you have a taste of freedom, it’s hard to return to your previous state, I think that’s going to happen for
            remote work, and COVID-19 has pushed remote work forward maybe by five or 10 years than it would have occurred otherwise.
          </p>
        </blockquote>
        <p className="mb-4 md:mb-5">
          To which Ben responded “I agree with that. There’s going to be a sort of step change where something that would have taken a long time to happen is
          now going to happen much more quickly<em>”.</em>
        </p>
        <p className="mb-4 md:mb-5">
          While we don’t have any conclusive data to prove this point,{" "}
          <Link to="https://twitter.com/web" className="font-medium text-[#6b46c1] ">
            Web Smith
          </Link>
          , the founder of{" "}
          <Link to="https://2pml.com/" className="font-medium text-[#6b46c1] ">
            2PM
          </Link>
          , highlights that we’ve seen 10 years of progress happen in 8 weeks in eCommerce.
        </p>
        <p className="mb-4 md:mb-5">
          <br />
          <img
            src="https://cdn.substack.com/image/fetch/w_600,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fpbs.substack.com%2Fmedia%2FEYHStInXgAMBgGY.jpg"
            className="mb-6 pt-2"
          />
        </p>
        <h3 className="mb-4 mt-8 text-xl font-medium">We believe the same is true for remote work</h3>
        <p className="mb-4 md:mb-5">
          Today’s companies are global from day one, customers are spread across the globe, so why aren’t employees? As Stripe said, “We feel closer to
          customers because we literally are”.
        </p>
        <p className="mb-4 md:mb-5">
          This is why we decided to start{" "}
          <Link to="/" className="font-medium text-[#6b46c1] ">
            Jobs Zone
          </Link>
          . We want to re-envision a new, more enjoyable standard for hiring for and finding remote jobs.
        </p>
        <p className="mb-4 md:mb-5">We couldn’t find a remote job board we loved, so we’re building one.</p>
        <h3 className="mb-4 mt-8 text-xl font-medium">Here’s how we’re going to go about it:</h3>
        <ol className="mb-6 mt-0.5 list-outside list-decimal pl-8">
          <li className="mb-1">
            <p className="mb-0">
              <strong className="font-medium">Deliver a great UX, focused on speed and efficiency: </strong>The average job board looks like it hasn’t been
              updated in a decade. Our goal is to make the experience frictionless, simple, and fast.
            </p>
          </li>
          <li className="mb-1">
            <p className="mb-0">
              <strong className="font-medium">Provide a great selection of quality jobs:</strong> We’ll screen jobs to only include quality remote
              opportunities.
            </p>
          </li>
          <li className="mb-1">
            <p className="mb-0">
              <strong className="font-medium">Give people the information they need to find the right job:</strong> We’ll provide granular filters, transparent
              salary bands, and company data.
            </p>
          </li>
        </ol>
        <p className="mb-4 md:mb-5">
          If you’re interested in joining early and influencing the direction of Jobs Zone, hit us up at{" "}
          <Link to="mailto:hi@jobszone.app" className="font-medium text-[#6b46c1] ">
            hi@jobszone.app
          </Link>{" "}
          and{" "}
          <Link to="#" className="font-medium text-[#6b46c1] ">
            follow us on Twitter
          </Link>
          .
        </p>
        <p className="mb-4 md:mb-5">
          Read our{" "}
          <Link to="/blogs" className="font-medium text-[#6b46c1] ">
            remote work advice
          </Link>{" "}
          on the Jobs Zone blog.
        </p>
      </article>

      {/* benefits overview */}
      <article className="pt-8 md:pt-12">
        <div className="border-b border-gray-200 pb-8 md:pb-12">
          <div className="pb-8 md:flex md:justify-between">
            <div>
              <h2 className="mb-2 text-xl font-medium text-gray-900">Employee benefits</h2>
              <p className="mb-6 text-gray-600 md:mb-0">Learn about the employee benefits and perks provided at Jobs Zone.</p>
            </div>
            <button
              onClick={handleBenefitsBtn}
              className="font-medium rounded-lg transition-colors h-max border border-transparent bg-[#6B46C1] text-white hover:bg-[#553C9A] text-base px-[1.125rem] py-[0.625rem]"
            >
              View benefits
            </button>
          </div>
          <div className="grid grid-cols-1 md:gap-8 gap-6 pb-8 md:grid-cols-2">
            <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6B46C1] md:pt-0"
              >
                <path
                  d="M15.125 7.342a3.727 3.727 0 00.363-1.586 3.756 3.756 0 00-7.512 0c0 .669.188 1.288.495 1.83m-6.625 3A1.685 1.685 0 001 12.042c0 .934.758 1.692 1.692 1.692h.99m13.416-2.076h.01m2.136-5.366v2.74a6.422 6.422 0 011.745 2.556h.938c.592 0 1.073.48 1.073 1.073v3.29c0 .592-.48 1.072-1.073 1.072H20.52a6.477 6.477 0 01-2.35 2.352v1.941c0 .593-.48 1.073-1.072 1.073H14.95c-.592 0-1.073-.48-1.073-1.073v-1.073h-3.756v.931c0 .593-.48 1.074-1.073 1.074H6.902c-.592 0-1.073-.481-1.073-1.074v-2.58a6.415 6.415 0 01-2.146-4.79 6.439 6.439 0 016.439-6.44h4.857c.46 0 .907-.15 1.274-.427a3.172 3.172 0 011.918-.645h1.073z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">Retirement benefits</h3>
                <p className="text-gray-600">Regional retirement plans to help you invest in your future.</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6B46C1] md:pt-0"
              >
                <path
                  d="M12 2v9.714l-7.071 7.357m0 0c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zM3 7.644l9 4.067"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">Profit sharing</h3>
                <p className="text-gray-600">When the company does well, all team members share the profits!</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6B46C1] md:pt-0"
              >
                <path
                  d="M6.421 21.395v-6.632c0-.61-.495-1.105-1.105-1.105h-2.21c-.61 0-1.106.495-1.106 1.105v6.632c0 .61.495 1.105 1.105 1.105h2.21c.61 0 1.106-.495 1.106-1.105zm0 0h1.667c.361 0 .72.044 1.07.132l2.93.732c.635.16 1.297.175 1.94.046l3.238-.647a4.425 4.425 0 002.26-1.21l2.29-2.29a1.673 1.673 0 00-2.188-2.524l-2.67 2.003a2.207 2.207 0 01-1.327.442h-2.578 1.64c.926 0 1.675-.75 1.675-1.675v-.334c0-.769-.522-1.438-1.267-1.624l-2.534-.633a5.2 5.2 0 00-4.138.717l-2.008 1.338m8.434-11.743a3.113 3.113 0 00-.87-1.707 3.137 3.137 0 10-1.63 5.298m5.305-2.729a3.137 3.137 0 11-4.436 4.436 3.137 3.137 0 014.436-4.436z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">Equity benefits</h3>
                <p className="text-gray-600">Every employee gets equity, so you are rewarded for your best work.</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6B46C1] md:pt-0"
              >
                <path
                  d="M15.121 4.5h.01m-3.644-.33C6.51 4.426 2.55 8.53 2.55 13.57A9.428 9.428 0 0011.978 23a9.428 9.428 0 009.429-9.429 9.374 9.374 0 00-3.119-6.988m-10.5 15.44v-.074c0-2.095 4.19-1.848 4.19-4.19 0-2.095-3.142-2.095-3.142-5.238 0-2.963-2.096-3.143-5.239-3.143h-.063M18.233 20.61a3.084 3.084 0 01-.466-.212 3.155 3.155 0 013.186-5.447c.111.065.205.147.305.222m-6.137-4.745s3.669-3.012 3.669-5.762A3.668 3.668 0 0015.121 1a3.668 3.668 0 00-3.668 3.667c0 2.75 3.668 5.762 3.668 5.762z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <h3 className="mb-1 text-lg font-medium text-gray-900">Location independent salary</h3>
                <p className="text-gray-600">No matter where you live, we’ll pay you the same salary as someone else in your role.</p>
              </div>
            </div>
          </div>
          <button onClick={handleBenefitsBtn} className="flex items-center font-medium text-gray-600">
            View Jobs Zone&apos;s employee benefits
            <span className style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}>
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
          </button>
        </div>
      </article>

      {/* Tech stack overview */}
      <article className="pt-8 md:pt-12">
        <div className="border-b border-gray-200 pb-8 md:pb-12">
          <div className="pb-8 md:flex md:gap-2 md:justify-between">
            <div>
              <h2 className="mb-2 text-xl font-medium text-gray-900">Tech stack</h2>
              <p className="mb-6 text-gray-600 md:mb-0">Learn about the tools and technologies that Jobs Zone uses to build, market, and sell its products.</p>
            </div>
            <button
              onClick={handleTechStackBtn}
              className="font-medium rounded-lg transition-colors min-w-max h-max border border-transparent bg-[#6b46c1] text-white hover:bg-[#553c9a] text-base px-[1.125rem] py-2.5"
            >
              View tech stack
            </button>
          </div>
          <div className="md:-mt-2 mb-8 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="Node.js logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/mac7pzhubfu0uuhylhvr8v40rjx2" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">Node.js</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="Tailwind CSS logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/5ppsgnrgrquces08d2nezal0td49" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">Tailwind CSS</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="JavaScript logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/ycjxpgfg2ujd9knqdym12jtwoadv" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">JavaScript</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="HTML5 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/e4pdsmlydq5tqn6xx1jjdlagm04g" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">HTML5</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="CSS 3 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/zj0ftcxoi81ky0fprmz29peb3doj" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">CSS 3</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img alt="CSS 3 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/fswu1o4vgzzeh3sev4gsq3uapvv4" />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">ReactJS</p>
            </Link>
            <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
              <img
                alt="CSS 3 logo"
                className="h-12 w-12 flex-grow-0 rounded-md"
                src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
              />
              <p className="line-clamp-2 text-sm font-medium text-gray-900">ReactJS</p>
            </Link>
            <button
              onClick={handleTechStackBtn}
              className="rounded-lg border border-dashed border-gray-200 text-center text-sm font-medium text-gray-600 transition-colors hover:border-[#6b46c1] hover:bg-primary-[#FAF5FF] hover:text-[#6b46c1]"
            >
              See more
            </button>
          </div>
          <p className="text-gray-500">
            Jobs Zone employees can{" "}
            <Link className="text-[#6b46c1] underline" to="/register">
              create an account
            </Link>{" "}
            to update this tech stack.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Overview;
