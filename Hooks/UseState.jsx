import { useState } from "react";

function Counter() {
  // Khai báo state count, giá trị ban đầu = 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Hiển thị giá trị state */}
      <p>Count: {count}</p>

      {/* Khi click → cập nhật state → component render lại */}
      <button onClick={() => setCount(count + 1)}>
        Tăng
      </button>
    </div>
  );
}

export default Counter;
