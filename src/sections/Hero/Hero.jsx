import React from 'react'
import colors from '../../layout/utils/color'

const Hero = () => {
   return (
     <section
       id="hero"
       style={{
         minHeight: "100vh",
         background:
           "linear-gradient(135deg, #FFF5E6 0%, #E8F8F5 50%, #F3E8FF 100%)",
         display: "flex",
         alignItems: "center",
         padding: "100px 5% 60px",
         position: "relative",
         overflow: "hidden",
         fontFamily: "'Nunito', sans-serif",
       }}
     >
       {/* BG Shapes */}
       {[
         {
           w: 300,
           h: 300,
           bg: "rgba(255,107,107,0.1)",
           top: -80,
           right: -60,
           delay: 0,
         },
         {
           w: 200,
           h: 200,
           bg: "rgba(107,203,119,0.12)",
           bottom: 60,
           left: -40,
           delay: 2,
         },
         {
           w: 150,
           h: 150,
           bg: "rgba(255,217,61,0.15)",
           top: "40%",
           right: "20%",
           delay: 4,
         },
         {
           w: 100,
           h: 100,
           bg: "rgba(78,205,196,0.15)",
           top: "20%",
           left: "30%",
           delay: 1,
         },
       ].map((s, i) => (
         <div
           key={i}
           style={{
             position: "absolute",
             borderRadius: "50%",
             width: s.w,
             height: s.h,
             background: s.bg,
             top: s.top,
             bottom: s.bottom,
             right: s.right,
             left: s.left,
             animation: `float 6s ${s.delay}s ease-in-out infinite`,
           }}
         />
       ))}

       <div
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-delay="200"
         style={{ maxWidth: 580, position: "relative", zIndex: 2 }}
       >
         <div
           data-aos="zoom-in" // ✅ animation type
           data-aos-delay="100" // ✅ slight delay
           data-aos-duration="800" // ✅ smooth speed
           style={{
             display: "inline-flex",
             alignItems: "center",
             gap: 8,
             background: "white",
             border: `2px solid ${colors.sun}`,
             borderRadius: 50,
             padding: "6px 16px",
             fontSize: "0.82rem",
             fontWeight: 700,
             color: colors.peach,
             marginBottom: "1.5rem",
           }}
         >
           ⭐ Admissions Open 2025–26
         </div>

         <h1
           data-aos="fade-up" // ✅ animation
           data-aos-delay="200" // ✅ slight delay after badge
           data-aos-duration="1000" // ✅ smooth timing
           style={{
             fontFamily: "'Baloo 2', cursive",
             fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
             fontWeight: 800,
             lineHeight: 1.15,
             color: colors.dark,
             margin: 0,
           }}
         >
           Where Little Minds <span style={{ color: colors.coral }}>Bloom</span>{" "}
           &amp; <span style={{ color: colors.mint }}>Grow</span>
         </h1>

         <p
           data-aos="fade-up" // ✅ same animation as heading
           data-aos-delay="300" // ✅ comes after heading
           data-aos-duration="1000"
           style={{
             fontSize: "1.05rem",
             color: colors.mid,
             lineHeight: 1.7,
             margin: "1.2rem 0 2rem",
           }}
         >
           A nurturing Montessori-inspired play school where every child
           discovers the joy of learning through play, creativity, and
           exploration.
         </p>

         <div
           data-aos="zoom-in" // ✅ nice pop effect for CTA
           data-aos-delay="400" // ✅ comes after paragraph
           data-aos-duration="1000"
           style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
         >
           <button
             onClick={() =>
               document
                 .getElementById("admission")
                 ?.scrollIntoView({ behavior: "smooth" })
             }
             style={{
               background: colors.coral,
               color: "white",
               padding: "14px 30px",
               borderRadius: 50,
               fontWeight: 700,
               fontSize: "1rem",
               border: "none",
               cursor: "pointer",
               boxShadow: "0 6px 20px rgba(255,107,107,0.35)",
               fontFamily: "'Nunito', sans-serif",
               transition: "transform 0.2s",
             }}
             onMouseEnter={(e) =>
               (e.currentTarget.style.transform = "translateY(-3px)")
             }
             onMouseLeave={(e) =>
               (e.currentTarget.style.transform = "translateY(0)")
             }
           >
             🎒 Apply for Admission
           </button>

           <button
             onClick={() =>
               document
                 .getElementById("programs")
                 ?.scrollIntoView({ behavior: "smooth" })
             }
             style={{
               background: "white",
               color: colors.dark,
               padding: "14px 30px",
               borderRadius: 50,
               fontWeight: 700,
               fontSize: "1rem",
               border: `2px solid ${colors.light}`,
               cursor: "pointer",
               fontFamily: "'Nunito', sans-serif",
               transition: "transform 0.2s",
             }}
             onMouseEnter={(e) =>
               (e.currentTarget.style.transform = "translateY(-3px)")
             }
             onMouseLeave={(e) =>
               (e.currentTarget.style.transform = "translateY(0)")
             }
           >
             Explore Programs →
           </button>
         </div>

         <div
           data-aos="fade-up" // ✅ smooth entry
           
          
           style={{ display: "flex", gap: "2rem", marginTop: "2.5rem" }}
         >
           {[
             ["500+", "Happy Children"],
             ["15+", "Years of Excellence"],
             ["40+", "Expert Educators"],
           ].map(([num, label], i) => (
             <div
               key={label}
               data-aos="fade-up" // ✅ subtle stagger
               data-aos-delay={600 + i * 150} // 👈 one-by-one effect
               style={{ textAlign: "center" }}
             >
               <div
                 style={{
                   fontFamily: "'Baloo 2', cursive",
                   fontSize: "1.8rem",
                   fontWeight: 800,
                   color: colors.dark,
                   lineHeight: 1,
                 }}
               >
                 {num}
               </div>

               <div
                 style={{
                   fontSize: "0.78rem",
                   color: colors.mid,
                   fontWeight: 600,
                 }}
               >
                 {label}
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* Hero Visual Card */}
       <div
         style={{
           position: "absolute",
           right: "5%",
           top: "50%",
           transform: "translateY(-50%)",
           width: "min(420px, 40%)",
         }}
       >
         <div
           style={{
             background: "white",
             borderRadius: 28,
             padding: 28,
             boxShadow: "0 20px 60px rgba(45,42,74,0.12)",
             position: "relative",
           }}
         >
           <div
             style={{
               display: "grid",
               gridTemplateColumns: "repeat(4, 1fr)",
               gap: 12,
               marginBottom: 20,
             }}
           >
             {[
               ["🎨", "#FFF0F0"],
               ["📚", "#F0FFF4"],
               ["🎵", "#FFF8E0"],
               ["🌿", "#E8F8FF"],
               ["🔢", "#F8E8FF"],
               ["🌍", "#FFF0F0"],
               ["🧩", "#E8FFF0"],
               ["⭐", "#FFF8E0"],
             ].map(([e, bg], i) => (
               <div
                 key={i}
                 style={{
                   background: bg,
                   borderRadius: 16,
                   aspectRatio: 1,
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "center",
                   fontSize: "1.8rem",
                   cursor: "default",
                   transition: "transform 0.2s",
                 }}
                 onMouseEnter={(ev) =>
                   (ev.currentTarget.style.transform =
                     "scale(1.1) rotate(5deg)")
                 }
                 onMouseLeave={(ev) =>
                   (ev.currentTarget.style.transform = "scale(1) rotate(0deg)")
                 }
               >
                 {e}
               </div>
             ))}
           </div>
           <div
             style={{
               fontFamily: "'Baloo 2', cursive",
               fontWeight: 700,
               fontSize: "1.1rem",
               color: colors.dark,
               textAlign: "center",
             }}
           >
             Learning Through Play
           </div>
           <div
             style={{
               textAlign: "center",
               color: colors.mid,
               fontSize: "0.85rem",
             }}
           >
             Art · Music · Nature · Discovery
           </div>
         </div>
         {[
           {
             text: "🌟 Top Rated School",
             color: colors.mint,
             top: -20,
             left: -30,
           },
           {
             text: "🏆 Award-Winning Curriculum",
             color: colors.lavender,
             bottom: -20,
             right: -20,
           },
         ].map((b, i) => (
           <div
             key={i}
             style={{
               position: "absolute",
               background: "white",
               borderRadius: 16,
               padding: "10px 16px",
               boxShadow: "0 8px 24px rgba(45,42,74,0.12)",
               display: "flex",
               alignItems: "center",
               gap: 8,
               fontWeight: 700,
               fontSize: "0.82rem",
               whiteSpace: "nowrap",
               color: b.color,
               top: b.top,
               bottom: b.bottom,
               left: b.left,
               right: b.right,
               fontFamily: "'Nunito', sans-serif",
               animation: `float 5s ${i * 2}s ease-in-out infinite`,
             }}
           >
             {b.text}
           </div>
         ))}
       </div>
     </section>
   );
}

export default Hero