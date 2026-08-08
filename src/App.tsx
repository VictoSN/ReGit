import { useState } from 'react'
import './App.css'
import RepoList from './components/RepoList'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'

function App() {
  const [search, setSearch] = useState("")

  return (
    <div>
      <SearchBar />
      <RepoList />
      <UserCard />
      <StatusMessage />
    </div>
  )
}

export default App
