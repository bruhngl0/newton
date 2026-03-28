"use client";
import React, { useState } from "react";
import "../styles/section3.scss";
import catalogData from "../public/catalog.json";
import Link from "next/link";

const Section3 = () => {
  const [activeProduct, setActiveProduct] = useState(catalogData.catalog[0]);

  const handleProductHover = (product) => {
    setActiveProduct(product);
  };

  return (
    <section className="section3">
      <div
        className="section3-container"
        onClick={() =>
          (window.location.href = `/store/product/${activeProduct.id}`)
        }
      >
        <div className="section3-left">
          <h2 className="section3-main-title">Our Product Catalog</h2>
          <p className="section3-main-subtitle">
            Engineered solutions for machine protection and industrial
            automation.
          </p>
          <div className="section3-image-container">
            {activeProduct && (
              <img
                src={activeProduct.media[0]}
                alt={activeProduct.name}
                className="section3-product-image"
              />
            )}
          </div>
        </div>
        <div className="section3-right">
          <div className="section3-product-list">
            {catalogData.catalog.map((product) => (
              <div
                key={product.id}
                className={`section3-product-card ${
                  activeProduct.id === product.id ? "active" : ""
                }`}
                onMouseEnter={() => handleProductHover(product)}
              >
                <div className="section3-card-content">
                  <h3 className="section3-product-title">{product.name}</h3>
                  <p className="section3-product-description">
                    {product.hero.body[0].substring(0, 100)}...
                  </p>
                  <Link
                    href={`/store/product/${product.id}`}
                    className="section3-product-link"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
