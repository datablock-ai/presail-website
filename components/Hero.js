import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Example() {
  return (
    <div className="relative bg-background overflow-hidden">

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mb-16 sm:mb-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="https://presail.recruitee.com/"
                    className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-400 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl">
                    <span className="md:block">Management platform for</span>{' '}
                    <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-50 md:block">community-driven funding</span>

                  </h1>

                  <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Goodbye Google Forms. Hello security, collaboration and ease-of-use.
                  </p>
             
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <img src="platform.webp" className="md:h-[450px] md:w-[unset] md:max-w-none" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
