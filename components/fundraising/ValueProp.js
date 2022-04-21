import { InboxIcon, SparklesIcon } from '@heroicons/react/outline'

export default function ValueProp() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  Receive contributions with no hassle
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  Fundraising through Presail is as easy as it gets. And comes with a ton of benefits.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>No need for google forms or spreadsheets.</li>
                    <li>Transactions are verified automatically.</li>
                    <li>Remove human errors</li>
                    <li>No need to reconcile with etherscan/bscan</li>
                    <li>Split SAFTs / mix rounds supported</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/fundraise1.svg"
                alt="Presail crypto fundraise"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 lg:mt-48">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-main">
                  Tier based, NFT access, KYC? We have it.
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  Only want people with your NFT to be able to invest, or want to give different allocation to certain people? 
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Set up your own tiers, groups or whitelists</li>
                    <li>Create rules and access requirements</li>
                    <li>Connect your NFT’s or tokens to your tiers</li>
                    <li>Create multiple pools within a deal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/organize1.svg"
                alt="Presail web 3.0 fundraise"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}