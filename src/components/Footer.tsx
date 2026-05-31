import FadeIn from "./FadeIn";

const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },
  {
    title: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900-blogr rounded-tr-[100px] px-8 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">

        {/* Logo */}
        <FadeIn direction="up" delay={0}>
          <div className="flex justify-center md:justify-start">
            <img src="/images/logo.svg" alt="Blogr" className="h-8" />
          </div>
        </FadeIn>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 flex-1">
          {footerLinks.map((col, index) => (
            <FadeIn key={col.title} direction="up" delay={index * 0.15}>
              <div className="text-center md:text-left">
                <h4 className="font-ubuntu font-medium text-white mb-5 text-sm">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-overpass font-light text-white/60 hover:text-white text-sm transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
