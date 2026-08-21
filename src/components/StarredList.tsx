import type { GitHubRepo } from "../api/github"
import StarredCard from "./StarredCard"

interface StarredListProps {
    stars: GitHubRepo[]
}

function StarredList({ stars }: StarredListProps) {
    return (
        <div className="flex flex-col">
            {stars.map((star) => (<StarredCard key={star.full_name} star={star} />))}
        </div>
    )
}

export default StarredList