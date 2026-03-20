"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "@/components/Lightbox";

interface PortfolioImage {
  src: string;
  alt: string;
  tags: string[];
  span: "tall" | "wide" | "square";
}

const images: PortfolioImage[] = [
  { src: "/t20-jesus-sleeve.png", alt: "Jesus Full Sleeve", tags: ["All", "Realism", "Sleeves", "Religious"], span: "tall" },
  { src: "/t8-virgin-mary-sleeve.png", alt: "Virgin Mary with Rosary Sleeve", tags: ["All", "Realism", "Sleeves", "Religious"], span: "tall" },
  { src: "/t11-chest-cross.png", alt: "Chest — Cross & Warriors", tags: ["All", "Realism", "Religious"], span: "wide" },
  { src: "/t1-geisha-forearm.png", alt: "Geisha Forearm", tags: ["All", "Realism", "Portraits"], span: "tall" },
  { src: "/t2-madonna-child.png", alt: "Madonna & Child — Arm", tags: ["All", "Realism", "Religious", "Portraits"], span: "tall" },
  { src: "/t4-scarface-thigh.png", alt: "Scarface — The World Is Yours", tags: ["All", "Realism", "Portraits"], span: "tall" },
  { src: "/t6-virgin-mary-child.png", alt: "Virgin Mary & Child — Forearm", tags: ["All", "Realism", "Religious", "Portraits"], span: "tall" },
  { src: "/t7-skull-crown.png", alt: "Skull with Crown — Forearm", tags: ["All", "Blackwork", "Skulls"], span: "square" },
  { src: "/t9-portrait-bat.png", alt: "Portrait with Bat Wings", tags: ["All", "Realism", "Portraits"], span: "square" },
  { src: "/t10-praying-virgin.png", alt: "Praying Virgin Mary — Forearm", tags: ["All", "Realism", "Religious", "Portraits"], span: "tall" },
  { src: "/t12-rose.png", alt: "Dark Rose", tags: ["All", "Blackwork"], span: "square" },
  { src: "/t13-portrait-man.png", alt: "Portrait Realism — Forearm", tags: ["All", "Realism", "Portraits"], span: "square" },
  { src: "/t14-geisha-sleeve.png", alt: "Geisha Sleeve", tags: ["All", "Realism", "Sleeves", "Portraits"], span: "tall" },
  { src: "/t16-batman-sleeve.png", alt: "Batman — Forearm Sleeve", tags: ["All", "Realism", "Sleeves", "Blackwork"], span: "tall" },
  { src: "/t17-coffee-forearm.png", alt: "Coffee Latte Art — Forearm", tags: ["All", "Realism"], span: "square" },
  { src: "/t18-portrait-female.png", alt: "Female Portrait — Forearm", tags: ["All", "Realism", "Portraits"], span: "square" },
  { src: "/t21-zeus-forearm.png", alt: "Zeus / God — Forearm", tags: ["All", "Realism", "Blackwork"], span: "tall" },
  { src: "/t22-elephant-sleeve.png", alt: "Elephant Sleeve", tags: ["All", "Realism", "Sleeves"], span: "tall" },
  { src: "/t23-jesus-crown-sleeve.png", alt: "Jesus Crown of Thorns — Sleeve", tags: ["All", "Realism", "Sleeves", "Religious"], span: "tall" },
  { src: "/t24-crowned-skull.png", alt: "Crowned Skull — Forearm", tags: ["All", "Blackwork", "Skulls"], span: "square" },
  { src: "/t25-cowboy-leg.png", alt: "Dead or Alive — Cowboy Leg", tags: ["All", "Realism", "Blackwork"], span: "square" },
  { src: "/t26-jesus-praying.png", alt: "Jesus Praying with Rosary — Forearm", tags: ["All", "Realism", "Religious", "Portraits"], span: "tall" },
  { src: "/t27-sugar-skull-roses.png", alt: "Sugar Skull with Roses — Forearm", tags: ["All", "Blackwork", "Skulls"], span: "tall" },
  { src: "/t28-ganesha-sleeve.png", alt: "Ganesha & Buddha — Full Sleeve", tags: ["All", "Realism", "Sleeves"], span: "tall" },
  { src: "/t29-dove-gun.png", alt: "Dove & Revolver — Forearm", tags: ["All", "Realism", "Blackwork"], span: "square" },
  { src: "/t30-clown-neck.png", alt: "Clown Portrait — Neck", tags: ["All", "Realism", "Portraits"], span: "square" },
  { src: "/t31-portrait-ribs.png", alt: "Portrait — Ribs", tags: ["All", "Realism", "Portraits"], span: "square" },
  { src: "/t32-angel-sleeve.png", alt: "Angel Warrior — Full Sleeve", tags: ["All", "Realism", "Sleeves", "Religious"], span: "tall" },
  { src: "/t33-joker-sleeve.png", alt: "Joker — Full Leg Sleeve", tags: ["All", "Realism", "Sleeves", "Blackwork"], span: "tall" },
  { src: "/t3-geisha-forearm-2.png", alt: "Geisha Forearm — Detail", tags: ["All", "Realism", "Portraits"], span: "tall" },
  { src: "/t15-madonna-child-2.png", alt: "Madonna & Child II", tags: ["All", "Realism", "Religious", "Portraits"], span: "square" },
  { src: "/t19-madonna-child-3.png", alt: "Madonna & Child III", tags: ["All", "Realism", "Religious", "Portraits"], span: "square" },
  { src: "/t5-scarface-thigh-2.png", alt: "Scarface — Thigh Detail", tags: ["All", "Realism", "Portraits"], span: "square" },
];

const filters = ["All", "Realism", "Blackwork", "Sleeves", "Religious", "Portraits", "Skulls"];

const aspectMap = {
  tall: "2/3",
  wide: "4/3",
  square: "1/1",
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = images.filter(img => img.tags.includes(activeFilter));

  const lightboxImages = filtered.map(img => ({ src: img.src, alt: img.alt }));

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
            The Work
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
            Portfolio
          </h1>
          <p style={{ color: "#999", fontSize: "0.85rem", maxWidth: "500px", margin: "0 auto" }}>
            A curated selection of black &amp; grey realism tattoos by Adame. Each piece is custom designed for the individual client.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginTop: "3rem" }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? "#FFFFFF" : "rgba(255,255,255,0.04)",
                border: activeFilter === f ? "1px solid #FFFFFF" : "1px solid rgba(255,255,255,0.1)",
                color: activeFilter === f ? "#0D0D0D" : "#999",
                padding: "0.5rem 1.25rem",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.3s",
                fontWeight: activeFilter === f ? 600 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section style={{ padding: "2rem", background: "#0D0D0D", minHeight: "60vh" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
                alignItems: "start",
              }}
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    position: "relative",
                    aspectRatio: aspectMap[img.span],
                    overflow: "hidden",
                    cursor: "pointer",
                    gridRow: img.span === "tall" ? "span 2" : "span 1",
                    background: "#0D0D0D",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                  />
                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.1) 40%, transparent 60%)",
                      opacity: 0,
                      transition: "opacity 0.4s",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
                    onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.opacity = "0")}
                  />
                  {/* Label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.5rem",
                      background: "linear-gradient(transparent, rgba(13,13,13,0.8))",
                    }}
                  >
                    <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "0.25rem" }}>
                      {img.tags.filter(t => t !== "All").join(" · ")}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#F5F0EB", lineHeight: "1.4" }}>
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i))}
          onNext={() => setLightboxIndex(i => (i !== null && i < lightboxImages.length - 1 ? i + 1 : i))}
        />
      )}
    </>
  );
}
