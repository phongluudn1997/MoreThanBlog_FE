import { useAppSelector, useAppDispatch } from "@redux/hooks";

import { decrement, increment } from "@redux/slices/counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
    </>
  );
}
