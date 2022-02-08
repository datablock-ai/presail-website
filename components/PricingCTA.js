export default function PricingCTA() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:pb-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-400">Let's get you started today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://t.me/zerocap"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400 hover:bg-indigo-700"
            >
              Chat with Hamza
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}