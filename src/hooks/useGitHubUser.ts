import { useState } from 'react'
import { GitHubRepo, GitHubUser } from '../api/github'

function useGitHubUsers() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])

  type Status = "idle" | "loading" | "notFound" | "error" | "success"
  const [status, setStatus] = useState<Status>("idle")



}

export default useGitHubUsers