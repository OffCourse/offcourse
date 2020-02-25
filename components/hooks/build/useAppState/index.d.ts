import { ISiteMetaData } from "@offcourse/interfaces/src/pages";
declare const useAppState: (args: {
    siteMetaData: ISiteMetaData;
    path: string;
}) => [any, ISiteMetaData, () => void];
export default useAppState;
