"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Atlanta, GA",
    text: "Adame did my full sleeve — Jesus and religious iconography — and I still get stopped on the street. The shading and detail is unlike anything I've seen. Worth every penny and then some.",
    piece: "Religious Full Sleeve",
    rating: 5,
  },
  {
    name: "Destiny R.",
    location: "Decatur, GA",
    text: "I came in with a vision of the Virgin Mary and he made it transcend what I imagined. The healing was smooth, the linework is razor sharp. Hands down the best artist in Atlanta.",
    piece: "Virgin Mary Portrait",
    rating: 5,
  },
  {
    name: "Jordan K.",
    location: "Stone Mountain, GA",
    text: "Got my full back piece done over multiple sessions. The patience, the consistency, the artistry — Adame is a true professional. My back looks like a museum painting.",
    piece: "Full Back Piece",
    rating: 5,
  },
  {
    name: "Aaliyah M.",
    location: "College Park, GA",
    text: "Black and grey realism is Adame's calling. My praying saint forearm piece looks like a photograph. People literally think it's a print until they touch it.",
    piece: "Praying Saint Forearm",
    rating: 5,
  },
  {
    name: "Deon W.",
    location: "Marietta, GA",
    text: "The skull and Don Julio piece on my forearm is fire. Adame captured every detail — the bottle reflection, the smoke — in pure black and grey. Legendary work.",
    piece: "Skull & Bottle Forearm",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [auto]);

  const prev = () => {
    setAuto(false);
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAuto(false);
    setCurrent(c => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            padding: "3rem",
            textAlign: "center",
          }}
        >
          {/* Stars */}
          <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "1.5rem" }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} fill="#FFFFFF" color="#FFFFFF" />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 100,
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: "1.8",
              color: "#F5F0EB",
              marginBottom: "2rem",
              fontStyle: "italic",
            }}
          >
            &ldquo;{t.text}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div>
            <div style={{ color: "#FFFFFF", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
              {t.name}
            </div>
            <div style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
              {t.location} · {t.piece}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", marginTop: "2rem" }}>
        <button
          onClick={prev}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#F5F0EB",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "8px" }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAuto(false); setCurrent(i); }}
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === current ? "#FFFFFF" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#F5F0EB",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
