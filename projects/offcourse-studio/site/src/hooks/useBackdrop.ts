import { useState, useEffect } from "react";

const useBackdrop = (componentName) => {
  const [code, setCode] = useState(false);
  useEffect(() => {
    import(`../../shapes/${componentName}`).then(setCode);
    return;
  }, []);
  return code.default;
};

export default useBackdrop;
