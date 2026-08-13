import { useRef, useState } from 'react'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'

import useGitHubUsers from './hooks/useGitHubUser'
import TwoColumnLayout from './components/TwoColumnLayout'
import ProfileCard from './components/ProfileCard'
import RepoList from './components/RepoList'
import StarredList from './components/StarredList'
import usePopularRepos from './hooks/usePopularRepos'

function App() {
  // these states are inside the hook, being borrowed by the App.tsx
  const { user, repos, stars, status, search } = useGitHubUsers()
  const { popularRepos, forkedRepos } = usePopularRepos()
  const [query, setQuery] = useState("") // Raw input from the searchbar
  const [searchedQuery, setSearchQuery] = useState("") // Searched input that the user actually ask for
  const inputRef = useRef<HTMLInputElement>(null) // Used useRef to store address of DOM

  const onSearch = () => {
    if (!query.trim()) return // ensure to only search when there is a valid query
    setSearchQuery(query)
    search(query)
  }

  return (
    <div className="flex flex-col min-h-dvh justify-top items-center bg-[#0e1113] pb-4 gap-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} inputRef={inputRef} />
      {/* Only shows after a successful fetch */}

      {/* Home Page */}
      {(status === "idle") &&
        <TwoColumnLayout 
          left={<RepoList repos={popularRepos}/>}
          right={<StarredList stars={forkedRepos}/>}
        />
      }

      {/* User Page */}
      {(status === "success" || status === "empty") && user && 
        <TwoColumnLayout
          left={<UserCard user={user} repos={repos} />}
          right={<ProfileCard user={user} stars={stars} />} 
        />
      }

      {status !== "success" && status !== "loading" && status !== "idle" && status && <StatusMessage status={status} query={searchedQuery} inputRef={inputRef} />}
    </div>
  )
}

export default App
