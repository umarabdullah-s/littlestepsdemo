import "../styles/global.css";
import "aos/dist/aos.css"; // ✅ add this

import { useEffect } from "react";
import AOS from "aos";
import WebLayout from "@/layout/WebLayout";

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
    </WebLayout>
  );
};

export default App;
