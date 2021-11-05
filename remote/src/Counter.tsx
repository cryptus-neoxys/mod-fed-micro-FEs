import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>Count {count}</div>
      <button
        className="border-blue-500 px-8 py-3 font-semibold border-2 "
        onClick={() => setCount(count + 1)}
      >
        Add 1
      </button>
    </div>
  );
}

export default Counter;
