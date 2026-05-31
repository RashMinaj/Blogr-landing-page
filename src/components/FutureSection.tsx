import FadeIn from "./FadeIn";

const FutureSection = () => {
  return (
    <section className="future-section py-24 px-6 overflow-hidden bg-white dark:bg-gray-900-blogr transition-colors duration-300">
      <FadeIn direction="up">
        <h2 className="text-center font-overpass font-light text-blue-900-blogr text-3xl md:text-4xl mb-20">
          Designed for the future
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Text — left on desktop */}
        <div className="flex-1 order-2 md:order-1 max-w-md">
          <FadeIn direction="right" delay={0.1}>
            <div className="mb-10">
              <h3 className="font-overpass font-semibold text-blue-900-blogr text-xl md:text-2xl mb-4">
                Introducing an extensible editor
              </h3>
              <p className="font-overpass font-light text-gray-600-blogr leading-relaxed">
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div>
              <h3 className="font-overpass font-semibold text-blue-900-blogr text-xl md:text-2xl mb-4">
                Robust content management
              </h3>
              <p className="font-overpass font-light text-gray-600-blogr leading-relaxed">
                Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Illustration — right side, overflows */}
        <FadeIn direction="left" delay={0.2} className="flex-1 order-1 md:order-2 w-full flex justify-center md:justify-end">
          <img
            src="/images/illustration-editor-desktop.svg"
            alt="Editor illustration"
            loading="lazy"
            className="hidden md:block w-full max-w-2xl md:translate-x-60"
          />
          <img
            src="/images/illustration-editor-mobile.svg"
            alt="Editor illustration"
            loading="lazy"
            className="md:hidden w-full max-w-sm"
          />
        </FadeIn>

      </div>
    </section>
  );
};

export default FutureSection;
