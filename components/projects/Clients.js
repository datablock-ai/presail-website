import { ArrowSmRightIcon, ChatIcon } from '@heroicons/react/outline'

export default function Clients() {
  return (
    <div className="bg-white my-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-deep sm:text-5xl md:text-5xl mb-8">
              Trusted by the best organizations
            </h2>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-deep md:flex-grow">
              <p className="relative">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/team/hamza.webp"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-deep">Judith Black</div>
                  <div className="text-base font-medium text-main">CEO, Tuple</div>
                </div>
              </div>
            </footer>
          </blockquote>
           
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img className="max-h-12 invert-[.25]" src="/clients/legion-ventures-logo.webp" alt="Legion Ventures" height="48" width="129" />
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