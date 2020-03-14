/** @jsx jsx */
import { FunctionComponent, ReactElement } from "react";
declare const Controls: FunctionComponent<{
    children: ReactElement[];
    currentIndex: number;
    colors: {
        active?: string;
        passive?: string;
    };
    setIndex: (index: number) => void;
}>;
export default Controls;
