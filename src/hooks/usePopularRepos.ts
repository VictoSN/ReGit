import { useState } from "react"
import { getGitHubPopular, getGitHubFork } from "../api/github"
import type { GitHubRepo, GitHubStar } from "../api/github"

function usePopularRepos() {
    const [popularRepos, setPopularRepos] = useState<GitHubRepo[]>([])
    const [forkedRepos, setForkedRepos] = useState<GitHubStar[]>([])

    async() => {
        try {
            const repos = await getGitHubPopular()
            setPopularRepos(repos)
            
            const forked = await getGitHubFork()
            setForkedRepos(forked)
        } catch (error) {
            if (error instanceof Error && error.message === "") {
                
            } else {
    
            }
        }
    }

    return { popularRepos, forkedRepos }
}

export default usePopularRepos