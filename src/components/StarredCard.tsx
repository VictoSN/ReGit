import type { GitHubRepo } from "../api/github"

interface StarredCardProps {
    star: GitHubRepo
    openRepo: (owner: string, repo: string) => void
}

function StarredCard({ star, openRepo }: StarredCardProps) {
    return (
        <div key={star.full_name} className="flex flex-row items-center justify-between px-1 py-2 hover:bg-[#181c1f]">
            <div className="flex flex-row items-center gap-2">
                <img src={star.owner.avatar_url} className="max-w-[24px] h-[24px] rounded-full"/>
                <div className="flex flex-col">
                    <button onClick={() => openRepo(star.owner.login, star.name)} className="cursor-pointer">
                        <p className="text-sm text-left">{star.full_name}</p>
                    </button>
                    <p className="text-xs text-[#8ba2ad]">{star.stargazers_count} stars</p>
                </div>
            </div>

            <a href={star.html_url} target="_blank" rel="noopener noreferrer" className="h-fit px-2.5 py-0.5 bg-white rounded-2xl text-sm text-black font-semibold">Visit</a>
        </div>
    )
}

export default StarredCard