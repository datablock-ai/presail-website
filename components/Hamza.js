import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const categories = [
  {
    name: 'Tab 1'
  },
  {
    name: 'Tab 2'
  },
  {
    name: 'Tab 3'
  }
]

export default function Hamza() {
  return (
    <Tab.Group>
      <Tab.List>
        {categories.map((item) => (
          <Tab
            key={item.name}
className={({ selected }) =>
                className(
                  'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
          >
          {item.name}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
