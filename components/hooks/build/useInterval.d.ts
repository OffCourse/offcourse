declare type Callback = (args?: any) => void;
declare const useInterval: (callback: Callback, delay: number | null) => void;
export default useInterval;
