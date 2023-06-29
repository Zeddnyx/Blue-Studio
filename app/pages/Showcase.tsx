import React from "react";
import Image from "next/image";
import Start from "@/public/Burst-star.svg";
import { motion as m } from "framer-motion";
import { showcase } from "@/app/utils/data";
import Slider from "@/app/hooks/Slider";

export default function Showcase() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: false, amount: 0.5 }}
      id="portofolio"
      className="showcase"
    >
      <div className="flex justify-between">
        <div className="w-[496px]">
          <h3>A Showcase of Our Illustration and Webcomics Masterpieces</h3>
        </div>
        <div className="hidden md:block">
          <Image src={Start} height={100} width={100} alt="start" />
          <Image src={Start} height={50} width={50} alt="start" />
        </div>
      </div>
      <m.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="main-showcase">
          {showcase.map((item, id) => (
            <div key={id} className={`group relative`}>
              <Image
                className={`card-hover ${item.margin}`}
                src={item.image}
                width={400}
                height={400}
                alt={item.alt}
              />
              <div
                className={`absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-mainPurple opacity-0 group-hover:h-full group-hover:opacity-80 duration-500 ${item.margin}`}>
                <h1 className="text-2xl text-white">{item.alt}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <Slider slides={showcase} />
        </div>
      </m.div>
    </m.section>
  );
}
