"use client";
import React from "react";
import colors from "@/layout/utils/color";
import SectionTag from "@/layout/WebLayout";
import styles from "./program.module.css";

const Programs = () => {
  const programs = [
    {
      emoji: "👶",
      title: "Day Care",
      desc: "Care, playtime, meals, and rest routine ",
      age: "6 months to 2 years",
      bg: "#FFF0F0",
      accent: colors.coral,
    },
    {
      emoji: "🌟",
      title: "Playgroup",
      desc: "Socialskills and Motor development skills",
      age: "2 - 3 years",
      bg: "#F0FFF4",
      accent: colors.mint,
    },
    {
      emoji: "🎨",
      title: "Nursery",
      desc: "Phonics, shapes, basic learning ",
      age: " 3 - 4 years",
      bg: "#FFF8E0",
      accent: colors.peach,
    },
    {
      emoji: "🔤",
      title: "LKG",
      desc: "Letters, numbers, drawing, rhymes",
      age: "4 – 5 Years",
      bg: "#F3E8FF",
      accent: colors.lavender,
    },
    {
      emoji: "📐",
      title: "UKG",
      desc: "Reading, writing, story telling and basic math ",
      age: "5 - 6 years",
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
          <span className={styles.tag}>PROGRAMS</span>
        </div>

        {/* TITLE */}
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
       TAILORED FOR EVERY AGE GROUP
        </h2>

        {/* UNDERLINE */}
        <div
          className={styles.underline}
          data-aos="fade-down"
          data-aos-delay="300"
        ></div>

        {/* DESCRIPTION */}
        <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
          Supporting your child’s journey through every stage of early learning.
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
