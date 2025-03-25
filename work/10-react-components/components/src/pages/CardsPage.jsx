import Button from "../components/Button";
import { useState } from "react";

export default function CardsPage({ setPage }) {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <h2>Cards</h2>
      <div className="cards">
        <div className="card">
          <h3>Card 1</h3>
          <p>Some details</p>
          <Button onClick={() => setPage("text")}>Go to Text Page</Button>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>Static card</p>
        </div>
      </div>
      <Button visual="button" onClick={() => setClicked(true)}>
        Click Me (Button Style)
      </Button>
      {clicked && <p>You clicked the button-style button!</p>}
    </section>
  );
}