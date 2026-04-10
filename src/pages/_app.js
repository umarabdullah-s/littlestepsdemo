import "../styles/global.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css"; // ✅ ADD THIS

import { useEffect } from "react";
import AOS from "aos";
import WebLayout from "@/layout/WebLayout";
import { ToastContainer } from "react-toastify"; // ✅ ADD THIS

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <WebLayout>
      <Component {...pageProps} />

      {/* ✅ Toast container MUST be inside root */}
      <ToastContainer position="top-right" autoClose={3000} />
    </WebLayout>
  );
};

export default App;