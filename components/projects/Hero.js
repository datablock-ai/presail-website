import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-deep tracking-wide uppercase">Presail for</h2>
          <p className="mt-1 mb-10 text-small font-extrabold text-main sm:tracking-tight lg:text-2xl">
            Web 3.0 Projects
          </p>
          <h1 className="mt-1 text-4xl font-extrabold text-main sm:text-5xl sm:tracking-tight lg:text-6xl">Raise funds and distribute your projects tokens, using one app.</h1>
          <p className="max-w-xl my-5 mx-auto text-xl text-subgray">
            Presail makes it easy to create pools, raise funds and distribute tokens for your project. Get the flexibility you need with cap table management, whitelisting and KYC/AML for your token raise.
          </p>
          <a
            href="https://app.presail.com/onboarding"
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-main focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Get started now
            <ArrowSmRightIcon className="ml-3 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
