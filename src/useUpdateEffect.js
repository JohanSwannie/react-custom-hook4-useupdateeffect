import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, dependencies) => {
  const updateRef = useRef(true);

  useEffect(() => {
    if (updateRef) {
      updateRef = false;
      return;
    }
    return callback;
  }, [dependencies]);
};

export default useUpdateEffect;
