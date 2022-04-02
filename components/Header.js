import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  ChatIcon,
  SupportIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
  {
    name: 'Public community',
    description: 'Thousand of members, with a lot of deals? No problem.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Private syndicates',
    description: 'Setup, raise and manage all your deals.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Web3 Projects',
    description: 'Cap-table management, KYC & AML, and vested token distribution.',
    href: '#',
    icon: CursorClickIcon,
  },
  { 
    name: 'Launchpads', 
    description: "Your customers' data will be safe and secure.", 
    href: '#', 
    icon: ChartBarIcon
  },
]
const callsToAction = [
  { name: 'Knowledge base', href: 'https://help.presail.com', icon: SupportIcon },
  { name: 'Chat with sales', href: 'https://t.me/zerocap', icon: ChatIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <a className="flex">
                <span className="sr-only">Presail</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/presail-logo.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-blue-800 rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-blue-800' : 'text-blue-800',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span>Use cases</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-blue-800' : 'text-blue-800',
                          'ml-2 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-background"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-400 text-blue-800 sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-blue-800">{item.name}</p>
                                    <p className="mt-1 text-sm text-indigo-400">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-indigo-400 lg:mt-4">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-blue-800">
                          <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  target="_blank"
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-blue-800 bg-indigo-400"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-blue-800" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link href="/pricing">
                <a className="text-base font-medium text-blue-800">
                  Pricing
                </a>
              </Link>
              <Link href="/about">
                <a className="text-base font-medium text-blue-800">
                  About us
                </a>
              </Link>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <a
                href="https://app.presail.com/onboarding"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-800"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/presail-logo.svg"
                    alt="Presail"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-blue-800 rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <span className="text-blue-800 font-bold">Use cases</span>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4 pt-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-background"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-400 text-blue-800 sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/pricing">
                  <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>
                </Link>
                <Link href="/about">
                  <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                    About us
                  </a>
                </Link>
              </div>
              <div className="mt-6">
                <a
                  href="https://app.presail.com/onboarding"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-blue-800"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}