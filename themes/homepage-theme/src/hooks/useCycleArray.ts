import { useState } from "react";
import useInterval from "./useInterval";

const useCycleArray = <T>(initialArray: T[], delay: number) => {
  const indexedItems = [...initialArray, ...initialArray].map(
    (item, index) => ({
      ...item,
      index
    })
  );
  const [orderedItems, setOrderedItems] = useState(indexedItems);
  useInterval(() => {
    const last = orderedItems.pop();
    setOrderedItems(last ? [last, ...orderedItems] : orderedItems);
  }, delay);

  return orderedItems;
};

export default useCycleArray;
