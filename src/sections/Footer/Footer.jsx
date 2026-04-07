"use client";
import React from "react";
import colors from "@/layout/utils/color";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{
        "--dark": colors.dark,
        "--mint": colors.mint,
        "--sun": colors.sun,
      }}
    >
      <div
        className={styles.logo}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        🌸 Blossom <span className={styles.highlight}>Play School</span>
      </div>

      <div
        className={styles.nav}
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {["about", "programs", "campus", "montessori", "admission"].map(
          (id) => (
            <button
              key={id}
              className={styles.navBtn}
              onClick={() =>
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {id}
            </button>
          ),
        )}
      </div>

      <p className={styles.contact}>
        📍 123 Garden Lane, Chennai, Tamil Nadu &nbsp;|&nbsp; 📞 +91 98765 43210
        &nbsp;|&nbsp; ✉️ hello@blossomplayschool.in
      </p>

      <p className={styles.copy}>
        © 2025 Blossom Play School. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
