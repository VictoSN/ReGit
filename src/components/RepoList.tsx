import type { GitHubRepo } from "../api/github"
import RepoCard from "./RepoCard"

interface RepoListProps {
    repos: GitHubRepo[]
}

function RepoList({ repos }: RepoListProps) {
    return (
        <div className="flex flex-col gap-5 text-white">
            {repos.map((repo) => (<RepoCard repo={repo} />))}
        </div>
    )
}

export default RepoList