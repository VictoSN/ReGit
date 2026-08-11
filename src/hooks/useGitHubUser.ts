import { useState } from 'react'
import { getGitHubRepos, getGitHubUser } from '../api/github'
import type {GitHubRepo, GitHubUser } from '../api/github'

// One status per UI screen
export type Status = "idle" | "loading" | "notFound" | "error" | "success"

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
            // Ensure its a known error
            if (error instanceof Error && error.message === "User not found") {
                setStatus("notFound")
            } else {
                setStatus("error")
            }
        }
    }

    return { user, repos, status, search }
}

export default useGitHubUsers