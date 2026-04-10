"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";

const Hero = () => {
 const colors = {
  coral: "#FF6B81",
  mint: "#6ED384", 
  blue: "#5DADE2",
  yellow: "#FFD93D",
  dark: "#555555",
  mid: "#777777",
};

  return (
    <section id="hero" className={styles.hero}>
      {/* BG Shapes */}
      {[
        {
          w: 300,
          h: 300,
          bg: "rgba(255,107,129,0.12)",
          top: -80,
          right: -60,
        },
        {
          w: 200,
          h: 200,
          bg: "rgba(110,211,207,0.15)",
          bottom: 60,
          left: -40,
        },
        {
          w: 150,
          h: 150,
          bg: "rgba(255,217,61,0.18)",
          top: "40%",
          right: "20%",
        },
        {
          w: 100,
          h: 100,
          bg: "rgba(93,173,226,0.15)",
          top: "20%",
          left: "30%",
        },
      ].map((s, i) => (
        <div
          key={i}
          className={styles.shape}
          style={{
            width: s.w,
            height: s.h,
            background: s.bg,
            top: s.top,
            bottom: s.bottom,
            right: s.right,
            left: s.left,
          }}
        />
      ))}

   
      <div className={styles.content} data-aos="fade-up">
    
        <div
          className={styles.badge}
          style={{
            border: `2px solid ${colors.yellow}`,
            color: colors.coral,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          <FontAwesomeIcon icon={faGraduationCap} />
          Admissions Open 2025–26
        </div>

      
        <h1 className={styles.heading} style={{ color: colors.blue }}>
          Where Learning Begins{" "}
          <span style={{ color: colors.coral }}>with Little </span>
          <span style={{ color: colors.mint }}>Steps</span>
        </h1>

        {/* Description */}
        <p className={styles.description} style={{ color: colors.mid }}>
          A nurturing Montessori-inspired play school where every child
          discovers the joy of learning through play, creativity, and
          exploration.
        </p>

  
        <div className={styles.buttonGroup}>
          <button
            className={styles.primaryBtn}
            style={{ background: colors.coral }}
            onClick={() =>
              document
                .getElementById("admission")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🎒 Apply for Admission
          </button>

          <button
            className={styles.secondaryBtn}
            style={{
              border: `2px solid ${colors.mint}`,
              color: colors.dark,
            }}
            onClick={() =>
              document
                .getElementById("programs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Programs →
          </button>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            ["500+", "Happy Children"],
            ["15+", "Years of Excellence"],
            ["40+", "Expert Educators"],
          ].map(([num, label]) => (
            <div key={label} className={styles.statBox}>
              <div
                className={styles.statNumber}
                style={{ color: colors.dark }}
              >
                {num}
              </div>
              <div
                className={styles.statLabel}
                style={{ color: colors.mid }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.grid}>
            {[
              ["🎨", "#FFF0F3"],
              ["📚", "#F0FFFA"],
              ["🎵", "#FFFBE6"],
              ["🌿", "#EAF4FF"],
              ["🔢", "#F5ECFF"],
              ["🌍", "#FFF0F3"],
              ["🧩", "#EFFFF7"],
              ["⭐", "#FFFBE6"],
            ].map(([icon, bg], i) => (
              <div
                key={i}
                className={styles.gridItem}
                style={{ background: bg }}
              >
                {icon}
              </div>
            ))}
          </div>

          <div className={styles.cardTitle} style={{ color: colors.dark }}>
            Learning Through Play
          </div>

          <div className={styles.cardSubtitle} style={{ color: colors.mid }}>
            Art · Music · Nature · Discovery
          </div>
        </div>

       
        {[
          {
            text: "🌟 Top Rated School",
            color: colors.mint,
            top: -20,
            left: -30,
          },
          {
            text: "🏆 Award-Winning Curriculum",
            color: colors.blue,
            bottom: -20,
            right: -20,
          },
        ].map((b, i) => (
          <div
            key={i}
            className={styles.floatingBadge}
            style={{
              color: b.color,
              top: b.top,
              bottom: b.bottom,
              left: b.left,
              right: b.right,
              animationDelay: `${i * 2}s`,
            }}
          >
            {b.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;