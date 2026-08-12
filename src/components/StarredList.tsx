import type { GitHubStar } from "../api/github"

interface StarredListProps {
    stars: GitHubStar[]
}

function StarredList({ stars }: StarredListProps) {
    return (
        <div className="flex flex-col gap-4">
            {
                stars.map((star) => (
                    <div key={star.full_name} className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center gap-2">
                            <img src={star.owner.avatar_url} className="max-w-[24px] h-[24px] rounded-full"/>
                            <div className="flex flex-col">
                                <p className="text-sm">{star.full_name}</p>
                                <p className="text-xs text-[#8ba2ad]">{star.stargazers_count} stars</p>
                            </div>
                        </div>

                        <a href={star.html_url} target="_blank" rel="noopener noreferrer" className="h-fit px-2.5 py-0.5 bg-white rounded-2xl text-sm text-black font-semibold">Visit</a>
                    </div>
                ))
            }
        </div>
    )
}

export default StarredList