import { useEffect, useState } from "react";

const LANGS = [
  { name: "Arabic", value: "AR" },
  { name: "Bulgarian", value: "BG" },
  { name: "Czech", value: "CS" },
  { name: "Danish", value: "DA" },
  { name: "German", value: "DE" },
  { name: "Greek", value: "EL" },
  { name: "English (British)", value: "EN-GB" },
  { name: "English (American)", value: "EN-US" },
  { name: "Spanish", value: "ES" },
  { name: "Estonian", value: "ET" },
  { name: "Finnish", value: "FI" },
  { name: "French", value: "FR" },
  { name: "Hungarian", value: "HU" },
  { name: "Indonesian", value: "ID" },
  { name: "Italian", value: "IT" },
  { name: "Japanese", value: "JA" },
  { name: "Korean", value: "KO" },
  { name: "Lithuanian", value: "LT" },
  { name: "Latvian", value: "LV" },
  { name: "Norwegian Bokmål", value: "NB" },
  { name: "Dutch", value: "NL" },
  { name: "Polish", value: "PL" },
  { name: "Portuguese (Brazilian)", value: "PT-BR" },
  { name: "Portuguese (Non-Brazilian Portuguese)", value: "PT-PT" },
  { name: "Romanian", value: "RO" },
  { name: "Russian", value: "RU" },
  { name: "Slovak", value: "SK" },
  { name: "Slovenian", value: "SL" },
  { name: "Swedish", value: "SV" },
  { name: "Turkish", value: "TR" },
  { name: "Ukrainian", value: "UK" },
  { name: "Chinese (simplified)", value: "ZH-HANS" },
  { name: "Chinese (traditional)", value: "ZH-HANT" }
]
export const LangSelect = ({ selectedLang, onLangChange }) => {
  const [langs, setLangs] = useState([])

  useEffect(() => {
    setLangs(LANGS)
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
        {langs.length > 0 ? langs.map(({ name, value }) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))
          :
          <option key={"todo"} value={"todo"}>todo</option>
        }
      </select>
    </div>
  );
};

