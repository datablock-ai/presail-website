import { CheckIcon, CheckCircleIcon } from '@heroicons/react/outline'

const tiers = [
  {
    name: 'Base',
    href: 'https://t.me/zerocap',
    priceDescription: 'of funds raised',
    priceMonthly: '0.25%',
    description: "Promotional price, for a limited time only.",
    features: [
      'Self service onboarding',
      'Create deals',
      'Receive contributions',
      'Automated verifications of transactions',
      'Deals overview and investor management',
      'Cap Table management',
      'Team collaboration',
      'Investors dashboard',
      'Universal user base search',
      'Whitelisting and FCFS functionality (lift cap)',
      'Custom flexible forms (checkboxes and more)',
      'Partial, full and bulk refunds (coming)',
      'Token distributions / airdrop (coming)'
    ],
  },
  {
    name: 'Premium',
    href: 'https://t.me/zerocap',
    priceDescription: '',
    priceMonthly: 'Contact us',
    description: 'Reputable VC, or doing large deals/volume? We know your business & brand is everything.',
    features: [
      'Everything in base +',
      'Custom Branding',
      'Custom Domain',
      'Dedicated customer success agent',
      'KYC / AML',
      'SAFT and Docusign integration (coming)',
      'Scheduling & Calendar',
      'Advanced analytics & reports',
      'Tier based access through tokens or NFT (coming)',
      'Other enterprise features that gets developed'
    ],
  },
]

export default function PricingHero() {
  return (
    <div className="bg-white">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-blue-800 uppercase tracking-wider">Pricing</h2>
            <p className="text-3xl font-extrabold text-blue-800 sm:text-4xl lg:text-5xl">
              The right price for all sizes
            </p>
            <p className="text-xl text-black">
              Join the hundreds of organizations already using Presail
            </p>
            <div className="flex justify-center pt-6">
              <ul className="text-black text-xl text-left">
                <li><CheckCircleIcon className="h-6 w-6 text-blue-800 inline-block" aria-hidden="true" /> No setup/maintenance fee</li>
                <li><CheckCircleIcon className="h-6 w-6 text-blue-800 inline-block" aria-hidden="true" /> No minimum fee</li>
                <li><CheckCircleIcon className="h-6 w-6 text-blue-800 inline-block" aria-hidden="true" /> Pay only for what you use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-white" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-800 max-w-md mx-auto  rounded my-2 py-2 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              <span className="text-white text-lg px-6 font-bold">Promotional offer: Get $250.000 in free raise credits</span>
            </div>
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-blue-800 sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex py-1 rounded-full text-md font-semibold tracking-wide uppercase text-white"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold text-white">
                      {tier.priceMonthly}
                    </div>
                    <span className="ml-1 text-2xl font-medium text-white">{tier.priceDescription}</span>
                    <p className="mt-5 text-lg text-white">{tier.description}</p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-blue-800 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base text-white">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-blue-800 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-background text-indigo-400">
                    Need something else?
                  </h3>
                </div>
                <div className="mt-4 text-lg text-white">
                  Do you have a different business model? Or plan to use Presail in another way. No worries - we're flexible. Let's chat.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="https://t.me/zerocap"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-indigo-400"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
