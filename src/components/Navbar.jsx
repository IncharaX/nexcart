import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#2563eb" : "#333",
    fontWeight: isActive ? "bold" : "normal",
  });

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
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#2563eb" : "#000",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              style={({ isActive }) => ({
                color: isActive ? "#2563eb" : "#000",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                color: isActive ? "#2563eb" : "#000",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Cart ({cartCount})
            </NavLink>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
