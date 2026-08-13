import { useState } from 'react'
import { getGitHubRepos, getGitHubStars, getGitHubUser } from '../api/github'
import type { GitHubRepo, GitHubStar, GitHubUser } from '../api/github'

// One status per UI screen
export type Status = "idle" | "loading" | "notFound" | "error" | "success" | "empty"

function useGitHubUsers() {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [stars, setStars] = useState<GitHubStar[]>([])
    const [status, setStatus] = useState<Status>("idle")

    const search = async(username: string) => {
        setStatus("loading")
        try {
            const user = await getGitHubUser(username)
            setUser(user)

            const repos = await getGitHubRepos(username)
            setRepos(repos)

            const stars = await getGitHubStars(username)
            setStars(stars)

            setStatus(repos.length === 0 ? "empty" : "success")
        } catch (error) {
            // Ensure its a known error
            if (error instanceof Error && error.message === "User not found") {
                setStatus("notFound")
            } else {
                setStatus("error")
            }
        }
    }

    return { user, repos, stars, status, search }
}

export default useGitHubUsers