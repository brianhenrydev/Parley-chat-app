import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getChatMessages from "../../services/chat/getChatMessages"
import { UserContext } from "../../contexts/UserContext"
import ChatBar from "../input/ChatBar";
import createMessage from "../../services/message/createMessage";
import queryAi from "../../services/gpt/queryAi";
import { editMessage } from "../../services/message/editMessage";
import Message from "../message/Message";

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

  const getAllChatMessages = async () => {
    const cm = await getChatMessages(chatId)
    setChatMessages(cm)
    setTimeout(() => scrollToBottom(), 100)
  };

  useEffect(() => {
    getAllChatMessages()
  }, [])



  const handleSlashMessage = async (message) => {
    const { body } = message
    if (body[0] !== "/") {
      return
    }
    const slashCommand = body.trim().substring(1, 4)

    switch (slashCommand) {
      case "bot": {
        const botResponse = await createMessage({
          userId: 0,
          chatId: chatId,
          body: "I'm thinking...",
          timestamp: new Date().toLocaleString()
        })
        const query = body.substring(5)
        const { message: { content } } = await queryAi(query, chatMessages)
        await editMessage({
          ...botResponse,
          body: content
        })
        getAllChatMessages()
      }
    }

  }

  const handleSendMessage = () => {
    const { userId, body, chatId } = newMessage;
    if (userId || userId === 0 && chatId) {
      createMessage({
        userId: userId,
        chatId: chatId,
        body: body,
        timestamp: new Date().toLocaleString()
      })
        .then((createdMessage) => {
          resetNewMessage()
          getAllChatMessages()
          handleSlashMessage(createdMessage)
            .then(() => {
              getAllChatMessages();
            })
        });
    } else {
      console.log("slow down there tex");
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
    <div className="flex h-full flex-col px-3 pb-14 pt-10">
      <div
        className="h-screen flex-grow overflow-y-auto"
        ref={msgContainerRef}
      >
        {chatMessages.map((message) => {
          return (
            <Message
              key={message.id}
              message={message}
              currentUser={currentUser}
              translate={false}
              getAllChatMessages={getAllChatMessages}
            />
          )
        })}
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
