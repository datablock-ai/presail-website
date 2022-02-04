export default function Hamza() {
  return (
    <section className="py-12 bg-background overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p className="text-4xl tracking-tight font-extrabold text-indigo-400">Hello, I'm Hamza!</p>
              <p className="text-white mb-5">
                Want to know how we can implement Presail for you?
              </p>
              <a
                href="https://t.me/zerocap"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-400"
              >
                Chat with me on Telegram     
              </a>
              <img
                className="mx-auto mt-20 mb-10 h-44 w-44 rounded-full"
                src="/team/hamza.webp"
                alt="Hamza Nebolsi"
              />
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-white">Hamza Nebolsi</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-white">Head of Product</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
