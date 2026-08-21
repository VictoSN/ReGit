import type { GitHubRepo } from "../api/github"

interface RepoPageProps {
    specificRepo: GitHubRepo
}


function RepoPage({ specificRepo }: RepoPageProps) {
    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default RepoPage