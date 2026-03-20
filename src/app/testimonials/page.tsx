"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Send } from "lucide-react";

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const allTestimonials = [
  {
    name: "Marcus T.",
    location: "Atlanta, GA",
    piece: "Religious Full Sleeve",
    rating: 5,
    text: "Adame did my full sleeve — Jesus and religious iconography — and I still get stopped on the street. The shading and detail is unlike anything I've seen. Worth every penny and then some. I'm already planning my next piece.",
    date: "November 2024",
  },
  {
    name: "Destiny R.",
    location: "Decatur, GA",
    piece: "Virgin Mary Portrait",
    rating: 5,
    text: "I came in with a vision of the Virgin Mary and he made it transcend what I imagined. The healing was smooth, the linework is razor sharp. Hands down the best artist in Atlanta. People stop me everywhere.",
    date: "October 2024",
  },
  {
    name: "Jordan K.",
    location: "Stone Mountain, GA",
    piece: "Full Back Piece",
    rating: 5,
    text: "Got my full back piece done over multiple sessions. The patience, the consistency, the artistry — Adame is a true professional. My back looks like a museum painting. Every session was comfortable and the results exceeded my expectations.",
    date: "September 2024",
  },
  {
    name: "Aaliyah M.",
    location: "College Park, GA",
    piece: "Praying Saint Forearm",
    rating: 5,
    text: "Black and grey realism is Adame's calling. My praying saint forearm piece looks like a photograph. People literally think it's a print until they touch it. Absolutely blown away by the artistry.",
    date: "August 2024",
  },
  {
    name: "Deon W.",
    location: "Marietta, GA",
    piece: "Skull & Bottle Forearm",
    rating: 5,
    text: "The skull and Don Julio piece on my forearm is fire. Adame captured every detail — the bottle reflection, the smoke — in pure black and grey. Legendary work. The whole process was smooth from consultation to aftercare.",
    date: "July 2024",
  },
  {
    name: "Keisha B.",
    location: "East Point, GA",
    piece: "Angel Wing Chest Piece",
    rating: 5,
    text: "I was nervous getting a chest piece but Adame made me feel completely comfortable. The finished product is breathtaking. The cross and angel composition is exactly what I envisioned — but better.",
    date: "June 2024",
  },
  {
    name: "Terrence A.",
    location: "Smyrna, GA",
    piece: "Portrait Sleeve",
    rating: 5,
    text: "Adame's attention to detail is unreal. Every shadow, every highlight in my sleeve is perfect. This man is an artist in every sense of the word. The consultation alone was worth it — he really listened.",
    date: "May 2024",
  },
  {
    name: "Jasmine L.",
    location: "Lithonia, GA",
    piece: "Saint Cover-Up",
    rating: 5,
    text: "Had an old tattoo I hated for years. Adame transformed it into a stunning saint piece that completely covers the original. I cried when I saw it. Can't believe it's the same arm.",
    date: "April 2024",
  },
];

export default function TestimonialsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", piece: "", text: "", rating: 5 });

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#F5F0EB",
    padding: "0.875rem 1rem",
    fontSize: "0.9rem",
    outline: "none",
    borderRadius: "2px",
    fontFamily: "inherit",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#999",
    marginBottom: "0.5rem",
  };

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "clamp(90px, 20vw, 160px)",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          background: "#0D0D0D",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
            Client Reviews
          </p>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 100,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#F5F0EB",
              marginBottom: "1rem",
            }}
          >
            Testimonials
          </h1>
          <p style={{ color: "#999", fontSize: "0.85rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Real clients. Real transformations. Every review is from someone who trusted Adame with their skin.
          </p>
          {/* Rating summary */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="#FFFFFF" color="#FFFFFF" />
              ))}
            </div>
            <span style={{ color: "#F5F0EB", fontSize: "1.1rem", fontWeight: 500 }}>5.0</span>
            <span style={{ color: "#555", fontSize: "0.8rem" }}>· {allTestimonials.length} reviews</span>
          </div>
        </motion.div>
      </section>

      {/* Grid */}
      <section style={{ padding: "2rem 2rem 8rem", background: "#0D0D0D" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {allTestimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.07}>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} fill="#FFFFFF" color="#FFFFFF" />
                  ))}
                </div>

                {/* Text */}
                <blockquote
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    color: "#D0C8C0",
                    lineHeight: "1.8",
                    fontSize: "0.88rem",
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.25rem" }}>
                  <div style={{ color: "#F5F0EB", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.25rem" }}>
                    {t.name}
                  </div>
                  <div style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
                    {t.location} · {t.piece}
                  </div>
                  <div style={{ color: "#3A3A3A", fontSize: "0.65rem", marginTop: "0.25rem" }}>{t.date}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Submit Form */}
      <section
        style={{
          padding: "6rem 2rem 8rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
              Share Your Experience
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F5F0EB",
              }}
            >
              Leave a Review
            </h2>
          </FadeIn>

          {submitted ? (
            <FadeIn>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  padding: "3rem",
                  textAlign: "center",
                }}
              >
                <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "1.5rem" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#FFFFFF" color="#FFFFFF" />
                  ))}
                </div>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontWeight: 100,
                    fontSize: "1.5rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F5F0EB",
                    marginBottom: "1rem",
                  }}
                >
                  Thank You
                </h3>
                <p style={{ color: "#999", lineHeight: "1.8" }}>
                  Your review has been submitted. Adame appreciates every kind word.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "3rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Tattoo Piece</label>
                    <input
                      type="text"
                      value={form.piece}
                      onChange={e => setForm(f => ({ ...f, piece: e.target.value }))}
                      placeholder="e.g. Forearm portrait, Full sleeve..."
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Rating</label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {[1, 2, 3, 4, 5].map(r => (
                        <button
                          key={r}
                          onClick={() => setForm(f => ({ ...f, rating: r }))}
                          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
                        >
                          <Star
                            size={22}
                            fill={r <= form.rating ? "#FFFFFF" : "transparent"}
                            color={r <= form.rating ? "#FFFFFF" : "#444"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Your Review</label>
                    <textarea
                      value={form.text}
                      onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                      placeholder="Share your experience..."
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>
                  <button
                    onClick={() => setSubmitted(true)}
                    disabled={!form.name || !form.text}
                    style={{
                      background: "#FFFFFF",
                      border: "none",
                      color: "#0D0D0D",
                      padding: "0.875rem 2rem",
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      opacity: !form.name || !form.text ? 0.4 : 1,
                      transition: "opacity 0.3s",
                    }}
                  >
                    Submit Review <Send size={14} />
                  </button>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
