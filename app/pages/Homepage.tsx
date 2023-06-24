import React from "react";
import { motion as m } from "framer-motion";
import { showcase } from "@/app/utils/data";
import Image from "next/image";

export default function Homepage() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="home"
      className="homepage"
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
        <div className="shadow-box">
          <Image
            src={showcase[0].image}
            width={400}
            height={420}
            alt="main image"
          />
        </div>
      </div>
    </m.section>
  );
}
