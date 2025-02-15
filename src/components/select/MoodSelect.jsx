import { useEffect, useState } from "react";
import { getMoods } from "../../services/mood/getMoods";

export const MoodSelect = ({ selectedMood, onMoodChange }) => {
  const [moods, setMoods] = useState([])

  useEffect(() => {
    getMoods().then((moodsFromDb) => setMoods(moodsFromDb))
  }, [])

  return (
    <div className="mt-4 flex flex-col">
      <div className="label">Mood:</div>
      <select
        value={selectedMood}
        name="moodEmoji"
        id="mood-select"
        onChange={onMoodChange}
        className="select w-full"
      >
        <option value="" disabled>Select a mood</option>
        {moods.map(({ emoji, label }) => (
          <option key={label} value={emoji}>
            {label} - {emoji}
          </option>
        ))}
      </select>
    </div>
  );
};

