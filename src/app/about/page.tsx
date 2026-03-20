"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, MapPin, Instagram } from "lucide-react";
import { useIsMobile } from "@/lib/useIsMobile";

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

const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We meet to discuss your vision, placement, sizing, and reference material. This is where the concept takes shape.",
  },
  {
    num: "02",
    title: "Custom Design",
    desc: "Adame creates a bespoke design tailored to your body and vision. Revisions are welcomed until it's perfect.",
  },
  {
    num: "03",
    title: "Session",
    desc: "The tattoo session in a private, professional studio. Adame ensures your comfort throughout the process.",
  },
  {
    num: "04",
    title: "Aftercare",
    desc: "Detailed aftercare instructions provided. Adame is available for questions during your healing journey.",
  },
];

export default function AboutPage() {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "85vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image
          src="/artist-studio.jpg"
          alt="Adame in the studio"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "25% center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #0D0D0D 0%, rgba(13,13,13,0.5) 50%, rgba(13,13,13,0.2) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "4rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
              The Artist
            </p>
            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "#F5F0EB",
                lineHeight: 1,
              }}
            >
              ADAME
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Bio Split */}
      <section style={{ padding: "8rem 2rem", background: "#0D0D0D" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2.5rem" : "6rem",
            alignItems: "start",
          }}
        >
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden" }}>
                <Image
                  src="/artist-working.jpg"
                  alt="Adame tattooing close-up"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              {/* Gold accent line */}
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: "-1rem",
                  width: "2px",
                  height: "60%",
                  background: "linear-gradient(to bottom, #FFFFFF, transparent)",
                }}
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
                @adame_tattooz
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 100,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#F5F0EB",
                  marginBottom: "2rem",
                  lineHeight: "1.3",
                }}
              >
                Turning Skin into
                <br />
                <span style={{ color: "#FFFFFF" }}>Living Art</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{ color: "#999", lineHeight: "2", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Jacob Adame is an experienced black and grey realism artist based in Atlanta, Georgia. His work is defined by high-contrast shading, smooth gradients, and timeless designs built to age beautifully on the skin.
              </p>
              <p style={{ color: "#999", lineHeight: "2", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Drawing from realism, classical sculpture, religious imagery, and powerful symbolism, Jacob brings a fine art sensibility to every commission. Whether it&apos;s a large-scale sleeve, a meaningful portrait, or a bold statement piece — every design is custom-built for the individual.
              </p>
              <p style={{ color: "#999", lineHeight: "2", fontSize: "0.9rem", marginBottom: "2.5rem" }}>
                Every tattoo is approached with precision, patience, and an unwavering commitment to quality. His goal is to give every client a piece of art they&apos;ll be proud to wear for a lifetime.
              </p>
            </FadeIn>

            {/* Credentials card */}
            <FadeIn delay={0.3}>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
                  Credentials
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { icon: <MapPin size={14} />, text: "Atlanta, GA · Private Studio" },
                    { icon: <Clock size={14} />, text: "By Appointment Only" },
                    { icon: <Award size={14} />, text: "Specializing in Black & Grey Realism" },
                    { icon: <Instagram size={14} />, text: "@adame_tattooz" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.875rem", color: "#999", fontSize: "0.85rem" }}>
                      <span style={{ color: "#FFFFFF" }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                href="/booking"
                style={{
                  textDecoration: "none",
                  background: "#FFFFFF",
                  color: "#0D0D0D",
                  padding: "0.875rem 2rem",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  display: "inline-block",
                  transition: "opacity 0.3s",
                }}
              >
                Book a Session
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <blockquote style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                fontWeight: 100,
                lineHeight: "1.7",
                color: "#F5F0EB",
                marginBottom: "2rem",
              }}
            >
              &ldquo;Every tattoo I create is approached with precision, patience, and a commitment to quality. My goal is to give every client a piece of art they&apos;ll be proud to wear for life.&rdquo;
            </div>
            <cite style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", fontStyle: "normal" }}>
              — Jacob Adame, @adame_tattooz
            </cite>
          </blockquote>
        </FadeIn>
      </section>

      {/* Process Timeline */}
      <section style={{ padding: "8rem 2rem", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F5F0EB",
              }}
            >
              The Process
            </h2>
          </FadeIn>

          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "32px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, #FFFFFF, transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              {processSteps.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1}>
                  <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        border: "1px solid #FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background: "#0D0D0D",
                        fontFamily: "Georgia, serif",
                        fontSize: "0.8rem",
                        letterSpacing: "0.1em",
                        color: "#FFFFFF",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {step.num}
                    </div>
                    <div style={{ paddingTop: "1rem" }}>
                      <h3
                        style={{
                          fontFamily: "Georgia, serif",
                          fontWeight: 100,
                          fontSize: "1.2rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#F5F0EB",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ color: "#999", lineHeight: "1.8", fontSize: "0.9rem" }}>{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
