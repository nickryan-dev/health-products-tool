import React from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../hooks/useProducts";

const Comparison: React.FC = () => {
  const location = useLocation();
  const comparisonList: Product[] = location.state?.comparisonList || [];

  if (comparisonList.length === 0) {
    return <div>No products selected for comparison.</div>;
  }

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {comparisonList.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "16px" }}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Comparison;
