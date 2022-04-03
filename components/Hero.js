export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mx-auto max-w-7xl px-4">
            <div className="sm:text-center lg:text-left">
              <div className="mb-10 inline-flex items-center text-white bg-blue-800 rounded-lg p-1 px-3 sm:text-base lg:text-sm xl:text-base">
                <span className="p-1 text-sm">📣 Sign up now to get 250,000 in free raise credits</span> 
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-deep sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Raise, manage, and</span>{' '}
                <span className="block xl:inline">distribute funds - <span className="text-main">all in one place.</span></span>
              </h1>
              <p className="mt-3 text-base text-subgray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Fundraising and management tool for early-stage web3.0 investments. Whether you're a project, launchpad, VC or public community.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="">
                  <a
                    href="https://app.presail.com/onboarding"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main md:py-4 md:text-lg md:px-10"
                  >
                    Get started for free
                  </a>
                </div>
              </div>
              <div className="">
                <p className="mt-3 text-base text-subgray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">No commitments. No hidden costs.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 object-cover sm:h-72 md:h-96 lg:h-full"
          src="platform2.webp"
          alt=""
        />
      </div>
    </div>
  )
}