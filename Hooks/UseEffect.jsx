import { useState, useEffect } from "react";

function ExampleEffect() {
  const [count, setCount] = useState(0);

  // useEffect chạy sau mỗi lần component render
  useEffect(() => {
    // Code bên trong dùng cho side effect (log, gọi API, set title, ...)
    console.log("Count thay đổi:", count);
  }, [count]); // Chỉ chạy lại khi count thay đổi

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
