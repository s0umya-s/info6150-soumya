export default function Button({ type = "button", onClick, children }) {
    return (
      <button type={type} className="btn-add" onClick={onClick}>
        {children}
      </button>
    );
  }