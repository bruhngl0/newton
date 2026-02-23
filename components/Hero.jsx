"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import "../styles/hero.scss";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlideRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartRef = useRef(null);

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

  const startInterval = useCallback(() => {
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
  }, [carouselImages.length]);

  // Initial entry animation
  useEffect(() => {
    gsap.set(heroImagesRef.current[0], { opacity: 1, scale: 1 });
    const tl = gsap.timeline();
    tl.from(heroImagesRef.current[0], {
      scale: 1.15,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
    }).from(
      heroTextRef.current,
      { y: 80, opacity: 0, duration: 1.1, ease: "power3.out" },
      "-=0.9",
    );
  }, []);

  // Start autoplay
  useEffect(() => {
    startInterval();
    return () => clearInterval(carouselInterval.current);
  }, [startInterval]);

  // Slide transition — runs for every slide change including wrap-around
  useEffect(() => {
    const prevSlide = prevSlideRef.current;
    if (prevSlide === currentSlide || isAnimatingRef.current) return;

    const currentImage = heroImagesRef.current[currentSlide];
    const prevImage = heroImagesRef.current[prevSlide];
    if (!currentImage || !prevImage) return;

    isAnimatingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        prevSlideRef.current = currentSlide;
        isAnimatingRef.current = false;
      },
    });

    tl.to(prevImage, {
      opacity: 0,
      scale: 1.05,
      duration: 0.9,
      ease: "power2.inOut",
    }).fromTo(
      currentImage,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.3, ease: "power2.out" },
      "-=0.5",
    );
  }, [currentSlide]);

  // Pause on scroll, resume after
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearInterval(carouselInterval.current);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(startInterval, 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [startInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length);
      if (e.key === "ArrowRight")
        goToSlide((currentSlide + 1) % carouselImages.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide, carouselImages.length]);

  const goToSlide = (index) => {
    if (isAnimatingRef.current) return;
    setCurrentSlide(index);
    startInterval();
  };

  // Touch / swipe support
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const delta = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0
        ? goToSlide((currentSlide + 1) % carouselImages.length)
        : goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length);
    }
    touchStartRef.current = null;
  };

  return (
    <div className="lightship-container">
      {/* Hero Section */}
      <section
        className="hero"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
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

        <div className="hero-content">
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
        </div>

        {/* Prev / Next Arrows */}
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() =>
            goToSlide((currentSlide - 1 + carouselImages.length) % carouselImages.length)
          }
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => goToSlide((currentSlide + 1) % carouselImages.length)}
          aria-label="Next slide"
        >
          &#8250;
        </button>

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
