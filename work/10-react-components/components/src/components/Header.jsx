export default function Header({ setPage }) {
    return (
      <header>
        <nav>
          <button onClick={() => setPage("text")}>Text</button>
          <button onClick={() => setPage("cards")}>Cards</button>
          <button onClick={() => setPage("panels")}>Panels</button>
        </nav>
      </header>
    );
  }