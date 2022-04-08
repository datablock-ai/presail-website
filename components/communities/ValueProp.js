/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export default function ValueProp() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  Create and manage deals with full flexibility
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  We give you the flexibility to create different types of deals that cover all edge cases and complex variables of web 3.0 fundraising. 
                  Once a deal is created, you get a full overview of all your deals and investors in your dashboard.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Create whitelisted deals, tier-based deals and KYC-required deals.</li>
                    <li>Create deals with multiple tokens, rounds and vesting schedules.</li>
                    <li>Get a detailed cap table with all investors.</li>
                    <li>Edit distribution addresses and manage refunds.</li>
                    <li>Easily find investors, deals and transactions through a search bar.</li>
                    <li>Community members get an overview of all their contributions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  Automate the contribution and distribution process
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  We enable you to receive contributions from thousands of community members through a single contribution link. 
                  When ready, you can distribute tokens to all participants with a single transaction.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>All blockchain transactions are verified automatically.</li>
                    <li>Eliminate tedious manual tasks in google forms and spreadsheets.</li>
                    <li>Add vesting schedules and automatically schedule future distributions.</li>
                    <li>Save time and money when distributing. No claims. No code.</li>
                    <li>Make the investment process more user friendly, secure and compliant.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}