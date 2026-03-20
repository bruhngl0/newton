"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ProductImageSliderProps {
  /** Array of image src paths to display */
  images: string[];
  /** Alt text prefix — each slide appends its index */
  alt: string;
}

export default function ProductImageSlider({
  images,
  alt,
}: ProductImageSliderProps) {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () => setActive((i) => Math.max(i - 1, 0));
  const goNext = () => setActive((i) => Math.min(i + 1, images.length - 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    setDragOffset(e.touches[0].clientX - touchStartX.current);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) >= 40) delta < 0 ? goNext() : goPrev();
    setDragOffset(0);
    touchStartX.current = null;
  };

  return (
    <div className="w-full select-none">
      {/* ── Main viewer ── */}
      <div
        className="relative w-full overflow-hidden border border-slate-200 bg-white cursor-grab active:cursor-grabbing"
        style={{ aspectRatio: "16 / 10" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding strip */}
        <div
          className="flex h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(calc(${-active * 100}% / ${images.length} + ${dragOffset / images.length}px))`,
            transition:
              dragOffset === 0
                ? "transform 0.35s cubic-bezier(0.4,0,0.2,1)"
                : "none",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex h-full shrink-0 items-center justify-center bg-white p-3 sm:p-4"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={src}
                alt={`${alt} — view ${i + 1}`}
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              disabled={active === 0}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-25"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              onClick={goNext}
              disabled={active === images.length - 1}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white/90 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-25"
            >
              <ChevronRight size={19} />
            </button>

            {/* Counter badge */}
            <span className="absolute bottom-2.5 right-3.5 rounded-full bg-black/30 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`h-16 w-16 shrink-0 overflow-hidden border-2 transition-all duration-150 sm:h-20 sm:w-20 ${
                active === i
                  ? "border-[#9acd32]"
                  : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
