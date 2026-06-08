import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

import Container from "../components/Container";
import Button from "../components/Button";

function Cart() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <Container>
      <h1
        style={{
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            marginTop: "40px",
            maxWidth: "500px",
            border: "2px solid gray",
            padding: "20px",
            margin: "0 auto",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>🛒 Your cart is empty</h3>

          <p
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              color: "#666",
            }}
          >
            Looks like you haven't added anything yet.
          </p>

          <Button
            text="Continue Shopping"
            onClick={() => navigate("/products")}
          />
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>

                <p>${item.price}</p>

                <p>Quantity: {item.quantity}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>

                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>

                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "50px",
            }}
          >
            <h2>Order Summary</h2>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Total Items: {totalItems}
            </p>

            <p
              style={{
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Total Price: ${totalPrice.toFixed(2)}
            </p>

            <Button text="Clear Cart" onClick={() => dispatch(clearCart())} />
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
