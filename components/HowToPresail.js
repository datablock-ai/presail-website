import React from 'react';
import TabList from './TabList';

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
    image: 'fundraise1.svg',
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
    image: 'organize1.svg',
  },
  {
    tabText: 'Distribute / Airdrop',
    title: 'One-click distribute according to your vesting',
    bullets: [
      'One-click distributions',
      'No need for disperse/bulksender or other apps',
      'No need for spreadsheets or CSV',
      'Lorem ipsum dipsum',
    ],
    image: 'distributions1.svg',
  },
  {
    tabText: 'Customization',
    title: 'One-click distribute according to your vesting',
    bullets: [
      'One-click distributions',
      'No need for disperse/bulksender or other apps',
      'No need for spreadsheets or CSV',
      'Lorem ipsum dipsum',
    ],
    image: 'customization1.svg',
  },
];

export default () => {
  return (
    <div className="mt-20">
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl text-center text-deep">
        See what's inside
      </p>
    <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 mt-10 rounded-[20px] border border-[#DDDDDD]">
      <TabList defaultSelected={defaultSelected} list={list} />
    </div>
    </div>
  );
};
