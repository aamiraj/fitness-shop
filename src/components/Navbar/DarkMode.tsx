import { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    typeof localStorage.getItem("theme") === "string"
      ? localStorage.getItem("theme")
      : "light"
  );

  const handleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }

    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("light");
      html.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img
        onClick={handleTheme}
        src={LightButton}
        alt="light button"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-200`}
      />
      <img
        onClick={handleTheme}
        src={DarkButton}
        alt="light button"
        className={`w-12 cursor-pointer
        }`}
      />
    </div>
  );
};

export default DarkMode;
