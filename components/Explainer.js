export default function Example() {
  return (
    <div className="relative bg-background">

      <div className="pt-20 h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full xl:absolute xl:inset-0"
              src="/platform2.webp"
              alt="Presail platform"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">Move to Presail</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Direct the time Presail saves you into sourcing investments, winning new deals, and helping projects grow
          </p>
          <p className="mt-5 lg:mt-20 text-lg text-slate-300">
            Managing presales is very time-consuming, error-prone, and doesn’t directly contribute to returns. Presail is operationalizing this workflow with software, and as a result, dramatically improving the workflow for community owners and investors.
          </p>
        </div>
      </div>
    </div>
  )
}
