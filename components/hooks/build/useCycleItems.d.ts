import { IIndexable } from "@offcourse/interfaces/src";
interface ICarouselProps<T extends IIndexable> {
    items: T[];
    delay?: number;
    visibleItems: number;
}
declare const useCycleItems: <T extends IIndexable>(props: ICarouselProps<T>) => any[];
export default useCycleItems;
