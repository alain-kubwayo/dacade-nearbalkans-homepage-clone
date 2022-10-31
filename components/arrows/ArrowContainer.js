import Image from "next/image";

const ArrowContainer = ({ style, src }) => {
  return (
    <div
      className={`flex justify-center w-[1280px] max-w-[80%] mx-auto ${style}`}
    >
      <Image src={src} alt="Arrow" width={164} height={132} />
    </div>
  );
};

export default ArrowContainer;
