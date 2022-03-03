import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function Example() {
  return (
    <div className="bg-indigo-400">
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-400">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">Presail raises $1.6 million equity seed investment</span>
              <span className="hidden md:inline">Presail announces $1.6 million equity seed investment, led by Skyfall Ventures</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://blog.presail.com/presail-closes-1-6m-seed-round-to-simplify-web-3-0-investments-12324160dc4c"
              target="_blank"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}