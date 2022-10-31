import Hero from "../Hero";

const Certification = () => {
  return (
    <section className="relative pt-12 text-center bg-white lg:pt-32">
      <div className="absolute top-0 z-10 grid w-full grid-cols-2 m-auto md:hidden gap-7">
        <div className="w-3/4 m-auto bg-hero-background-left h-hero-bar"></div>
        <div className="w-3/4 m-auto bg-hero-background-right h-hero-bar"></div>
      </div>
      <Hero />
    </section>
  );
};

export default Certification;
