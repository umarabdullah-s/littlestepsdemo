"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./campus.module.css";

const Campus = () => {
  const features = [
    ["🏊", "SmartClassRoom"],
    ["🛝", "Play Park"],
    ["📚", "Mini Library"],
    ["🎨", "Art Studio"],
    ["🎵", "Dining Area"],
    ["🌱", "DanceRoom"],
  ];

  const tiles = [
    {
      emoji: "🛝",
      label: "SmartClassRoom",
      bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
      gridRow: "1 / 3",
    },
    {
      emoji: "🎨",
      label: "Playpark",
      bg: "linear-gradient(135deg, #6BCB77, #4ECDC4)",
    },
    {
      emoji: "📚",
      label: "Library",
      bg: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
    },
    {
      emoji: "🎵",
      label: "ArtRoom",
      bg: "linear-gradient(135deg, #A78BFA, #6BCB77)",
    },
    {
      emoji: "🌱",
      label: "DiningArea",
      bg: "linear-gradient(135deg, #4ECDC4, #A78BFA)",
    },
     {
      emoji: "🌱",
      label: "DianceRoom",
      bg: "linear-gradient(135deg, #4ECDC4, #A78BFA)",
    },
  ];

  return (
    <section
      id="campus"
      className={styles.section}
      style={{
        "--dark": colors.dark,
        "--mid": colors.mid,
        "--sky": colors.sky,
        "--cream": colors.cream,
      }}
    >
      <div className={styles.container}>
        {/* LEFT */}
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* TAG */}
          <div data-aos="fade-down" data-aos-delay="100">
            <SectionTag>Our Campus</SectionTag>
          </div>

          {/* TITLE */}
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
         Spaces for Every Little Step of Learning
          </h2>

          {/* UNDERLINE */}
          <div
            className={styles.underline}
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>

          {/* DESCRIPTION */}
          <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
          Our campus is thoughtfully designed for children, offering a safe, vibrant environment with engaging spaces that inspire exploration, creativity, and joyful learning

          </p>

          {/* FEATURES */}
          <div className={styles.features}>
            {features.map(([icon, label], i) => (
              <div
                key={label}
                className={styles.featureItem}
                data-aos="fade-up"
                data-aos-delay={500 + i * 120}
              >
                <span className={styles.featureIcon}>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.tiles} data-aos="fade-up" data-aos-delay="500">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={styles.tile}
              style={{
                background: t.bg,
                gridRow: t.gridRow,
              }}
              data-aos="fade-up"
              data-aos-delay={600 + i * 150}
            >
              {t.emoji}

              <div className={styles.tileLabel}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
