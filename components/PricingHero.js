import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'

export default function PricingHero() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            4 plans that cover all bases.
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-slate-300">
            The biggest Web 3.0 investment-communities use Presail’s management platform.
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-slate-300">
          Whether your organization is established or you are just getting started, our 4 plan model lets you choose the features that fit your needs.
          </p>

          <div className="inset-x-0 pb-2 sm:pb-5 mt-5">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="p-2 rounded-lg bg-indigo-400 shadow-lg sm:p-3">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-indigo-900">
                      <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="md:hidden">Contact us for custom quote</span>
                      <span className="hidden md:inline">Are you a project, DAO or need to do a one-time deal? Get in touch with us for a custom quote.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
