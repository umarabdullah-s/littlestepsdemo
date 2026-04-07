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
      desc: "Children choose their activities, fostering intrinsic motivation and independence.",
    },
    {
      icon: "✋",
      bg: "#E8F8FF",
      title: "Hands-On Materials",
      desc: "Authentic Montessori materials engage all senses and make abstract concepts tangible.",
    },
    {
      icon: "🌿",
      bg: "#FFF8E0",
      title: "Prepared Environment",
      desc: "Every corner of our classroom is thoughtfully designed to invite exploration.",
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
        <div data-aos="fade-right">
          <SectionTag data-aos="zoom-in">Montessori Method</SectionTag>

          <h2 data-aos="fade-up" data-aos-delay="100" className={styles.title}>
            Education That Follows the Child
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className={styles.underline}
          ></div>

          <p data-aos="fade-up" data-aos-delay="300" className={styles.desc}>
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
                data-aos-delay={400 + i * 150}
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
        <div data-aos="fade-left" data-aos-delay="200">
          {/* QUOTE */}
          <div data-aos="zoom-in" className={styles.quoteBox}>
            <div className={styles.quoteSymbol}>"</div>

            <p className={styles.quoteText}>
              The greatest gifts we can give our children are the roots of
              responsibility and the wings of independence.
            </p>

            <div className={styles.quoteAuthor}>— Dr. Maria Montessori</div>
          </div>

          {/* STATS */}
          <div className={styles.stats}>
            {stats.map(([num, label], i) => (
              <div
                key={label}
                className={styles.statCard}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 150}
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
