import ElementsWorker from "./elements.worker";
const elementsWorker = typeof window === "object" && new ElementsWorker();
export default elementsWorker;
