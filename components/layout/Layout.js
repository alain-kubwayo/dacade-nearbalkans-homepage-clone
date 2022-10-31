import Footer from "./Footer";
import Navigation from "../sections/Navigation";

const Layout = ({ children, handleOpen }) => {
  return (
    <>
      <Navigation handleOpen={handleOpen} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
