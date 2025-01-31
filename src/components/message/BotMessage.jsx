import translateMessage from "../../services/translation/Translate";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Markdown from 'react-markdown'

const BotMessage = ({ message, currentUser, translate }) => {
  const { timestamp, body } = message
  const [translatedBody, setTranslatedBody] = useState(body)


  useEffect(() => {
    if (body && currentUser.preferredLang && translate) {
      translateMessage(body, currentUser.preferredLang)
        .then(
          ({
            translatedText
          }) =>
            setTranslatedBody(translatedText)
        )
    }
  }, [body, currentUser.preferredLang]);

  return (
    <div className="z-5 my-3 flex transform flex-col rounded-lg bg-gray-800/30 bg-opacity-50 p-4 shadow-md shadow-blue-950">
      <Link className="mb-1 font-bold text-blue-400 hover:text-red-500">
        <div className="">chatbot  🤖</div>
      </Link>
      <div className="mb-1 break-words text-blue-500"><Markdown>{translatedBody}</Markdown></div>
      <div className="text-xs text-gray-500">
        {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default BotMessage

