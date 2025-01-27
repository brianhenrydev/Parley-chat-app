
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import getChatMessages from "../../services/chat/getChatMessages";
import { useParams } from "react-router-dom";
import Message from "../message/Message";
import { createMessage } from "../../services/message/messageServices"


const Chat = () => {
  const { chatId } = useParams()
  const { currentUser } = useContext(UserContext);
  const [chatMessages, setChatMessages] = useState([]);
  const msgContainerRef = useRef(null);
  const [newMessage, setNewMessage] = useState({
    userId: currentUser.id,
    chatId: chatId,
    body: "",
    timestamp: new Date().toLocaleString()
  });
  const scrollToBottom = () => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  };

  const getAndSetChatMessages = useCallback(() => {
    getChatMessages(chatId).then((cm) => {
      setChatMessages(cm)
      setTimeout(scrollToBottom, 100)
    })
  }, [chatId]);

  useEffect(() => {
    getAndSetChatMessages();
  }, [getAndSetChatMessages]);


  const handleSendMessage = () => {
    if (newMessage.userId && newMessage.chatId) {
      createMessage({ ...newMessage }).then(() => {
        getAndSetChatMessages()
        setNewMessage("")
      })
    } else {
      console.log("slow down there tex")
    }
  }

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
