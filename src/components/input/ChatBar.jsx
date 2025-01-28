
const ChatBar = ({ message, setMessage, handleSendMessage }) => {
  const isDisabled = message.body?.trim() === ""
  return (
    <div className="w-screen z-10 flex mb-2">
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
        className="mx-2 rounded-md bg-blue-800 py-4 px-5 text-white hover:bg-blue-700 disabled:bg-gray-700"
      >
        Send
      </button>
    </div>
  )
}

export default ChatBar
