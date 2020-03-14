/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
declare const ItemAnimation: FunctionComponent;
declare const ControlAnimation: FunctionComponent<{
    isActive: boolean;
    colors: {
        active?: string;
        passive?: string;
    };
} & IThemeable>;
export { ItemAnimation, ControlAnimation };
