import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface FiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filters;
