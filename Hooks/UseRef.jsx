import { useRef } from "react";

function FocusInput() {
  // Tạo ref, giá trị ban đầu là null
  const inputRef = useRef(null);

  return (
    <div>
      {/* Gắn ref vào input để truy cập DOM */}
      <input ref={inputRef} />

      {/* Dùng ref để focus input */}
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}
