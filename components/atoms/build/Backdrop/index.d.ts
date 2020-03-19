/// <reference types="react" />
/// <reference types="@emotion/core" />
/// <reference types="theme-ui" />
import { IThemeable } from "@offcourse/interfaces/src";
declare const Backdrop: import("react").ForwardRefExoticComponent<IThemeable & {
    width?: number | undefined;
    height?: number | undefined;
} & import("react").RefAttributes<HTMLCanvasElement>>;
export default Backdrop;