
import React from "react";
import styles from "./campus.module.css";

const Campus = () => {
  const features = [
    { icon: "🏊", label: "Smart ClassRoom" },
{ icon: "🎪", label: "Play Park" },
    { icon: "📚", label: " Library" },
    { icon: "🎨", label: "Art Room" },
    { icon: "🎵", label: "Dance Room" },
    { icon: "🌱", label: "Dining Area" },
  ];

  return (
<section id="campus" className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <span className={styles.tag}>OUR CAMPUS</span>

          <h2 className={styles.title}>
        SPACES FOR EVERY LITTLE STEPS OF LEARNING

          </h2>

          <div className={styles.underline}></div>

          <p className={styles.desc}>
           Our campus is thoughtfully designed for children, offering a safe, vibrant environment with engaging spaces that inspire exploration, creativity, and joyful learning

          </p>

          <div className={styles.featureList}>
            {features.map((item, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.icon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

   
        <div className={styles.right}>
         <div className={styles.bigCard}>
  <span className={styles.bigEmoji}>🎪</span>
  <span className={styles.cardLabel}>Play park</span>
</div>

          <div className={styles.smallGrid}>
            <div className={styles.cardGreen}>
              <span>🎨</span>
              <p>Art Room</p>
            </div>

            <div className={styles.cardOrange}>
              <span>📚</span>
              <p>Library</p>
            </div>

            <div className={styles.cardPurple}>
              <span>🎵</span>
              <p>Dance Room</p>
            </div>

            <div className={styles.cardBlue}>
              <span>🌱</span>
              <p>DiningArea</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Campus;