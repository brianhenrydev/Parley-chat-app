
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
    <div className="mt-44">
      <form className="m-auto mt-44 rounded-lg p-14 py-16 shadow-sm md:w-1/2 lg:w-1/4">
        <div className="text-center text-4xl">New Chat</div>
        <label className="text-lg" >
          Topic:
          <input
            name="topic"
            onChange={handleInput}
            className=""
          />
        </label>
        <label className="text-lg">
          Name:
          <input
            name="name"
            autoComplete="off"
            onChange={handleInput}
            className=""
          />
        </label>
        <label className="text-lg" >
          Category:
          <select
            id="category-select"
            className=""
          >
            {
              categories.map(({ name, id }) => <option key={id}>{name}</option>)
            }
          </select>
        </label>
        <label className="text-lg" >
          Description:
          <input
            name="description"
            onChange={handleInput}
            className="form-input"
          />
        </label>
        <button
          onClick={handleSubmit}
          className="float-right mt-2 rounded-lg p-2 shadow-md">Create</button>
      </form>
    </div>
  )
}

export default NewChatForm
