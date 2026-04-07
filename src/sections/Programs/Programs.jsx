"use client";
import React from "react";
import colors from "@/layout/utils/color";
import SectionTag from "@/layout/WebLayout";
import styles from "./program.module.css";

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
      className={styles.section}
      style={{
        "--cream": colors.cream,
        "--dark": colors.dark,
        "--mid": colors.mid,
        "--mint": colors.mint,
      }}
    >
      {/* HEADER */}
      <div className={styles.header}>
        {/* TAG */}
        <div data-aos="fade-down" data-aos-delay="100">
          <SectionTag>Our Programs</SectionTag>
        </div>

        {/* TITLE */}
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          Tailored for Every Age Group
        </h2>

        {/* UNDERLINE */}
        <div
          className={styles.underline}
          data-aos="fade-down"
          data-aos-delay="300"
        ></div>

        {/* DESCRIPTION */}
        <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
          From toddlers to kindergarteners, we have the perfect program for
          every stage.
        </p>
      </div>

      {/* CARDS */}
      <div className={styles.grid} data-aos="fade-up" data-aos-delay="500">
        {programs.map((p, i) => (
          <div
            key={p.title}
            className={styles.card}
            style={{ background: p.bg }}
            data-aos="fade-up"
            data-aos-delay={600 + i * 150}
          >
            <div className={styles.emoji}>{p.emoji}</div>

            <h3 className={styles.cardTitle} style={{ color: p.accent }}>
              {p.title}
            </h3>

            <p className={styles.cardDesc}>{p.desc}</p>

            <div className={styles.badge} style={{ background: p.accent }}>
              {p.age}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
