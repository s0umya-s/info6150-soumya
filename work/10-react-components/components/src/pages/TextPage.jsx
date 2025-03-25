import Button from "../components/Button";
import { useState } from "react";

export default function TextPage() {
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <h2>Welcome to Button Explorer</h2>
<p>This app demonstrates how different buttons work in a React SPA using only built-in tools.</p>
<p>Below are two buttons – one styled like a link and another like a traditional button.</p>
      <Button visual="link" onClick={() => setClicked(true)}>
        Click Me (Link Style)
      </Button>
      {clicked && <p>You clicked the link-style button!</p>}
    </section>
  );
}