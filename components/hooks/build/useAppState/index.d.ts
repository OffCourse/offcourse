import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
import { StateValue } from "xstate";
declare const useAppState: (args: {
    siteMetaData: ISiteMetaData;
}) => {
    appMode: StateValue;
    siteMetaData: ISiteMetaData;
    toggleMenu: () => void;
};
export default useAppState;
