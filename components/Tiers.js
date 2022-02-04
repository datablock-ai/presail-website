import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'Basic',
    priceMonthly: 1500,
    description: 'Volume $100K/m',
    includedFeatures: [
      'Contributions',
      'Deal exports',
      'Investor portal',
      'Cap table',
      '5-day support'
    ],
  },
  {
    name: 'Essential',
    priceMonthly: 2500,
    description: 'Volume > $250K/m',
    includedFeatures: [
      'Everything in basic +',
      'Whitelisting',
      'Custom domain',
      'Tokenized access',
      '7-day support'
    ],
  },
  {
    name: 'Scale',
    priceMonthly: 4000,
    description: 'Volume $500K/m',
    includedFeatures: [
      'Everything in basic +',
      'Whitelisting',
      'Custom domain',
      'Tokenized access',
      '7-day support',
      'Dedicated support agent'
    ],
  },
  {
    name: 'Premium',
    priceMonthly: 6000,
    description: 'All Access',
    includedFeatures: [
      'Everything in scale +',
      'Distribution calendar',
      'Custom branding',
      'AML & KYC'
    ],
  },
]

export default function Tiers() {
  return (
    <div className="bg-deepbackground">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-background rounded-lg shadow-sm divide-y divide-deepbackground">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-indigo-400">{tier.name}</h2>
                <p className="mt-4 text-sm text-slate-300">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-indigo-400">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-300">/mo</span>
                </p>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-white tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
