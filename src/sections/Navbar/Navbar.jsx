"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import colors from "@/layout/utils/color";
import img from "@/assets/images/logo1.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
  const handleScroll = () => {
    const sections = ["about", "programs", "campus", "montessori", "admission"];

    let current = "about";

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const sectionTop = element.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

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
    
        <div
          className={styles.logo}
          style={{ color: colors.coral }}
          onClick={() => scrollTo("hero")}
        >
          <img src={img.src} alt="img" />
        </div>

        <ul className={styles.menu}>
          {menuItems.map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={active === id ? styles.active : ""}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
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
                <p
                  onClick={() => scrollTo(id)}
                  className={`${styles.menuItem} ${active === id ? styles.active : ""}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
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
