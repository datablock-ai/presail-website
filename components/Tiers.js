/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/solid'

const tiers = [
  { 
    name: 'Basic',
    href: '#', 
    priceMonthly: 1500,
    description: 'Volume < $100K/m'
    
  },
  {
    name: 'Essential',
    href: '#',
    priceMonthly: 2500,
    description: 'Volume > $250K/m'
   
  },
  {
    name: 'Scale',
    href: '#',
    priceMonthly: 4000,
    description: 'Volume > $500K/m'
    
  },
  {
    name: 'Premium',
    href: '#',
    priceMonthly: 6000,
    description: 'All access'
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Contribution page', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Cap table', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Advanced Search', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Deal exports', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Role based access control', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Team management', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Investor portal', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Whitelisting', tiers: { Basic: false, Essential: true, Scale: true, Premium: true } },
      { name: 'Tokenized access (incl. NFTs)', tiers: { Basic: false, Essential: true, Scale: true, Premium: true } },
      { name: 'Custom domain', tiers: { Basic: false, Essential: true, Scale: true, Premium: true } },
      { name: 'Distribution calendar', tiers: { Basic: false, Essential: false, Scale: false, Premium: true } },
      { name: 'Custom branding', tiers: { Basic: false, Essential: false, Scale: false, Premium: true } },
    ],
  },
  {
    name: 'Security',
    features: [
      { name: 'Audit logs', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'AES-GCM Encryption', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Enterprise Secure Access Service Edge', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'DDoS Protection', tiers: { Basic: false, Essential: true, Scale: true, Premium: true } },
      { name: 'AML', tiers: { Basic: false, Essential: false, Scale: false, Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '7-day support', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
      { name: 'Dedicated support agent', tiers: { Basic: true, Essential: true, Scale: true, Premium: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto bg-gray-800 py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
          {tiers.map((tier, tierIdx) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-indigo-400">{tier.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-white">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-300">/mo</span>
                </p>
                
                <a
                  href={tier.href}
                  className="mt-6 block border border-gray-800 rounded-md bg-indigo-400 w-full py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900"
                >
                  Buy {tier.name}
                </a>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="bg-indigo-400 border-t border-indigo-400 py-3 px-4 text-sm font-medium text-gray-300 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr key={feature.name} className="border-t border-gray-200">
                        <th className="py-5 px-4 text-sm font-normal text-gray-300 text-left" scope="row">
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-gray-700 text-right">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="ml-auto h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="ml-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">{feature.tiers[tier.name] === true ? 'Yes' : 'No'}</span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div
                className={classNames(
                  tierIdx < tiers.length - 1 ? 'py-5 border-b' : 'pt-5',
                  'border-t border-gray-200 px-4'
                )}
              >
                <a
                  href={tier.href}
                  className="block w-full bg-indigo-400 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th className="pb-4 px-6 text-sm font-medium text-gray-300 text-left" scope="col">
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/5 pb-4 px-6 text-lg leading-6 font-medium text-indigo-400 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th className="py-8 px-6 text-sm font-medium text-gray-300 text-left align-top" scope="row">
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="relative h-full table">
                      <p>
                        <span className="text-4xl font-extrabold text-white">${tier.priceMonthly}</span>{' '}
                        <span className="text-base font-medium text-gray-300">/mo</span>
                      </p>
                      <p className="mt-4 mb-16 text-sm text-gray-300">{tier.description}</p>
                      <a
                        href={tier.href}
                        className="absolute bottom-0 flex-grow block w-full bg-indigo-400 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-indigo-400 py-3 pl-6 text-sm font-medium text-white text-left"
                      colSpan={5}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th className="py-5 px-6 text-sm font-normal text-gray-300 text-left" scope="row">
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className="block text-sm text-indigo-400">{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                              ) : (
                                <MinusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="block w-full bg-indigo-400 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-indigo-900"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
