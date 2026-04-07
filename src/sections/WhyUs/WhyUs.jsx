"use client";

import colors from "../../layout/utils/color";

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
      desc: "Children learn in English and their mother tongue, building a bilingual base.",
    },
    {
      icon: "🎭",
      bg: "rgba(255,165,82,0.15)",
      title: "Extracurriculars",
      desc: "Dance, music, art, yoga, and storytelling sessions for every child.",
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        background: colors.dark,
        padding: "80px 5%",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* HEADER */}
      <div data-aos="fade-up" style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.1)",
            color: colors.sun,
            fontWeight: 700,
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 50,
            marginBottom: "1rem",
          }}
        >
          Why Choose Us
        </div>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            color: "white",
            margin: 0,
          }}
        >
          What Makes Blossom Special
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            marginTop: "0.6rem",
          }}
        >
          Every choice we make is guided by what's best for your child.
        </p>
      </div>

      {/* CARDS */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: "3rem",
        }}
      >
        {cards.map((c, i) => (
          <div
            key={c.title}
            data-aos="zoom-in"
            data-aos-delay={400 + i * 150} // 👈 stagger animation
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: 28,
              cursor: "pointer",
              transition: "transform 0.3s, background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: c.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                marginBottom: 16,
              }}
            >
              {c.icon}
            </div>

            <h3
              style={{
                color: "white",
                fontFamily: "'Baloo 2', cursive",
                fontSize: "1.15rem",
                marginBottom: 8,
              }}
            >
              {c.title}
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.88rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
