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
