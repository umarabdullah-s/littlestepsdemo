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
      title: "FILL THE ENQUIRY FORM",
      desc: "Share your child’s basic details and preferred program with us online or during your visit.",
    },
    {
      title: "School Tour & Interaction",
      desc: "Visit our campus, meet our teachers, and let your child experience the environment.",
    },
    {
      title: "Submit Documents photos, and other documents.",
      desc: "Submit birth certificate, ",
    },
    {
      title: "Confirm Admission ",
      desc: "Complete the admission process and your child's spot is secured. Welcome to Alo Little Steps!", },
  ];
 const [errors, setErrors] = useState({});

  // 🔹 Handle Input Change
  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};

  // 🔹 Validation Function
  const validateForm = () => {
  const newErrors = {};

  if (!form.parent.trim()) {
    newErrors.parent = "Parent name is required";
  }

  if (!form.child.trim()) {
    newErrors.child = "Child name is required";
  }

  if (!form.phone) {
    newErrors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(form.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  if (!form.age.trim()) {
    newErrors.age = "Child age is required";
  }

  if (!form.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Invalid email";
  }

  if (!form.program) {
    newErrors.program = "Select a program";
  }

  return newErrors;
};

 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    alert("Form Submitted Successfully ");
    console.log(form);
  }
};



  return (
    <section
      id="admission"zz
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
      
        <div data-aos="fade-up" data-aos-duration="1000">
          {/* TAG */}
          <div data-aos="fade-down" data-aos-delay="100">
            <SectionTag>Admissions</SectionTag>
          </div>

          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="200">
         START YOUR CHILD’S EARLY LEARNING

          </h2>

     
          <div
            className={styles.underline}
            data-aos="fade-down"
            data-aos-delay="300"
          ></div>

     
          <p className={styles.desc} data-aos="fade-up" data-aos-delay="400">
          Enroll your child at Alo Little Steps through a simple four step process.

          </p>

     
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

     
        <div className={styles.formBox} data-aos="fade-up" data-aos-delay="500">
       
          <h3
            className={styles.formTitle}
            data-aos="fade-down"
            data-aos-delay="600"
          >
             Enquiry Form
          </h3>

        
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

         
          <button
  className={styles.button}
  onClick={handleSubmit}
>
  Submit Enquiry →
</button>
        </div>
      </div>
    </section>
  );
};

export default Admission;
