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

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

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
            textAlign: "center",
            padding: "80px 20px",
            border: "2px solid #c9c3c3",
            borderRadius: "10px",
          }}
        >
          <h2>🛒 Your Cart Is Empty</h2>

          <p
            style={{
              marginTop: "15px",
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
                border: "2px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
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

                  <p
                    style={{
                      color: "#666",
                    }}
                  >
                    {item.category}
                  </p>

                  <p>
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(item.price)}
                  </p>

                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  
                }}
              >
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              border: "2px solid #ddd",
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
              Subtotal: {formattedTotal}
            </p>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              Shipping: FREE
            </p>

            <p
              style={{
                marginTop: "10px",
              }}
            >
              Tax: $0.00
            </p>

            <hr
              style={{
                marginTop: "15px",
                marginBottom: "15px",
              }}
            />

            <h3>Total: {formattedTotal}</h3>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Total Items: {totalItems}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <Button
                text="Clear Cart"
                onClick={() => dispatch(clearCart())}
              />

              <Button
                text="Proceed To Checkout"
              />
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;