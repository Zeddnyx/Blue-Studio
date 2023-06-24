import { navbar } from "@/app/utils/data";
import Image from "next/image";
import Logo from "@/public/logo-dark.svg";
import { motion as m } from "framer-motion";

const NO_WA = 60126581215;
const DIRECT_WA = `https://api.whatsapp.com/send?phone=${NO_WA}&text=Hi,&type=phone_number&app_absent=0`;

export default function Navbar() {
  return (
    <m.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="parent-nav"
    >
      <div>
        <a href="#home">
          <Image src={Logo} width={70} height={70} alt="logo" />
        </a>
      </div>
      <ul className="ul-desktop">
        {navbar.map((item, index) => (
          <li key={index}>
            <a href={`#${item.link}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <button>
        <a href={DIRECT_WA}>Contact Us</a>
      </button>
    </m.nav>
  );
}
