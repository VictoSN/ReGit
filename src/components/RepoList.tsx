import type { GitHubRepo } from "../api/github"
import RepoCard from "./RepoCard"

interface RepoListProps {
    repos: GitHubRepo[]
    openUser: (login: string) => void
    openRepo: (owner: string, repo: string) => void
}

function RepoList({ repos, openUser, openRepo }: RepoListProps) {
    return (
        <div className="flex flex-col text-white">
            {repos.map((repo) => (<RepoCard key={repo.full_name} repo={repo} openUser={openUser} openRepo={openRepo} />))}
        </div>
    )
}

export default RepoList