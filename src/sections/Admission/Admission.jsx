
"use client";
import React from "react";
import { useState } from "react";
import SectionTag from "@/layout/WebLayout";
import colors from "@/layout/utils/color";

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
       style={{
         background: colors.cream,
         padding: "80px 5%",
         fontFamily: "'Nunito', sans-serif",
       }}
     >
       <div
         style={{
           display: "grid",
           gridTemplateColumns: "1fr 1fr",
           gap: "4rem",
           alignItems: "start",
         }}
       >
         <div data-aos="fade-right" data-aos-duration="1000">
           <SectionTag data-aos="zoom-in" data-aos-delay="100">
             Admissions
           </SectionTag>

           <h2
             data-aos="fade-up"
             data-aos-delay="200"
             style={{
               fontFamily: "'Baloo 2', cursive",
               fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
               fontWeight: 800,
               color: colors.dark,
               margin: 0,
             }}
           >
             Enroll Your Child Today
           </h2>

           <div
             data-aos="fade-up"
             data-aos-delay="300"
             style={{
               width: 60,
               height: 4,
               background: colors.peach,
               borderRadius: 2,
               margin: "1rem 0",
             }}
           />

           <p
             data-aos="fade-up"
             data-aos-delay="400"
             style={{ color: colors.mid, lineHeight: 1.7 }}
           >
             Join the Blossom family! Our simple 4-step process makes enrollment
             easy and stress-free.
           </p>

           {/* STEPS */}
           <div style={{ marginTop: "2rem" }}>
             {steps.map((s, i) => (
               <div
                 key={i}
                 data-aos="fade-up"
                 data-aos-delay={500 + i * 150} // 👈 stagger effect
                 style={{
                   display: "flex",
                   alignItems: "flex-start",
                   gap: 20,
                   paddingBottom: 28,
                   position: "relative",
                 }}
               >
                 {i < steps.length - 1 && (
                   <div
                     style={{
                       position: "absolute",
                       left: 22,
                       top: 48,
                       width: 2,
                       height: "calc(100% - 20px)",
                       background: `linear-gradient(${colors.peach}, ${colors.coral})`,
                     }}
                   />
                 )}

                 <div
                   style={{
                     width: 44,
                     height: 44,
                     borderRadius: "50%",
                     background: colors.coral,
                     color: "white",
                     fontFamily: "'Baloo 2', cursive",
                     fontWeight: 800,
                     fontSize: "1.1rem",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     flexShrink: 0,
                     position: "relative",
                     zIndex: 1,
                   }}
                 >
                   {i + 1}
                 </div>

                 <div>
                   <h4
                     style={{
                       fontFamily: "'Baloo 2', cursive",
                       fontSize: "1.05rem",
                       color: colors.dark,
                       fontWeight: 700,
                       margin: 0,
                     }}
                   >
                     {s.title}
                   </h4>

                   <p
                     style={{
                       fontSize: "0.85rem",
                       color: colors.mid,
                       marginTop: 4,
                       lineHeight: 1.5,
                     }}
                   >
                     {s.desc}
                   </p>
                 </div>
               </div>
             ))}
           </div>
         </div>
         <div
           data-aos="fade-left"
           data-aos-duration="1000"
           style={{
             background: "white",
             borderRadius: 28,
             padding: 32,
             boxShadow: "0 12px 40px rgba(45,42,74,0.1)",
           }}
         >
           <h3
             data-aos="fade-up"
             data-aos-delay="100"
             style={{
               fontFamily: "'Baloo 2', cursive",
               fontSize: "1.4rem",
               color: colors.dark,
               marginBottom: "1.5rem",
             }}
           >
             📋 Enquiry Form
           </h3>
           <div
             style={{
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
               gap: 12,
             }}
           >
             {[
               ["Parent's Name", "text", "Full name", "parent"],
               ["Child's Name", "text", "Child's name", "child"],
             ].map(([label, type, ph, key]) => (
               <div key={key}>
                 <label
                   style={{
                     display: "block",
                     fontSize: "0.82rem",
                     fontWeight: 700,
                     color: colors.mid,
                     marginBottom: 6,
                   }}
                 >
                   {label}
                 </label>
                 <input
                   type={type}
                   placeholder={ph}
                   value={form[key]}
                   onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                   style={{
                     width: "100%",
                     padding: "12px 16px",
                     border: `2px solid ${colors.light}`,
                     borderRadius: 12,
                     fontFamily: "'Nunito', sans-serif",
                     fontSize: "0.9rem",
                     color: colors.dark,
                     background: colors.cream,
                     outline: "none",
                     boxSizing: "border-box",
                   }}
                 />
               </div>
             ))}
           </div>
           <div
             style={{
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
               gap: 12,
               marginTop: 12,
             }}
           >
             {[
               ["Phone Number", "tel", "+91 XXXXX XXXXX", "phone"],
               ["Child's Age", "text", "e.g. 3 years", "age"],
             ].map(([label, type, ph, key]) => (
               <div key={key}>
                 <label
                   style={{
                     display: "block",
                     fontSize: "0.82rem",
                     fontWeight: 700,
                     color: colors.mid,
                     marginBottom: 6,
                   }}
                 >
                   {label}
                 </label>
                 <input
                   type={type}
                   placeholder={ph}
                   value={form[key]}
                   onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                   style={{
                     width: "100%",
                     padding: "12px 16px",
                     border: `2px solid ${colors.light}`,
                     borderRadius: 12,
                     fontFamily: "'Nunito', sans-serif",
                     fontSize: "0.9rem",
                     color: colors.dark,
                     background: colors.cream,
                     outline: "none",
                     boxSizing: "border-box",
                   }}
                 />
               </div>
             ))}
           </div>
           {[["Email Address", "email", "your@email.com", "email"]].map(
             ([label, type, ph, key]) => (
               <div key={key} style={{ marginTop: 12 }}>
                 <label
                   style={{
                     display: "block",
                     fontSize: "0.82rem",
                     fontWeight: 700,
                     color: colors.mid,
                     marginBottom: 6,
                   }}
                 >
                   {label}
                 </label>
                 <input
                   type={type}
                   placeholder={ph}
                   value={form[key]}
                   onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                   style={{
                     width: "100%",
                     padding: "12px 16px",
                     border: `2px solid ${colors.light}`,
                     borderRadius: 12,
                     fontFamily: "'Nunito', sans-serif",
                     fontSize: "0.9rem",
                     color: colors.dark,
                     background: colors.cream,
                     outline: "none",
                     boxSizing: "border-box",
                   }}
                 />
               </div>
             ),
           )}
           <div style={{ marginTop: 12 }}>
             <label
               style={{
                 display: "block",
                 fontSize: "0.82rem",
                 fontWeight: 700,
                 color: colors.mid,
                 marginBottom: 6,
               }}
             >
               Program of Interest
             </label>
             <select
               value={form.program}
               onChange={(e) => setForm({ ...form, program: e.target.value })}
               style={{
                 width: "100%",
                 padding: "12px 16px",
                 border: `2px solid ${colors.light}`,
                 borderRadius: 12,
                 fontFamily: "'Nunito', sans-serif",
                 fontSize: "0.9rem",
                 color: colors.dark,
                 background: colors.cream,
                 outline: "none",
               }}
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
             onClick={() => alert("Thank you! We will contact you shortly 🌸")}
             style={{
               width: "100%",
               background: colors.coral,
               color: "white",
               border: "none",
               padding: 14,
               borderRadius: 14,
               fontFamily: "'Baloo 2', cursive",
               fontSize: "1rem",
               fontWeight: 700,
               cursor: "pointer",
               marginTop: "1rem",
               boxShadow: "0 6px 20px rgba(255,107,107,0.3)",
               transition: "transform 0.2s",
             }}
             onMouseEnter={(e) =>
               (e.currentTarget.style.transform = "translateY(-2px)")
             }
             onMouseLeave={(e) =>
               (e.currentTarget.style.transform = "translateY(0)")
             }
           >
             Submit Enquiry →
           </button>
         </div>
       </div>
     </section>
   );
}

export default Admission