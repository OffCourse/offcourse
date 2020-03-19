import { ReactElement } from "react";
import { useIndex } from "@offcourse/hooks";
declare type useCycleElements = (args: {
    elements: ReactElement[];
    currentIndex: number;
    numberOfElements: number;
}) => {
    visibleChildren: ReactElement[];
};
declare const useCycleElements: useCycleElements;
export { useIndex, useCycleElements };