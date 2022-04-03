export default function CTA() {
  return (
    <div className="bg-indigo-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-main md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-main">Start for free today, and get $250K in raise credits</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://app.presail.com/onboarding"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}