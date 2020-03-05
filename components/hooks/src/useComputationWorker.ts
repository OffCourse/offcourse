import { useState, useEffect, useRef } from "react";

const useComputationWorker = (functionAsString: string) => {
  const [elements, setElements] = useState<any>([]);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const blob = new Blob([functionAsString]);
    const blobURL = window.URL.createObjectURL(blob);

    if (!workerRef.current) {
      workerRef.current = new Worker(blobURL);
    }
    workerRef.current.onmessage = (e: any) => {
      setElements(JSON.parse(e.data));
    };
    const cleanup = () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
    return cleanup;
  }, [functionAsString]);
  return [elements, workerRef.current];
};

export default useComputationWorker;
