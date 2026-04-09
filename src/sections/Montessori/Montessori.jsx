"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./montessori.module.css";

const Montessori = () => {
  const pillars = [
    {
      icon: "🧠",
      bg: "#F3E8FF",
      title: "Child-Led Learning",
      desc: "Children choose activities, building independence and self-confidence naturally.",
    },
    {
      icon: "✋",
      bg: "#E8F8FF",
      title: "SENSORIAL LEARNING",
      desc: "Children learn through touch, sight, and hands-on learning",
    },
    {
      icon: "🌿",
      bg: "#FFF8E0",
      title: "SAFE ENVIRONMENT",
      desc: "A safe environment where children feel secure and confident",
    },
  ];

  const stats = [
    ["98%", "School Readiness Rate"],
    ["4.9★", "Parent Rating"],
    ["100%", "Certified Montessori Staff"],
    ["1:8", "Teacher-to-Child Ratio"],
  ];

  return (
    <section
      id="montessori"
      className={styles.section}
      style={{
        "--dark": colors.dark,
        "--mid": colors.mid,
        "--lavender": colors.lavender,
        "--light": colors.light,
      }}
    >
      <div className={styles.container}>
        {/* LEFT */}
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* TAG */}
          <div data-aos="fade-down" data-aos-delay="100">
            <SectionTag>Montessori Method</SectionTag>
          </div>

          {/* TITLE */}
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
            Education That Follows the Child
          </h2>

          {/* UNDERLINE */}
          <div
            className={styles.underline}
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>

          {/* DESCRIPTION */}
          <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
            The Montessori philosophy guides everything we do — giving children
            the freedom to explore and the time to grow at their own pace.
          </p>

          {/* PILLARS */}
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={500 + i * 150}
              >
                <div className={styles.iconBox} style={{ background: p.bg }}>
                  {p.icon}
                </div>

                <div>
                  <h4 className={styles.cardTitle}>{p.title}</h4>
                  <p className={styles.cardDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-up" data-aos-delay="500">
          {/* QUOTE */}
          <div
            className={styles.quoteBox}
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <div className={styles.quoteSymbol}>"</div>

            <p className={styles.quoteText}>
              ”A child’s needs are simple, and a happy childhood needs only simple surroundings”

            </p>

            <div className={styles.quoteAuthor}>— Dr. Maria Montessori</div>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            {stats.map(([num, label], i) => (
              <div
                key={label}
                className={styles.statCard}
                data-aos="fade-up"
                data-aos-delay={700 + i * 150}
              >
                <div className={styles.statNum}>{num}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Montessori;
