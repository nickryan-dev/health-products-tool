import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../hooks/useProducts";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
};

const mockProduct: Product = {
  id: "1",
  name: "Health Supplement",
  description: "Boosts immunity and energy levels.",
  price: 29.99,
  category: "Supplements",
  features: ["Immunity Boost", "Energy Boost", "Vegan"],
  image: "/images/supplement.jpg",
};

export const Default = () => (
  <ProductCard
    product={mockProduct}
    onCompare={() => console.log("Compare clicked!")}
  />
);
