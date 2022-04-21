import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: 'https://blog.presail.com' },
    { name: 'Careers', href: 'https://presail.recruitee.com/' }
  ],
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/presailcom',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/datablock-ai/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: 'https://t.me/presailcom',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 23.25 24" width="23.25" height="24" {...props}>
          <path d="M11.625.375C5.205.375 0 5.58 0 12s5.205 11.625 11.625 11.625S23.25 18.42 23.25 12 18.045.375 11.625.375Zm5.388 7.906c-.175 1.838-.932 6.299-1.317 8.358-.163.871-.484 1.163-.794 1.192-.675.062-1.188-.446-1.842-.875-1.023-.671-1.601-1.088-2.594-1.743-1.148-.756-.404-1.172.25-1.852.171-.178 3.146-2.883 3.203-3.129.007-.031.014-.145-.054-.206s-.168-.04-.241-.023q-.154.035-4.904 3.241-.696.478-1.261.466c-.415-.009-1.214-.235-1.807-.428-.728-.237-1.307-.362-1.256-.764q.039-.314.865-.642 5.083-2.215 6.779-2.92c3.228-1.343 3.899-1.576 4.336-1.584.096-.002.311.022.45.135a.49.49 0 0 1 .165.315 2.051 2.051 0 0 1 .022.459Z"/>
        </svg>
      )
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-10 py-5">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
              <a className="text-base text-deep">
                {item.name}
              </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-deep">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-deep">&copy; 2022 Presail is operated by the registered Norwegian entity Datablock AS. All rights reserved.</p>
      </div>
    </footer>
  )
}
