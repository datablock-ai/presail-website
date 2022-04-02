import React from 'react';
import TabList from './TabList';

import Tab1 from '../assets/tab1.png';
import Tab2 from '../assets/tab2.png';
import Tab3 from '../assets/tab3.png';

const defaultSelected = 'Fundraise';
const list = [
  {
    tabText: 'Fundraise',
    title: 'Automate your fundraising and receive contributions with no hassle',
    bullets: [
      'Transactions are verified automatically',
      'No need for google forms or spreadsheets',
      'Mitigate human errors',
      'No need to reconcile with etherscan/bscscan',
    ],
    image: Tab1,
  },
  {
    tabText: 'Organize',
    title: 'Organize your group, set up tiers and access requirements',
    bullets: [
      'Create your own rules',
      'Set up access requirements',
      'Set up your own tier groups',
      'User NFTs or Tokens for access',
    ],
    image: Tab2,
  },
  {
    tabText: 'Distribute',
    title: 'One-click distribute according to your vesting',
    bullets: [
      'One-click distributions',
      'No need for disperse/bulksender or other apps',
      'No need for spreadsheets or CSV',
      'Lorem ipsum dipsum',
    ],
    image: Tab3,
  },
];

export default () => {
  return (
    <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 mt-10 rounded border border-slate-300">
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl text-center text-blue-800">
        See what's inside
      </p>
      <TabList defaultSelected={defaultSelected} list={list} />
    </div>
  );
};
