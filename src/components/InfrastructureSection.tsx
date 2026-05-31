import FadeIn from "./FadeIn";

const InfrastructureSection = () => {
  return (
    <>
      {/* ── DESKTOP VERSION ── */}
      <div className="relative my-24 hidden md:block">
        <div className="dark-section overflow-hidden" style={{ minHeight: '320px' }}>
          <img
            src="/images/bg-pattern-circles.svg"
            alt=""
            className="absolute -top-40 -left-20 w-[550px] pointer-events-none z-0"
          />
          <div className="absolute right-0 top-0 bottom-0 flex items-center z-10" style={{ left: '50%' }}>
            <FadeIn direction="right" delay={0.2}>
              <div className="max-w-md px-8 text-left">
                <h2 className="font-overpass font-light text-white text-3xl md:text-4xl mb-6">
                  State of the Art Infrastructure
                </h2>
                <p className="font-overpass font-light text-white/70 leading-relaxed">
                  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn direction="up" delay={0.1}>
          <div className="absolute left-24 z-20" style={{ bottom: '0px', top: '-80px' }}>
            <img
              src="/images/illustration-phones.svg"
              alt="Phone illustrations"
              className="h-full w-auto"
            />
          </div>
        </FadeIn>
      </div>

      {/* ── MOBILE VERSION ── */}
      <div className="md:hidden relative my-16">

        <FadeIn direction="up" delay={0}>
          <div className="flex justify-center relative z-20 mb-[-150px]">
            <img
              src="/images/illustration-phones.svg"
              alt="Phone illustrations"
              className="w-64"
            />
          </div>
        </FadeIn>

        <div className="dark-section overflow-hidden px-6 pt-20 pb-12">
          <img
            src="/images/bg-pattern-circles.svg"
            alt=""
            className="absolute -top-20 -left-20 w-[400px] pointer-events-none z-0"
          />
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center relative z-10">
              <h2 className="font-overpass font-light text-white text-3xl mb-4 mt-20">
                State of the Art Infrastructure
              </h2>
              <p className="font-overpass font-light text-white/70 leading-relaxed">
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </>
  );
};

export default InfrastructureSection;