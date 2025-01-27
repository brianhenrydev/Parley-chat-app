
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createNewChat } from "../../services/chat/createNewChat"
import { getAllCategories } from "../../services/category/getAllCategories"


const NewChatForm = () => {
  const [newChat, setNewChat] = useState({ topic: "", name: "", description: "", category: "" })
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  const handleInput = ({ target: { value, name } }) => {
    setNewChat({
      ...newChat,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createNewChat(
      {
        ...newChat,
        createdAt: new Date().toLocaleString()
      }).then(() => navigate("/all-chats"))
    {/*
    */}
  }

  return (
    <div >
      <form className="new-chat-form">
        <div >New Chat</div>
        <label  >
          Topic:
          <input
            name="topic"
            onChange={handleInput}
            className="form-input"
          />
        </label>
        <label  >
          Name:
          <input
            name="name"
            autoComplete="off"
            onChange={handleInput}

          />
        </label>
        <label  >
          Category:
          <select
            id="category-select"

          >
            {
              categories.map(({ name, id }) => <option key={id}>{name}</option>)
            }
          </select>
        </label>
        <label  >
          Description:
          <input
            name="description"
            onChange={handleInput}

          />
        </label>
        <button
          onClick={handleSubmit}
        >Create</button>
      </form>
    </div>
  )
}

export default NewChatForm
