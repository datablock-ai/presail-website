import Image from 'next/image'

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
    role: 'Head of Community',
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

export default function Example() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet our team</h2>
            <p className="text-xl text-gray-300">
              Community-driven funding allows anyone, anywhere, to come together and raise capital towards a common goal.  Be it an early-stage web3 project in return for tokens or owning a copy of the US constitution. 
              Presail is about enabling these communities. And if we succeed it will be game-changing.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="py-10 px-6 bg-gray-900 flex place-content-center text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                  <div className="space-y-2 xl:flex xl:items-center">
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
