import React from "react";
import { motion as m } from "framer-motion";
import { showcase } from "@/app/utils/data";
import Image from "next/image";
import MainImage from "@/public/mainImage.png";

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
      <m.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-homepage"
      >
        <h4>Welcome to Blue Studio</h4>
        <h1>Unleashing the magic of illustration and animation</h1>
        <p className="greetings">
          Our team of artist is passionate about delivering visually stunning
          and memorable experiences. With our expertise, we bring your
          imagination to life, immersing you in captivating worlds.
        </p>
        <button className="btn-homepage">
          <a href="https://form.jotform.com/231741486199466">Get Inquiries</a>
        </button>
      </m.div>
      <m.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="md:shadow-box"
      >
        <Image
          className="md:hidden"
          src={MainImage}
          width={500}
          height={320}
          alt="main image"
        />
        <Image
          className="hidden md:block"
          src={MainImage}
          width={350}
          height={320}
          alt="main image"
        />
      </m.div>
    </m.section>
  );
}
