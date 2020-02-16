import { CSSProperties } from "react";
import { IIndexable } from "@offcourse/interfaces/src";
interface ICarouselProps<T extends IIndexable> {
    items: T[];
    delay?: number;
    visibleItems: number;
}
interface ICarouselItem<T extends IIndexable> {
    item: T;
    style: CSSProperties;
    key: string;
}
declare const useCarousel: <T extends IIndexable>(props: ICarouselProps<T>) => ICarouselItem<T>[];
export default useCarousel;
