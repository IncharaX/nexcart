import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";



function Home() {
    const navigate = useNavigate();
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <>
      {/* Hero */}
      <section>
  <Container>
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        alignItems: "center",
        gap: "40px",
        padding: "80px 0",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          Upgrade Your Tech Experience
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "25px",
          }}
        >
          Discover premium gadgets,
          laptops, accessories and more.
        </p>

        <Button
          text="Shop Now"
          onClick={() =>
            navigate("/products")
          }
        />
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
          alt="Hero"
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  </Container>
</section>

      {/* Featured Products */}
      <section>
        <Container>
          <SectionTitle title="Featured Products" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </Container>
      </section>

      <section>
  <Container>
    <SectionTitle title="Shop By Category" />

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(180px,1fr))",
        gap: "20px",
        marginBottom: "50px",
      }}
    >
      {[
        "Phones",
        "Laptops",
        "Audio",
        "Accessories",
      ].map((category) => (
        <div
          key={category}
          style={{
            background: "white",
            padding: "30px",
            textAlign: "center",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <h3>{category}</h3>
        </div>
      ))}
    </div>
  </Container>
</section>

<section>
  <Container>
    <SectionTitle title="Why Choose Us" />

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginBottom: "80px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h3>Fast Delivery</h3>
        <p>
          Get your products delivered quickly
          and safely.
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h3>Secure Payments</h3>
        <p>
          Safe and trusted payment options.
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          border: "1px solid #ddd",
        }}
      >
        <h3>Easy Returns</h3>
        <p>
          Hassle-free returns and customer
          support.
        </p>
      </div>
    </div>
  </Container>
</section>
    </>
  );
}

export default Home;