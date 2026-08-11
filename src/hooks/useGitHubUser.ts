import { useState } from 'react'
import { getGitHubRepos, getGitHubUser } from '../api/github'
import type {GitHubRepo, GitHubUser } from '../api/github'

type Status = "idle" | "loading" | "notFound" | "error" | "success"

function useGitHubUsers() {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [status, setStatus] = useState<Status>("idle")

    const search = async(username: string) => {
        setStatus("loading")
        try {
            const user = await getGitHubUser(username)
            setUser(user)

            const repos = await getGitHubRepos(username)
            setRepos(repos)

            setStatus("success")
        } catch (error) {

        }
    }

    return { user, repos, status, search }
}

export default useGitHubUsers