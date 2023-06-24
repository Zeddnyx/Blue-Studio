import React from "react";
import { motion as m } from "framer-motion";

export default function About() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="about-us"
      className="about">
      <m.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1>Unlocking the Power of Artistic Expression</h1>
      </m.div>
      <m.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <p>
          At Blue Studio, we believe in the power of artistic expression to
          evoke emotions, inspire change, and tell compelling stories. Our team
          of passionate illustrators and animators is driven by a shared love
          for their craft, constantly pushing the boundaries of creativity to
          deliver exceptional results.
        </p>
      </m.div>
    </m.section>
  );
}
