declare const useAnimationFrame: (args: {
    callback: (time: number) => void;
    delay: number;
}) => void;
export default useAnimationFrame;
