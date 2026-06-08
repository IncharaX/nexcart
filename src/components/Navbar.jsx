import { Link } from "react-router-dom";
import Container from "./Container";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #ddd",
        padding: "20px 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>NexCart</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
