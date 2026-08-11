interface SearchBarProps {
    search: string
    setSearch: (s: string) => void
    onSearch: () => void
}

function SearchBar({ search, setSearch, onSearch }: SearchBarProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5">
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="text-white bg-gray-600 p-2 rounded-[4px]"></input>
            <button onClick={() => onSearch()} className="text-white bg-gray-600 p-2 rounded-[4px] cursor-pointer ">Search</button>
        </div>
    )
}

export default SearchBar