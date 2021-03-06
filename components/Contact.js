export default function Contact() {
  return (
    <div className="bg-white my-20">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-main sm:text-3xl">
          <span className="block text-deep">Ready to dive in?</span>
        </h2>
        <h2 className="text-3xl font-extrabold tracking-tight text-main sm:text-3xl">
          <span className="block text-deep">Start for free today</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href="https://calendly.com/nakazumi"
            className="mx-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-main"
          >
            Book a demo
          </a>

          <a
            href="https://t.me/pacyos"
            target="_blank"
            className="mx-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-deep bg-secondary"
          >
            Chat with us
          </a>

        </div>
      </div>
    </div>
  )
}