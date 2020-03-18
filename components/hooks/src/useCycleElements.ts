import { ReactElement } from "react";
import { wrap } from "@popmotion/popcorn";

type useCycleElements = (args: {
  elements: ReactElement[];
  currentIndex: number;
  numberOfElements: number;
}) => {
  visibleChildren: ReactElement[];
};

const useCycleElements: useCycleElements = ({
  elements,
  currentIndex = 0,
  numberOfElements = 1
}) => {
  const numberOfItems = elements.length;
  const prevItem = elements[wrap(0, numberOfItems, currentIndex - 1)];
  const currentItem = elements[wrap(0, numberOfItems, currentIndex)];
  const nextItem = elements[wrap(0, numberOfItems, currentIndex + 1)];
  const visibleChildren = [
    [currentItem],
    [currentItem, nextItem],
    [prevItem, currentItem, nextItem]
  ];

  return { visibleChildren: visibleChildren[numberOfElements - 1] || [] };
};

export default useCycleElements;
