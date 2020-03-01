import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare const useAppState: (args: {
    siteMetaData: ISiteMetaData;
    path: string;
}) => {
    appMode: any;
    siteMetaData: ISiteMetaData;
    toggleMenu: () => void;
};
export default useAppState;
