import { useRef, useState } from 'react'

import useGitHubUsers from './hooks/useGitHubUser'
import useGitHubRepo from './hooks/useGitHubRepo'
import usePopularRepos from './hooks/usePopularRepos'

import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'
import TwoColumnLayout from './components/TwoColumnLayout'
import ProfileCard from './components/ProfileCard'
import PopularCard from './components/PopularCard'
import RecommendedCard from './components/RecommendedCard'
import RepoPage from './components/RepoPage'

function App() {
  // these states are inside the hook, being borrowed by the App.tsx
  const { user, repos, stars, status, searchUser, returnHome } = useGitHubUsers()
  const { specificRepo, setSpecificRepo, failedRepo, searchRepo } = useGitHubRepo()
  const { popularRepos, forkedRepos, failedPopular } = usePopularRepos()

  const [query, setQuery] = useState("") // Raw input from the searchbar
  const [searchedQuery, setSearchQuery] = useState("") // Searched input that the user actually ask for
  const inputRef = useRef<HTMLInputElement>(null) // Used useRef to store address of DOM

  const onSearch = () => {
    if (!query.trim()) return // ensure to only search when there is a valid query
    setSearchQuery(query) // Used for Status Message text
    searchUser(query) // Actual Get logic
  }

  const openUser = (login: string) => {
    setQuery(login)
    setSearchQuery(query)
    searchUser(login)
  }

  const openRepo = async (url: string) => {
    const repo = await searchRepo(url)
    if (repo) searchUser(repo.owner.login)
  }

  const onReturnHome = () => {
    returnHome()
    setSpecificRepo(undefined)
    setQuery("")
    setSearchQuery("")
  }

  return (
    <div className="flex flex-col min-h-dvh justify-top items-center bg-[#0e1113] pb-4 gap-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={onSearch} onReturnHome={onReturnHome} inputRef={inputRef} />
      {/* Only shows after a successful fetch */}

      {/* Home Page */}
      {(status === "idle") &&
        (failedPopular ? <StatusMessage status={status} query={searchedQuery} inputRef={inputRef} /> : 
          <TwoColumnLayout 
            left={<RecommendedCard repos={popularRepos} openUser={openUser} openRepo={openRepo} />}
            right={<PopularCard forks={forkedRepos} openRepo={openRepo} />}
          />
        )
      }

      {/* User Page */}
      {!specificRepo && (status === "success" || status === "empty") && user && 
        <TwoColumnLayout
          left={<UserCard user={user} repos={repos} openUser={openUser} openRepo={openRepo} />}
          right={<ProfileCard user={user} stars={stars} openUser={openUser} openRepo={openRepo} />} 
        />
      }

      {/* Repo Page */}
      {specificRepo && (!failedRepo) && specificRepo && user && 
        <TwoColumnLayout 
          left={<RepoPage specificRepo={specificRepo} />}
          right={<ProfileCard user={user} stars={stars} openUser={openUser} openRepo={openRepo}  />}
        />
      }

      {status !== "success" && status !== "loading" && status !== "idle" && status && <StatusMessage status={status} query={searchedQuery} inputRef={inputRef} />}
    </div>
  )
}

export default App
