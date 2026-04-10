"use client";
import React, { useState, useEffect } from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";
import styles from "./admission.module.css";
import { submitEnquiry } from "@/api/Serviceapi"
import { toast } from "react-toastify";

const Admission = () => {
  const [form, setForm] = useState({
  parentsName: "",
  childsName: "",
  phoneNumber: "",
  age: "",
  email: "",
  programOfInterest: "",
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

  if (!form.parentsName.trim()) {
    newErrors.parentsName = "Parent name is required";
  }

  if (!form.childsName.trim()) {
    newErrors.childsName = "Child name is required";
  }

  if (!form.phoneNumber) {
    newErrors.phoneNumber = "Phone number is required";
  } else if (!/^\d{10}$/.test(form.phoneNumber.replace(/\D/g, ""))) {
    newErrors.phoneNumber = "Phone must be 10 digits";
  }

  if (!form.age) {
    newErrors.age = "Child age is required";
  }

  if (!form.email) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Invalid email";
  }

  if (!form.programOfInterest) {
    newErrors.programOfInterest = "Select a program";
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
      parentsName: form.parentsName,
      childsName: form.childsName,
      phoneNumber: form.phoneNumber,
      age: Number(form.age),
      email: form.email,
      programOfInterest: form.programOfInterest,
    };

    console.log(" Payload:", payload);

    const res = await submitEnquiry(payload);

    console.log(" Success Response:", res?.data);

    toast.success("Enquiry Submitted Successfully ");

    // reset form
    setForm({
      parentsName: "",
      childsName: "",
      phoneNumber: "",
      age: "",
      email: "",
      programOfInterest: "",
    });

    setErrors({});

  } catch (error) {
    console.log("❌ FULL ERROR:", error);
    console.log("❌ RESPONSE:", error?.response?.data);
    console.log("❌ STATUS:", error?.response?.status);

    const msg =
      error?.response?.data?.message ||
      error?.message ||
      "Submission failed";

   toast.error(msg);
  } finally {
    setLoading(false);
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
      ["Parent's Name", "text", "Full name", "parentsName"],
      ["Child's Name", "text", "Child's name", "childsName"],
    ].map(([label, type, ph, key]) => (
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
        {errors[key] && <p className={styles.error}>{errors[key]}</p>}
      </div>
    ))}
  </div>

  {/* Phone + Age */}
  <div className={styles.grid2}>
    {[
      ["Phone Number", "tel", "+91 XXXXX XXXXX", "phoneNumber"],
      ["Child's Age", "number", "e.g. 3", "age"],
    ].map(([label, type, ph, key]) => (
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
        {errors[key] && <p className={styles.error}>{errors[key]}</p>}
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
    {errors.email && <p className={styles.error}>{errors.email}</p>}
  </div>

  {/* Program */}
  <div className={styles.inputGroup}>
    <label className={styles.label}>Program of Interest</label>
   <select
  name="programOfInterest"
  value={form.programOfInterest}
  onChange={handleChange}
  className={styles.select}
>
  <option value="">Select a program...</option>

  <option value="playgroup">Playgroup (1.5 – 2.5 Years)</option>
  <option value="nursery">Nursery (2.5 – 3.5 Years)</option>
  <option value="lkg">LKG (3.5 – 4.5 Years)</option>
  <option value="ukg">UKG (4.5 – 5.5 Years)</option>
  <option value="daycare">After School Programs</option>
</select>
    {errors.programOfInterest && (
      <p className={styles.error}>{errors.programOfInterest}</p>
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