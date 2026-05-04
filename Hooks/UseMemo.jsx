import { useState, useMemo } from "react";

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];

  // useMemo chỉ tính lại khi dependency thay đổi
  const evenNumbers = useMemo(() => {
    return numbers.filter(n => n % 2 === 0);
  }, [numbers]);

  return (
    <div>
      <p>Số chẵn: {evenNumbers.join(", ")}</p>

      {/* Thay đổi count không làm chạy lại useMemo */}
      <button onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </div>
  );
}
