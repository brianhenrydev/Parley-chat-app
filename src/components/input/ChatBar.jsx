const ChatBar = ({ message, setMessage, handleSendMessage }) => {
  const isDisabled = message.body?.trim() === ""

  return (
    <div className="fixed bottom-0 z-10 my-4 flex w-full">
      <input
        type="text"
        name="chatbar"
        value={message.body ? message.body : ""}
        onChange={({ target: { value } }) => setMessage({ ...message, body: value })}
        onKeyUp={({ keyCode }) => { keyCode === 13 && handleSendMessage() }}
        placeholder="Type your message..."
        className="h-10 w-[88%] rounded-md border pl-2 focus:outline-none focus:ring-2"
      />
      <button
        onClick={handleSendMessage}
        disabled={isDisabled}
        className="ml-1.5 h-10 w-[9%] rounded-md border focus:outline-none focus:ring-2"
      >
        Send
      </button>
    </div>
  )
}

export default ChatBar

