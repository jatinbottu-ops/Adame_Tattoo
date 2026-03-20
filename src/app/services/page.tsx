"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Ruler, Sparkles, RefreshCw, MessageSquare, Check } from "lucide-react";

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

const services = [
  {
    icon: <Ruler size={20} />,
    title: "Small Piece",
    price: "$250+",
    duration: "1–4 hours",
    desc: "Perfect for detailed small-scale work — wrist, ankle, behind the ear, hand pieces. Every small piece receives the same meticulous attention as large-scale work.",
    includes: [
      "Custom design session",
      "Single session",
      "Aftercare kit included",
      "Touch-up within 3 months",
    ],
  },
  {
    icon: <Sparkles size={20} />,
    title: "Medium Piece",
    price: "$600+",
    duration: "4–8 hours",
    desc: "Forearms, calves, upper arms — medium pieces allow for full compositional depth. This is where black & grey realism truly shines.",
    includes: [
      "Custom design + revisions",
      "1–2 sessions",
      "Progress photos provided",
      "Aftercare kit included",
      "Touch-up within 3 months",
    ],
    featured: true,
  },
  {
    icon: <Clock size={20} />,
    title: "Large / Full Sleeve",
    price: "Consultation",
    duration: "Multiple sessions",
    desc: "Full sleeves, half sleeves, back pieces, thigh pieces — large-scale work is Adame's passion. These are multi-session masterpieces.",
    includes: [
      "Comprehensive design consultation",
      "Full composition planning",
      "Multiple sessions scheduled",
      "Progress documentation",
      "Lifetime touch-ups available",
    ],
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Cover-Up",
    price: "Consultation",
    duration: "Varies",
    desc: "Transform unwanted tattoos into works of art. Adame specializes in cover-ups that seamlessly integrate with or completely hide the original work.",
    includes: [
      "Assessment of existing tattoo",
      "Design strategy session",
      "Custom cover-up design",
      "Realistic expectations set",
    ],
  },
  {
    icon: <MessageSquare size={20} />,
    title: "Consultation",
    price: "$100",
    duration: "60 minutes",
    desc: "Not sure what you want? A consultation lets you sit down with Adame to explore ideas, review the portfolio, and get expert guidance on your piece.",
    includes: [
      "In-person or virtual",
      "Portfolio review",
      "Placement & sizing advice",
      "$100 credited toward your tattoo",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Consultation", desc: "We discuss your idea, placement, sizing, and timeline in detail." },
  { num: "02", title: "Custom Design", desc: "Adame creates a bespoke design. Revisions until perfect." },
  { num: "03", title: "Deposit", desc: "A deposit secures your appointment and begins the design process." },
  { num: "04", title: "Session(s)", desc: "Professional, private studio. Comfort and quality are paramount." },
  { num: "05", title: "Aftercare", desc: "Detailed instructions + Adame is available for healing questions." },
];

export default function ServicesPage() {
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
            Investment
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
            Services
          </h1>
          <p style={{ color: "#999", fontSize: "0.85rem", maxWidth: "500px", margin: "0 auto" }}>
            Every piece is custom. Pricing reflects the time, artistry, and lifetime value of original fine art tattooing.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section style={{ padding: "2rem 2rem 8rem", background: "#0D0D0D" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  background: service.featured ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
                  border: service.featured ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  padding: "2.5rem",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {service.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-1px",
                      left: "2rem",
                      background: "#FFFFFF",
                      color: "#0D0D0D",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div style={{ color: "#FFFFFF", marginBottom: "1.5rem" }}>{service.icon}</div>

                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontWeight: 100,
                    fontSize: "1.4rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F5F0EB",
                    marginBottom: "0.25rem",
                  }}
                >
                  {service.title}
                </h3>

                <div style={{ display: "flex", gap: "1rem", alignItems: "baseline", marginBottom: "1.5rem" }}>
                  <span style={{ color: "#FFFFFF", fontSize: "1.5rem", fontWeight: 300 }}>{service.price}</span>
                  <span style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.1em" }}>· {service.duration}</span>
                </div>

                <p style={{ color: "#888", lineHeight: "1.8", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  {service.desc}
                </p>

                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: "1rem" }}>
                    Includes
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {service.includes.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <Check size={12} color="#FFFFFF" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "#888", fontSize: "0.82rem" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/booking"
                  style={{
                    textDecoration: "none",
                    display: "block",
                    textAlign: "center",
                    marginTop: "2rem",
                    padding: "0.875rem",
                    background: service.featured ? "#FFFFFF" : "transparent",
                    border: service.featured ? "1px solid #FFFFFF" : "1px solid rgba(255,255,255,0.1)",
                    color: service.featured ? "#0D0D0D" : "#999",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: service.featured ? 600 : 400,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => {
                    if (!service.featured) {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFFFFF";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!service.featured) {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#999";
                    }
                  }}
                >
                  {service.price === "Consultation" ? "Request Consultation" : "Book Now"}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ / Notes */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#F5F0EB",
                marginBottom: "1rem",
              }}
            >
              Good to Know
            </h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { q: "Is a deposit required?", a: "Yes. A non-refundable deposit is required to hold your appointment and begin the custom design process. This is applied toward your final total." },
              { q: "How far in advance should I book?", a: "Adame books 4–8 weeks in advance. For large pieces or full sleeves, reach out as early as possible to secure your timeline." },
              { q: "Do you do walk-ins?", a: "Adame works by appointment only to ensure every client receives the full attention their piece deserves." },
              { q: "Can I bring reference photos?", a: "Absolutely. Reference photos are encouraged. The more visual context you can provide, the more precisely Adame can bring your vision to life." },
            ].map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.08}>
                <div
                  style={{
                    backdropFilter: "blur(20px)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "1.5rem 2rem",
                  }}
                >
                  <h4 style={{ color: "#FFFFFF", fontSize: "0.85rem", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
                    {faq.q}
                  </h4>
                  <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: "1.8" }}>{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "8rem 2rem", background: "#0D0D0D" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
              From Idea to Ink
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

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    padding: "2rem",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.5rem",
                      fontWeight: 100,
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.05em",
                      flexShrink: 0,
                      minWidth: "3rem",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontWeight: 100,
                        fontSize: "1.1rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#F5F0EB",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "#888", fontSize: "0.85rem", lineHeight: "1.7" }}>{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#0D0D0D",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          textAlign: "center",
        }}
      >
        <FadeIn>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 100,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#F5F0EB",
              marginBottom: "1rem",
            }}
          >
            Ready to Begin?
          </h2>
          <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2.5rem", maxWidth: "400px", margin: "0 auto 2.5rem" }}>
            Secure your spot now. Limited appointments available.
          </p>
          <Link
            href="/booking"
            style={{
              textDecoration: "none",
              background: "#FFFFFF",
              color: "#0D0D0D",
              padding: "1rem 2.5rem",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "inline-block",
              transition: "opacity 0.3s",
            }}
          >
            Book an Appointment
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
