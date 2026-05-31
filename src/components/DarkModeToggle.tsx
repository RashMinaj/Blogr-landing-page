interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-900-blogr text-gray-900-blogr dark:text-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-300"
    >
      {darkMode ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.73 0-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;