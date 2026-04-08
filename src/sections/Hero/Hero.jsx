import React from "react";
import colors from "../../layout/utils/color";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      {/* BG Shapes */}
      {[
        {
          w: 300,
          h: 300,
          bg: "rgba(255,107,107,0.1)",
          top: -80,
          right: -60,
          delay: 0,
        },
        {
          w: 200,
          h: 200,
          bg: "rgba(107,203,119,0.12)",
          bottom: 60,
          left: -40,
          delay: 2,
        },
        {
          w: 150,
          h: 150,
          bg: "rgba(255,217,61,0.15)",
          top: "40%",
          right: "20%",
          delay: 4,
        },
        {
          w: 100,
          h: 100,
          bg: "rgba(78,205,196,0.15)",
          top: "20%",
          left: "30%",
          delay: 1,
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
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* LEFT CONTENT */}
      <div
        className={styles.content}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Badge */}
        <div
          className={styles.badge}
          style={{
            border: `2px solid ${colors.sun}`,
            color: colors.peach,
          }}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          ⭐ Admissions Open 2025–26
        </div>

        {/* Heading */}
        <h1
          className={styles.heading}
          style={{ color: colors.dark }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
         Where Child’s First Learning   <span style={{ color: colors.coral }}>Feels</span>{" "}
           <span style={{ color: colors.mint }}>Like Home</span>
        </h1>

        {/* Description */}
        <p
          className={styles.description}
          style={{ color: colors.mid }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          A nurturing Montessori-inspired play school where every child
          discovers the joy of learning through play, creativity, and
          exploration.
          {/* The premium playschool encourages children to explore, learn, and grow in a safe, caring, and engaging environment. */}
        </p>

        {/* Buttons */}
        <div
          className={styles.buttonGroup}
          data-aos="fade-up"
          data-aos-delay="400"
        >
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
              border: `2px solid ${colors.light}`,
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
          ].map(([num, label], i) => (
            <div
              key={label}
              className={styles.statBox}
              data-aos="fade-up"
              data-aos-delay={600 + i * 150}
            >
              <div className={styles.statNumber} style={{ color: colors.dark }}>
                {num}
              </div>
              <div className={styles.statLabel} style={{ color: colors.mid }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div
        className={styles.cardWrapper}
      >
        <div className={styles.card}>
          <div className={styles.grid}>
            {[
              ["🎨", "#FFF0F0"],
              ["📚", "#F0FFF4"],
              ["🎵", "#FFF8E0"],
              ["🌿", "#E8F8FF"],
              ["🔢", "#F8E8FF"],
              ["🌍", "#FFF0F0"],
              ["🧩", "#E8FFF0"],
              ["⭐", "#FFF8E0"],
            ].map(([e, bg], i) => (
              <div
                key={i}
                className={styles.gridItem}
                style={{ background: bg }}
              >
                {e}
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

        {/* Floating Badges */}
        {[
          {
            text: "🌟 Top Rated School",
            color: colors.mint,
            top: -20,
            left: -30,
          },
          {
            text: "🏆 Award-Winning Curriculum",
            color: colors.lavender,
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
            data-aos="fade-down"
            data-aos-delay={700 + i * 200}
          >
            {b.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
