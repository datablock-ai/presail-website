/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "Can we do distributions through Presail?",
    answer:
      "For now we provide you with all the data needed for exporting e.g cap table to use for disperse, bulksender or any other service for token issuance. Our goal is to make this process much simpler and smoother through Presail.",
  },
  {
    id: 2,
    question: "What is the process and how long does it take to get started?",
    answer:
      "Presail can get you onboarded within 1-2 days after signing agreement. The steps include setting up a private group, adding accounts to your team in the Presail system. Adding your logo and setting up the DNS settings for your custom domain.",
  },
  {
    id: 3,
    question: "Is Presail based on smart contracts?",
    answer:
      "No we are not. Solutions like Presail needs certain flexibility that smart contracts can’t provide. There are many factors as well as potential risks when using smart contracts – but we do intend on experimenting for better automation in the future.",
  },
  {
    id: 4,
    question: "Can we get a trial?",
    answer:
      "Presail can offer you a 2 week trial for $1000 with a 100% money back guarantee. Reach out to us to discuss.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
        <div className="mt-6 border-t border-indigo-900 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg leading-6 font-medium text-white">{faq.question}</dt>
                <dd className="mt-2 text-base text-slate-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
