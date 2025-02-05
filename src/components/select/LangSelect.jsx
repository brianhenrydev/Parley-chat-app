import { useEffect, useState } from "react";
import getLanguages from "../../services/lang/getLanguages";

export const LangSelect = ({ selectedLang, onLangChange }) => {
  const [langs, setLangs] = useState([])

  useEffect(() => {
    getLanguages().then(langs => setLangs(langs))
  }, [])

  return (
    <div className="mt-4 flex flex-col">
      <div className="label">Preferred Language:</div>
      <select
        value={selectedLang}
        name="preferredLang"
        id="lang-select"
        onChange={onLangChange}
        className="select w-full"
      >
        <option value="" disabled>Select a Preferred Language</option>
        {
          langs.map(({ name, value }) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))
        }
      </select>
    </div>
  );
};

