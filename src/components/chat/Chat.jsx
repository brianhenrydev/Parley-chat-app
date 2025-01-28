import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../message/Message";
import getChatMessages from "../../services/chat/getChatMessages"
import { UserContext } from "../../contexts/UserContext"
import ChatBar from "../input/ChatBar";
import createMessage from "../../services/message/createMessage";


const Chat = () => {
  const { chatId } = useParams()
  const { currentUser } = useContext(UserContext);
  const [chatMessages, setChatMessages] = useState([]);
  const msgContainerRef = useRef(null);
  const [newMessage, setNewMessage] = useState({
    userId: currentUser.id,
    chatId: chatId,
    body: "",
    timestamp: ""
  });

  const getAndSetChatMessages = useCallback(() => {
    getChatMessages(chatId).then((cm) => {
      setChatMessages(cm)
    })
  }, [chatId]);

  useEffect(() => {
    getAndSetChatMessages();
  }, [getAndSetChatMessages]);

  const handleSendMessage = () => {
    if (newMessage.userId && newMessage.chatId) {
      createMessage({
        ...newMessage,
        timestamp: new Date().toLocaleString()
      }).then(() => {
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
            getAndSetChatMessages={getAndSetChatMessages}
            currentUser={currentUser}
          />
        ))}
      </div>

      <ChatBar
        handleSendMessage={handleSendMessage}
        setMessage={setNewMessage}
        message={newMessage}
      />
    </div>
  );
}
export default Chat
