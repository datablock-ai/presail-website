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
                  Automate your fundraising process
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  Raise funds without limitations, and simplify your entire token distribution process.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Raise funds and collect info through customizable forms.</li>
                    <li>Transactions are verified automatically on the blockchain.</li>
                    <li>Distribute tokens to everyone with 1 click. No claims.</li>
                    <li>Schedule and automate future distributions.</li>
                    <li>Whitelist, KYC and tier-based functionality.</li>
                    <li>Add multiple tokens, rounds and vesting schedules.</li>
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
                Keep track of everything.
                </h2>
                <p className="mt-4 text-lg text-subgray">
                 Presail lets you organize and manage all your investments and investors in a secure way.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Get a detailed cap table for all your investments.</li>
                    <li>Manage individual investors and access key data.</li>
                    <li>Find investors and investments through a search bar.</li>
                    <li>Edit distribution addresses and manage refunds.</li>
                    <li>Add team members and collaborate.</li>
                    <li>Every investor gets access to their individual contributions.</li>
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