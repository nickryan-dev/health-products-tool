import React from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../hooks/useProducts";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ProductComparison: React.FC = () => {
  const location = useLocation();
  const comparisonList: Product[] = location.state?.comparisonList || [];

  if (comparisonList.length === 0) {
    return <div>No products selected for comparison.</div>;
  }

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {comparisonList.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Features: {product.features.join(", ")}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductComparison;
