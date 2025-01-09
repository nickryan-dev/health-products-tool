import React from "react";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  const { products, error } = useProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return <ProductList products={products} />;
};

export default Home;
