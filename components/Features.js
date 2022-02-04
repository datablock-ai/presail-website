/* This example requires Tailwind CSS v2.0+ */
import {
  ServerIcon,
  ShieldCheckIcon,
  EmojiHappyIcon,
  BadgeCheckIcon,
  HeartIcon,
  UserGroupIcon,
  IdentificationIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Feel in control', icon: EmojiHappyIcon, description: 'We let you create, manage and distribute your deals to your community. Enjoy a single place for all your tasks.' },
  { name: 'Reduce workload', icon: BadgeCheckIcon, description: 'No need for manual checkups, we use the blockchain to verify transactions and mitigate human error.' },
  { name: 'Collaboration', icon:UserGroupIcon, description: 'Invite your teammates to help out. Every action that gets changed is logged and visible in the system.' },
  { name: 'Stay on brand', icon: IdentificationIcon, description: "Use your own domain and logo across the platform, let your users know they are part of your community." },
  { name: 'Security', icon: ShieldCheckIcon, description: 'C-level experience handling security at international companies. All data is AES-GCM encrypted. Audited by Hacken.' },
  { name: 'Compliance', icon: ServerIcon, description: 'We give you the tools you need to stay compliant under regulatory requirements through KYC/AML.' },
]

export default function Example() {
  return (
    <div className="relative bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-400 uppercase">improve your workflow</h2>
        <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          Everything you need to create, manage and distribute deals
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-deepbackground rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-400 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-slate-300">
                     {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
