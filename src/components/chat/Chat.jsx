
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../message/Message";
import getChatMessages from "../../services/chat/getChatMessages"


const Chat = () => {
  const { chatId } = useParams()
  const [chatMessages, setChatMessages] = useState([]);
  const msgContainerRef = useRef(null);


  const getAndSetChatMessages = useCallback(() => {
    getChatMessages(chatId).then((cm) => {
      setChatMessages(cm)
    })
  }, [chatId]);

  useEffect(() => {
    getAndSetChatMessages();
  }, [getAndSetChatMessages]);



  return (
    <div >
      <div ref={msgContainerRef}>
        {chatMessages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat
