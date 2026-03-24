"use client";

import React, { useState } from "react";
import "../styles/section3.scss";
import catalogData from "../public/catalog.json";

const DEFAULT_PREVIEW_IMAGE = "/heatsealed.jpg";

const products = catalogData.catalog.map((item) => ({
  id: item.id,
  title: item.name,
  image: item.media?.[0] || DEFAULT_PREVIEW_IMAGE,
}));

const Section3 = () => {
  const [activeProductId, setActiveProductId] = useState(products[0]?.id || "");

  if (!products.length) {
    return null;
  }

  const activeProduct =
    products.find((product) => product.id === activeProductId) || products[0];

  return (
    <section className="section3">
      <div className="section3-container">
        {/* Left Side: Image Panel */}
        <div className="section3-image-panel">
          <img
            src={activeProduct.image}
            alt={activeProduct.title}
            className="section3-product-image"
          />
        </div>

        {/* Right Side: Menu */}
        <div className="section3-menu-panel">
          <p className="section3-subtitle">Discover SignAge Products</p>

          <ul className="section3-menu-list">
            {products.map((item) => (
              <li
                key={item.id}
                className={`section3-menu-item ${
                  activeProduct.id === item.id ? "active" : ""
                }`}
                onMouseEnter={() => setActiveProductId(item.id)}
                onFocus={() => setActiveProductId(item.id)}
              >
                <a
                  href={`/store/product/${item.id}`}
                  className="section3-menu-link"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section3;
