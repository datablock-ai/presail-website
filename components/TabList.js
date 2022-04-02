import React, { useState, cloneElement } from 'react';
import Image from 'next/image';
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
        className={`lg:grid lg:grid-cols-${list.length} lg:gap-8 p-3`}
        style={{ textAlign: 'center' }}
      >
        {list.map((item, index) => {
          const style =
            selected === item.tabText ? { borderBottom: '1px solid' } : null;
          return (
            <div key={`${item.tabText}--${index}`}>
              <div className="lg:col-span-1">
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
                  className="p-3"
                >
                  {item.tabText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tab-item-wrapper">
        <TransitionGroup childFactory={childFactory(direction)}>
          <CSSTransition
            key={`tab-content--${selectedItem.tabText}`}
            timeout={1000}
            classNames={direction}
          >
            <div className="tab-content">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6 p-3">
                  <p
                    className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl"
                    style={{ color: 'rgb(10, 36, 64)' }}
                  >
                    {selectedItem.title}
                  </p>
                  <ul className="blue-bullet">
                    {selectedItem.bullets.map((bullet, index) => {
                      return (
                        <li key={`bullet--${selectedItem.title}--${index}`}>
                          {bullet}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="lg:col-span-6 p-3">
                  <Image src={selectedItem.image} />
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
