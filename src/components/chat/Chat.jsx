import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getChatMessages from "../../services/chat/getChatMessages"
import { UserContext } from "../../contexts/UserContext"
import ChatBar from "../input/ChatBar";
import createMessage from "../../services/message/createMessage";
import queryAi from "../../services/gpt/queryAi";
import { editMessage } from "../../services/message/editMessage";
import MessageHandle from "../message/MessageHandle";

const Chat = () => {
  const { chatId } = useParams()
  const { currentUser } = useContext(UserContext);
  const [chatMessages, setChatMessages] = useState([]);
  const msgContainerRef = useRef(null);
  const [newMessage, setNewMessage] = useState({
    userId: currentUser.id,
    chatId: parseInt(chatId),
    body: ""
  });


  const getAndSetChatMessages = useCallback(() => {
    getChatMessages(chatId)
      .then((cm) => {
        setTimeout(setChatMessages(cm), 100)
        setTimeout(scrollToBottom, 100)
      })
  }, [chatId]);

  useEffect(getAndSetChatMessages, [getAndSetChatMessages]);


  const handleSendMessage = () => {
    const { userId, body, chatId } = newMessage;
    if (userId || (userId === 0 && chatId)) {
      createMessage({
        userId: userId,
        chatId: chatId,
        body: body,
        timestamp: new Date().toLocaleString()
      })
        .then((createMsgRes) => {
          getAndSetChatMessages();
          resetNewMessage()
          if (createMsgRes.body.trim()[0] === "/") {
            if (createMsgRes.body.trim().substring(1, 5).trim() === "bot") {
              createMessage({
                userId: 0,
                chatId: chatId,
                body: "I'm thinking...",
                timestamp: new Date().toLocaleString()
              })
                .then((loadingMsg) => {
                  const query = body.substring(5)
                  queryAi(query)
                    .then((res) =>
                      editMessage({
                        ...loadingMsg,
                        body: res.response
                      }).then(() => {
                        getAndSetChatMessages()
                      }))
                });
            }
          }
        });
    } else {
      console.log("slow down there tex", userId, chatId);
    }
  };

  const scrollToBottom = () => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  };

  const resetNewMessage = () => {
    return setNewMessage({
      ...newMessage,
      body: "",
    })
  };


  return (
    <div className="flex h-full flex-col">
      <div className="chat-container" ref={msgContainerRef}>
        {chatMessages.map((message) => (
          <MessageHandle
            key={message.id}
            message={message}
            currentUser={currentUser}
            translate={false}
            getAndSetChatMessages={getAndSetChatMessages}
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
