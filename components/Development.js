import Image from "next/image";
import SecondaryBtn from "./buttons/SecondaryBtn";
import Title from "./heading/Title";

const Development = () => {
  return (
    <div className="flex items-center justify-between lg:mx-52 flex-col-reverse lg:flex-row mt-[168px] lg:bg-gradient-to-l -z-10 from-[#E9FAFB] via-[#effcfc] to-[#ffffff]">
      <div className="mt-4 space-y-4 lg:mt-0">
        <Title text="NEAR Development 101" />
        <div className="flex justify-center w-full lg:justify-start ">
          <SecondaryBtn text="Start The Course" style="shadow-md" />
        </div>
      </div>
      <div>
        <Image
          src="/Development.png"
          alt="Image"
          width={400}
          height={400}
          className="hidden lg:block"
        />
        <Image
          src="/Development.png"
          alt="Image"
          width={180}
          height={180}
          className="block lg:hidden"
        />
      </div>
    </div>
  );
};

export default Development;
