const logos = [
    {
        logo: 'ferrum'
    },
    {
        logo: 'master'
    },
    {
        logo: 'vespertine'
    },

    {
        logo: 'duckdao'
    },
    {
        logo: 'dutch-crypto'
    },
    {
        logo: 'legion-ventures'
    },
    {
        logo: 'mars-dao'
    },
    {
        logo: 'game-station'
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
    <div className="bg-deepbackground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-36 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-white tracking-wider">
          The most innovative communities trust Presail
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8">
          {logos.map(({ logo }, i) => (
          <div className="col-span-1 flex justify-center py-8 px-8 bg-white/[.025]" key={i}>
            <img className="max-h-10 max-w-none" src={`/clients/${logo}-logo.png`} alt={logo} />
          </div>
          ))}
        </div>
        <p className="text-center text-base font-semibold uppercase text-white tracking-wider mt-10">
          + many more
        </p>
      </div>
    </div>
  )
}