const BenefitsTab = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <h2 className="mb-4 text-2xl font-medium text-gray-900 md:mb-5">Benefits and perks at Jobs Zone</h2>
        <p className="mb-8 text-gray-600 md:mb-12 md:text-lg">Learn about the 5 benefits and perks Jobs Zone offers its employees.</p>
        <div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6b46c1] md:pt-0"
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
              className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6b46c1] md:pt-0"
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
              className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6b46c1] md:pt-0"
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
              className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6b46c1] md:pt-0"
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
          <div className="flex flex-row gap-x-4 gap-y-3 md:flex-col">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 pt-0.5 text-[#6b46c1] md:pt-0"
            >
              <path
                d="M9.373 13.056l.574 1.722a2.112 2.112 0 002.003 1.444h6.923a2.11 2.11 0 002.11-2.11v-6.17a2.11 2.11 0 00-2.11-2.112h-5.206M8.317 21.5L2.91 5.278A2.111 2.111 0 014.913 2.5h6.643a2.11 2.11 0 012.11 2.111v6.333a2.11 2.11 0 01-2.11 2.112H5.502"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <h3 className="mb-1 text-lg font-medium text-gray-900">Unlimited time off</h3>
              <p className="text-gray-600">Take as much time off as you want as long as it doesn’t interfere with your ability to do your work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsTab;
