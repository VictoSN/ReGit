import { useState } from 'react'
import RepoList from './components/RepoList'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'

import useGitHubUsers from './hooks/useGitHubUser'

function App() {
  // these states are inside the hook, being borrowed by the App.tsx
  const { user, repos, status, search } = useGitHubUsers()
  const [query, setQuery] = useState("") // Raw input from the searchbar

  const onSearch = () => {
    search(query)
  }

  return (
    <div className="flex flex-col h-dvh justify-top items-center bg-black gap-2">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch}/>
      {status !== "success" && status !== "idle" && status !== "loading" && status && <StatusMessage status={status} query={query}/>}

      {/* Only shows after a successful fetch */}
      {status === "success" && user && <UserCard user={user} />}
      {/* {status === "success" && repos && <RepoList repos={repos} />} */}
    </div>
  )
}

export default App
