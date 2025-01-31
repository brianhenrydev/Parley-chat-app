import Message from "./Message"
import BotMessage from "./BotMessage"

const MessageHandle = ({ message, currentUser, getAndSetChatMessages }) => {
  return (
    message.userId === 0 ? (
      <BotMessage
        key={message.id}
        message={message}
        currentUser={currentUser}
        translate={false}
      />
    ) : (
      <Message
        key={message.id}
        message={message}
        currentUser={currentUser}
        translate={false}
        getAndSetChatMessages={getAndSetChatMessages}
      />
    )
  )

}

export default MessageHandle
