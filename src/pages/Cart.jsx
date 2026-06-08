import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  return (
    <div>
      <h1>Cart Page</h1>

      <pre>
        {JSON.stringify(cartItems, null, 2)}
      </pre>
    </div>
  );
}

export default Cart;