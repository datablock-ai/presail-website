import React from 'react';
import TabList from './TabList';

const defaultSelected = 'Fundraise';
const list = [
  {
    tabText: 'Fundraise',
    title: 'Automate your fundraising and receive contributions with no hassle',
    bullets: [
      'No need for google forms or spreadsheets',
      'Transactions are verified automatically',
      'Remove human errors',
      'No need to reconcile with etherscan/bscan',
      'Splitted safts / mix rounds supported'
    ],
    image: 'fundraise1.svg',
  },
  {
    tabText: 'Organize',
    title: 'Organize your group, set up tiers and access requirements',
    bullets: [
      'Set up your own tiers, groups or whitelists',
      'Create rules and access requirements',
      'Connect your NFT’s or tokens to your tiers',
      'Create multiple pools within a deal',
    ],
    image: 'organize1.svg',
  },
  {
    tabText: 'Distribute / Airdrop',
    title: 'One-click distribute according to your vesting',
    bullets: [
      'One-click distributions / airdrops',
      'No need for disperse/bulksender or other apps',
      'No need for spreadsheets or CSV',
      'Make partial and/or full refunds',
      'Always keeping allocations updated'
    ],
    image: 'distributions1.svg',
  },
  {
    tabText: 'Customization',
    title: 'Get your own custom branding and domain setup',
    bullets: [
      'Get your own branding on Presail',
      'Set up your own presail subdomain',
      'Custom thumbnails on contribution links',
      'Let your community feel on-brand',
      'Other custom branding elements'
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
