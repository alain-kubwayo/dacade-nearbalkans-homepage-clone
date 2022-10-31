import Image from "next/image";

const ListItem = ({ src, text }) => {
  return (
    <li className="flex flex-col items-center mt-6 space-x-3 space-y-10px lg:flex-row lg:items-end">
      <Image
        src={src}
        width={32}
        height={32}
        alt="Icon"
        className="hidden lg:flex"
      />
      <Image
        src={src}
        width={18}
        height={18}
        alt="Icon"
        className="flex lg:hidden"
      />
      <p className="text-base lg:text-lg text-primary-100">{text}</p>
    </li>
  );
};

export default ListItem;
