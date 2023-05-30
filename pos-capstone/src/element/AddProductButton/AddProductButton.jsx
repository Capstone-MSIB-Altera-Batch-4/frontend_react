import React from "react";
import "../AddProductButton/AddProductButton.css"

const AddProductButton = () => {
  const handleAddProduct = () => {
  };

  return (
    <button className="add-product-button" onClick={handleAddProduct}>+ Add Product</button>
  );
};

export default AddProductButton;
