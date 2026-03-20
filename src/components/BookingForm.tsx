"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/lib/useIsMobile";

const services = [
  { id: "small", label: "Small Piece", price: "$250+", desc: "Under 4 hours · Detailed small work" },
  { id: "medium", label: "Medium Piece", price: "$600+", desc: "4–8 hours · Forearm, calf, etc." },
  { id: "large", label: "Large / Full Sleeve", price: "Consultation", desc: "Sleeves, back pieces, large scale" },
  { id: "coverup", label: "Cover-Up", price: "Consultation", desc: "Transforming existing tattoos" },
  { id: "consult", label: "Consultation Only", price: "$100", desc: "Discuss your vision in person" },
];

const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

interface FormData {
  service: string;
  vision: string;
  placement: string;
  referenceDesc: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  instagram: string;
  notes: string;
}

export default function BookingForm() {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    service: "",
    vision: "",
    placement: "",
    referenceDesc: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    instagram: "",
    notes: "",
  });

  const steps = ["Service", "Vision", "Date & Time", "Your Info", "Review"];
  const progress = ((step) / (steps.length - 1)) * 100;

  const update = (field: keyof FormData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const selectedService = services.find(s => s.id === data.service);

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
    transition: "border-color 0.3s",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#999",
    marginBottom: "0.5rem",
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            border: "2px solid rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
          }}
        >
          <Check size={32} color="#FFFFFF" />
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontWeight: 100,
            fontSize: "2rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#F5F0EB",
            marginBottom: "1rem",
          }}
        >
          Request Received
        </h2>
        <p style={{ color: "#999", lineHeight: "1.8", maxWidth: "400px", margin: "0 auto 2rem" }}>
          Thank you, {data.name}. Adame will review your request and reach out within 48 hours to confirm your appointment.
        </p>
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#999",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
          }}
        >
          {data.date} · {data.time}
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          {steps.map((s, i) => (
            <div
              key={s}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                flex: 1,
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: i < step ? "#FFFFFF" : i === step ? "transparent" : "transparent",
                  border: i < step ? "2px solid rgba(255,255,255,0.9)" : i === step ? "2px solid rgba(255,255,255,0.9)" : "2px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  color: i < step ? "#0D0D0D" : i === step ? "#FFFFFF" : "#555",
                  transition: "all 0.3s",
                  fontWeight: 600,
                }}
              >
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <span
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: i === step ? "#FFFFFF" : i < step ? "#999" : "#444",
                  display: "block",
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
        <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
            style={{ height: "100%", background: "#FFFFFF" }}
          />
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 0: Service */}
          {step === 0 && (
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "1.5rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Select Service
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>What type of work are you looking for?</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {services.map(s => (
                  <button
                    key={s.id}
                    onClick={() => update("service", s.id)}
                    style={{
                      background: data.service === s.id ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
                      border: data.service === s.id ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.08)",
                      color: "#F5F0EB",
                      padding: "1.25rem 1.5rem",
                      cursor: "pointer",
                      textAlign: "left",
                      borderRadius: "2px",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>{s.label}</div>
                      <div style={{ color: "#999", fontSize: "0.8rem" }}>{s.desc}</div>
                    </div>
                    <div style={{ color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap", marginLeft: "1rem" }}>
                      {s.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Vision */}
          {step === 1 && (
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "1.5rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Describe Your Vision
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>Share details about the tattoo you have in mind.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label style={labelStyle}>Describe Your Tattoo Idea</label>
                  <textarea
                    value={data.vision}
                    onChange={e => update("vision", e.target.value)}
                    placeholder="Describe the subject, mood, style preferences, any references..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Body Placement</label>
                  <input
                    type="text"
                    value={data.placement}
                    onChange={e => update("placement", e.target.value)}
                    placeholder="e.g. Left forearm, right shoulder blade..."
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Reference Images / Inspiration (optional)</label>
                  <input
                    type="text"
                    value={data.referenceDesc}
                    onChange={e => update("referenceDesc", e.target.value)}
                    placeholder="Describe any reference images or link to them..."
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "1.5rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Date & Time
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>Select your preferred appointment date and time.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    type="date"
                    value={data.date}
                    onChange={e => update("date", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    style={{ ...inputStyle, colorScheme: "dark" }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Preferred Time</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }}>
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => update("time", slot)}
                        style={{
                          background: data.time === slot ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.03)",
                          border: data.time === slot ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.08)",
                          color: data.time === slot ? "#FFFFFF" : "#F5F0EB",
                          padding: "0.75rem 0.5rem",
                          cursor: "pointer",
                          fontSize: "0.8rem",
                          borderRadius: "2px",
                          transition: "all 0.2s",
                        }}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Your Info */}
          {step === 3 && (
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "1.5rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Your Information
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>So Adame can reach you to confirm.</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1.25rem" }}>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={e => update("name", e.target.value)}
                    placeholder="Your full name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={e => update("email", e.target.value)}
                    placeholder="you@email.com"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={e => update("phone", e.target.value)}
                    placeholder="(404) 000-0000"
                    style={inputStyle}
                  />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Instagram (optional)</label>
                  <input
                    type="text"
                    value={data.instagram}
                    onChange={e => update("instagram", e.target.value)}
                    placeholder="@yourhandle"
                    style={inputStyle}
                  />
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>Additional Notes (optional)</label>
                  <textarea
                    value={data.notes}
                    onChange={e => update("notes", e.target.value)}
                    placeholder="Anything else you'd like Adame to know..."
                    rows={3}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 100, fontSize: "1.5rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Review & Confirm
              </h3>
              <p style={{ color: "#999", fontSize: "0.85rem", marginBottom: "2rem" }}>Please review your booking request before submitting.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Service", value: selectedService ? `${selectedService.label} (${selectedService.price})` : "" },
                  { label: "Vision", value: data.vision },
                  { label: "Placement", value: data.placement },
                  { label: "Date", value: data.date },
                  { label: "Time", value: data.time },
                  { label: "Name", value: data.name },
                  { label: "Email", value: data.email },
                  { label: "Phone", value: data.phone },
                  ...(data.instagram ? [{ label: "Instagram", value: data.instagram }] : []),
                  ...(data.notes ? [{ label: "Notes", value: data.notes }] : []),
                ].map(item => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "0.875rem 1rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "2px",
                    }}
                  >
                    <span style={{ color: "#FFFFFF", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", minWidth: "90px", paddingTop: "2px" }}>
                      {item.label}
                    </span>
                    <span style={{ color: "#F5F0EB", fontSize: "0.85rem", lineHeight: "1.6" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#555", fontSize: "0.75rem", marginTop: "1.5rem", lineHeight: "1.7" }}>
                By submitting, you agree that this is a booking request. Adame will confirm availability and contact you within 48 hours.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2.5rem", gap: "1rem" }}>
        {step > 0 ? (
          <button
            onClick={() => setStep(s => s - 1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#999",
              padding: "0.875rem 1.5rem",
              cursor: "pointer",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.3s",
              borderRadius: "2px",
            }}
          >
            <ChevronLeft size={16} /> Back
          </button>
        ) : (
          <div />
        )}

        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep(s => s + 1)}
            disabled={
              (step === 0 && !data.service) ||
              (step === 1 && !data.vision) ||
              (step === 2 && (!data.date || !data.time)) ||
              (step === 3 && (!data.name || !data.email))
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#FFFFFF",
              border: "none",
              color: "#0D0D0D",
              padding: "0.875rem 2rem",
              cursor: "pointer",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "all 0.3s",
              borderRadius: "2px",
              opacity:
                (step === 0 && !data.service) ||
                (step === 1 && !data.vision) ||
                (step === 2 && (!data.date || !data.time)) ||
                (step === 3 && (!data.name || !data.email))
                  ? 0.4
                  : 1,
            }}
          >
            Continue <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#FFFFFF",
              border: "none",
              color: "#0D0D0D",
              padding: "0.875rem 2rem",
              cursor: "pointer",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              transition: "all 0.3s",
              borderRadius: "2px",
            }}
          >
            Confirm Booking <Check size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
