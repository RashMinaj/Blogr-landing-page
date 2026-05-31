import FadeIn from "./FadeIn";

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 overflow-hidden light-section-rounded">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Laptop — left side, overflows */}
        <FadeIn direction="right" delay={0.2} className="flex-1 flex justify-center md:justify-start">
          <img
            src="/images/illustration-laptop-desktop.svg"
            alt="Laptop illustration"
            loading="lazy"
            className="hidden md:block w-full max-w-2xl md:-translate-x-40"
          />
          <img
            src="/images/illustration-laptop-mobile.svg"
            alt="Laptop illustration"
            loading="lazy"
            className="md:hidden w-full max-w-sm"
          />
        </FadeIn>

        {/* Text — right */}
        <div className="flex-1 max-w-md">
          <FadeIn direction="left" delay={0.1}>
            <div className="mb-10">
              <h3 className="font-overpass font-semibold text-blue-900-blogr text-xl md:text-2xl mb-4">
                Free, open, simple
              </h3>
              <p className="font-overpass font-light text-gray-600-blogr leading-relaxed">
                Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <div>
              <h3 className="font-overpass font-semibold text-blue-900-blogr text-xl md:text-2xl mb-4">
                Powerful tooling
              </h3>
              <p className="font-overpass font-light text-gray-600-blogr leading-relaxed">
                Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;