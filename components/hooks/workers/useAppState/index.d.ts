import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare const useAppState: (args: {
    siteMetaData: ISiteMetaData;
}) => {
    appMode: any;
    toggleMenu: () => void;
};
export default useAppState;
