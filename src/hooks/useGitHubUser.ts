import { useState } from 'react'
import { getGitHubRepos, getGitHubStars, getGitHubUser } from '../api/github'
import type { GitHubRepo, GitHubUser } from '../api/github'

// One status per UI screen
export type Status = "idle" | "loading" | "notFound" | "error" | "success" | "empty"

function useGitHubUsers() {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [stars, setStars] = useState<GitHubRepo[]>([])
    const [status, setStatus] = useState<Status>("idle")

    const searchUser = async(username: string) => {
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

    const returnHome = () => {
        setStatus("idle")
    }

    return { user, repos, stars, status, searchUser, returnHome }
}

export default useGitHubUsers