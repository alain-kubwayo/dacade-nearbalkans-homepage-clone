import Image from "next/image";
import Link from "next/link";

const Navbar = ({ handleOpen }) => {
  return (
    <nav className="max-w-5xl mx-auto py-6.5xl px-3">
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="flex items-center">
            <span>
              <Image
                src="/svgs/DacadeLogo.svg"
                width={39}
                height={30}
                alt="Dacade Logo"
                className="hidden lg:block"
              />
              <Image
                src="/svgs/DacadeLogo.svg"
                width={30}
                height={30}
                alt="Dacade Logo"
                className="block lg:hidden"
              />
            </span>
            <span className="hidden ml-2 text-lg font-bold md:block text-zinc-700">
              Dacade
            </span>
          </div>
          <div className="border-gray-200 border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
          <Link href="https://nearbalkans.org">
            <div className="hidden lg:block">
              <Image
                src="/svgs/NavbarIcon-1.svg"
                width={120}
                height={38}
                alt="Icon"
              />
            </div>
            <div className="lg:hidden">
              <Image
                src="/svgs/NavbarIcon-2.svg"
                width={29}
                height={29}
                alt="Icon"
              />
            </div>
          </Link>
        </div>
        <div className="flex text-lg">
          <button
            className="hidden px-5 py-3 rounded-full lg:block"
            onClick={handleOpen}
          >
            Start The Course
          </button>
          <Link href="#">
            <button className="px-5 py-3 ml-12 leading-4 text-white rounded-full bg-zinc-700">
              Create wallet
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
