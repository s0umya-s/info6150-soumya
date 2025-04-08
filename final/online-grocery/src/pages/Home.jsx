import React from "react";

function Home({ setPage }) {
  return (
    <section>
      <h2>Welcome to FreshMart</h2>
      <p>Get your groceries delivered or pick them up curbside.</p>
      <button onClick={() => setPage("shop")}>Start Shopping</button>
    </section>
  );
}

export default Home;