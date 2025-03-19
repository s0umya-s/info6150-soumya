import { useState, useEffect } from "react";
import "./Reorder.css";
import App from "./App";

function Reorder({ onReorder }) {
  const [count, setCount] = useState(5);


  return (
    <div className="card">
      <button className="fade-in" onClick={() => setCount(count - 1)} disabled={count === 0}>
        Countdown is {count}
      </button>
      {count <= 0 && <App />}
    </div>
  );
}

export default Reorder;