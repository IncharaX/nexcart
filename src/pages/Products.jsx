import { useState } from "react";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import products from "../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
      <SectionTitle title="All Products" />

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      {/* Category Filter */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {[
          "All",
          "Phones",
          "Laptops",
          "Audio",
          "Tablets",
          "Accessories",
          "Wearables",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "10px 15px",
              border: "1px solid #ddd",
              background: selectedCategory === category ? "#111827" : "white",
              color: selectedCategory === category ? "white" : "black",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <p
        style={{
          marginBottom: "20px",
          color: "#666",
        }}
      >
        Showing {filteredProducts.length} products
      </p>

      {/* Product Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))
) : (
  <p>No products found.</p>
)}
      </div>
    </Container>
  );
}

export default Products;
