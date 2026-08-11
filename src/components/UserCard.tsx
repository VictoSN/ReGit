import plusIcon from '../assets/plus.svg'
import type { GitHubUser } from "../api/github"

interface UserCardProps {
    user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="w-full flex flex-row px-30 py-5 gap-5 text-white w-">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-row gap-5">
                    <img src={user.avatar_url} className="max-w-[64px] rounded-full"/>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">{user.login}</p>
                        <p className="text-sm font-semibold text-[#8ba2ad]">{user.name}</p>
                    </div>
                </div>
                <div>
                    {/* repo list */}
                </div>
            </div>


            <div className="flex flex-col w-1/4 gap-4">
                <p className="font-bold text-xl">{user.login}</p>
                <div className="relative">
                    <img src={plusIcon} className="max-w-[16px] absolute left-2 top-1/2 -translate-y-1/2"/>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="w-fit bg-white pl-8 pr-3 py-1 text-black rounded-3xl">Follow</a>
                </div>
                <p className='text-[#8ba2ad]'>{user.bio}</p>
                <div className="grid grid-cols-2 gap-5">
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
            </div>
        </div>
    )
}

export default UserCard