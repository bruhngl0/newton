"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/hero.scss";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImagesRef = useRef([]);
  const heroTextRef = useRef(null);
  const carouselInterval = useRef(null);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1600&q=80",
      alt: "Lightship AE1 Interior with Skylights",
    },
    {
      url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1600&q=80",
      alt: "Lightship AE1 Living Space",
    },
    {
      url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80",
      alt: "Lightship AE1 on the Road",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(heroImagesRef.current[0], {
      scale: 1.2,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
    }).from(
      heroTextRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8",
    );
  }, []);

  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(carouselInterval.current);
  }, [carouselImages.length]);

  useEffect(() => {
    if (currentSlide > 0) {
      const currentImage = heroImagesRef.current[currentSlide];
      const prevSlide =
        currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1;
      const prevImage = heroImagesRef.current[prevSlide];

      const tl = gsap.timeline();

      tl.to(prevImage, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      }).fromTo(
        currentImage,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.5",
      );
    }
  }, [currentSlide, carouselImages.length]);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Pause carousel during scroll
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Resume carousel after scrolling stops
        carouselInterval.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
  };

  return (
    <div className="lightship-container">
      {/* Header */}
      <header className="header">
        <div className="header-logo"></div>
        <div className="header-brand">SIGN-AGE</div>

        <nav className="header-nav">
          <a href="#technology">Technology</a>
          <a href="#make-yours">Make it Yours</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-carousel">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`hero-image ${index === currentSlide ? "active" : ""}`}
              ref={(el) => (heroImagesRef.current[index] = el)}
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>

        <h1 className="hero-text" ref={heroTextRef}>
          SIGN AGE
        </h1>

        <h4 className="hero-text-tag">
          Global Standards, Personal Partnerships.
        </h4>

        <p className="hero-text-des">
          We pair 25 years of world-class manufacturing precision with a
          commitment to personal relationships, ensuring your brand commands
          attention in any marketplace.
        </p>

        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button className="scroll-indicator">
          <span>↓</span>
          <span>Scroll to explore</span>
        </button>
      </section>
    </div>
  );
};

export default Hero;
