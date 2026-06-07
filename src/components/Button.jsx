function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#111827",
        color: "white",
        border: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        fontSize: "16px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;