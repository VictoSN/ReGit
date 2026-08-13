import type { GitHubStar } from "../api/github"
import StarredCard from "./StarredCard"

interface StarredListProps {
    stars: GitHubStar[]
}

function StarredList({ stars }: StarredListProps) {
    return (
        <div className="flex flex-col gap-4">
            {
                stars.map((star) => (<StarredCard star={star} />))
            }
        </div>
    )
}

export default StarredList