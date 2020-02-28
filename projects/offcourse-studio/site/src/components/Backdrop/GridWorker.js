import GridWorker from "./grid.worker";

const gridWorker = typeof window === "object" && new GridWorker();

export default gridWorker;
