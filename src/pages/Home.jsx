import products from "../data/products";

const featuredProducts = products.filter(
  (product) => product.featured
);

console.log(featuredProducts);

function Home() {
  console.log(products);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Total Products: {products.length}</p>
    </div>
  );
}

export default Home;