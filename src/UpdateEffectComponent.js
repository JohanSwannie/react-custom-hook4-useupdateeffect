import { useState } from "react";
import useUpdateEffect from "./useUpdateEffect";

const UpdateEffectComponent = () => {
  const [counter1, setCounter1] = useState(25);
  const [counter2, setCounter2] = useState(0);

  useUpdateEffect(() => setCounter2(counter1 * 4), [counter1]);

  return (
    <>
      <div className="container">
        <div className="counter1">Counter1 : {counter1}</div>
        <button
          onClick={() => setCounter1((currentCounter1) => currentCounter1 + 1)}
        >
          Increment Counter1
        </button>
        <div className="counter2">Counter2 : {counter2}</div>
      </div>
    </>
  );
};

export default UpdateEffectComponent;
