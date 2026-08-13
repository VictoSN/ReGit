import { useRef, useState } from 'react'

import useGitHubUsers from './hooks/useGitHubUser'
import usePopularRepos from './hooks/usePopularRepos'

import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'
import TwoColumnLayout from './components/TwoColumnLayout'
import ProfileCard from './components/ProfileCard'
import PopularCard from './components/PopularCard'
import RecommendedCard from './components/RecommendedCard'

function App() {
  // these states are inside the hook, being borrowed by the App.tsx
  const { user, repos, stars, status, search, returnHome } = useGitHubUsers()
  const { popularRepos, forkedRepos, failed } = usePopularRepos()
  const [query, setQuery] = useState("") // Raw input from the searchbar
  const [searchedQuery, setSearchQuery] = useState("") // Searched input that the user actually ask for
  const inputRef = useRef<HTMLInputElement>(null) // Used useRef to store address of DOM

  const onSearch = () => {
    if (!query.trim()) return // ensure to only search when there is a valid query
    setSearchQuery(query) // Used for Status Message text
    search(query) // Actual Get logic
  }

  const openUser = (login: string) => {
    setQuery(login)
    setSearchQuery(query)
    search(login)
  }

  const onReturnHome = () => {
    returnHome()
    setQuery("")
    setSearchQuery("")
  }

  return (
    <div className="flex flex-col min-h-dvh justify-top items-center bg-[#0e1113] pb-4 gap-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} onReturnHome={onReturnHome} inputRef={inputRef} />
      {/* Only shows after a successful fetch */}

      {/* Home Page */}
      {(status === "idle") &&
        (failed ? <p className='text-[#8ba2ad] text-sm'>Couldn't load popular repos. Check your connection or try again in a few minutes</p> : 
          <TwoColumnLayout 
            left={<RecommendedCard repos={popularRepos} openUser={openUser} />}
            right={<PopularCard forks={forkedRepos} />}
          />
        )
      }

      {/* User Page */}
      {(status === "success" || status === "empty") && user && 
        <TwoColumnLayout
          left={<UserCard user={user} repos={repos} openUser={openUser} />}
          right={<ProfileCard user={user} stars={stars} />} 
        />
      }

      {status !== "success" && status !== "loading" && status !== "idle" && status && <StatusMessage status={status} query={searchedQuery} inputRef={inputRef} />}
    </div>
  )
}

export default App
