import React from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../hooks/useProducts";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Comparison: React.FC = () => {
  const location = useLocation();
  const comparisonList: Product[] = location.state?.comparisonList || [];
  const navigate = useNavigate();

  if (comparisonList.length === 0) {
    return <div>No products selected for comparison.</div>;
  }

  const backHomepage = () => {
    navigate('/');
  }

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {comparisonList.map((product) => (
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
            <Typography>
              <Button onClick={backHomepage}>
                Back
              </Button>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Comparison;
