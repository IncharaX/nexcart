import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
  onClick={() =>
    navigate(`/product/${product.id}`)
  }
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #ddd",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: "15px",
        }}
      >
        <h3>{product.name}</h3>

        <p
          style={{
            color: "#666",
            margin: "10px 0",
          }}
        >
          {product.category}
        </p>

        <p
          style={{
            fontWeight: "bold",
          }}
        >
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;