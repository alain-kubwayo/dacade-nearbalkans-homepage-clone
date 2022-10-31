import Image from "next/image";
import SecondaryBtn from "../buttons/SecondaryBtn";
import Title from "../heading/Title";

const Wallet = () => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between max-w-5xl px-3 mx-auto mt-16 lg:flex-row lg:mt-182px gap-y-4">
      <div className="absolute hidden w-full bg-violet-grad h-480px max-w-480px -top-2/3 -z-40 left-[40%] lg:block filter blur-lg opacity-20"></div>
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
          className="z-50 self-end"
        />
      </div>
    </div>
  );
};
export default Wallet;
