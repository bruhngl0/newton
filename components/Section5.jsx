"use client";

import React from "react";
import "../styles/section5.scss";

const Section5 = () => {
  const criteria = [
    {
      img: "/eye.svg", // Replace with your actual paths
      title: "Want clear visibility over their numbers",
    },
    {
      img: "/cash.svg",
      title: "Are tired of flying blind or relying on gut feel",
    },
    {
      img: "/target.svg",
      title: "Have been using cash as a measure of profitability",
    },
    {
      img: "/target.svg",
      title: "Value accuracy, reporting and strategic insights",
    },
    {
      img: "/target.svg",
      title: "Need the benefits of an in-house finance team",
    },
  ];

  return (
    <section className="section5">
      <div className="section5-content">
        <div className="section5-header">
          <p className="section5-subtitle">READY TO LEVEL UP?</p>
          <h2 className="section5-title">Is SignAge right for you?</h2>
          <p className="section5-description">
            We work with established businesses who:
          </p>
        </div>

        <div className="criteria-grid">
          {criteria.map((item, index) => (
            <div key={index} className="criteria-card">
              <div className="card-inner-layout">
                <div className="criteria-image-container">
                  <img src={item.img} alt="icon" className="criteria-img" />
                </div>
                <p className="criteria-title">{item.title}</p>
              </div>
            </div>
          ))}

          <div className="criteria-card cta-card">
            <div className="cta-content">
              <p className="cta-text">Sound like you?</p>
              <div className="cta-action">
                <a href="#contact" className="cta-link">
                  Let's talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
