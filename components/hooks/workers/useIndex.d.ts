declare type useIndex = (args?: {
    initialIndex: number;
}) => {
    currentIndex: number;
    nextIndex: () => void;
    setIndex: (index: number) => void;
};
declare const useIndex: useIndex;
export default useIndex;
