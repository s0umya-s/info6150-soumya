export default function Button({ type = "button", onClick, children }) {
    return (
      <button type={type} className="btn-regular" onClick={onClick}>
        {children}
      </button>
    );
  }