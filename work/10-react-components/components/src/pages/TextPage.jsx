import { useState } from "react";
import Button from "../components/Button";

export default function TextPage() {
  const [linkClicked, setLinkClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <section>
      <h2>Welcome to Northeastern University Home Page</h2>
      <p>Play the button game testing by clicking each one of them</p>

      <Button visual="link" onClick={() => setLinkClicked(true)}>
        Click Me (Link Style)
      </Button>
      {linkClicked && <p>You clicked the link-style button!</p>}

      <br /><br />

      <Button visual="button" onClick={() => setButtonClicked(true)}>
        Click Me (Button Style)
      </Button>
      {buttonClicked && <p>You clicked the button-style button!</p>}
    </section>
  );
}