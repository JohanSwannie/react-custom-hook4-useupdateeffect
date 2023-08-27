import { useState } from "react";

const UpdateEffectComponent = () => {
  const [counter1, setCounter1] = useState(25);
  const [counter2, setCounter2] = useState(0);

  useUpdateEffect(() => setCounter2((prevCounter1) => prevCounter1 * 4));

  return (
    <>
      <div>{counter1}</div>
      <button
        onClick={() => setCounter1((currentCounter1) => currentCounter1 + 1)}
      >
        Increment Counter1
      </button>
      <div>{counter2}</div>
    </>
  );
};

export default UpdateEffectComponent;
