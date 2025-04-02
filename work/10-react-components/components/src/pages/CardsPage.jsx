import Button from "../components/Button";
import { useState } from "react";

export default function CardsPage({ setPage }) {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <h2>Courses Offered</h2>
      <div className="cards">
        <div className="card">
          <h3>INFO 5001</h3>
          <p>Application Modeling & Design</p>
          <Button onClick={() => setPage("text")}>Go to Home (Text) Page</Button>
        </div>
        <div className="card">
          <h3>INFO 5002</h3>
          <p>Intro to Python for Info Sys</p>
        </div>
      </div>
      <Button visual="button" onClick={() => setClicked(true)}>
        Click Me (Button Style)
      </Button>
      {clicked && <p>You clicked the button-style button!</p>}
    </section>
  );
}