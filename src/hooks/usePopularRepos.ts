import { useEffect, useState } from "react"
import { getGitHubPopular, getGitHubFork } from "../api/github"
import type { GitHubRepo } from "../api/github"

function usePopularRepos() {
    const [popularRepos, setPopularRepos] = useState<GitHubRepo[]>([])
    const [forkedRepos, setForkedRepos] = useState<GitHubRepo[]>([])
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        async function load() {
            try {
                const [repos, forked] = await Promise.all([getGitHubPopular(), getGitHubFork()])
                setPopularRepos(repos)
                setForkedRepos(forked)
            } catch (error) {
                setFailed(true)
            }
        }
        load()
    }, [])

    return { popularRepos, forkedRepos, failed }
}

export default usePopularRepos