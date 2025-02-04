
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
        className="m-1 w-[99%] rounded-md border font-mono focus:outline-none focus:ring-2"
      />
      <button
        onClick={handleSendMessage}
        disabled={isDisabled}
        className="btn btn-outline m-1 h-full p-3"
      >
        Send
      </button>
    </div>
  )
}

export default ChatBar
