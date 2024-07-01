'use client';

import { useState, useMemo } from 'react';

import GridItem from './grid-item';
import { PiDotsThreeOutlineBold } from 'react-icons/pi';

export default function Grid({ items }) {
  const [numberItemToShow, setNumberOfItemsToShown] = useState(9);
  const [expanded, setExpanded] = useState(false);

  const showMore = () => {
    if (numberItemToShow < items.length) {
      setNumberOfItemsToShown(items.length);
      setExpanded(true);
    } else {
      setNumberOfItemsToShown(numberItemToShow - 11);
      setExpanded(false);
    }
  };

  const itemsToShow = useMemo(() => {
    return items.slice(0, numberItemToShow).map((item, i) => (
      <li key={i}>
        <GridItem {...item} />
      </li>
    ));
  }, [items, numberItemToShow]);

  return (
    <ul className="lg:w-11/12 md:w-9/12 w-5/6 max-w-7xl grid lg:grid-cols-5 lg:gap-12 md:grid-cols-3 md:gap-6 grid-cols-2 gap-3 my-8 mx-auto list-none p-0">
      {itemsToShow.length ? itemsToShow : 'Loading...'}
      <li className="pb-3 border-2 border-gray-900 rounded-md flex flex-col items-center justify-center">
        <p>{expanded ? 'Show Less' : 'Show All'}</p>
        <button className="text-5xl" onClick={showMore} type="button">
          <PiDotsThreeOutlineBold />
        </button>
      </li>
    </ul>
  );
}
