import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import products from "../data/products";
import Container from "../components/Container";
import Button from "../components/Button";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Container>
        <h2>Product Not Found</h2>
      </Container>
    );
  }

  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <Container>
      {/* Product Section */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "40px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {/* Product Image */}

        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Product Details */}

        <div>
          <p
            style={{
              color: "#666",
              marginBottom: "10px",
            }}
          >
            {product.category}
          </p>

          <h1
            style={{
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              marginBottom: "15px",
            }}
          >
            ⭐ {product.rating}
          </p>

          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h2>

          <p
            style={{
              lineHeight: "1.7",
              marginBottom: "25px",
            }}
          >
            {product.description}
          </p>

          <Button text="Add To Cart" onClick={handleAddToCart} />

          {cartItem && (
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <p
                style={{
                  color: "green",
                  marginBottom: "10px",
                }}
              >
                ✓ In Cart: {cartItem.quantity}
              </p>

              <Button text="View Cart" onClick={() => navigate("/cart")} />
            </div>
          )}
        </div>
      </div>

      {showMessage && (
        <p
          style={{
            color: "green",
            marginTop: "10px",
          }}
        >
          ✓ Product added to cart
        </p>
      )}

      {/* Related Products */}

      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Related Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "50px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {products
          .filter(
            (item) =>
              item.category === product.category && item.id !== product.id,
          )
          .slice(0, 4)
          .map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <h3
                style={{
                  marginTop: "10px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                }}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price)}
              </p>

              <p
                style={{
                  color: "#2563eb",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                View Product →
              </p>
            </div>
          ))}
      </div>
    </Container>
  );
}

export default ProductDetails;
