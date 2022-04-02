/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
              Trusted by the best organizations
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-slate-300">
              Useful to everyone. From new projects, to some of the biggest players in the space. Presail is compliant, audited and a public team with a registered entity.
            </p>
            <p className="mt-3 max-w-3xl text-lg text-slate-300">
              Presail recently raised an equity seed round of $1.6M, and are backed by Skyfall, Weekend Fund, Global Founders Capital & Kraken Ventures to new a few.
            </p>
            <img src="audited.png" className="h-20 mt-3" alt="Audited by Hacken" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12 invert-[.25]"
                src="/clients/legion-ventures-logo.png"
                alt="Legion Ventures"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/vespertine-logo.png" alt="Vespertine" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/dutch-crypto-logo.png" alt="DCI" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12 invert-[.25]"
                src="/clients/ferrum-logo.png"
                alt="Ferrum Network"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12 invert-[.25]"
                src="/clients/duckdao-logo.png"
                alt="DuckDAO"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12 invert-[.25]"
                src="/clients/master-logo.png"
                alt="Master Ventures"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}