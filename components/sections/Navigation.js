import Navbar from "../layout/Navbar";

const Navigation = ({ handleOpen }) => {
  return (
    <nav className="bg-white fixed top-0 w-full z-[1500]">
      <Navbar handleOpen={handleOpen} />
    </nav>
  );
};

export default Navigation;
