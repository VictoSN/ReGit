import type { GitHubStar } from "../api/github"

interface StarredListProps {
    stars: GitHubStar[]
}

function StarredList({ stars }: StarredListProps) {
    return (
        <div>
            {
                stars.map((star) => (
                    <div key={star.full_name}>

                    </div>
                ))
            }
        </div>
    )
}

export default StarredList