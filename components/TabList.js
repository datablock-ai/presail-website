import React, { useState, useEffect, cloneElement } from 'react';
import NextImage from 'next/image';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const childFactory = (direction) => (child) =>
  cloneElement(child, {
    classNames: direction,
  });

export default ({ defaultSelected, list }) => {
  const [selected, setSelected] = useState(defaultSelected);
  const [direction, setDirection] = useState('slide-right');

  const selectedItem = list.find((item) => item.tabText === selected);

  return (
    <div className="p-3">
      <div
        className="grid lg:gap-8 p-3 text-center"
        style={{
          gridTemplateColumns: `repeat(${list.length}, minmax(0, 1fr))`,
        }}
      >
        {list.map((item, index) => {
          const style =
            selected === item.tabText ? { borderBottom: '3px solid' } : null;
          return (
            <div key={`${item.tabText}--${index}`}>
              <button
                onClick={() => {
                  const selectedIndex = list.findIndex(
                    (obj) => obj.tabText === selected
                  );
                  const newSelectedIndex = list.findIndex(
                    (obj) => obj.tabText === item.tabText
                  );
                  setSelected(item.tabText);
                  setDirection(
                    newSelectedIndex < selectedIndex
                      ? 'slide-left'
                      : 'slide-right'
                  );
                }}
                style={style}
                className="p-3 text-deep font-bold lg:text-2xl md:text-2xl sm:text-1xl"
              >
                {item.tabText}
              </button>
            </div>
          );
        })}
      </div>
      <div className="tab-item-wrapper">
        <TransitionGroup
          childFactory={childFactory(direction)}
          className="tab-item-container"
        >
          <CSSTransition
            key={`tab-content--${selectedItem.tabText}`}
            timeout={300}
            classNames={direction}
          >
            <div className="mt-10">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6 p-3">
                  <h3 className="mb-4 text-3xl font-extrabold text-deep tracking-tight sm:text-4xl">
                    {selectedItem.title}
                  </h3>
                  <ul className="mt-20 list-disc list-inside">
                    {selectedItem.bullets.map((bullet, index) => {
                      return (
                        <li
                          key={`bullet--${selectedItem.title}--${index}`}
                          className="mt-5 text-base text-subgray sm:text-lg md:text-xl"
                        >
                          {bullet}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="lg:col-span-6 p-3">
                  <NextImage
                    src={`/${selectedItem.image}`}
                    priority
                    alt="Product demo"
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
