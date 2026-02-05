import {UseState} from 'react';

function Counter() {
  const [count, setCount] = UseState(0);
  return(
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click
        </button>
    </div>
  );
}

export default Counter;