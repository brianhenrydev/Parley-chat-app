
const ChatBar = ({ message, setMessage, handleSendMessage }) => {
  const isDisabled = message.body?.trim() === ""
  return (
    <div>
      <input
        type="text"
        name="chatbar"
        value={message.body ? message.body : ""}
        onChange={({ target: { value } }) => setMessage({ ...message, body: value })}
        onKeyUp={({ keyCode }) => { keyCode === 13 && handleSendMessage() }}
        placeholder=""
      />

      <button
        onClick={handleSendMessage}
        disabled={isDisabled}
      >
        Send
      </button>
    </div>
  )
}

export default ChatBar
