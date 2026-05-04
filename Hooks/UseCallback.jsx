import { useState, useCallback } from "react";

function Child({ onClick }) {
  return <button onClick={onClick}>Click Child</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  // useCallback giúp không tạo lại hàm mới mỗi lần render
  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []); // Không phụ thuộc state nào

  return (
    <div>
      <Child onClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>
        Parent {count}
      </button>
    </div>
  );
}
