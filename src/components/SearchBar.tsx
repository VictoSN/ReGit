import logoIcon from '../assets/logo-circle.png'
import searchIcon from '../assets/search.svg'

interface SearchBarProps {
    query: string
    setQuery: (s: string) => void
    onSearch: () => void
    onReturnHome: () => void
    inputRef: React.RefObject<HTMLInputElement | null>
}

function SearchBar({ query, setQuery, onSearch, onReturnHome, inputRef }: SearchBarProps) {
    return (
        <div className="flex sticky top-0 bg-[#0e1113] justify-between items-center w-full text-white px-5 border-solid border-b border-gray-700">
            <button onClick={onReturnHome} className='cursor-pointer'>
                <h1 className="text-left font-bold text-2xl">reGit</h1>
            </button>
            <form className="flex py-2 gap-5" onSubmit={(e) => {e.preventDefault(); onSearch() }}>
                <div className='relative'>
                    <img src={searchIcon} className="max-w-[20px] absolute left-3 top-1/2 -translate-y-1/2"/>
                    <input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} className="border border-orange-500 rounded-[30px] h-[40px] w-[560px] pl-10 pr-5 mr-20" placeholder="Find Anything"></input>
                </div>
            </form>
            <a href='https://github.com/VictoSN' target="_blank" rel="noopener noreferrer">
                <img src={logoIcon} className="max-w-[40px] rounded-full"/>
            </a>
        </div>
    )
}

export default SearchBar