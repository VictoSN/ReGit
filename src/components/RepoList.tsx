import type { GitHubRepo } from "../api/github"
import RepoCard from "./RepoCard"

interface RepoListProps {
    repos: GitHubRepo[]
    openUser: (login: string) => void
    specificRepo: GitHubRepo
    openRepo: (url: string) => void
}

function RepoList({ repos, openUser, specificRepo, openRepo }: RepoListProps) {
    return (
        <div className="flex flex-col text-white">
            {repos.map((repo) => (<RepoCard repo={repo} openUser={openUser} specificRepo={specificRepo} openRepo={openRepo} />))}
        </div>
    )
}

export default RepoList