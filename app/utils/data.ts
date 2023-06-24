import MainImg from "@/public/mainImage.png"
import SecondImg from "@/public/secondImage.png"

interface DataTypes<T> {
  title: T;
  child: T;
  link: T;
}

export const navbar: DataTypes<string>[] = [
  {
    title: "Home",
    child: "Custome illustration",
    link: "home"
  },
  {
    title: "Services",
    child: "Custome illustration",
    link: "service"
  },
  {
    title: "Portfolio",
    child: "Custome illustration",
    link: "portofolio"
  },
  {
    title: "About Us",
    child: "Our Team",
    link: "about-us"
  },
];

export const showcase: any[] = [
  {
    image: MainImg,
    alt: "main image"
  },
  {
    image: SecondImg,
    alt: "secondImage"
  },
  {
    image: MainImg,
    alt: "main image"
  }
]
