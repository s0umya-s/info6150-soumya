import React from "react";
import Button from "../components/Button";
import "../styles/home.css";

function Home({ setPage }) {
  return (
    <section className="hero hero--overlay">
      <div className="hero__content">
      <h1>
        Skip the Aisles. Ditch the Fees.
      </h1>
      <p>
      Order groceries from home and pick them up packed and ready—no hassle, no fees.
      </p>
      <p>
      Curbside Mart saves you time and stress.
      </p>
      <p>
       Ready when you are. Fresh every time.
      </p>
      <div className="hero__button">
          <Button onClick={() => setPage("shop")}>
            Start Shopping Now!
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;