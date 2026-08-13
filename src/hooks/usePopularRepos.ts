import { useState } from "react"
import { getGitHubPopular, type GitHubRepo } from "../api/github"

function usePopularRepos() {
    const [repos, setRepos] = useState<GitHubRepo[]>([])

    const homepage = async() => {
        try {
            const repos = await getGitHubPopular()
            setRepos(repos)
        } catch (error) {
            if (error instanceof Error && error.message === "") {
                
            } else {
    
            }
        }
    }

    return { repos, homepage }
}

export default usePopularRepos