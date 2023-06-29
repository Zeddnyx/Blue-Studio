import React from "react";
import Star from "@/public/Burst-star.svg";
import Image from "next/image";
import { motion as m } from "framer-motion";

const DIRECT_WA = `https://wa.me/+60126582515`;
export default function Contact() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="service"
      className="contact">
      <div className="hidden md:block">
        <Image src={Star} width={100} height={100} alt="star" />
        <Image src={Star} width={50} height={50} alt="star" />
      </div>
      <div className="text-center flex justify-center flex-col gap-5 text-bright0">
        <h1>Let's Create Something Extraordinary Together</h1>
        <p>
          We are excited to hear from you and embark on a collaborative journey
          that bring your visions life
        </p>
        <div className="flex justify-center">
          <button className="btn-black"><a href={DIRECT_WA}>Contact</a></button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image src={Star} width={100} height={100} alt="star" />
        <Image src={Star} width={50} height={50} alt="star" />
      </div>
    </m.section>
  );
}
