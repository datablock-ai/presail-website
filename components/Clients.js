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
              className="sm:mr-2 flex sm:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-large shadow-sm text-white bg-main focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Get started now for free
              <ArrowSmRightIcon className="ml-2 h-6 w-6 text-white" aria-hidden="true" />
            </a>

            <a
              href="https://t.me/iNakazumi"
              target="_blank"
              className="flex mt-3 sm:mt-0 sm:inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-large shadow-sm text-main bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Chat with us
              <ChatIcon className="ml-2 h-6 w-6 text-main" aria-hidden="true" />
            </a>
            <div className="flex">
              <img src="audited.webp" className="h-20 mt-8" alt="Audited by Hacken" width="170" height="80" />
              <img src="ey-regulation.webp" className="h-20 mt-8 ml-4 lg:ml-12" alt="Regulatory asssessed by EY" width="213" height="80" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/legion-ventures-logo2.webp" alt="Legion Ventures" height="48" width="76.5" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/vespertine-logo.webp" alt="Vespertine" height="48" width="153" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/dutch-crypto-logo.webp" alt="DCI" height="48" width="100" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/ferrum-logo.webp" alt="Ferrum Network" height="48" width="149" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/duckdao-logo.webp" alt="DuckDAO" width="238" height="48" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/master-logo.webp" alt="Master Ventures" height="48" width="165" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}