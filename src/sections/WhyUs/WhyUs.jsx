"use client";

import colors from "../../layout/utils/color";
import styles from "./whyus.module.css";

const WhyUs = () => {
  const cards = [
    {
      icon: "🎓",
      bg: "rgba(255,107,107,0.15)",
      title: "Qualified Educators",
      desc: "All teachers are certified early childhood specialists with Montessori expertise.",
    },
    {
      icon: "🔒",
      bg: "rgba(107,203,119,0.15)",
      title: "100% Safe Campus",
      desc: "CCTV-monitored premises, trained security, and strict visitor protocols.",
    },
    {
      icon: "🍎",
      bg: "rgba(255,217,61,0.15)",
      title: "Nutritious Meals",
      desc: "Freshly cooked, balanced meals prepared hygienically by our in-house team.",
    },
    {
      icon: "📱",
      bg: "rgba(78,205,196,0.15)",
      title: "Parent App",
      desc: "Daily updates, photos, and progress reports delivered to parents via app.",
    },
    {
      icon: "🌍",
      bg: "rgba(167,139,250,0.15)",
      title: "Multilingual Learning",
      desc: "Children learn in English and their mother tongue.",
    },
    {
      icon: "🎭",
      bg: "rgba(255,165,82,0.15)",
      title: "Extracurriculars",
      desc: "Dance, music, art, yoga, and storytelling sessions.",
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
        <div className={styles.tag}>Why Choose Us</div>

        <h2 className={styles.title}>What Makes Blossom Special</h2>

        <p className={styles.subtitle}>
          Every choice we make is guided by what's best for your child.
        </p>
      </div>

      {/* CARDS */}
      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
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
