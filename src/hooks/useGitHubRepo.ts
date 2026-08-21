import { useState } from 'react'
import { getGitHubRepo } from '../api/github'
import type { GitHubRepo } from '../api/github'

function useGitHubRepo() {
    const [specificRepo, setRepo] = useState<GitHubRepo>()
    const [failedRepo, setFailed] = useState(false)

    const searchRepo = async(url: string) => {
        try {
            const data = await getGitHubRepo(url)
            setRepo(data)
        } catch (error) {
            setFailed(true)
        }
    }

    return { specificRepo, failedRepo, searchRepo }
}

export default useGitHubRepo