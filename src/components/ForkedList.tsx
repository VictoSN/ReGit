import type { GitHubRepo } from "../api/github"
import ForkedCard from "./ForkedCard"

interface ForkedListRepos {
    forks: GitHubRepo[]
}

function ForkedList({ forks }: ForkedListRepos) {
    return (
        <div className="flex flex-col gap-4">
            {
                forks.map((fork) => (<ForkedCard fork={fork} />))
            }
        </div>
    )
}

export default ForkedList