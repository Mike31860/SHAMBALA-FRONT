import { createContext, useEffect, useState } from "react";

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // If you want to use light theme as the default,
  // return "light" instead
  return "dark";
};

export const ThemeContext = createContext(undefined);

interface ThemeProviderProps {
  initialTheme: string;
  children;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme) => {
    if (!document) {
      return;
    }
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
