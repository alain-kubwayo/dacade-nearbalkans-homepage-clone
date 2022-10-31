import Links from "../footer/Links";
import Socials from "../footer/Socials";
import TopTag from "../footer/TopTag";
import BottomTag from "../footer/BottomTag";

const Footer = () => {
  return (
    <footer className="max-w-5xl py-24 mx-auto text-lg text-primary-100">
      <TopTag />
      <Socials />
      <Links />
      <BottomTag />
    </footer>
  );
};

export default Footer;
