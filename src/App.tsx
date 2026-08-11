import { useState } from 'react'
import RepoList from './components/RepoList'
import SearchBar from './components/SearchBar'
import StatusMessage from './components/StatusMessage'
import UserCard from './components/UserCard'

function App() {
  const [search, setSearch] = useState("")

  const onSearch = () => {
    console.log(search)
  }

  return (
    <div className="flex h-dvh justify-center items-center bg-black">
      <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
      <StatusMessage />
      <RepoList />
      <UserCard />
    </div>
  )
}

export default App
