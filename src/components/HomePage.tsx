import type { GitHubRepo } from "../api/github"
import RepoList from "./RepoList"

interface HomePageProps {
    repos: GitHubRepo[]
}

function HomePage({ repos }: HomePageProps) {
    return (
        <div>
            <RepoList repos={repos}/>
            <div>
                
            </div>
        </div>
    )
}

export default HomePage