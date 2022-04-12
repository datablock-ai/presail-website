import { ArrowSmRightIcon, ChatIcon } from '@heroicons/react/outline'

export default function Hero() {
  return (
      <div className="relative bg-white sm:pt-16 sm:pb-32 overflow-hidden">
      <div className="relative py-10">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="text-main text-xs sm:text-lg font-bold uppercase rounded-large bg-secondary py-3 px-5">
                  <span className="pr-2">🎉</span> Get $250,000 in free raise credit
                </span>
              </div>
              <div className="mt-6">
                <h1 className="text-3xl tracking-tight font-extrabold text-deep sm:text-5xl md:text-5xl">
                  Raise funds in crypto, organize and distribute tokens - <span className="text-main">all in one place.</span>
                </h1>
                <p className="mt-4 sm:text-lg text-subgray">
                  Fundraising and management tool for web 3.0. Whether you're a VC, public community, project or launchpad.
                </p>
                <div className="mt-6">
                  <a
                    href="https://app.presail.com/onboarding"
                    className="mr-3 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-large shadow-sm text-white bg-main focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Get started now for free
                    <ArrowSmRightIcon className="ml-2 h-6 w-6 text-white" aria-hidden="true" />
                  </a>

                  <p className="mt-4 text-sm sm:text-lg text-subgray">
                    No commitments. No hidden costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-large shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/pplatform.webp"
                alt="Presail platform"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}