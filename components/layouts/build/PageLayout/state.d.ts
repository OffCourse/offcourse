/** @jsx jsx */
import { Context, FunctionComponent } from "react";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare type AppState = {
    appMode: any;
    toggleMenu: () => void;
    siteMetaData: ISiteMetaData;
};
export declare const StateContext: Context<AppState>;
export declare const StateProvider: FunctionComponent<{
    siteMetaData: ISiteMetaData;
}>;
export declare const useStateValue: () => AppState;
export {};
