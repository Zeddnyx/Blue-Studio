import MainImg from "@/public/mainImage.png"
import Main1 from "@/public/main1.png"
import Main2 from "@/public/main2.png"
import Main3 from "@/public/main3.png"
import Main4 from "@/public/main4.png"

interface DataTypes<T> {
  title: T;
  child: T;
  child2?: T;
  child3?: T;
  link: T;
}

export const navbar: DataTypes<string>[] = [
  {
    title: "Home",
    child: "Custom illustration",
    link: "home"
  },
  {
    title: "Services",
    child: "Custom illustration",
    child2: "Comic Strips",
    child3: "Potrait Art",
    link: "service"
  },
  {
    title: "Portfolio",
    child: "Custom illustration",
    child2: "Comic Strips",
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
    image: Main1,
    alt: "Elina",
    margin: "mt-5"
  },
  {
    image: Main2,
    alt: "Jane",
    margin: "mb-5"
  },
  {
    image: Main3,
    alt: "Eiden",
    margin: "mt-5"
  },
  {
    image: Main4,
    alt: "Akira",
    margin: "mb-5"
  }
]
