import { useEffect, useState } from "react"
import { getGitHubUser, type GitHubRepo, type GitHubRepoCommit, type GitHubRepoContent, type GitHubUser } from "../api/github"
import StatusCard from "./StatusCard"

interface RepoPageProps {
    repo: GitHubRepo
    repoCommits: GitHubRepoCommit[]
    repoContents: GitHubRepoContent[]
    repoCount: number
    openUser: (login: string) => void
}

function RepoPage({ repo, repoCommits, repoContents, repoCount, openUser }: RepoPageProps) {
    const [ownerDetails, setOwnerDetails] = useState<GitHubUser | null>(null)

    useEffect(() => {
        getGitHubUser(repo.owner.login). then(setOwnerDetails)
    }, [repo.owner.login])

    if(!ownerDetails) return null

    const truncate = (text: string | null | undefined, length: number) =>
        text && text.length > length ? text.slice(0, length) + "..." : text;

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

            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold mb-4">{repo.full_name}</a>
            <p className="text-sm font-semibold text-[#8ba2ad] mb-4">{repo.description}</p>

            <div className="rounded-sm border-solid border-1 border-gray-600 text-[#8ba2ad]">
                <div className="flex flex-row items-center justify-between bg-[#151b23] px-2 py-4">
                    <div className="flex flex-row text-sm gap-2">
                        <img src={repoCommits[0].author.avatar_url} className="max-w-[20px] rounded-full"/>
                        <button onClick={() => openUser(repoCommits[0].author.login)} className="cursor-pointer">
                            <p className="text-start font-semibold text-white">{repoCommits[0].author.login}</p>
                        </button>
                        <a href={repoCommits[0].html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{truncate(repoCommits[0].commit.message, 40)}</a>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-2 items-center text-xs">
                            <a href={repoCommits[0].html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{repoCommits[0].sha.slice(0, 7)}</a>
                            <p className="text-[#8ba2ad]">•</p>
                            <p>{new Date(repoCommits[0].commit.author.date).toLocaleDateString()}</p>
                        </div>

                        <div className="flex flex-row text-xs gap-2">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z" />
                            </svg>
                            <p className="text-white">{repoCount} commits</p>
                        </div>
                    </div>
                </div>

                {repoContents.map((content) => (<div key={content.path} className="flex flex-row items-center py-2 border-solid border-t border-gray-600">
                    <div className="flex flex-row items-center gap-2 px-2 text-sm">
                        {content.type === "dir" ? (
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z" />
                            </svg>
                            ) : (
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
                            </svg>
                        )}
                        <a href={content.html_url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#7286c6] hover:underline text-white">{content.path}</a>
                    </div>
                </div>))}
            </div>

            <StatusCard repo={repo} />
        </div>
    )
}

export default RepoPage