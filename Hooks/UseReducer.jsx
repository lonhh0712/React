import { useReducer } from "react";

// Hàm reducer nhận state hiện tại và action
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function CounterReducer() {
  // useReducer thay thế useState khi logic phức tạp
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>{count}</p>

      {/* dispatch gửi action vào reducer */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </div>
  );
}
