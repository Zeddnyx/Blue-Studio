import React from "react";
import Logo from "@/public/logo-dark.svg";
import Image from "next/image";
import Patreon from "@/public/logo-dark.svg";
import { navbar } from "@/app/utils/data";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center">
        <div>
          <div>
            <Image src={Logo} width={50} height={50} alt="logo" />
          </div>
          <p className="w-96 text-bright0">
            Discover a world of artistic wonders at Blue Studio, where we
            breathe life into illuastrations and animations
          </p>
        </div>
        <div className="w-80 lg:hidden">
          <button>
            <Image src={Patreon} width={100} height={50} alt="patreon" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-between h-full">
        <ul className="flex gap-10 pt-10">
          {navbar.slice(1, 4).map((item, id) => (
            <li key={id} className="grid gap-2">
              <h6>
                <a href={`#${item.link}`}>{item.title}</a>
              </h6>
              <p className="text-gray-500">{item.child}</p>
            </li>
          ))}
        </ul>
        <p className="text-gray-500">
          <a href="www.deborahtech.xyz">
            Blue Studio 2023. All rights reserved. Made by www.deborahtech.xyz
          </a>
        </p>
      </div>
      <div className="w-80 hidden lg:flex justify-between ">
      <div>
        
      </div>
        <button>
          <Image src={Patreon} width={100} height={50} alt="patreon" />
        </button>
      </div>
    </footer>
  );
}
