import { useState } from 'react'
import { getGitHubCommitCount, getGitHubCommits, getGitHubContentDetails, getGitHubContents, getGitHubRepo } from '../api/github'
import type { GitHubRepo, GitHubRepoCommit, GitHubRepoContent, GitHubRepoContentDetails } from '../api/github'

function useGitHubRepo() {
    const [specificRepo, setSpecificRepo] = useState<GitHubRepo>()
    const [repoCommits, setRepoCommits] = useState<GitHubRepoCommit[]>()
    const [repoContents, setRepoContents] = useState<GitHubRepoContent[]>()
    const [repoContentDetails, setRepoContentDetails] = useState<GitHubRepoContentDetails[]>()
    const [repoCount, setRepoCount] = useState(0)
    const [failedRepo, setFailed] = useState(false)

    const searchRepo = async(owner: string, repo: string) => {
        try {
            const data = await getGitHubRepo(owner, repo)
            setSpecificRepo(data)

            const commits = await getGitHubCommits(owner, repo)
            setRepoCommits(commits)

            const contents = await getGitHubContents(owner, repo)
            setRepoContents(contents)

            // insert all of the paths from the contents
            const contentDetails = await Promise.all(
                contents.map(async c => {
                    const commits = await getGitHubContentDetails(owner, repo, c.path)
                    return commits[0]
                })
            )
            setRepoContentDetails(contentDetails)

            const count = await getGitHubCommitCount(owner, repo)
            setRepoCount(count)

            return data
        } catch (error) {
            setFailed(true)
        }
    }

    return { specificRepo, setSpecificRepo, repoCommits, repoContents, repoContentDetails, repoCount, failedRepo, searchRepo }
}

export default useGitHubRepo