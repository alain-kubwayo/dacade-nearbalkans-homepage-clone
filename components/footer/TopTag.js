import Link from "next/link";

const TopTag = () => {
  return (
    <p className="text-center">
      Visit{" "}
      <span className="font-extrabold cursor-pointer text-black">
        <Link href="#">nearbalkans.org</Link>
      </span>{" "}
      and make sure to follow us on our social and community channels!
    </p>
  );
};

export default TopTag;
