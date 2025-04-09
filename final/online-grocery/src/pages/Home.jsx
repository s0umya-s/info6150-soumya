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
        Pre-save your grocery list from home and pick up fully packed bags at the curb—
        no hassle, no delivery charges.
      </p>
      <p>
        <span>Curbside Mart</span> saves you time,
        money, and stress. It’s grocery shopping, reimagined.
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