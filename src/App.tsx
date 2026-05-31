import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DarkModeToggle from "./components/DarkModeToggle";
import LoadingScreen from "./components/LoadingScreen";

// ── Lazy load all sections below the fold ──
// This means they only load when the user scrolls to them
// making the initial page load much faster
const FutureSection = lazy(() => import("./components/FutureSection"));
const InfrastructureSection = lazy(() => import("./components/InfrastructureSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const Footer = lazy(() => import("./components/Footer"));

// Simple fallback while a section loads
const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-red-500-blogr border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <LoadingScreen />

      <div className="min-h-screen overflow-x-hidden transition-colors duration-300">
        {/* Hero loads immediately — no lazy loading for above the fold */}
        <div className="hero-bg relative">
          <Navbar />
          <Hero />
        </div>

        {/* Everything below the fold is lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <FutureSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <InfrastructureSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>

        <DarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>
    </>
  );
}

export default App;
