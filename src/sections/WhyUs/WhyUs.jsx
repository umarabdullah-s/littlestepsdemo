"use client";

import colors from "../../layout/utils/color";
import styles from "./whyus.module.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
const WhyUs = () => {
  const cards = [
    {
      icon: img1.src,
      bg: "rgba(255,107,107,0.15)",
      title: "Child-Centered Learning",
      desc: "Learning designed around every child’s interests, pace, and development.",
    },
    {
      icon: img2.src,
      bg: "rgba(107,203,119,0.15)",
      title: "Certified Montessori Teachers",
      desc: "Qualified and Certified Montessori teachers guiding children with love and care.",
    },
    {
      icon: img3.src,
      bg: "rgba(255,217,61,0.15)",
      title: "Safe & Friendly Environment",
      desc: "Safe and friendly environment where children feel valued and protected.",
    },
    {
      icon: img4.src,
      bg: "rgba(78,205,196,0.15)",
      title: "Activity-Based Learning",
      desc: "Interactive activities designed to make learning enjoyable and meaningful.",
    },
    {
      icon: img5.src,
      bg: "rgba(167,139,250,0.15)",
      title: "Regular Parent Updates",
      desc: "Keeping parents informed with timely updates on child’s development.",
    },
    {
      icon: img6.src,
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
          Our learning method is designed to bring out your child’s best
          potential
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
              <img src={c.icon} alt={c.title} className={styles.iconImage} />
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
