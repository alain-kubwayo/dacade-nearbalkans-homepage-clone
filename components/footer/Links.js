import Link from "next/link";
import FooterLink from "./FooterLink";

const items = [
  {
    text: "NEAR Balkans 2022",
    id: 1,
  },
  {
    text: "info@nearbalkans.org",
    id: 2,
  },
  {
    text: "Privacy Policy",
    id: 3,
  },
  {
    text: "Cookie Policy",
    id: 4,
  },
  {
    text: "Terms & Conditions",
    id: 5,
  },
];

const Links = () => {
  return (
    <div className="lg:flex justify-center gap-4 pt-39px">
      {items.map((item) => (
        <Link href="#" key={item.id}>
          <FooterLink text={item.text} />
        </Link>
      ))}
    </div>
  );
};

export default Links;
