import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Updated import
import products from "../../assets/ProductData";
import "../css/Products.css";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate(); // Updated

  const mainCategories = ["shoes", "shirts", "pants", "anime"];

  const getCategoryName = (category) => {
    if (!category) return "No Product";
    switch (category.toLowerCase()) {
      case "shoes":
        return "Shoes";
      case "shirts":
        return "Shirts";
      case "pants":
        return "Pants";
      case "anime":
        return "Collection";
      default:
        return "Product";
    }
  };

  const handleCategoryClick = (category) => {
    if (category === "shoes" || category === "pants") {
      navigate("/shoes");
      navigate("/pants");
    } else {
      setSelectedCategory(category === selectedCategory ? null : category);
    }
  };

  const getDisplayProducts = () => {
    if (selectedCategory) {
      return products.filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    } else {
      return mainCategories.map(
        (category) =>
          products.find(
            (product) => product.category.toLowerCase() === category
          ) || {
            id: category,
            category: category,
            imgSrc: "placeholder.jpg",
            alt: `${category} placeholder`,
          }
      );
    }
  };

  const displayProducts = getDisplayProducts();

  return (
    <Container id="Products" className="mt-5">
      <div className="text-center mb-5">
        <h1 className="product-main-title">Check Now Our Products!</h1>
        <p className="product-description">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </div>
      <div className="product-container">
        {displayProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img
                src={product.imgSrc}
                alt={product.alt || product.title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <button
                className={`transparent-button ${
                  selectedCategory === product.category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(product.category)}
              >
                {getCategoryName(product.category)} 
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <button
          className="back-button"
          onClick={() => setSelectedCategory(null)}
        >
          Back to All Categories
        </button>
      )}
    </Container>
  );
}

export default Product;
