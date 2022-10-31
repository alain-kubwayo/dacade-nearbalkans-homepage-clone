import Links from "../footer/Links";
import Socials from "../footer/Socials";
import TopTag from "../footer/TopTag";
import BottomTag from "../footer/BottomTag";

const Footer = () => {
  return (
    <footer className="py-24 w-[1280px] max-w-[90%] lg:max-w-[60%] mx-auto text-lg text-primary-100">
      <TopTag />
      <Socials />
      <Links />
      <BottomTag />
    </footer>
  );
};

export default Footer;
