"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { useIsMobile } from "@/lib/useIsMobile";

const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
});

function AnimatedSection({
  children,
  className = "",
  style = {},
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

const featured = [
  {
    src: "/t20-jesus-sleeve.png",
    alt: "Jesus Full Sleeve",
    tag: "Full Sleeve",
    col: "1 / 5",
    row: "1 / 3",
    aspect: "2/3",
    pos: "center top",
  },
  {
    src: "/t11-chest-cross.png",
    alt: "Chest — Cross & Warriors",
    tag: "Chest",
    col: "5 / 9",
    row: "1 / 2",
    aspect: "4/3",
    pos: "center 30%",
  },
  {
    src: "/t8-virgin-mary-sleeve.png",
    alt: "Virgin Mary with Rosary Sleeve",
    tag: "Full Sleeve",
    col: "9 / 13",
    row: "1 / 3",
    aspect: "2/3",
    pos: "center top",
  },
  {
    src: "/t22-elephant-sleeve.png",
    alt: "Elephant Sleeve",
    tag: "Sleeve",
    col: "5 / 9",
    row: "2 / 3",
    aspect: "4/3",
    pos: "center top",
  },
];

const moreWork = [
  {
    src: "/t1-geisha-forearm.png",
    alt: "Geisha Forearm",
    tag: "Forearm",
    pos: "center top",
  },
  {
    src: "/t28-ganesha-sleeve.png",
    alt: "Ganesha & Buddha Full Sleeve",
    tag: "Full Sleeve",
    pos: "center top",
  },
  {
    src: "/t32-angel-sleeve.png",
    alt: "Angel Warrior Sleeve",
    tag: "Sleeve",
    pos: "center top",
  },
];

export default function HomePage() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* ── HERO ────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#0D0D0D",
        }}
      >
        <HeroBackground />

        {/* subtle centre glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 2rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.9em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <h1 className="font-display-xl" style={{ color: "#F5F0EB", marginBottom: "0.35rem" }}>
                ADAME
              </h1>
              <div
                className="font-display"
                style={{
                  color: "#F5F0EB",
                  fontSize: "clamp(1.2rem, 2.6vw, 2rem)",
                }}
              >
                TATTOOZ
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#FFFFFF",
                margin: "0 auto 1.5rem",
              }}
            />
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "0.6rem",
              }}
            >
              Custom Tattoos · Atlanta, GA
            </p>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#444",
              }}
            >
              By Appointment Only
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/portfolio"
              style={{
                textDecoration: "none",
                background: "#FFFFFF",
                color: "#0D0D0D",
                padding: "0.9rem 2.2rem",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 700,
                transition: "opacity 0.2s",
              }}
            >
              View Portfolio
            </Link>
            <Link
              href="/booking"
              style={{
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#FFFFFF",
                padding: "0.9rem 2.2rem",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              Book a Session
            </Link>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.3em",
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={12} color="#444" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── FEATURED WORK ───────────────────── */}
      <section
        style={{
          padding: "7rem 1.5rem",
          background: "#0D0D0D",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "3.5rem",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                }}
              >
                Selected Works
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 100,
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#F5F0EB",
                }}
              >
                The Art
              </h2>
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>
        </AnimatedSection>

        {/* Primary 4-piece asymmetric grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(12, 1fr)",
            gap: "6px",
            marginBottom: "6px",
          }}
        >
          {featured.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                gridColumn: isMobile ? undefined : img.col,
                gridRow: isMobile ? undefined : img.row,
                position: "relative",
                aspectRatio: isMobile ? "1/1" : img.aspect,
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: img.pos,
                  transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginBottom: "0.2rem",
                  }}
                >
                  {img.tag}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    color: "#F5F0EB",
                    fontWeight: 300,
                  }}
                >
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row — 3 more pieces */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: "6px",
          }}
        >
          {moreWork.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: img.pos,
                  transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginBottom: "0.2rem",
                  }}
                >
                  {img.tag}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    color: "#F5F0EB",
                    fontWeight: 300,
                  }}
                >
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/portfolio"
            style={{
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#FFFFFF",
              padding: "0.9rem 2.5rem",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              display: "inline-block",
              transition: "all 0.25s",
            }}
          >
            View Full Portfolio
          </Link>
        </AnimatedSection>
      </section>

      {/* ── ABOUT PREVIEW ───────────────────── */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "5rem",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
              }}
            >
              <Image
                src="/artist-working.jpg"
                alt="Adame tattooing"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* sharp right edge fade */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, transparent 65%, #0D0D0D)",
                }}
              />
              {/* bottom fade */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(17,17,17,0.5) 0%, transparent 40%)",
                }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              About the Artist
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F5F0EB",
                marginBottom: "2rem",
                lineHeight: "1.25",
              }}
            >
              Art on Skin
            </h2>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#FFFFFF",
                marginBottom: "2rem",
              }}
            />
            <blockquote
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#FFFFFF",
                lineHeight: "1.9",
                borderLeft: "1px solid #FFFFFF",
                paddingLeft: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              &ldquo;Every tattoo I create is approached with precision, patience, and a commitment to quality.&rdquo;
            </blockquote>
            <p
              style={{
                color: "#888",
                lineHeight: "2",
                fontSize: "0.875rem",
                marginBottom: "2.5rem",
                letterSpacing: "0.02em",
              }}
            >
              Based in Atlanta, GA, Jacob Adame specializes in high-contrast black and grey realism — detailed shading, smooth gradients, and timeless designs that age well on the skin. From large-scale sleeves to meaningful portraits, every piece is custom-built for the individual.
            </p>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.4)",
                paddingBottom: "3px",
                transition: "opacity 0.2s",
              }}
            >
              Read Full Story →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────── */}
      <section style={{ padding: "7rem 2rem", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <AnimatedSection style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}
            >
              Client Stories
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#F5F0EB",
              }}
            >
              Testimonials
            </h2>
          </AnimatedSection>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section
        style={{
          padding: "8rem 2rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "40vh",
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              marginBottom: "1.5rem",
            }}
          >
            Begin Your Journey
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 100,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#F5F0EB",
              marginBottom: "1rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Begin
            <br />
            Your Piece?
          </h2>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "#FFFFFF",
              margin: "0 auto 2rem",
            }}
          />
          <p
            style={{
              color: "#777",
              fontSize: "0.875rem",
              lineHeight: "1.9",
              marginBottom: "3rem",
              maxWidth: "460px",
              marginLeft: "auto",
              marginRight: "auto",
              letterSpacing: "0.02em",
            }}
          >
            Limited appointments available. Secure your spot and let&apos;s
            create something that will define you for a lifetime.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/booking"
              style={{
                textDecoration: "none",
                background: "#FFFFFF",
                color: "#0D0D0D",
                padding: "1rem 2.5rem",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Book an Appointment
            </Link>
            <a
              href="https://instagram.com/adame_tattooz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#888",
                padding: "1rem 2rem",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <Instagram size={14} />
              @adame_tattooz
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
