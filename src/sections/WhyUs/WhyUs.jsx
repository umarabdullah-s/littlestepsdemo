"use client";

import colors from "../../layout/utils/color";
import styles from "./whyus.module.css";

const WhyUs = () => {
  const cards = [
    {
      icon: "🎓",
      bg: "rgba(255,107,107,0.15)",
      title: "Child-Centered Learning",
      desc: "Learning designed around every child’s interests, pace, and development.",
    },
    {
      icon: "🔒",
      bg: "rgba(107,203,119,0.15)",
      title: "Certified Montessori Teachers",
      desc: "Qualified and Certified Montessori teachers guiding children with love and care.",
    },
    {
      icon: "🍎",
      bg: "rgba(255,217,61,0.15)",
      title: "Safe & Friendly Environment",
      desc: "Safe and friendly environment where children feel valued and protected.",
    },
    {
      icon: "📱",
      bg: "rgba(78,205,196,0.15)",
      title: "Activity-Based Learning",
      desc: "Interactive activities designed to make learning enjoyable and meaningful.",
    },
    {
      icon: "🌍",
      bg: "rgba(167,139,250,0.15)",
      title: "Regular Parent Updates",
      desc: "Keeping parents informed with timely updates on child’s development.",
    },
    {
      icon: "🎭",
      bg: "rgba(255,165,82,0.15)",
      title: "Smart Classrooms & Play Area",
      desc: "Modern learning spaces with fun, safe, and creative play areas.",
    },
  ];

  return (
    <section
      id="why-us"
      className={styles.section}
      style={{
        "--dark": colors.dark,
        "--sun": colors.sun,
      }}
    >
      {/* HEADER */}
      <div className={styles.header}>
        {/* TAG */}
        <div className={styles.tag} data-aos="fade-down" data-aos-delay="100">
          Why Choose Us
        </div>

        {/* TITLE */}
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          What Makes Us Special
        </h2>

        {/* SUBTITLE */}
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="300">
        Our learning method is designed to bring out your child’s best potential
        </p>
      </div>

      {/* CARDS */}
      <div className={styles.grid} data-aos="fade-up" data-aos-delay="400">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={500 + i * 150}
          >
            <div className={styles.iconBox} style={{ background: c.bg }}>
              {c.icon}
            </div>

            <h3 className={styles.cardTitle}>{c.title}</h3>

            <p className={styles.cardDesc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
