export default function SmallClients() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Trusted by 100+ clients
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12 invert-[.25]" src="/clients/legion-ventures-logo.webp" alt="Legion Ventures" height="48" width="122.88" />
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
            <img className="max-h-12 invert-[.25]" src="/clients/duckdao-logo.webp" alt="DuckDAO" height="48" width="239" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12 invert-[.25]" src="/clients/master-logo.webp" alt="Master Ventures" height="48" width="165" />
          </div>
        </div>
      </div>
    </div>
  )
}