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
    <>
      {/* NAVBAR */}
      <nav
        data-aos="fade-down"
        data-aos-duration="800"
        className={`${styles.navbar} ${
          scrolled ? styles.scrolled : styles.notScrolled
        }`}
      >
        <div className={styles.container}>
          {/* LOGO */}
          <div
            className={styles.logo}
            style={{ color: colors.coral }}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            🌸 Blossom <span style={{ color: colors.mint }}>Play School</span>
          </div>

          {/* MENU */}
          <ul className={styles.menu} data-aos="fade-up" data-aos-delay="200">
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
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => scrollTo("admission")}
          >
            Enroll Now
          </button>

          {/* HAMBURGER */}
          <div
            className={styles.hamburger}
            onClick={() => setOpen(true)}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            ☰
          </div>
        </div>
      </nav>

      {/* DRAWER */}
      {open && (
        <div className={styles.drawerOverlay} onClick={() => setOpen(false)}>
          <div
            className={`${styles.drawer} ${open ? styles.openDrawer : ""}`}
            data-aos="fade-down"
            data-aos-duration="500"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {menuItems.map((id) => (
                <li key={id}>
                  <button onClick={() => scrollTo(id)}>{id}</button>
                </li>
              ))}
            </ul>

            <button
              className={styles.enrollBtn}
              style={{ background: colors.coral, color: "white" }}
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={() => scrollTo("admission")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
