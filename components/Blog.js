const posts = [
  {
    title: 'Presail Distributions V1',
    href: 'https://blog.presail.com/announcing-presail-distributions-v1-bc1fdde69fd0',
    category: { name: 'Announcement' },
    description:
      'I’m excited to announce the release of our token distribution feature. You can now raise funds, manage investors and distribute tokens in an automated way — using one app.',
    date: 'Apr 27, 2022',
    datetime: '2022-03-02',
    imageUrl:
      'https://miro.medium.com/max/1400/0*i1PnqSGGnUn3KDIb.png',
    readingTime: '3 min',
    author: {
      name: 'August Haug',
      imageUrl:
        '/team/august.webp'
    },
  },
  {
    title: 'Introducing Pools, Tiers & Mix Rounds / Split SAFTs',
    href: 'https://blog.presail.com/presail-product-update-introducing-pools-tiers-mix-rounds-split-safts-efaea4f147ff',
    category: { name: 'Announcement' },
    description:
      'Today, we are announcing our most impactful software update yet, with Pools, Tiers & Mix Rounds / Split SAFTs functionality.',
    date: 'Apr 13, 2022',
    datetime: '2020-04-13',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=559&q=80',
    readingTime: '4 min',
    author: {
      name: 'Milad Mirshahi',
      imageUrl:
        '/team/milad.webp',
    },
  },
  {
    title: 'The benefits of raising money from a community',
    href: 'https://blog.presail.com/the-benefits-of-raising-money-from-a-community-5b9fd8a26da3',
    category: { name: 'Article' },
    description:
      'Community is at the core of web3. People are looking for companies to present a vision they can rally around and are willing to invest their time and money to help it succeed.',
    date: 'Mar 10, 2022',
    datetime: '2022-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=559&q=80',
    readingTime: '5 min',
    author: {
      name: 'Sebastian Almnes',
      imageUrl:
        '/team/sebastian.webp'
    },
  },
]

export default function Example() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Investing should be for everyone. Not just the rich and well-connected.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">{post.category.name}</p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" height="10" alt="10" src={post.author.imageUrl} alt={post.author.name} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}