import type { GitHubRepo, GitHubUser } from "../api/github"
import RepoList from './RepoList'

interface UserCardProps {
    user: GitHubUser
    repos: GitHubRepo[]
}

function UserCard({ user, repos }: UserCardProps) {
    return (
        <div className="flex flex-col gap-5">
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
    )
}

export default UserCard