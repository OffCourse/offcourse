declare type Callback = (args?: any) => void;
declare const useInterval: (callback: Callback, delay: number) => void;
export default useInterval;
