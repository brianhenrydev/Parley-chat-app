
const SearchBar = ({ setSearchTerm }) => {
  return (
    <div >
      <input
        id="search-bar"
        onChange={({ target: { value } }) => setSearchTerm(value)}
        placeholder="Search Chats.."
        type="text"
      />
    </div>
  )
}

export default SearchBar
