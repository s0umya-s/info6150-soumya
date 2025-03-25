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
        Register Now!
      </Button>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit}>
          <p>Enter your email:</p>
          <div className="form-row">
            <input type="email" required />
            <Button type="submit" visual="button">
              Submit
            </Button>
          </div>
        </form>
      </dialog>
      {submitted && <p>Form submitted!</p>}
    </>
  );
}