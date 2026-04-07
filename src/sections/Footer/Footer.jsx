"use client";
import React from "react";
import colors from "@/layout/utils/color";

const Footer = () => {
  return (
    <footer
      style={{
        background: colors.dark,
        color: "rgba(255,255,255,0.6)",
        padding: "40px 5%",
        textAlign: "center",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "0.88rem",
      }}
    >
      <div
        data-aos="fade-down" // ✅ best for footer
        data-aos-delay="100" // slight delay
        data-aos-duration="1000"
        style={{
          fontFamily: "'Baloo 2', cursive",
          fontSize: "1.6rem",
          fontWeight: 800,
          color: "white",
          marginBottom: 8,
        }}
      >
        🌸 Blossom <span style={{ color: colors.mint }}>Play School</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          margin: "16px 0",
        }}
        data-aos="fade-down" // ✅ best for footer
        data-aos-delay="100" // slight delay
        data-aos-duration="1000"
      >
        {["about", "programs", "campus", "montessori", "admission"].map(
          (id) => (
            <button
              key={id}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.sun)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {id}
            </button>
          ),
        )}
      </div>
      <p>
        📍 123 Garden Lane, Chennai, Tamil Nadu &nbsp;|&nbsp; 📞 +91 98765 43210
        &nbsp;|&nbsp; ✉️ hello@blossomplayschool.in
      </p>

      <p style={{ marginTop: 12, fontSize: "0.78rem", opacity: 0.4 }}>
        © 2025 Blossom Play School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
