"use client";
import { useState, PropsWithChildren } from "react";
import Image from "next/image";

export default function Slider({ slides }: PropsWithChildren) {
  const [current, setCurrent] = useState(0);

  const slideStyle = {
    width: "100%",
    height: "100%",
    position: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "42px",
    color: "#111",
    zIndex: "1",
    cursor: "pointer",
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "42px",
    color: "#111",
    zIndex: "1",
    cursor: "pointer",
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full h-full">
      <button
        className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-500 bg-opacity-50"
        style={leftArrow}
        onClick={previousSlide}
      >
        &lt;
      </button>
      <button
        className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-500 bg-opacity-50"
        style={rightArrow}
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
