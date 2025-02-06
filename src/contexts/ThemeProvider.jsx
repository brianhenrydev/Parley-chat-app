import { createContext, useState } from 'react';

const ThemeContext = createContext();

const themes = [
  "light", "dark", "cupcake", "bumblebee",
  "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine",
  "halloween", "garden", "forest",
  "aqua", "lofi", "pastel", "fantasy",
  "wireframe", "black", "luxury",
  "dracula", "cmyk", "autumn",
  "business", "acid", "lemonade",
  "night", "coffee", "winter",
  "dim", "nord", "sunset",
  "caramellatte",
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




