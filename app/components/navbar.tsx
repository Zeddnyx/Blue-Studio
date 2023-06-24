import { navbar } from "@/app/utils/data";
import Image from "next/image";
import Logo from "@/public/logo-dark.svg";
import { motion as m } from "framer-motion";
import { useState } from "react";

const DIRECT_WA = `https://wa.me/+60126582515`;

export default function Navbar() {
  const [menu, setMenu] = useState<boolean>(false);
  const handleMenu = () => void setMenu(!menu);
  return (
    <m.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="parent-nav"
    >
      <div className="z-50">
        <a href="#home">
          <Image src={Logo} width={70} height={70} alt="logo" />
        </a>
      </div>
      <ul className="ul-desktop">
        {navbar.map((item, index) => (
          <li key={index}>
            <p>
              <a href={`#${item.link}`}>{item.title}</a>
            </p>
          </li>
        ))}
      </ul>
      <div
        className={menu ? "text-bright0 menu" : "text-dark0 menu"}
        onClick={handleMenu}
      >
        {menu ? "Close" : "Menu"}
      </div>

      <ul
        onClick={handleMenu}
        className={`${!menu ? "ul-hidden" : `left-0`} ul-mobile`}
      >
        {navbar.map((item, index) => (
          <li key={index}>
            <a href={`#${item.link}`}>{item.title}</a>
          </li>
        ))}
      <button className="flex">
        <a href={DIRECT_WA}>Contact Us</a>
      </button>
      </ul>
      <button className="hidden md:flex">
        <a href={DIRECT_WA}>Contact Us</a>
      </button>
    </m.nav>
  );
}
