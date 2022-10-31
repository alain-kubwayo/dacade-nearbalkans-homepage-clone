import Image from "next/image";

const icons = [
  {
    src: "/svgs/socials/twitter.svg",
    alt: "Twitter",
    width: 29,
    height: 24,
    id: 1,
  },
  {
    src: "/svgs/socials/discord.svg",
    alt: "Discord",
    width: 28,
    height: 22,
    id: 2,
  },
  {
    src: "/svgs/socials/telegram.svg",
    alt: "Telegram",
    width: 27,
    height: 20,
    id: 3,
  },
  {
    src: "/svgs/socials/facebook.svg",
    alt: "Facebook",
    width: 15,
    height: 28,
    id: 4,
  },
  {
    src: "/svgs/socials/facebook.svg",
    alt: "Facebook",
    width: 15,
    height: 28,
    id: 5,
  },
  {
    src: "/svgs/socials/linkedin.svg",
    alt: "LinkedIn",
    width: 25,
    height: 24,
    id: 6,
  },
  {
    src: "/svgs/socials/instagram.svg",
    alt: "Instagram",
    width: 28,
    height: 28,
    id: 7,
  },
  {
    src: "/svgs/socials/medium.svg",
    alt: "Medium",
    width: 32,
    height: 18,
    id: 8,
  },
];

const Socials = () => {
  return (
    <div className="px-0 lg:px-20 lg:flex pt-39px">
      <div className="hidden lg:flex">
        <Image src="/svgs/FooterLogo.svg" width={119} height={38} alt="Logo" />
      </div>
      <div className="border-gray-200 border-solid border-r-2 mx-[61px] hidden lg:block"></div>
      <div className="flex items-center justify-between lg:ml-auto grow">
        {icons.map((icon) => (
          <div className="lg:px-3 px-2 mt-[40px] lg:mt-0" key={icon.id}>
            <Image
              src={icon.src}
              width={icon.width}
              height={icon.height}
              alt={icon.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
