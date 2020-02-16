declare const useCycleArray: <T>(initialArray: T[], delay: number) => (T & {
    index: number;
})[];
export default useCycleArray;
