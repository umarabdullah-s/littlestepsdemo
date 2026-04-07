"use client";

import { useState, useEffect } from "react";
import colors from "@/layout/utils/color";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      data-aos="fade-down" // ✅ AOS animation
      data-aos-duration="800" // ✅ speed
      data-aos-once="true" // ✅ only once
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        background: scrolled
          ? "rgba(255,249,240,0.96)"
          : "rgba(255,249,240,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        justifyContent: "center",
        boxShadow: scrolled ? "0 2px 20px rgba(45,42,74,0.1)" : "none",
        transition: "all 0.3s",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
        }}
      >
        {/* LOGO */}
        <div
          data-aos="fade-right" // ✅ logo animation
          data-aos-delay="100"
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: colors.coral,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          🌸 Blossom <span style={{ color: colors.mint }}>Play School</span>
        </div>

        {/* MENU */}
        <ul
          data-aos="fade-down" // ✅ menu animation
          data-aos-delay="200"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["about", "programs", "campus", "montessori", "admission"].map(
            (id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: colors.mid,
                    textTransform: "capitalize",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.coral)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.mid)
                  }
                >
                  {id}
                </button>
              </li>
            ),
          )}
        </ul>

        {/* BUTTON */}
        <button
          data-aos="fade-left" // ✅ button animation
          data-aos-delay="300"
          onClick={() => scrollTo("admission")}
          style={{
            background: colors.coral,
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: 50,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "transform 0.2s, background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.background = "#e8545d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.background = colors.coral;
          }}
        >
          Enroll Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
