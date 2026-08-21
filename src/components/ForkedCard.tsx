import type { GitHubRepo } from "../api/github"

interface ForkedCardProps {
    fork: GitHubRepo
    openRepo: (url: string) => void
}

function ForkedCard({ fork, openRepo }: ForkedCardProps ) {
    return (
        <div key={fork.full_name} className="flex flex-row items-center justify-between px-4 py-2 hover:bg-[#181c1f]">
            <div className="flex flex-row items-center gap-2">
                <img src={fork.owner.avatar_url} className="max-w-[24px] h-[24px] rounded-full"/>
                <div className="flex flex-col">
                    <button onClick={() => openRepo(fork.html_url)} className="cursor-pointer">
                        <p className="text-sm text-left">{fork.full_name}</p>
                    </button>
                    <p className="text-xs text-[#8ba2ad]">{fork.forks_count} forks</p>
                </div>
            </div>

            <a href={fork.html_url} target="_blank" rel="noopener noreferrer" className="h-fit px-2.5 py-0.5 bg-white rounded-2xl text-sm text-black font-semibold">Visit</a>
        </div>
    )
}

export default ForkedCard