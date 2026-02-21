"use client";

import React, { useState } from "react";
import "../styles/section6.scss";

const Section6 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Alex and the team have been phenomenal for my business. They are on the ball, do what they say they will do and have freed me up to just focus on my business. I would highly recommend them to anyone looking for a local bookkeeping service.",
      name: "Jacob Arden",
      position: "Black Lab Finance, Director",
    },
    {
      text: "Working with Visify has transformed how we manage our finances. Their insights and support have been invaluable to our growth.",
      name: "Sarah Mitchell",
      position: "Tech Innovations, CEO",
    },
    {
      text: "The level of professionalism and attention to detail is outstanding. Visify has become an integral part of our team.",
      name: "Michael Chen",
      position: "Green Solutions, Founder",
    },
  ];

  const platformLogos = [
    { name: "Xero", opacity: 0.3 },
    { name: "MYOB", opacity: 0.3 },
    { name: "Fathom", opacity: 0.3 },
    { name: "XBert", opacity: 0.3 },
    { name: "Dext", opacity: 0.3 },
  ];

  const clientLogos = [
    { name: "Ray White", image: null },
    { name: "Steel Transport", image: null },
    { name: "Black Lab Finance", highlight: true },
    { name: "The Agency", image: null },
    { name: "Lakefield", image: null },
    { name: "Cain Wood Electrical", image: null },
  ];

  return (
    <section className="section6">
      <div className="platforms-bar">
        <p className="platforms-text">
          POWERED BY LEADING ACCOUNTING AND AUTOMATION PLATFORMS
        </p>
        <div className="platforms-logos">
          {platformLogos.map((logo, index) => (
            <div
              key={index}
              className="platform-logo"
              style={{ opacity: logo.opacity }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>

      <div className="section6-content">
        <div className="testimonials-left">
          <p className="section6-subtitle">TESTIMONIALS</p>
          <h2 className="section6-title">
            Hear it from the businesses we've helped
          </h2>
        </div>

        <div className="testimonials-right">
          <div className="testimonial-card">
            <p className="testimonial-text">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="testimonial-author">
              <h4 className="author-name">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="author-position">
                {testimonials[currentTestimonial].position}
              </p>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="clients-carousel">
        <div className="clients-logos">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className={`client-logo ${client.highlight ? "highlight" : ""}`}
            >
              <div className="logo-frame">
                <span className="logo-text">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
