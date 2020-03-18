import { ReactElement } from "react";
declare type useCycleElements = (args: {
    elements: ReactElement[];
    currentIndex: number;
    numberOfElements: number;
}) => {
    visibleChildren: ReactElement[];
};
declare const useCycleElements: useCycleElements;
export default useCycleElements;
