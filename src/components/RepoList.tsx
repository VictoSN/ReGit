import type { GitHubRepo } from "../api/github"

interface RepoListProps {
    repos: GitHubRepo[]
}

function RepoList({ repos }: RepoListProps) {
    return (
        <div className="flex p-5 gap-5 text-white">
            {
                repos.map((repo) => (
                    <div key={repo.name} className="flex flex-col">
                        <div>
                            {/* pfp, name and date*/}
                        </div>

                        {/* <p>title of repo (with link)</p> */}
                        {/* <p>description of repo</p> */}

                        <div className="flex flex-row">
                            {/* language, star, fork, watching */}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RepoList