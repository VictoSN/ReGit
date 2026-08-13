import type { GitHubRepo } from "../api/github"
import RepoCard from "./RepoCard"

interface RepoListProps {
    repos: GitHubRepo[]
    openUser: (login: string) => void
}

function RepoList({ repos, openUser }: RepoListProps) {
    return (
        <div className="flex flex-col text-white">
            {repos.map((repo) => (<RepoCard repo={repo} openUser={openUser} />))}
        </div>
    )
}

export default RepoList