"use client";

import React, { useState } from "react";
import "../styles/section3.scss";

const products = [
  {
    id: 1,
    title: "Bellow Covers",
    image: "one.png",
  },
  {
    id: 2,
    title: "Wiper Systems",
    image: "two.png",
  },
  { id: 3, title: "Apron Covers/ Roll Up Covers", image: "three.png" },
  { id: 4, title: "Telescopic Covers", image: "one.png" },
  { id: 5, title: "Telescopic Spring Covers", image: "two.png" },
  { id: 6, title: "Roll Way Covers", image: "three.png" },
  { id: 7, title: " Steel Cable Chains, Cable Drag Chains", image: "one.png" },
  { id: 8, title: "CNC Sheet Metal Enclosures and Assemblies" },
];

const Section3 = () => {
  const [activeImage, setActiveImage] = useState(products[0].image);

  return (
    <section className="section3">
      {/* Background Grid */}
      <div className="grid-background">
        <div className="grid-lines horizontal"></div>
        <div className="grid-lines vertical"></div>
      </div>

      {/* Main Layout Container */}
      <div className="section3-content">
        <div className="split-container">
          {/* Left: Image Side */}
          <div className="image-preview-box">
            <img
              src={activeImage}
              alt="Product Preview"
              className="product-img"
            />
          </div>

          {/* Right: Text Side */}
          <div className="product-menu">
            <h4 className="menu-subtitle">Discover SignAge Products</h4>
            <ul className="menu-list">
              {products.map((item) => (
                <li
                  key={item.id}
                  onMouseEnter={() => setActiveImage(item.image)}
                  className="menu-item"
                >
                  <span className="item-text">{item.title}</span>
                  <div className="hover-line"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
