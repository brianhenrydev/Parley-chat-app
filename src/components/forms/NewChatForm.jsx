
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
    <div className="">
      <form className="bg-neutral pb-26 m-auto mt-44 rounded-lg px-14 pt-14 shadow-2xl md:w-1/2 lg:w-1/4">
        <div className="text-secondary text-4xl">New Chat</div>
        <div>
          <label className="text-lg" >
            Topic:
          </label>
          <input
            name="topic"
            onChange={handleInput}
            className="input"
          />
        </div>
        <div>
          <label className="text-lg">
            Name:
          </label>
          <input
            name="name"
            autoComplete="off"
            onChange={handleInput}
            className="input"
          />
        </div>
        <div>
          <label className="text-lg" >
            Category:
          </label>
          <select
            id="category-select"
            className="select"
          >
            {
              categories.map(({ name, id }) => <option key={id}>{name}</option>)
            }
          </select>
        </div>
        <div>
          <label className="text-lg" >
            Description:
          </label>
        </div>
        <div>
          <input
            name="description"
            onChange={handleInput}
            className="input"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-primary float-right mt-4 w-full rounded-lg shadow-md">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewChatForm
