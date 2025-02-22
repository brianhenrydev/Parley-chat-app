import { ThemeContext } from "../../contexts/ThemeProvider"
import { useContext } from "react"

export const ThemeSelect = () => {
  const { theme, changeTheme, themes } = useContext(ThemeContext);
  return (
    <select
      id="theme-select"
      defaultValue="theme"
      className="border-none focus:border-none"
      onChange={({ target: { value } }) => changeTheme(value)}
    >
      {
        themes.map(
          (t) =>
            <option key={t} value={t}>{t}</option>
        )
      }
    </select>

  )
} 
