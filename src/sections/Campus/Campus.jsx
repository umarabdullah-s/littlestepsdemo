"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";

const Campus = () => {
  const features = [
    ["🏊", "Splash Pool"],
    ["🛝", "Play Park"],
    ["📚", "Mini Library"],
    ["🎨", "Art Studio"],
    ["🎵", "Music Room"],
    ["🌱", "Garden Trail"],
  ];

  const tiles = [
    {
      emoji: "🛝",
      label: "Play Park",
      bg: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
      gridRow: "1 / 3",
    },
    {
      emoji: "🎨",
      label: "Art Room",
      bg: "linear-gradient(135deg, #6BCB77, #4ECDC4)",
    },
    {
      emoji: "📚",
      label: "Library",
      bg: "linear-gradient(135deg, #FFD93D, #FF6B6B)",
    },
    {
      emoji: "🎵",
      label: "Music",
      bg: "linear-gradient(135deg, #A78BFA, #6BCB77)",
    },
    {
      emoji: "🌱",
      label: "Garden",
      bg: "linear-gradient(135deg, #4ECDC4, #A78BFA)",
    },
  ];

  return (
    <section
      id="campus"
      style={{
        background: "white",
        padding: "80px 5%",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div data-aos="fade-right">
          <SectionTag data-aos="zoom-in">Our Campus</SectionTag>

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
            Spaces Designed for Little Explorers
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              width: 60,
              height: 4,
              background: colors.sky,
              borderRadius: 2,
              margin: "1rem 0",
            }}
          />

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ color: colors.mid, lineHeight: 1.7 }}
          >
            Our sprawling campus is built with children in mind — bright, safe,
            and brimming with opportunities for discovery.
          </p>

          {/* FEATURES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: "1.5rem",
            }}
          >
            {features.map(([icon, label], i) => (
              <div
                key={label}
                data-aos="fade-up"
                data-aos-delay={400 + i * 100}
                style={{
                  background: colors.cream,
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "200px 200px",
            gap: 16,
          }}
        >
          {tiles.map((t, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={300 + i * 150}
              style={{
                borderRadius: 20,
                background: t.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                position: "relative",
                gridRow: t.gridRow,
              }}
            >
              {t.emoji}

              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  background: "rgba(0,0,0,0.4)",
                  color: "white",
                  borderRadius: 8,
                  padding: "4px 10px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
