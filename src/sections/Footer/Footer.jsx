"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{
        "--dark": "#2D2A4A",
        "--mint": "#6ED384",
        "--sun": "#FFB800",
      }}
    >
      {/* ✅ Common Container */}
      <div className={styles.inner}>

        {/* ✅ Logo */}
        <div className={styles.logoContainer}>
          <Image
            src="/fav.png"
            alt="logo"
            width={40}
            height={40}
            className={styles.logoImg}
          />
<span className={styles.brandName}>
        <span className={styles.blueText}>ALO</span>
        <span className={styles.orangeText}>LITTLE</span>
        <span className={styles.greenText}>STEPS</span>
      </span>
        </div>

        {/* ✅ Navigation */}
        <nav className={styles.nav}>
          {["about", "programs", "campus", "montessori", "admissions"].map((id) => (
            <button
              key={id}
              className={styles.navBtn}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* ✅ Contact */}
      <div className={styles.contact}>
  
  {/* 📍 Google Maps */}
  <a
    href="https://www.google.com/maps?q=Kesari+street,+13/B1,+Kesari+St,+Nagercoil,+Tamil+Nadu+629001"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    📍 Kesari street, 13/B1, Kesari St, opposite Eden Hall, Nagercoil, Tamil Nadu 629001
  </a>

  {/* 📞 Phone → WhatsApp (Browser Friendly) */}
  <a
    href="https://wa.me/918438699145"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    📞 +91 84386 99145
  </a>

  {/* ✉️ Email → Gmail Web */}
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=alolittlesteps@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactItem}
  >
    ✉️ alolittlesteps@gmail.com
  </a>

</div>
        {/* ✅ Copyright */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} ALO Little Steps. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;