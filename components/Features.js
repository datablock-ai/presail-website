/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  EmojiHappyIcon,
  BadgeCheckIcon,
  HeartIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Feel in control', icon: EmojiHappyIcon, description: 'We let you create, manage and distribute your deals. Enjoy a single place for all your tasks.' },
  { name: 'On brand', icon: BadgeCheckIcon, description: 'Your brand matters. Use Presail from your own domain.' },
  { name: 'Loved by your users', icon: HeartIcon, description: 'Join the ecosystem, and give them access to have all their deals in one place.' },
  { name: 'Advanced Security', icon: ShieldCheckIcon, description: "Audited and approved by Hacken. Simply put, we're secure." },
  { name: 'Collaboration', icon: UserGroupIcon, description: 'Every action that gets changed is logged and visible in the system. Invite your teammates to help out.' },
  { name: 'Database Backups', icon: ServerIcon, description: 'maamam' },
]

export default function Example() {
  return (
    <div className="relative bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-left md:text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-400 uppercase">Deploy faster</h2>
        <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-slate-300">
          Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
          malesuada. Eleifend condimentum id viverra nulla.
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
