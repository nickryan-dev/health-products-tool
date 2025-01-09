import React, { useState } from "react";
import useProducts, {Product} from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  const { products, error, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const handleCompare = (product: Product) => {
    setComparisonList((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    );

  const sortedProducts = [...filteredProducts].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <div>
        <label>
          Filter by Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label>
          Sort by Price:
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <label>
          Search:
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products"
          />
        </label>
      </div>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCompare={() => handleCompare(product)}
          />
        ))}
      </div>

      {comparisonList.length > 0 && (
        <div>
          <h3>Comparison List:</h3>
          <ul>
            {comparisonList.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
