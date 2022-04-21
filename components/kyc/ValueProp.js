/* This example requires Tailwind CSS v2.0+ */
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
                  Your investors will love you for chosing us
                </h2>
                <p className="mt-4 text-lg text-subgray">
                 With a smooth onboarding experience, they'll be good to go in a couple of minutes.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Our KYC coverage span across 200+ countries, and is available in 20 different languages.</li>
                    <li>Each KYC require a selfie & identification (we run the AML check in the background).</li>
                    <li>We've teamed up with Persona, the KYC provider for the largest companies in the world. They're CCPA , GDPR, SOC2, FERPA & HIPAA compliant.</li>
                    <li>Minimum age requirement of 18.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/biometrics.gif"
                alt="Presail KYC biometrics demo"
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
                  Easy to manage
                </h2>
                <p className="mt-4 text-lg text-subgray">
                  By enabling KYC on a deal, your investors wont be able to access the deal until they've completed the KYC and passed AML.
                  We handle all the heavy-lifting you just click enable.
                </p>
                <div className="mt-6">
                  <ul className="list-disc text-subgray list-inside text-lg">
                    <li>Access to individual investors KYC & AML verification and documentation is available for premium clients.</li>
                    <li>Easily see which investors that have been verified, and which hasn't on your Investor page.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/identification.gif"
                alt="Presail KYC identification demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}