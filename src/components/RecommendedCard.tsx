import type { GitHubRepo } from "../api/github"
import RepoList from './RepoList'

interface RecommendedCardProps {
    repos: GitHubRepo[]
}

function RecommendedCard({ repos }: RecommendedCardProps) {
    return (
        <div className="flex flex-col gap-4">
            <div className='flex flex-row pl-4 gap-2 text-[#8ba2ad] '>
                <p className='text-xs font-semibold'>Best</p>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M10 13.7a.897.897 0 01-.636-.264l-4.6-4.6a.9.9 0 111.272-1.273L10 11.526l3.964-3.963a.9.9 0 011.272 1.273l-4.6 4.6A.897.897 0 0110 13.7z"/>
                </svg>
            </div>
            {repos.length > 0 && <RepoList repos={repos} />}
        </div>
    )
}

export default RecommendedCard