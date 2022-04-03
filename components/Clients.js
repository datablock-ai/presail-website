import { ArrowSmRightIcon, ChatIcon } from '@heroicons/react/outline'

export default function Clients() {
  return (
    <div className="bg-white mt-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-deep sm:text-5xl md:text-5xl mb-8">
              Trusted by the best organizations
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-subgray mb-8">
              Our users have facilitated $100M+ through Presail. We're compliant, audited, and a public team with a registered entity. That's why the serious actors use us.
            </p>

            <a
              href="https://app.presail.com/onboarding"
              className="sm:mr-2 flex sm:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-large shadow-sm text-white bg-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get started now for free
              <ArrowSmRightIcon className="ml-2 h-6 w-6 text-white" aria-hidden="true" />
            </a>

            <a
              href="https://t.me/zerocap"
              target="_blank"
              className="flex mt-3 sm:mt-0 sm:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-large shadow-sm text-main bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Chat with us
              <ChatIcon className="ml-2 h-6 w-6 text-main" aria-hidden="true" />
            </a>

            <img src="audited.webp" className="h-20 mt-8" alt="Audited by Hacken" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/legion-ventures-logo.webp" alt="Legion Ventures"/>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/vespertine-logo.webp" alt="Vespertine" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/dutch-crypto-logo.webp" alt="DCI" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/ferrum-logo.webp" alt="Ferrum Network" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/duckdao-logo.webp" alt="DuckDAO" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/master-logo.webp" alt="Master Ventures" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}