import logo from '../../public/logo-circle.png'

interface SearchBarProps {
    query: string
    setQuery: (s: string) => void
    onSearch: () => void
}

function SearchBar({ query, setQuery, onSearch }: SearchBarProps) {


    return (
        <div className="flex items-center w-full text-white px-5 border-solid border-b border-gray-600">
            <h1 className="text-left font-bold text-2xl">GH-Lookup</h1>
            <form className="flex mx-auto py-2 gap-5" onSubmit={(e) => {e.preventDefault(); onSearch() }}>
                <input value={query} onChange={(e) => setQuery(e.target.value)} className="border border-orange-500 p-2 rounded-[30px] h-[40px] w-[560px] pl-6" placeholder="Find Anything"></input>
            </form>
            <a href='https://github.com/VictoSN'>
                <img src={logo} className="max-w-[40px]"/>
            </a>
        </div>
    )
}

export default SearchBar