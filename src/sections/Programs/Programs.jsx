"use client";
import React from "react";
import colors from "@/layout/utils/color";
import SectionTag from "@/layout/WebLayout";

const Programs = () => {
  const programs = [
    {
      emoji: "👶",
      title: "Playgroup",
      desc: "First steps into school. Sensory play and social bonding.",
      age: "1.5 – 2.5 Years",
      bg: "#FFF0F0",
      accent: colors.coral,
    },
    {
      emoji: "🌟",
      title: "Nursery",
      desc: "Language development, creativity, and early motor skills.",
      age: "2.5 – 3.5 Years",
      bg: "#F0FFF4",
      accent: colors.mint,
    },
    {
      emoji: "🔤",
      title: "LKG",
      desc: "Letters, numbers, drawing, and group activities.",
      age: "3.5 – 4.5 Years",
      bg: "#FFF8E0",
      accent: colors.peach,
    },
    {
      emoji: "📐",
      title: "UKG",
      desc: "Advanced reading, writing, and school readiness.",
      age: "4.5 – 5.5 Years",
      bg: "#F3E8FF",
      accent: colors.lavender,
    },
    {
      emoji: "🎨",
      title: "After School",
      desc: "Creative workshops in art, dance, music, and coding.",
      age: "All Ages",
      bg: "#E8F8FF",
      accent: colors.sky,
    },
  ];

  return (
    <section
      id="programs"
      style={{
        background: colors.cream,
        padding: "80px 5%",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* HEADER */}
      <div data-aos="fade-up" style={{ textAlign: "center" }}>
        <SectionTag data-aos="zoom-in">Our Programs</SectionTag>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: colors.dark,
            margin: 0,
          }}
        >
          Tailored for Every Age Group
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            width: 60,
            height: 4,
            background: colors.mint,
            borderRadius: 2,
            margin: "1rem auto",
          }}
        />

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ color: colors.mid, maxWidth: 520, margin: "0 auto" }}
        >
          From toddlers to kindergarteners, we have the perfect program for
          every stage.
        </p>
      </div>

      {/* CARDS */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginTop: "3rem",
        }}
      >
        {programs.map((p, i) => (
          <div
            key={p.title}
            data-aos="zoom-in"
            data-aos-delay={500 + i * 150} // stagger effect
            style={{
              background: p.bg,
              borderRadius: 24,
              padding: "28px 20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(45,42,74,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "2.8rem", marginBottom: 12 }}>
              {p.emoji}
            </div>

            <h3
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: p.accent,
                marginBottom: 6,
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontSize: "0.82rem",
                color: colors.mid,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {p.desc}
            </p>

            <div
              style={{
                display: "inline-block",
                marginTop: 12,
                padding: "4px 12px",
                borderRadius: 50,
                background: p.accent,
                color: "white",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              {p.age}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
