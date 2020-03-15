import { ReactElement } from "react";
declare const useIndex: () => any;
declare const useCycleElements: (x: {
    elements: ReactElement[];
    currentIndex: number;
    numberOfElements: number;
}) => {
    visibleChildren: ReactElement[];
};
export { useIndex, useCycleElements };
