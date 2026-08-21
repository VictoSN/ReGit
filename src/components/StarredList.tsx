import type { GitHubRepo } from "../api/github"
import StarredCard from "./StarredCard"

interface StarredListProps {
    stars: GitHubRepo[]
    openRepo: (owner: string, repo: string) => void
}

function StarredList({ stars, openRepo }: StarredListProps) {
    return (
        <div className="flex flex-col">
            {stars.map((star) => (<StarredCard key={star.full_name} star={star} openRepo={openRepo} />))}
        </div>
    )
}

export default StarredList