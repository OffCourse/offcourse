import { useState } from "react";
import useInterval from "./useInterval";

const useCycleArray = <T>(initialArray: T[], delay: number) => {
  const indexedItems = initialArray.map((item, index) => ({
    ...item,
    index
  }));
  const [orderedItems, setOrderedItems] = useState(indexedItems);
  useInterval(() => {
    const [first, ...others] = orderedItems;
    setOrderedItems([...others, first]);
  }, delay);

  return orderedItems;
};

export default useCycleArray;
