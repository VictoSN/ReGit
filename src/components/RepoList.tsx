import type { GitHubRepo } from "../api/github"

interface RepoListProps {
    repos: GitHubRepo[]
}

function RepoList({ repos }: RepoListProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5 text-white">
            
        </div>
    )
}

export default RepoList