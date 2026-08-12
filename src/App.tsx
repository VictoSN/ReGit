import { useRef, useState } from 'react'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'

import useGitHubUsers from './hooks/useGitHubUser'

function App() {
  // these states are inside the hook, being borrowed by the App.tsx
  const { user, repos, status, search } = useGitHubUsers()
  const [query, setQuery] = useState("") // Raw input from the searchbar
  const [searchedQuery, setSearchQuery] = useState("") // Searched input that the user actually ask for
  const inputRef = useRef<HTMLInputElement>(null) // Used useRef to store address of DOM

  const onSearch = () => {
    setSearchQuery(query)
    search(query)
  }

  return (
    <div className="flex flex-col h-dvh justify-top items-center bg-[#0e1113] gap-2">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} inputRef={inputRef} />
      {status !== "success" && status !== "loading" && status && <StatusMessage status={status} query={searchedQuery} inputRef={inputRef} />}

      {/* Only shows after a successful fetch */}
      {status === "success" && user && <UserCard user={user} repos={repos} />}
    </div>
  )
}

export default App
