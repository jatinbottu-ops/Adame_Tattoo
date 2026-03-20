"use client";

import BookingForm from "@/components/BookingForm";
import { useIsMobile } from "@/lib/useIsMobile";

export default function BookingPage() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Header */}
      <section
        style={{
          paddingTop: "clamp(90px, 18vw, 140px)",
          paddingBottom: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          background: "#0D0D0D",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1rem" }}>
          Reserve Your Spot
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
          Book Now
        </h1>
        <p style={{ color: "#999", fontSize: "0.85rem", maxWidth: "500px", margin: "0 auto" }}>
          Fill out the form below and Adame will reach out within 48 hours to confirm your appointment.
        </p>
      </section>

      {/* Form */}
      <section
        style={{
          padding: "2rem 2rem 8rem",
          background: "#0D0D0D",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: isMobile ? "1.5rem" : "3rem",
            }}
          >
            <BookingForm />
          </div>

          {/* Info strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            {[
              { label: "Response Time", value: "Within 48 hours" },
              { label: "Location", value: "Atlanta, GA" },
              { label: "Booking Type", value: "Appointment only" },
            ].map(item => (
              <div
                key={item.label}
                style={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "1.25rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginBottom: "0.5rem" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#999" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
