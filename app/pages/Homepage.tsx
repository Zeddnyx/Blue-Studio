import React from "react";
import { motion as m } from "framer-motion";

export default function Homepage() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="home"
      className="flex px-40 mt-60 justify-between"
    >
      <div className="text-homepage">
        <h4>Welcome to Blue Studio</h4>
        <h1>Unleashing the magic of illustration and animation</h1>
        <p className="greetings">
          Our team of artist is passionate about delivering visually stunning
          and memorable experiences. With our expertise, we bring your
          imagination to life, immersing you in captivating worlds.
        </p>
        <button className="btn-homepage">Get Inquiries</button>
      </div>
      <div>
        <div className="bg-mainPurple h-[587px] w-[441px] shadow-box"></div>
      </div>
    </m.section>
  );
}
