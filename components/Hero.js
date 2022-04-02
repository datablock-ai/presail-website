/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Pricing', href: '/pricing' },
]

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">


          <main className="mx-auto max-w-7xl px-4">
            <div className="sm:text-center lg:text-left">
              <div className="inline-flex items-center text-white bg-blue-800 rounded-lg p-1 px-3 sm:text-base lg:text-sm xl:text-base">
                <span className="p-1 text-sm">📣 Sign up and get 250,000 in free raise credits</span> 
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block xl:inline">Raise funds, manage and</span>{' '}
                <span className="block xl:inline">distribute - <span className="text-blue-800">all in one place.</span></span>
              </h1>
              <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Presail is a fundraising and management tool for facilitating early stage web3.0 investments. Whether you're a project, launchpad, VC or public community.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="">
                  <a
                    href="https://app.presail.com/onboarding"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Get started for free
                  </a>
                </div>
              </div>
              <div className="">
                <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">No committments. No hidden costs.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="platform2.webp"
          alt=""
        />
      </div>
    </div>
  )
}