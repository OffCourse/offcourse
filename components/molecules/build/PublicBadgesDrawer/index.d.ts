import { JSX as LocalJSX } from "@offcourse/public-badges-drawer/loader";
import { FunctionComponent, DetailedHTMLProps, HTMLAttributes } from "react";
declare type StencilProps<T> = {
    [P in keyof T]?: Omit<T[P], "ref"> | HTMLAttributes<T>;
};
declare type ReactProps<T> = {
    [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};
declare type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> & ReactProps<U>;
declare global {
    export namespace JSX {
        interface IntrinsicElements extends StencilToReact {
        }
    }
}
interface IPublicBadgesDrawerProp {
    badgeColor?: string;
    modalTheme?: "light" | "dark";
}
declare const PublicBadgesDrawer: FunctionComponent<IPublicBadgesDrawerProp>;
export default PublicBadgesDrawer;
