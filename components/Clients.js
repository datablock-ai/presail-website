const logos = [
    {
        logo: 'ferrum'
    },
    {
        logo: 'master'
    },
    {
        logo: 'dutch-crypto'
    },
    {
        logo: 'mars-dao'
    },
    {
        logo: 'game-station'
    },
    {
        logo: 'legion-ventures'
    },
    {
        logo: 'vespertine'
    },
    {
        logo: 'chateau'
    },
    {
        logo: 'chihua'
    },
    {
        logo: '316vc'
    },
    {
        logo: 'alpha'
    },
    {
        logo: 'skyx'
    },
    {
        logo: 'emerald'
    },
    {
        logo: 'company'
    },
    {
        logo: 'trust'
    },
    {
        logo: '0xcap'
    },
    {
        logo: 'moongems'
    },
    {
        logo: 'gamesta'
    },
    {
        logo: 'lepricon'
    },
    {
        logo: 'ysc'
    },
    {
        logo: 'spidersilk'
    },
    {
        logo: 'sors'
    },
    {
        logo: 'contango'
    },
    {
        logo: 'uoc'
    },
    {
        logo: 'tlh'
    }
]

export default function Clients() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-white tracking-wider">
          You'll be in good company
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8">
          {logos.map(({ logo }, i) => (
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-900 hover:bg-indigo-400 hover:scale-105" key={i}>
            <img className="max-h-12 invert-100 opacity-50" src={`/clients/${logo}-logo.png`} alt={logo} />
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}