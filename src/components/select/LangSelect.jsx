import { useEffect, useState } from "react";
import getLanguages from "../../services/lang/getLanguages";

export const LangSelect = ({ selectedLang, onLangChange }) => {
  const [langs, setLangs] = useState([])

  useEffect(() => {
    getLanguages().then(langs => setLangs(langs))
  }, [])

  return (
    <div className="mt-4">
      <div className="label">Preferred Language:</div>
      <select
        value={selectedLang}
        name="preferredLang"
        id="lang-select"
        onChange={onLangChange}
        className="w-full rounded-lg border border-gray-300 bg-gray-700 p-2 text-white"
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

