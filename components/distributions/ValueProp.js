import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export default function ValueProp() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  Automate your token distribution
                </h2>
                <p className="mt-4 text-lg text-subgray">
                 Sending tokens to your investors without ever leaving Presail.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Save big $ on gas. You'll be able to send tokens to hundreds, even thousands of investors in 1 transaction.</li>
                    <li>No more manually updating spreadsheets. Presail does all the heavy lifting, and you have a full overview of your distributions.</li>
                    <li>Spend your time elsewhere. Sending tokens manually takes roughly 30-60 seconds per investor. Getting the right wallet, double checking the amount etc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/biometrics.gif"
                alt="Presail KYC biometrics demo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:mt-48">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  All-in-one solution
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  Presail is the only all-in-one solution for fundraising in web 3.0. We do the dirty work, and let you focus on what really matters.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>We support complexity. Be it multi-rounds, cliffs, allocation differences, refunds or KYC.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/identification.gif"
                alt="Presail KYC identification demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}