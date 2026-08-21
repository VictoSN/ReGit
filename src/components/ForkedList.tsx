import type { GitHubRepo } from "../api/github"
import ForkedCard from "./ForkedCard"

interface ForkedListRepos {
    forks: GitHubRepo[]
}

function ForkedList({ forks }: ForkedListRepos) {
    return (
        <div className="flex flex-col">
            {forks.map((fork) => (<ForkedCard key={fork.full_name} fork={fork} />))}
        </div>
    )
}

export default ForkedList