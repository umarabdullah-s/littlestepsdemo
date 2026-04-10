"use client";
import React, { useState, useEffect } from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./admission.module.css";
import { submitEnquiry } from "@/api/Serviceapi"
import { getEnquiryList } from "@/api/Serviceapi";

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


  const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [enquiries,setEnquiries]=useState([])
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
      desc: "Complete the admission process and your child's spot is secured. Welcome to Alo Little Steps!",
    },
  ];

  // ✅ Handle Change (single function)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // 🔥 remove error while typing
    setErrors({ ...errors, [name]: "" });
  };

  // ✅ Validation
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
const programMap = {
  "Playgroup (1.5 – 2.5 Years)": "playgroup",
  "Nursery (2.5 – 3.5 Years)": "nursery",
  "LKG (3.5 – 4.5 Years)": "lkg",
  "UKG (4.5 – 5.5 Years)": "ukg",
  "After School Programs": "daycare",
};
  // ✅ Submit
const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    setLoading(true);

   const payload = {
  parentsName: form.parent,
  childsName: form.child,
  phoneNumber: "+91 " + form.phone,
  email: form.email,
  programOfInterest: programMap[form.program], // 🔥 FIX HERE
};
    console.log("Payload:", payload);

    const res = await submitEnquiry(payload);

    console.log("Success:", res);
    alert("✅ Enquiry Submitted Successfully 🎉");

    // ✅ Reset form
    setForm({
      parent: "",
      child: "",
      phone: "",
      age: "",
      email: "",
      program: "",
      year: "2025–2026",
    });

  } catch (error) {
    console.error("Error:", error?.response?.data);
    alert(error?.response?.data?.message || "❌ Submission failed");
  } finally {
    setLoading(false);
  }
};
useEffect(() => {
  fetchEnquiries();
}, []);

const fetchEnquiries = async () => {
  try {
    const res = await getEnquiryList();

    console.log("FULL RESPONSE:", res);

    const data =
      res?.data?.data || 
      res?.data?.enquiries || 
      res?.data || 
      [];

    setEnquiries(data);

  } catch (error) {
    console.error("GET ERROR:", error);
  }
};
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
        
        <div>
          <div>
            <SectionTag>Admissions</SectionTag>
          </div>

          <h2 className={styles.title}>
            START YOUR CHILD’S EARLY LEARNING
          </h2>

          <div className={styles.underline}></div>

          <p className={styles.desc}>
            Enroll your child at Alo Little Steps through a simple four step process.
          </p>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={i} className={styles.stepItem}>
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

        {/* ✅ FORM */}
        <form className={styles.formBox} onSubmit={handleSubmit}>
          
          <h3 className={styles.formTitle}>Enquiry Form</h3>

          {/* Parent + Child */}
          <div className={styles.grid2}>
            {[
              ["Parent's Name", "text", "Full name", "parent"],
              ["Child's Name", "text", "Child's name", "child"],
            ].map(([label, type, ph, key], i) => (
              <div key={key}>
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  name={key}
                  placeholder={ph}
                  value={form[key]}
                  onChange={handleChange}
                  className={styles.input}
                />
                {errors[key] && (
                  <p className={styles.error}>{errors[key]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Phone + Age */}
          <div className={styles.grid2}>
            {[
              ["Phone Number", "tel", "+91 XXXXX XXXXX", "phone"],
              ["Child's Age", "text", "e.g. 3 years", "age"],
            ].map(([label, type, ph, key], i) => (
              <div key={key}>
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  name={key}
                  placeholder={ph}
                  value={form[key]}
                  onChange={handleChange}
                  className={styles.input}
                />
                {errors[key] && (
                  <p className={styles.error}>{errors[key]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
          </div>

          {/* Program */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Program of Interest</label>
            <select
              name="program"
              value={form.program}
              onChange={handleChange}
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
            {errors.program && (
              <p className={styles.error}>{errors.program}</p>
            )}
          </div>

          {/* Submit */}
        <button type="submit" disabled={loading} className={styles.button}>
  {loading ? "Submitting..." : "Submit Enquiry →"}
</button>
        </form>
      </div>
    </section>
  );
};

export default Admission;