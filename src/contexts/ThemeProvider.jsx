import { createContext, useState } from 'react';

const ThemeContext = createContext();

const themes = [
  "dark", "cupcake",
  "emerald", "corporate", "synthwave",
  "cyberpunk",
  "halloween", "garden", "forest",
  "aqua", "lofi", "fantasy",
  "wireframe", "luxury",
  "dracula", "cmyk",
  "business", "acid", "lemonade",
  "night", "coffee", "winter",
  "dim", "sunset",
  "abyss", "silk"
]
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const changeTheme = (theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme)
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };




