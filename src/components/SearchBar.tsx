import logoIcon from '../assets/logo-circle.png'
import searchIcon from '../assets/search.svg'

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
                <div className='relative'>
                    <img src={searchIcon} className="max-w-[20px] absolute left-3 top-1/2 -translate-y-1/2"/>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} className="border border-orange-500 rounded-[30px] h-[40px] w-[560px] pl-10" placeholder="Find Anything"></input>
                </div>
            </form>
            <a href='https://github.com/VictoSN'>
                <img src={logoIcon} className="max-w-[40px]"/>
            </a>
        </div>
    )
}

export default SearchBar