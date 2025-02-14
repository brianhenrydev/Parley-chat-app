
const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="flex w-full justify-center">
      <input
        id="search-bar"
        onChange={({ target: { value } }) => setSearchTerm(value)}
        className="mx-2 h-12 w-11/12 rounded-xl border-2 pl-2"
        placeholder="Search Chats..."
        type="text"
      />
    </div>
  )
}

export default SearchBar
