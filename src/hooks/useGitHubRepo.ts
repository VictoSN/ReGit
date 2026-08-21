import { useState } from 'react'
import { getGitHubCommits, getGitHubContentDetails, getGitHubContents, getGitHubRepo } from '../api/github'
import type { GitHubRepo, GitHubRepoCommit, GitHubRepoContent, GitHubRepoContentDetails } from '../api/github'

function useGitHubRepo() {
    const [specificRepo, setSpecificRepo] = useState<GitHubRepo>()
    const [repoCommits, setRepoCommits] = useState<GitHubRepoCommit[]>()
    const [repoContents, setRepoContents] = useState<GitHubRepoContent[]>()
    const [repoContentDetails, setRepoContentDetails] = useState<GitHubRepoContentDetails[]>()
    const [failedRepo, setFailed] = useState(false)

    const searchRepo = async(url: string, owner: string, repo: string, path: string) => {
        try {
            const data = await getGitHubRepo(url)
            setSpecificRepo(data)

            const commits = await getGitHubCommits(owner, repo)
            setRepoCommits(commits)

            const contents = await getGitHubContents(owner, repo)
            setRepoContents(contents)

            const contentDetails = await getGitHubContentDetails(owner, repo, path)
            setRepoContentDetails(contentDetails)

            return data
        } catch (error) {
            setFailed(true)
        }
    }

    return { specificRepo, setSpecificRepo, repoCommits, repoContents, repoContentDetails, failedRepo, searchRepo }
}

export default useGitHubRepo