import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../hooks/useProducts";
import jest from "jest";

const mockProduct: Product = {
  id: "1",
  name: "Health Supplement",
  description: "Boosts immunity and energy levels.",
  price: 29.99,
  category: "Supplements",
  features: ["Immunity Boost", "Energy Boost", "Vegan"],
  image: "/images/supplement.jpg",
};

test("renders product card", () => {
  render(<ProductCard product={mockProduct} onCompare={() => {}} />);
  expect(screen.getByText("Health Supplement")).toBeInTheDocument();
  expect(screen.getByText("Boosts immunity and energy levels.")).toBeInTheDocument();
  expect(screen.getByText("$29.99")).toBeInTheDocument();
});
