import { useEffect, useState } from "react"
import { getGitHubUser, type GitHubRepo, type GitHubUser } from "../api/github"
import StatusCard from "./StatusCard"

interface RepoPageProps {
    repo: GitHubRepo
    openUser: (login: string) => void
}

function RepoPage({ repo, openUser }: RepoPageProps) {
    const [ownerDetails, setOwnerDetails] = useState<GitHubUser | null>(null)

    useEffect(() => {
        getGitHubUser(repo.owner.login). then(setOwnerDetails)
    }, [repo.owner.login])

    if(!ownerDetails) return null

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-5 mt-4 mb-2">
                <img src={ownerDetails.avatar_url} className="max-w-[32px] rounded-full"/>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-2 items-center">
                        <button onClick={() => openUser(repo.owner.login)} className="cursor-pointer hover:text-[#7286c6]">
                            <p className="text-sm">{repo.owner.login}</p>
                        </button>
                        <p className="text-[#8ba2ad] text-xs">•</p>
                        <p className="text-[#8ba2ad] text-xs">{new Date(repo.created_at).toLocaleDateString()}</p>
                    </div>
                    <p className="text-xs text-[#8ba2ad]">{ownerDetails.name}</p>
                </div>
            </div>

            <div>
                <p className="text-2xl font-semibold mb-4">{repo.full_name}</p>
                <p className="text-xs font-semibold text-[#8ba2ad]">{repo.description}</p>

            </div>

            <StatusCard repo={repo} />
        </div>
    )
}

export default RepoPage