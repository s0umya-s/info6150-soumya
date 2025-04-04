import { useState } from "react";
import "./App.css";
import Reorder from "./Reorder";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="card">
        <button onClick={() => setCount(count + 1)} disabled={count === 5}>
          Count is {count}
        </button>
        {count >= 5 && <Reorder />}
      </div>
  );
}

export default App;