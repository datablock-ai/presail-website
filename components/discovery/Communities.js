import { MailIcon, ChatIcon, BadgeCheckIcon } from '@heroicons/react/solid'

const communities = [
  {
    name: 'DCI',
    description: 'Paradigm Representative',
    role: 'Verified',
    email: 'janecooper@example.com',
    telegram: 'https://t.me/',
    imageUrl: '/clients/dutch-crypto-logo.png'
  },
  {
    name: 'Legion Ventures',
    description: 'We make private investments available to everyone.',
    role: 'Verified',
    email: 'janecooper@example.com',
    telegram: 'https://t.me/',
    imageUrl: '/clients/legion-ventures-logo.png'
  },
  {
    name: 'Vespertine',
    description: 'A blockchain advisory, investment and education firm.',
    role: 'Verified',
    email: 'janecooper@example.com',
    telegram: 'https://t.me/',
    imageUrl: '/clients/vespertine-logo.png'
  },
  {
    name: 'DuckDAO',
    description: 'The Duck community is different from anything the financial world has seen before.',
    role: 'Verified',
    email: 'janecooper@example.com',
    telegram: 'https://t.me/',
    imageUrl: '/clients/duckdao-logo.png'
  },

]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {communities.map((community) => (
            <li
              key={community.email}
              className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            >
              <div className="flex-1 flex flex-col p-8">
                <img className="w-fit h-32 flex-shrink-0 mx-auto invert" src={community.imageUrl} alt="" />
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{community.name}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">description</dt>
                  <dd className="text-gray-500 text-sm">{community.description}</dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="px-2 py-1 text-main text-xs font-medium rounded-full items-center justify-center">
                      <BadgeCheckIcon className="w-5 h-5 text-main inline-flex" aria-hidden="true" />
                      <span>{community.role}</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    <a
                      href={`mailto:${community.email}`}
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                    >
                      <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={community.telegram}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                    >
                      <ChatIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}