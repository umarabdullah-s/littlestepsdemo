"use client";
import React from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";

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

  return (
    <section
      id="montessori"
      style={{
        background: "linear-gradient(135deg, #F3E8FF 0%, #E8F8FF 100%)",
        padding: "80px 5%",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div data-aos="fade-right">
          <SectionTag data-aos="zoom-in">Montessori Method</SectionTag>

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
            Education That Follows the Child
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              width: 60,
              height: 4,
              background: colors.lavender,
              borderRadius: 2,
              margin: "1rem 0",
            }}
          />

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ color: colors.mid, lineHeight: 1.7 }}
          >
            The Montessori philosophy guides everything we do — giving children
            the freedom to explore and the time to grow at their own pace.
          </p>

          {/* PILLARS */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: "2rem",
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={400 + i * 150}
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 20,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  boxShadow: "0 4px 16px rgba(45,42,74,0.06)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateX(8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateX(0)")
                }
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: p.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: colors.dark,
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h4>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: colors.mid,
                      marginTop: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" data-aos-delay="200">
          {/* QUOTE CARD */}
          <div
            data-aos="zoom-in"
            style={{
              background: "white",
              borderRadius: 28,
              padding: 36,
              boxShadow: "0 12px 40px rgba(45,42,74,0.1)",
            }}
          >
            <div
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "6rem",
                color: colors.lavender,
                lineHeight: 0.8,
                opacity: 0.3,
              }}
            >
              "
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: colors.dark,
                lineHeight: 1.6,
                fontWeight: 600,
                margin: "8px 0 0",
              }}
            >
              The greatest gifts we can give our children are the roots of
              responsibility and the wings of independence.
            </p>

            <div
              style={{
                marginTop: 16,
                fontWeight: 700,
                color: colors.lavender,
                fontSize: "0.9rem",
              }}
            >
              — Dr. Maria Montessori
            </div>
          </div>

          {/* STATS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginTop: 24,
            }}
          >
            {[
              ["98%", "School Readiness Rate"],
              ["4.9★", "Parent Rating"],
              ["100%", "Certified Montessori Staff"],
              ["1:8", "Teacher-to-Child Ratio"],
            ].map(([num, label], i) => (
              <div
                key={label}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 150}
                style={{
                  background: colors.light,
                  borderRadius: 16,
                  padding: 16,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: colors.lavender,
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    fontSize: "0.75rem",
                    color: colors.mid,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Montessori;
