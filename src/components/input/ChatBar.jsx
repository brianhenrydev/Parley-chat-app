
const ChatBar = ({ message, setMessage, handleSendMessage }) => {
  const isDisabled = message.body?.trim() === ""

  return (
    <div className="z-10 m-2 flex">
      <input
        type="text"
        name="chatbar"
        value={message.body ? message.body : ""}
        onChange={({ target: { value } }) => setMessage({ ...message, body: value })}
        onKeyUp={({ keyCode }) => { keyCode === 13 && handleSendMessage() }}
        placeholder="Type your message..."
        className="flex-grow rounded-md border border-gray-600 bg-gray-800 p-3 font-mono text-slate-300 focus:outline-none focus:ring-2"
      />

      <button
        onClick={handleSendMessage}
        disabled={isDisabled}
        className="mx-2 rounded-md bg-blue-800 px-5 py-4 text-white hover:bg-blue-700 disabled:bg-gray-700"
      >
        Send
      </button>
    </div>
  )
}

export default ChatBar
