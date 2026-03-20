"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 100,
                fontSize: "2rem",
                letterSpacing: "0.5em",
                color: "#F5F0EB",
                marginBottom: "1rem",
              }}
            >
              ADAME
            </div>
            <p style={{ color: "#999", fontSize: "0.8rem", lineHeight: "1.8", maxWidth: "220px" }}>
              High-contrast black & grey realism by Jacob Adame. Atlanta, GA. Custom pieces built to last a lifetime.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Navigate
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/booking", label: "Book Now" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "#999",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F5F0EB")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#999")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "1.5rem",
              }}
            >
              Connect
            </div>
            <a
              href="https://instagram.com/adame_tattooz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#999",
                textDecoration: "none",
                fontSize: "0.8rem",
                marginBottom: "1rem",
                transition: "color 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#999")}
            >
              <Instagram size={16} />
              @adame_tattooz
            </a>
            <p style={{ color: "#999", fontSize: "0.8rem" }}>Atlanta, GA</p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Adame Tattooz. All rights reserved.
          </p>
          <p style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
            Atlanta, GA · By appointment only
          </p>
        </div>
      </div>
    </footer>
  );
}
