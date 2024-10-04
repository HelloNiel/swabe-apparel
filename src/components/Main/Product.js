import React from "react";
import { Container } from "react-bootstrap";
import products from "../../assets/ProductData";
import "../css/Products.css";

function Product() {
  const mainCategories = ["shoes", "shirts", "pants", "anime"];

  const getDisplayProducts = () => {
    return mainCategories.map((category) =>
      products.find(
        (product) => product.category.toLowerCase() === category
      ) || {
        id: category,
        category: category,
        imgSrc: "placeholder.jpg",
        alt: `${category} placeholder`,
      }
    );
  };

  const displayProducts = getDisplayProducts();

  const getCategoryName = (category) => {
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
              <div className="product-overlay">{getCategoryName(product.category)}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Product;
