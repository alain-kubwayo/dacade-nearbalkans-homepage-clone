import Image from "next/image";
import Title from "./heading/Title";

const Certificate = () => {
  return (
    <div className="max-w-5xl px-3 mx-auto mt-20 space-y-8 text-center lg:space-y-20 lg:mt-8">
      <div className="space-y-2 lg:space-y-0">
        <Title text="Claim NEAR certificate" />
        <p className="text-lg text-primary-100">
          Upon course completion, receive the NEAR dev 101{" "}
          <br className="hidden lg:flex" /> certificate as an NFT on your NEAR
          wallet.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/Certificate.png"
          width={644}
          height={362.25}
          alt="Certificate"
        />
      </div>
    </div>
  );
};

export default Certificate;
