export default function Hacken() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              <img src="audited.webp" className="h-16 mt-8" alt="Audited by Hacken" height="64" width="135.6" />
              <img src="ey-regulation.webp" className="h-16 mt-8" alt="Regulatory asssessed by EY" height="64" width="170.45" />
              <img src="certik.webp" className="h-16 mt-8" height="64" width="108.55" alt="Audited by Certik" />
            </div>
        <p className="mt-10 text-lg leading-6 text-subgray">
        Our users have facilitated $100M+ through Presail. 
        We're compliant, audited, and have a public team with a registered entity. 
        We are also backed by a <a href="https://blog.presail.com/presail-closes-1-6m-seed-round-to-simplify-web-3-0-investments-12324160dc4c" className="text-deep underline">world-class group of investors</a>.
        </p>
      </div>
    </div>
  )
}