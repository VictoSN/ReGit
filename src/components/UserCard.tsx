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
        <div className="w-[1020px] flex flex-row gap-5 text-white">
            <div className="flex flex-col w-7/10 gap-5">
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
                    {repos.length > 0 && <RepoList repos={repos} />}
                    {repos.length == 0 && <div className='border-solid border-t border-gray-700'></div>}
                </div>
            </div>


            <div className="flex flex-col w-3/10 gap-4">
                <div className="flex flex-col gap-4 p-4 bg-black rounded-2xl h-fit">
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

                    {stars.length > 0 && (
                        <div className="flex flex-col pt-4 border-solid border-t border-gray-800 gap-4">
                            <p className='text-xs font-semibold text-[#8ba2ad]'>STARRED REPOSITORIES</p>
                            <StarredList stars={stars} />
                        </div>
                    )}
                </div>

                <div className='flex flex-col pl-5 gap-2'>
                    <div className='flex flex-row gap-2'>
                        <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>GitHub Terms</a>
                        <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>Privacy Policy</a>
                        <a href="https://github.com/security" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>Security</a>
                    </div>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='text-xs text-[#8ba2ad] hover:underline'>GitHub, Inc. © 2026. All rights reserved.</a>
                </div>
            </div>
        </div>
    )
}

export default UserCard