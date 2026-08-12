import plusIcon from '../assets/plus.svg'
import type { GitHubRepo, GitHubStar, GitHubUser } from "../api/github"
import RepoList from './RepoList'
import StarredList from './StarredList'

interface UserCardProps {
    user: GitHubUser
    repos: GitHubRepo[]
    stars: GitHubStar[]
}

function UserCard({ user, repos, stars }: UserCardProps) {
    return (
        <div className="w-full flex flex-row px-30 gap-5 text-white">
            <div className="flex flex-col w-3/4 gap-5">
                <div className="flex flex-row gap-5 p-4">
                    <img src={user.avatar_url} className="max-w-[64px] rounded-full"/>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">{user.login}</p>
                        <p className="text-sm font-semibold text-[#8ba2ad]">{user.name}</p>
                    </div>
                </div>
                <div>
                    <div className='pb-4'>
                        <p className='px-4 py-2 bg-[#3d494e] w-fit rounded-3xl font-semibold'>Repositories</p>
                    </div>
                    <RepoList user={user} repos={repos} />
                </div>
            </div>


            <div className="flex flex-col w-1/4 gap-4 p-4 bg-black rounded-2xl h-fit">
                <p className="font-bold text-base">{user.login}</p>
                <div className="relative">
                    <img src={plusIcon} className="max-w-[16px] absolute left-2 top-1/2 -translate-y-1/2"/>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="w-fit bg-white pl-8 pr-3 py-1 text-black rounded-3xl">Follow</a>
                </div>
                <p className='text-[#8ba2ad]'>{user.bio}</p>
                <div className="grid grid-cols-2 gap-5 pt-4 border-solid border-t border-gray-800">
                    <div>
                        <p className="text-sm">{user.followers}</p>
                        <p className="text-xs text-[#8ba2ad]">Followers</p>
                    </div>
                    <div>
                        <p className="text-sm">{user.public_repos}</p>
                        <p className="text-xs text-[#8ba2ad]">Public Repository</p>
                    </div>
                    <div>
                        <p className="text-sm">{new Date(user.created_at).toLocaleDateString()}</p>
                        <p className="text-xs text-[#8ba2ad]">Created at</p>
                    </div>
                </div>

                <div className="flex pt-4 border-solid border-t border-gray-800">
                    <p className='text-xs font-semibold text-[#8ba2ad]'>STARRED REPOSITORIES</p>
                    <StarredList stars={stars} />
                </div>
            </div>
        </div>
    )
}

export default UserCard