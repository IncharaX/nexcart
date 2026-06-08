function Button({
  text,
  onClick,
  width = "auto",
}) {
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
        width,
      }}
    >
      {text}
    </button>
  );
}

export default Button;