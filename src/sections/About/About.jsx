"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./about.module.css";

const About = () => {
  const cards = [
    { icon: "👩‍🏫", label: "Caring Teachers", bg: "#FFF0F0", mt: 0 },
    { icon: "🌈", label: "Colorful Learning", bg: "#F0FFF4", mt: 24 },
    { icon: "🏡", label: "Safe Environment", bg: "#FFF8E0", mt: 0 },
    { icon: "💡", label: "Smart Curriculum", bg: "#E8F8FF", mt: 0 },
  ];

  return (
    <section
      id="about"
      className={styles.section}
      style={{
        "--dark": colors.dark,
        "--mid": colors.mid,
        "--cream": colors.cream,
        "--coral": colors.coral,
      }}
    >

      <div
        className={styles.cardGrid}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className={styles.card}
            style={{
              background: c.bg,
              marginTop: c.mt,
            }}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <span className={styles.icon}>{c.icon}</span>
            {c.label}
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-up" data-aos-delay="200">
        {/* TAG */}
        <div data-aos="fade-down" data-aos-delay="100">
          <span className={styles.tag}>ABOUT US</span>
        </div>

        {/* TITLE */}
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          NURTURING YOUNG MINDS IN A SAFE, LOVING ENVIROINMENT
        </h2>

        {/* UNDERLINE */}
        <div
          className={styles.underline}
          data-aos="fade-down"
          data-aos-delay="300"
        ></div>

        {/* DESCRIPTION */}
        <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
          At Hello Little Steps, we believe that early education should be
          meaningful and joyful. Here, children grow in a safe, caring
          environment that supports self confidence, curiosity, and overall
          development.
        </p>

        {/* LIST */}
        <ul className={styles.list}>
          {[
            ["💛", "Dedicated and caring teachers"],
            ["🛡️", "Bright and engaging learning spaces"],
            ["🤝", " Safe and secure environment"],
            ["🌱", "Smart curriculum for overall growth"],
          ].map(([icon, text], i) => (
            <li
              key={text}
              className={styles.listItem}
              data-aos="fade-up"
              data-aos-delay={500 + i * 150}
            >
              <span>{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
