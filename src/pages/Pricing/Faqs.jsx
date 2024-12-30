const Faqs = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 md:py-24">
        <h1 className="mb-3 text-2xl text-gray-900 md:text-3xl md:mb-4 font-medium">
          FAQs
        </h1>
        <p className="mb-12 max-w-3xl text-[18px] text-gray-600 md:mb-16 md:text-[20px]">
          Everything you need to know about Himalayas and billing. Can't find
          the answer you're looking for?
          <a href="/" className="font-medium text-violet-700">
            Please chat to our friendly team
          </a>
          .
        </p>
        <div className="mb-12 grid grid-cols-1 gap-y-10 md:mb-16 2xl:grid-cols-2 2xl:gap-x-8 2xl:gap-y-16">
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              How do I get started hiring on Himalayas?
            </h3>
            <p className="text-gray-600">
              Getting started on Himalayas is easy. Just
              <a className="font-medium text-primary-700" href="/">
                find your company
              </a>
              in our database, or create a new one. Once you have a company
              profile, you'll be able to post jobs and manage your company
              profile.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Is it really free to post a job?
            </h3>
            <p className="text-gray-600">
              Yes! It's free to post a job on Himalayas, once you've created and
              filled out your company profile. You can post as many jobs as you
              like, and they'll be live for 30 days. If you want to boost your
              job, you can pay to feature it in search results.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              How do I get access to my team's Himalayas company profile?
            </h3>
            <p className="text-gray-600">
              Now that you've signed up, you can
              <a className="font-medium text-primary-700" href="/">
                find your company
              </a>
              in our database. You'll be able to get access by authenticating
              with your work email. Email us if you have any issues!
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Can I edit my job listing after it's posted?
            </h3>
            <p className="text-gray-600">
              Absolutely. You can make as many changes to your job posting as
              you need to once it's live. We'll also provide you with detailed
              analytics of how it's performing so you can stay in control.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Are there any additional fees?
            </h3>
            <p className="text-gray-600">
              Nope. We hate hidden fees as much as you do. What you see is what
              you pay. We've made our pricing as transparent as possible.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              How do refunds work?
            </h3>
            <p className="text-gray-600">
              If you're not happy with your purchase, we're happy to refund you.
              All we ask is that you don't abuse this. We're a small,
              bootstrapped team so every dollar counts.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              Do you really donate 10% of what I pay to CO₂ removal?
            </h3>
            <p className="text-gray-600">
              We do! We use
              <a className="font-medium text-primary-700" href="/">
                Stripe Climate
              </a>
              to direct 10% of our revenue to help scale emerging carbon removal
              technologies. As early technologies, carbon removal is expensive,
              so it hasn't attracted a critical mass of customers. But with
              wider adoption, they'll scale and become cheaper for everyone.
            </p>
          </div>
        </div>
        {/* Still have questions?*/}
        <div className="flex flex-col justify-between gap-y-6 rounded-2xl bg-white px-5 py-8 md:flex-row md:px-8">
          <div>
            <h3 className="mb-1 text-[20px] font-medium text-gray-900">
              Still have questions?
            </h3>
            <p className="text-gray-600 md:text-lg">
              Can’t find the answer you’re looking for?
              <br className="hidden md:block lg:hidden" /> Please
              <a href=""> chat to our friendly team</a>.
            </p>
          </div>
          <a
            href="/"
            className="inline-flex gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100  text-[16px] py-3 px-5"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
