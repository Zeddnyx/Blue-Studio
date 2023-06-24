"use client"
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";
import { mont } from "@/app/utils/font";
import Showcase from "./pages/Showcase";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


export default function Home() {
  return (
    <div className={mont.className}>
      <Navbar />
      <Homepage />
      <Showcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
