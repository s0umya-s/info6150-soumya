// components/Button.jsx
export default function Button({ type = "button", visual = "button", onClick, children }) {
  const className = visual === "link" ? "btn-link" : "btn-regular";
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}