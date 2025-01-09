import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Product } from "../hooks/useProducts";

interface ProductCardProps {
  product: Product;
  onCompare: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onCompare }) => {
  return (
    <Card style={{ width: "350px", margin: "16px", borderRadius: "12px" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body2">Category: {product.category}</Typography>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>
              <Typography variant="body2">{feature}</Typography>
            </li>
          ))}
        </ul>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={onCompare}
        >
          Compare
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
