import { FC, useCallback } from "react";
import { useAppDispatch } from "../../hooks/actionDispatcher";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  decrement,
  increment,
  selectCounterValue,
} from "../../store/reducers/counterStore";

const Counter: FC = () => {
  const value = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  const incrementAction = useCallback(() => dispatch(increment()), [dispatch]);
  const decrementAction = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div>
      <div>count: {value}</div>
      <div>
        <button onClick={incrementAction}>Increment</button>
        <button onClick={decrementAction}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
