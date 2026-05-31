import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <div className="pb-32 pt-8 relative">
      <img
        src="/images/bg-pattern-intro-desktop.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src="/images/bg-pattern-intro-mobile.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      <div className="relative text-center px-6 pt-20 pb-8 max-w-2xl mx-auto">
        <FadeIn direction="down" delay={0}>
          <h1 className="font-overpass font-light text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
            A modern publishing platform
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="font-overpass font-light text-white/80 text-lg mb-10">
            Grow your audience and build your online brand
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-red-500-blogr hover:bg-red-400-blogr hover:text-white font-ubuntu font-bold px-10 py-3 rounded-full border-2 border-white transition-all duration-200"
            >
              Start for Free
            </a>
            <a
              href="#"
              className="text-white border-2 border-white hover:bg-white hover:text-red-500-blogr font-ubuntu font-bold px-10 py-3 rounded-full transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
