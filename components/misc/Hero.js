import Image from "next/image";
import TextContent from "./TextContent";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto mt-[200px] px-3">
      <h1 className="text-4xl font-semi lg:text-7xl text-primary-200">
        Get{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-gradient-100 via-gradient-200 to-gradient-300">
          NEAR
        </span>{" "}
        Certified!
      </h1>
      <TextContent
        style="pt-5 pb-24 text-center"
        text="We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem."
      />
      <div className="flex justify-center w-full">
        <a href="#learning">
          <Image
            src="/svgs/DownArrow.svg"
            width={28}
            height={28}
            alt="Arrow Icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
