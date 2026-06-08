import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
const dispatch = useDispatch();
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Container>
        <h2>Product Not Found</h2>
      </Container>
    );
  }

  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "40px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        {/* Image */}

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

        {/* Details */}

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

          <Button
  text="Add To Cart"
  onClick={() => dispatch(addToCart(product))}
/>
        </div>
      </div>

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
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "50px",
  }}
>
  {products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4)
    .map((item) => (
      <div
        key={item.id}
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
          }}
        />

        <h3
          style={{
            marginTop: "10px",
          }}
        >
          {item.name}
        </h3>

        <p>${item.price}</p>
      </div>
    ))}
</div>
    </Container>
  );
}

export default ProductDetails;