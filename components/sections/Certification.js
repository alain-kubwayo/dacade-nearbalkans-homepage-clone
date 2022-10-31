import Hero from "../Hero";

const Certification = () => {
  return (
    <section className="relative pt-12 text-center bg-white lg:pt-32">
      <div className="absolute top-0 z-10 grid w-full grid-cols-2 m-auto md:hidden gap-7">
        <div className="bg-hero-background-left h-[18.75rem] m-auto w-3/4"></div>
        <div className="bg-hero-background-right h-[18.75rem] m-auto w-3/4"></div>
      </div>
      <Hero />
    </section>
  );
};

export default Certification;
