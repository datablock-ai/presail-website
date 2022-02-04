export default function Explainer() {
  return (
    <div className="relative bg-background">

      <div className="pt-20 h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full  xl:absolute xl:inset-0"
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
            Use the time Presail saves you, to source investments, win new deals, and help the projects grow
          </p>
          <p className="mt-5 lg:mt-20 text-xl text-slate-300">
            Running a single presale involves a lot of time-consuming and error-prone paperwork, that doesn’t contribute directly to your returns. Managing many deals at once can be a nightmare. Presail gives you a simple, more automated workflow, that makes life better for community owners and investors alike.
          </p>
        </div>
      </div>
    </div>
  )
}
