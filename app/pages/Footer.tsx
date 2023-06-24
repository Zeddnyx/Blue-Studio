import React from "react";
import Logo from "@/public/logo-bright.png";
import Image from "next/image";
import Patreon from "@/public/patreon.png";
import { navbar } from "@/app/utils/data";

export default function Footer() {
  return (
    <footer>
      <div className="w-full">
        <div className="flex flex-col w-full gap-5 w-full">
          <div>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </div>
          <p className="w-96 text-bright0">
            Discover a world of artistic wonders at Blue Studio, where we breathe
            life into illustrations and animations
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-10 justify-between h-full w-full">
          <ul className="flex gap-10 pt-10 lg:justify-center">
            {navbar.slice(1, 4).map((item, id) => (
              <li key={id} className="flex flex-nowrap gap-2">
                <h6>
                  <a href={`#${item.link}`}>{item.title}</a>
                </h6>
                {/* <p className="text-gray-500">{item.child}</p> */}
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

      <div className="w-full">
        <div className="w-full lg:w-80 flex lg:justify-between">
          <div className="hidden xl:flex"></div>
          <button className="w-[250px] flex justify-around">
            <a className="w-[250px] flex justify-around" href="https://www.patreon.com/user?u=95613130">
              <p>Support Me on Patreon</p>
              <Image src={Patreon} width={30} height={30} alt="patreon" />
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}
