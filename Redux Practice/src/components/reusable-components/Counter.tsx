import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../slices/CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <button
          className="  text-3xl font-bold underline"
          onClick={() => dispatch(increment())}
        >
          Add
        </button>
        <h1 className="text-3xl font-bold underline">{count}</h1>
        <button
          className="text-3xl font-bold underline"
          onClick={() => dispatch(decrement())}
        >
          Sub
        </button>
      </div>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          Click me
        </Button>
      </div>
    </>
  );
}

export default Counter;
