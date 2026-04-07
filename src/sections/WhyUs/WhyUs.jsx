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
        {/* TAG */}
        <div className={styles.tag} data-aos="fade-down" data-aos-delay="100">
          Why Choose Us
        </div>

        {/* TITLE */}
        <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          What Makes Blossom Special
        </h2>

        {/* SUBTITLE */}
        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="300">
          Every choice we make is guided by what's best for your child.
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
