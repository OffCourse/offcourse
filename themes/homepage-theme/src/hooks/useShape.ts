import { useState, useEffect } from "react";

const useShape = (shapeName: string) => {
  const [code, setCode] = useState(false);

  useEffect(() => {
    import(`../../shapes/${shapeName}`).then(setCode);
    return;
  }, []);
  return code.default;
};

export default useShape;
