import { useRef, useState } from "react";
import Button from "./Button";

export default function Modal() {
  const dialogRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  function handleOpen() {
    dialogRef.current.showModal();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    dialogRef.current.close();
  }

  return (
    <>
      <Button visual="link" onClick={handleOpen}>
        Open Modal
      </Button>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit}>
          <p>Enter your email:</p>
          <input type="email" required />
          <Button type="submit" visual="link">
            Submit
          </Button>
        </form>
      </dialog>
      {submitted && <p>Form submitted!</p>}
    </>
  );
}