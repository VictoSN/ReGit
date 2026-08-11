interface SearchBarProps {
    query: string
    setQuery: (s: string) => void
    onSearch: () => void
}

function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5">
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="text-white bg-gray-600 p-2 rounded-[4px]"></input>
            <button onClick={() => onSearch()} className="text-white bg-gray-600 p-2 rounded-[4px] cursor-pointer ">Search</button>
        </div>
    )
}

export default SearchBar