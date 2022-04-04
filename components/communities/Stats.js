/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-secondary pt-12 sm:pt-16 my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-deep sm:text-4xl">
            The backbone of community driven funding
          </h2>
          <p className="mt-3 text-xl text-main sm:mt-4">
            Hundreds of communities have already increased their deal flow and reduced their workload.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-secondary" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Processed</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">$100M+</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Investors</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">70K+</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Customers</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
