"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import colors from "@/layout/utils/color";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const menuItems = ["about", "programs", "campus", "montessori", "admission"];

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="800"
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : styles.notScrolled
      }`}
    >
      <div className={styles.container}>
        {/* LOGO */}
        <div className={styles.logo} style={{ color: colors.coral }}>
          🌸 Blossom <span style={{ color: colors.mint }}>Play School</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className={styles.menu}>
          {menuItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{ color: colors.mid }}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button
          className={styles.enrollBtn}
          style={{ background: colors.coral, color: "white" }}
          onClick={() => scrollTo("admission")}
        >
          Enroll Now
        </button>

        {/* HAMBURGER */}
        <div
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </div>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className={`${styles.dropdown} ${open ? styles.show : ""}`}>
          <ul>
            {menuItems.map((id) => (
              <li key={id}>
                <p onClick={() => scrollTo(id)} className={styles.menuItem}>
                  {id}
                </p>
              </li>
            ))}
          </ul>

          <button
            className={styles.enrollBtn}
            style={{ background: colors.coral, color: "white" }}
            onClick={() => scrollTo("admission")}
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
