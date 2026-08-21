import type { GitHubRepo } from "../api/github"

interface RepoPageProps {
    specificRepo: GitHubRepo
}


function RepoPage({ specificRepo }: RepoPageProps) {
    return (
        <div>
            testing first
            <p>{specificRepo.full_name}</p>
        </div>
    )
}

export default RepoPage