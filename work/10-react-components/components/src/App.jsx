import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextPage from "./pages/TextPage";
import CardsPage from "./pages/CardsPage";
import PanelsPage from "./pages/PanelPage";

function App() {
  const [page, setPage] = useState("text");

  let CurrentPage;
  if (page === "text") CurrentPage = <TextPage setPage={setPage} />;
  else if (page === "cards") CurrentPage = <CardsPage setPage={setPage} />;
  else if (page === "panels") CurrentPage = <PanelsPage setPage={setPage} />;

  return (
    <>
      <Header setPage={setPage} />
      <main>{CurrentPage}</main>
      <Footer />
    </>
  );
}

export default App;