import React from 'react';
import TabList from './TabList';

const defaultSelected = 'Contributions';
const list = [
  {
    tabText: 'Contributions',
    title: 'Simplify contributions',
    description: 'Receive contributions from thousands of community members through a single contribution link. All transactions are verified automatically. Save time by eliminating tedious manual tasks in google forms and spreadsheets, and make your investment process more user friendly and compliant.',
    image: 'tab1.png',
  },
  {
    tabText: 'Automated 1-click distributions',
    title: 'Automated 1-click distributions',
    description: 'Distribute tokens to thousands of participants through a single transaction, saving money and time. With our distribution scheduling, you automatically pre-define your future distributions. No more keeping track of vesting schedules and TGEs.',
    image: 'tab2.png',
  },
  {
    tabText: 'Manage your community',
    title: 'Manage your community',
    description: 'Get a full overview of every single investor in your community. With automated cap tables generation, allocation management and refund management, you increase security and mitigate human error. It also becomes a lot easier to add more team members to help you scale up.',
    image: 'tab2.png',
  },
  {
    tabText: 'Create flexible deals',
    title: 'Create flexible deals',
    description: 'Create whitelisted deals, tier-based deals and KYC-required deals. You have full flexibility and support for multiple investment rounds and tokens. All deals are visible in a dashboard overview, both for you and for your community. The days of keeping track of individual deals are over - for you and your community.',
    image: 'tab2.png',
  },
];

export default () => {
  return (
    <div className="mt-20">
      <p className="mt-2 text-3xl font-extrabold sm:text-4xl text-center text-deep">
        Benefits for Communities
      </p>
    <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 mt-10 rounded-[20px] border border-[#DDDDDD]">
      <TabList defaultSelected={defaultSelected} list={list} />
    </div>
    </div>
  );
};
