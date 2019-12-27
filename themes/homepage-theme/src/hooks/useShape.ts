import { useState, useEffect } from "react";

const useShape = (shapeName: string) => {
  const [code, setCode] = useState<boolean | any>(false);

  useEffect(() => {
    import(`../../shapes/${shapeName}`).then(setCode);
    return;
  }, [shapeName]);
  return code.default;
};

export default useShape;
