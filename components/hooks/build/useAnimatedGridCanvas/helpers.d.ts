declare const generateGrid: ({ elements, unitSize, width, height }: {
    elements: any;
    unitSize: any;
    width: any;
    height: any;
}) => any;
declare const generateElements: (frame: number) => {
    u: number;
    v: number;
    value: number;
}[];
export { generateGrid, generateElements };
