/** @jsx jsx */
import { Context, FunctionComponent } from "react";
import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare type AppState = {
    appMode: string;
    current: any;
    callToActionVisible?: boolean;
    send: (event: any) => void;
    registerSection: (event: any) => void;
    siteMetaData?: ISiteMetaData;
};
export declare const StateContext: Context<AppState>;
export declare const StateProvider: FunctionComponent<{
    siteMetaData: ISiteMetaData;
    path: string;
}>;
export declare const useStateValue: () => AppState;
export {};
