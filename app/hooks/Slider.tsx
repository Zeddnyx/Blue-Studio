"use client";
import { useState } from "react";
import Image from "next/image";

interface SliderProps<T> {
  width?: T
  height?: T
  position?: T
  justifyContent?: T
  alignItems?: T
  backgroundSize?: T
  backgroundPosition?: T
}

export default function Slider({ slides }: any) {
  const [current, setCurrent] = useState<number>(0);

  const slideStyle: SliderProps<string> = {
    width: "100%",
    height: "100%",
    position: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  type Arrow = {
    transform: string;
  }

  const arrow: Arrow = { transform: "translate(0, -50%)" }

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-full">
      <button
        className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-500 bg-opacity-500 absolute top-[50%] left-[32px] text-dark0 z-10 cursor-pointer"
        style={arrow}
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-500 bg-opacity-50 absolute top-[50%] right-[32px] text-dark0 z-10 cursor-pointer"
        style={arrow}
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div>
        <Image
          src={slides[current].image}
          height={250}
          width={270}
          alt="main image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
