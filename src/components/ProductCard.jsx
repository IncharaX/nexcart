function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        backgroundColor: "white",
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

      <h3
        style={{
          marginTop: "10px",
        }}
      >
        {product.name}
      </h3>

      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;