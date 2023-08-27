import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, dependency) => {
  const firstTimeUpdateRef = useRef(true);

  useEffect(() => {
    if (firstTimeUpdateRef.current) {
      firstTimeUpdateRef.current = false;
      return;
    }
    return callback;
  }, dependency);
};

export default useUpdateEffect;
