import { useState } from 'react'
import { getGitHubRepo } from '../api/github'
import type { GitHubRepo } from '../api/github'

function useGitHubRepo() {
    const [specificRepo, setSpecificRepo] = useState<GitHubRepo>()
    const [failedRepo, setFailed] = useState(false)

    const searchRepo = async(url: string) => {
        try {
            const data = await getGitHubRepo(url)
            setSpecificRepo(data)
            return data
        } catch (error) {
            setFailed(true)
        }
    }

    return { specificRepo, setSpecificRepo, failedRepo, searchRepo }
}

export default useGitHubRepo