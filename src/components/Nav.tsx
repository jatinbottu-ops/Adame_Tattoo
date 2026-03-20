"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          background: scrolled ? "rgba(13,13,13,0.85)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 100,
                fontSize: "1.5rem",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "#F5F0EB",
                textDecoration: "none",
              }}>
                ADAME
              </span>
            </Link>

            {/* Desktop Links */}
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "#F5F0EB" : "#999999",
                    transition: "color 0.3s",
                    borderBottom: pathname === link.href ? "1px solid rgba(255,255,255,0.9)" : "none",
                    paddingBottom: "2px",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/booking"
                style={{
                  textDecoration: "none",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.9)",
                  padding: "0.5rem 1.25rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#FFFFFF";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0D0D0D";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                }}
              >
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#F5F0EB",
                cursor: "pointer",
                padding: "0.5rem",
                display: "none",
              }}
              className="show-mobile"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(13,13,13,0.96)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Georgia, serif",
                    fontWeight: 100,
                    fontSize: "2rem",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "#FFFFFF" : "#F5F0EB",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
            >
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  fontWeight: 100,
                  fontSize: "1.5rem",
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.9)",
                  padding: "0.75rem 2rem",
                }}
              >
                Book Now
              </Link>
            </motion.div>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              href="https://instagram.com/adame_tattooz"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#999", textDecoration: "none", marginTop: "1rem" }}
            >
              <Instagram size={20} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
