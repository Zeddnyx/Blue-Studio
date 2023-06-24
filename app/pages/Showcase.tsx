import React from "react";
import Image from "next/image";
import Start from "@/public/Burst-star.svg";
import { motion as m } from "framer-motion";
import { showcase } from "@/app/utils/data";

export default function Showcase() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="portofolio"
      className="showcase">
      <div className="flex justify-between">
        <div className="w-[496px]">
          <h3>A Showcase of Our Illustration and Animation Masterpieces</h3>
        </div>
        <div>
          <Image src={Start} height={100} width={100} alt="start" />
          <Image src={Start} height={50} width={50} alt="start" />
        </div>
      </div>
      <div className="main-showcase">
        {showcase.map((item, id) => <div key={id}>
          <Image className="card-hover" src={item.image} width={400} height={400} alt={item.alt} />
        </div>)}
      </div>
    </m.section>
  );
}
