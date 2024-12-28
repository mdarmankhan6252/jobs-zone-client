const OurPledge = () => {
  return (
    <div className="bg-gray-50">
      <div className=" max-w-7xl mx-auto flex  items-center px-4 py-8  md:justify-between md:px-8 ">
        <div className="flex flex-col  justify-start gap-y-3 md:flex-row md:items-center">
          <img
            className="h-[26px] w-[26px] flex-shrink-0 md:mr-4 md:h-8 md:w-8"
            src="https://i.ibb.co.com/m5gC4H0/Himalayas-Logo1.png"
            alt=""
          />
          <p className="text-gray-600 text-[16px] md:text-lg ">
            We contribute 10% of every payment to remove CO₂ from the atmosphere
            with{" "}
            <span>
              <a
                href="https://climate.stripe.com/cywqrI"
                target="_blank"
                className="font-medium"
              >
                Stripe Climate
              </a>
            </span>
            .
          </p>
        </div>
        <div>
          <a
            className="gap-x-2 font-medium items-center justify-center rounded-lg transition-colors focus:ring-4 focus:outline-none h-max border border-transparent bg-violet-700 text-white hover:bg-violet-800 disabled:bg-violet-200 focus:ring-violet-100 text-[16px] px-4 py-2 hidden md:block md:min-w-max"
            href="/"
          >
            Our pledge
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurPledge;
