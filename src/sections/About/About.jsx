"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./about.module.css";

const About = () => {
  const cards = [
    { icon: "👩‍🏫", label: "Caring Teachers", bg: "#FFF0F0", mt: 0 },
    { icon: "🌈", label: "Colorful Learning", bg: "#F0FFF4", mt: 24 },
    { icon: "🏡", label: "Safe Environment", bg: "#FFF8E0", mt: -24 },
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
      {/* LEFT */}
      <div className={styles.cardGrid}>
        {cards.map((c, i) => (
          <div
            key={i}
            className={styles.card}
            style={{
              background: c.bg,
              marginTop: c.mt,
            }}
          >
            <span className={styles.icon}>{c.icon}</span>
            {c.label}
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div>
        <SectionTag>About Us</SectionTag>

        <h2 className={styles.title}>A Home Away From Home for Your Child</h2>

        <div className={styles.underline}></div>

        <p className={styles.desc}>
          Founded in 2009, Blossom Play School has been a beacon of early
          childhood education. We believe every child is unique and deserves a
          space where their curiosity is celebrated.
        </p>

        <ul className={styles.list}>
          {[
            ["💛", "Child-centered learning philosophy"],
            ["🛡️", "Safe, secure, and hygienic campus"],
            ["🤝", "Strong parent-teacher partnership"],
            ["🌱", "Holistic development — mind, body & spirit"],
          ].map(([icon, text]) => (
            <li key={text} className={styles.listItem}>
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
