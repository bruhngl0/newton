"use client";

import React, { useState } from "react";
import "../styles/section6.scss";

const Section6 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animating, setAnimating] = useState(false);

  const testimonials = [
    {
      text: "Alex and the team have been phenomenal for my business. They are on the ball, do what they say they will do and have freed me up to just focus on my business. I would highly recommend them to anyone looking for a local bookkeeping service.",
      name: "Jacob Arden",
      position: "Black Lab Finance, Director",
      initials: "JA",
    },
    {
      text: "Working with Visify has transformed how we manage our finances. Their insights and support have been invaluable to our growth.",
      name: "Sarah Mitchell",
      position: "Tech Innovations, CEO",
      initials: "SM",
    },
    {
      text: "The level of professionalism and attention to detail is outstanding. Visify has become an integral part of our team.",
      name: "Michael Chen",
      position: "Green Solutions, Founder",
      initials: "MC",
    },
  ];

  const platformLogos = ["Xero", "MYOB", "Fathom", "XBert", "Dext"];

  const clientLogos = [
    { name: "Ray White" },
    { name: "Steel Transport" },
    { name: "Black Lab Finance", highlight: true },
    { name: "The Agency" },
    { name: "Lakefield" },
    { name: "Cain Wood Electrical" },
    { name: "Bundaberg Brewed Drinks" },
    { name: "Bundaberg Regional Council" },
    { name: "Bargara Beach Caravan Park" },
  ];

  const changeTestimonial = (index) => {
    if (index === currentTestimonial || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setAnimating(false);
    }, 320);
  };

  return (
    <section className="section6">
      {/* Platforms Bar */}
      <div className="platforms-bar">
        <p className="platforms-text">
          POWERED BY LEADING ACCOUNTING AND AUTOMATION PLATFORMS
        </p>
        <div className="platforms-logos">
          {platformLogos.map((name, i) => (
            <React.Fragment key={i}>
              <div className="platform-logo">{name}</div>
              {i < platformLogos.length - 1 && (
                <span className="platform-sep">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="section6-content">
        <div className="testimonials-left">
          <p className="section6-subtitle">TESTIMONIALS</p>
          <h2 className="section6-title">
            Hear it from the businesses we&apos;ve helped
          </h2>

          <div className="testimonial-nav">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonial-nav-item ${
                  i === currentTestimonial ? "active" : ""
                }`}
                onClick={() => changeTestimonial(i)}
              >
                <div className="nav-avatar">{t.initials}</div>
                <div className="nav-info">
                  <span className="nav-name">{t.name}</span>
                  <span className="nav-pos">{t.position}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="testimonials-right">
          <div
            className={`testimonial-card ${
              animating ? "t-fade-out" : "t-fade-in"
            }`}
          >
            <div className="quote-mark">&ldquo;</div>
            <div className="star-rating">{'★'.repeat(5)}</div>
            <p className="testimonial-text">
              {testimonials[currentTestimonial].text}
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[currentTestimonial].initials}
              </div>
              <div>
                <h4 className="author-name">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="author-position">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Marquee */}
      <div className="clients-carousel">
        <div className="clients-track">
          {[...clientLogos, ...clientLogos].map((client, i) => (
            <div
              key={i}
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
