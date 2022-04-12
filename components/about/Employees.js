import { ChevronRightIcon } from '@heroicons/react/solid'
const people = [
  {
    name: 'Sebastian Almnes',
    role: 'CEO',
    imageUrl: '/team/sebastian.webp',
    telegram: 'sebdatablock'
  },
  {
    name: 'Tomas Veiden',
    role: 'CTO',
    imageUrl: '/team/tomas.webp',
    telegram: 'TomasPresail'
  },
  {
    name: 'Hamza Nebolsi',
    role: 'Head of Product',
    imageUrl: '/team/hamza.webp',
    telegram: 'ZeroCap'
  },
  {
    name: 'Milad Mirshahi',
    role: 'Head of Communications',
    imageUrl: '/team/milad.webp',
    telegram: 'iNakazumi'
  },
  {
    name: 'August',
    role: 'Senior Developer',
    imageUrl: '/team/august.webp',
    telegram: 'lyf1n'
  },
  {
    name: 'Bue',
    role: 'Senior Developer',
    imageUrl: '/team/bue.webp'
  },
  {
    name: 'Jacob',
    role: 'Developer',
    imageUrl: '/team/jacob.webp',
  }
]

export default function Employees() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-deep tracking-tight sm:text-4xl">Meet our team</h2>
            <p className="text-xl text-subgray max-w-4xl">
              We're a remote-first company motivated by working on complex problems.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-secondary flex place-content-center text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 grayscale" src={person.imageUrl} alt="" />
                  <div className="space-y-2 place-content-center text-center xl:flex xl:items-center">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-main">{person.name}</h3>
                      <p className="text-deep">{person.role}</p>
                      <p className="text-deep text-sm pt-6 border-b-2 border-deep">Verified credentials</p>
                      <p className="text-deep text-sm">Telegram: {person.telegram}</p>
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
