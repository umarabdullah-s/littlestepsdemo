"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";

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
      style={{
        background: "white",
        padding: "80px 5%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* LEFT CARDS */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            data-aos-delay={i * 150}
            style={{
              background: c.bg,
              borderRadius: 24,
              aspectRatio: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: "0.9rem",
              color: colors.dark,
              marginTop: c.mt,
            }}
          >
            <span style={{ fontSize: "2.2rem" }}>{c.icon}</span>
            {c.label}
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-left" data-aos-duration="1000">
        <SectionTag data-aos="zoom-in">About Us</SectionTag>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: colors.dark,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          A Home Away From Home for Your Child
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            width: 60,
            height: 4,
            background: colors.coral,
            borderRadius: 2,
            margin: "1rem 0",
          }}
        />

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          style={{
            color: colors.mid,
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 520,
          }}
        >
          Founded in 2009, Blossom Play School has been a beacon of early
          childhood education. We believe every child is unique and deserves a
          space where their curiosity is celebrated.
        </p>

        <ul
          style={{
            listStyle: "none",
            margin: "1.5rem 0 0",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {[
            ["💛", "Child-centered learning philosophy"],
            ["🛡️", "Safe, secure, and hygienic campus"],
            ["🤝", "Strong parent-teacher partnership"],
            ["🌱", "Holistic development — mind, body & spirit"],
          ].map(([icon, text], i) => (
            <li
              key={text}
              data-aos="fade-up"
              data-aos-delay={400 + i * 150}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: colors.cream,
                borderRadius: 12,
                padding: "12px 16px",
                fontWeight: 600,
              }}
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
