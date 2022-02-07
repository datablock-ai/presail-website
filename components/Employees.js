import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'
const people = [
  {
    name: 'Sebastian',
    role: 'CEO',
    imageUrl:
      '/team/sebastian.webp',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sebastianalmnes/',
  },
  {
    name: 'Tomas',
    role: 'CTO',
    imageUrl:
      '/team/tomas.webp',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sebastianalmnes/',
  },
  {
    name: 'Hamza',
    role: 'Head of Product',
    imageUrl:
      '/team/hamza.webp',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sebastianalmnes/',
  },
  {
    name: 'Milad',
    role: 'Head of Communications',
    imageUrl:
      '/team/milad.webp',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sebastianalmnes/',
  },
  {
    name: 'Jacob',
    role: 'Junior Developer',
    imageUrl:
      '/team/jacob.webp',
  },
  {
    name: 'August',
    role: 'Senior Developer',
    imageUrl:
      '/team/august.webp',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sebastianalmnes/',
  },
]

export default function Employees() {
  return (
    <div className="bg-background">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet our team</h2>

            <a
              href="https://presail.recruitee.com/"
              className="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
            >
              <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-400 rounded-full">
                We're hiring
              </span>
              <span className="ml-4 text-sm">Visit our careers page</span>
              <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </a>

            <p className="text-xl text-slate-300 max-w-4xl">
              We're a remote-first company motivated by working on complex problems.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-deepbackground flex place-content-center text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 grayscale" src={person.imageUrl} alt="" />
                  <div className="space-y-2 place-content-center text-center xl:flex xl:items-center">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{person.name}</h3>
                      <p className="text-indigo-400">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
