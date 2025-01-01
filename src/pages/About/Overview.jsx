import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="border-b border-gray-200">
      <h2 className="mb-4 text-2xl font-medium text-gray-900 md:mb-5">About Jobs Zone</h2>
      <article className="mb-8 md:mb-12 md:text-lg">
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
    </div>
  );
};

export default Overview;
