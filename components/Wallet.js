import Image from "next/image";
import SecondaryBtn from "./buttons/SecondaryBtn";
import Title from "./heading/Title";

const Wallet = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-between items-center w-[1280px] max-w-[90%] lg:max-w-[60%] mx-auto mt-16 lg:mt-[182px] gap-y-4">
      <div className="text-center lg:text-left">
        <Title text="Open NEAR wallet" />
        <p className="text-primary-100 text-base lg:text-lg pt-1.5 leading-tight">
          Opening a NEAR wallet is the first step and{" "}
          <br className="hidden lg:block" /> essential part of joining the NEAR
          community <br className="hidden lg:block" /> as well as starting this
          course.
        </p>
        <SecondaryBtn text="Create wallet" style="mt-8" />
      </div>
      <div>
        <Image
          src="/NearLogo.png"
          width={296}
          height={296}
          alt="Some Logo"
          className="self-end"
        />
      </div>
    </div>
  );
};
export default Wallet;
