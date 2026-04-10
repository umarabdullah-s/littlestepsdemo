"use client";
import React from "react";
import colors from "@/layout/utils/color";
import styles from "./footer.module.css";
import Image from "next/image";
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
<Image
  src="/steps.png"
  alt="Alo Little Steps"
  width={140}
  height={0}
  className={styles.footerImg}
/>
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
        📍kesari street, 13/B1, Kesari St, opposite Eden Hall, Nagercoil, Tamil Nadu &nbsp;|&nbsp; Phone: +91 84386 99145
        &nbsp;|&nbsp; ✉️ hello@alolittlestepsplayschool.in
      </p>

      <p className={styles.copy}>
        © 2026 Alo Little Steps. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
