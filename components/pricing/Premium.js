export default function Premium() {
  return (
    <div className="bg-indigo-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-main sm:text-4xl">Need something else?</h2>
          <p className="mt-3 text-xl text-deep sm:mt-4">
            Reputable VC, or doing large deals/volume? We know your business & brand is everything. Unlock access to custom branding, domain and KYC & AML. 
          </p>

        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Processed</dt>
            <dd className="order-1 text-5xl font-extrabold text-deep">$100M+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Fundraises</dt>
            <dd className="order-1 text-5xl font-extrabold text-deep">1000+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Investors</dt>
            <dd className="order-1 text-5xl font-extrabold text-deep">50K+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}