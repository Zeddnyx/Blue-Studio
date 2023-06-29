import React from "react";
import Logo from "@/public/logo-bright.png";
import Image from "next/image";
import Patreon from "@/public/patreon.png";
import { navbar } from "@/app/utils/data";

export default function Footer() {
  return (
    <footer>
      <div className="w-full md:place-self-center xl:pr-20">
        <div className="flex flex-col w-full gap-5 ">
          <div>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </div>
          <p className="w-full text-bright0">
            Discover a world of artistic wonders at Blue Studio, where we
            breathe life into illustrations and animations
          </p>
        </div>
      </div>

      <div className="w-full h-full md:place-self-end">
        <div className="flex flex-col gap-10 justify-between h-full w-full">
          <ul className="flex gap-10 pt-10 lg:justify-center">
            {navbar.slice(1, 4).map((item, id) => (
              <li key={id} className="flex flex-nowrap gap-2">
                <span>
                  <h6>
                    <a href={`#${item.link}`}>{item.title}</a>
                  </h6>
                  <p className="text-gray-500">{item.child}</p>
                  <p className="text-gray-500">{item?.child2}</p>
                  <p className="text-gray-500">{item?.child3}</p>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 lg:text-center">
            <a href="https://deborahtech.xyz">
              Blue Studio 2023. All rights reserved. Made by www.deborahtech.xyz
            </a>
          </p>
        </div>
      </div>

      <button className="w-full h-16 flex justify-center lg:place-self-center">
        <a
          className="flex justify-around gap-3"
          href="https://www.patreon.com/user?u=95613130"
        >
          <p>Support Me on Patreon</p>
          <Image src={Patreon} width={30} height={30} alt="patreon" />
        </a>
      </button>
    </footer>
  );
}
