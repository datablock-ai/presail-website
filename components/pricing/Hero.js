import { CheckIcon } from '@heroicons/react/outline'

const features = [
  'Self service onboarding',
  'Create deals',
  'Receive contributions',
  'Automated verifications of transactions',
  'Deals overview and investor management',
  'Cap Table management',
  'Team collaboration',
  'Investors dashboard',
  'Universal user base search',
  'Whitelisting and FCFS functionality (lift cap)',
  'Custom flexible forms (checkboxes and more)',
  'Partial, full and bulk refunds',
  'Token distributions / airdrop',
  'Dedicated customer success agent'
]

import { ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-deep"></span>
              <span className="text-main">0.50% of funds raised</span>
            </h1>
            <p className="mt-5 text-xl text-subgray max-w-lg">
              With Presail you get a partner.
              We're the people who'll jump into a Google Meet with you, or chat with you 1:1
            </p>
          </div>
          <a
            href="https://app.presail.com/onboarding"
            className="mt-8 w-full bg-main border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white sm:mt-10 sm:w-auto xl:mt-0"
          >
            Get started today
            <ArrowSmRightIcon className="ml-2 h-6 w-6 text-white" aria-hidden="true" />
          </a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-main tracking-wide uppercase">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-deep">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">
              Join the hundreds of organizations already using Presail.
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul role="list" className="divide-y divide-gray-200">
              {features.slice(0, 7).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul role="list" className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(7).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}