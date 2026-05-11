import "../styles/global.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import WebLayout from "@/layout/WebLayout";
import { ToastContainer } from "react-toastify";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Alo Little Steps is a premium Montessori play school in Nagercoil offering daycare, play school, and preschool programs with smart learning and caring teachers."
        />

        <meta
          name="keywords"
          content="best play school in nagercoil, best preschool in vettunimadam, best nursery school near derik junction, playschool in vettunimadam, daycare near vettunimadam, best montessori school in vettunimadam, montessori school near collector office, preschool near derik junction, play school near collector office, daycare near collector office, nursery school near vettunimadam, daycare near collector office, best preschool near derik junction, best daycare in derik junction"
        />

        <link rel="canonical" href="https://alolittlesteps.com/" />

        <meta name="theme-color" content="#f8b400" />

        <link rel="icon" href="/logoicon.png" />
      </Head>

      <WebLayout>
        <Component {...pageProps} />

        <ToastContainer position="top-right" autoClose={3000} />
      </WebLayout>
    </>
  );
};

export default App;
