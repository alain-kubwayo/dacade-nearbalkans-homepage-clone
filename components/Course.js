import Image from "next/image";
import Title from "./heading/Title";
import ListItem from "./list/ListItem";

const courseDetails = [
  {
    src: "/CourseIcon-1.png",
    text: "Essential NEAR concepts",
  },
  {
    src: "/CourseIcon-2.png",
    text: "How to write smart contracts on NEAR",
  },
  {
    src: "/CourseIcon-3.png",
    text: "How to build dapps on the NEAR blockchain",
  },
];

const Course = () => {
  return (
    <div className="relative z-0 grid max-w-5xl mx-auto mt-16 lg:grid-cols-2 lg:mt-2 gap-y-4">
      <div className="absolute bg-green-grad filter blur-lg opacity-20 target-logo top-[38%] right-[70%] h-480px w-480px z-0 hidden lg:block"></div>
      <div className="flex items-center justify-center lg:justify-start">
        <Image
          src="/svgs/Focus.svg"
          width={296}
          height={296}
          alt="Focus Icon"
        />
      </div>
      <div className="text-center lg:text-left">
        <Title text="Complete the course" />
        <p className="mt-6 text-lg text-primary-100">
          In three simple modules, learn:
        </p>
        <ul>
          {courseDetails.map((detail, i) => (
            <ListItem src={detail.src} text={detail.text} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Course;
