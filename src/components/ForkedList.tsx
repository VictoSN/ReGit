import type { GitHubRepo } from "../api/github"
import ForkedCard from "./ForkedCard"

interface ForkedListRepos {
    forks: GitHubRepo[]
    openRepo: (url: string) => void
}

function ForkedList({ forks, openRepo }: ForkedListRepos) {
    return (
        <div className="flex flex-col">
            {forks.map((fork) => (<ForkedCard key={fork.full_name} fork={fork} openRepo={openRepo} />))}
        </div>
    )
}

export default ForkedList