import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Fully remove after fade completes
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center hero-gradient transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <img
        src="/images/logo.svg"
        alt="Blogr"
        className="h-12 mb-8 animate-pulse"
      />

      {/* Loading bar */}
      <div className="w-48 h-1 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full animate-loading-bar" />
      </div>

      <p className="text-white/70 font-overpass text-sm mt-4">
        Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;