"use client";
import React, { useState } from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./admission.module.css";

const Admission = () => {
  const [form, setForm] = useState({
    parent: "",
    child: "",
    phone: "",
    age: "",
    email: "",
    program: "",
    year: "2025–2026",
  });

  const steps = [
    {
      title: "Fill the Enquiry Form",
      desc: "Share your child's details and preferred program with us online or in person.",
    },
    {
      title: "School Tour & Interaction",
      desc: "Visit our campus, meet our teachers, and let your child experience the environment.",
    },
    {
      title: "Submit Documents",
      desc: "Submit birth certificate, immunization records, and photographs.",
    },
    {
      title: "Confirm Admission 🎉",
      desc: "Pay the admission fee and your child's spot is secured. Welcome to Blossom!",
    },
  ];

  return (
    <section
      id="admission"
      className={styles.section}
      style={{
        "--cream": colors.cream,
        "--dark": colors.dark,
        "--mid": colors.mid,
        "--peach": colors.peach,
        "--coral": colors.coral,
        "--light": colors.light,
      }}
    >
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* TAG */}
          <div data-aos="fade-down" data-aos-delay="100">
            <SectionTag>Admissions</SectionTag>
          </div>

          {/* TITLE */}
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
            Enroll Your Child Today
          </h2>

          {/* UNDERLINE */}
          <div
            className={styles.underline}
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>

          {/* DESCRIPTION */}
          <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
            Join the Blossom family! Our simple 4-step process makes enrollment
            easy and stress-free.
          </p>

          {/* STEPS */}
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div
                key={i}
                className={styles.stepItem}
                data-aos="fade-up"
                data-aos-delay={500 + i * 150}
              >
                {i < steps.length - 1 && (
                  <div className={styles.stepLine}></div>
                )}

                <div className={styles.stepCircle}>{i + 1}</div>

                <div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className={styles.formBox} data-aos="fade-up" data-aos-delay="500">
          {/* FORM TITLE */}
          <h3
            className={styles.formTitle}
            data-aos="fade-down"
            data-aos-delay="600"
          >
            📋 Enquiry Form
          </h3>

          {/* NAME FIELDS */}
          <div className={styles.grid2}>
            {[
              ["Parent's Name", "text", "Full name", "parent"],
              ["Child's Name", "text", "Child's name", "child"],
            ].map(([label, type, ph, key], i) => (
              <div key={key} data-aos="fade-up" data-aos-delay={700 + i * 100}>
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={styles.input}
                />
              </div>
            ))}
          </div>

          {/* PHONE + AGE */}
          <div className={styles.grid2}>
            {[
              ["Phone Number", "tel", "+91 XXXXX XXXXX", "phone"],
              ["Child's Age", "text", "e.g. 3 years", "age"],
            ].map(([label, type, ph, key], i) => (
              <div key={key} data-aos="fade-up" data-aos-delay={800 + i * 100}>
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={styles.input}
                />
              </div>
            ))}
          </div>

          {/* EMAIL */}
          <div
            className={styles.inputGroup}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={styles.input}
            />
          </div>

          {/* SELECT */}
          <div
            className={styles.inputGroup}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <label className={styles.label}>Program of Interest</label>
            <select
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              className={styles.select}
            >
              <option value="">Select a program...</option>
              {[
                "Playgroup (1.5 – 2.5 Years)",
                "Nursery (2.5 – 3.5 Years)",
                "LKG (3.5 – 4.5 Years)",
                "UKG (4.5 – 5.5 Years)",
                "After School Programs",
              ].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* BUTTON */}
          <button
            className={styles.button}
            data-aos="fade-up"
            data-aos-delay="1100"
            onClick={() => alert("Thank you! We will contact you shortly 🌸")}
          >
            Submit Enquiry →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admission;
