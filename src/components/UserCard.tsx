import type { GitHubUser } from "../api/github"

interface UserCardProps {
    user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="w-full flex flex-row px-20 py-5 gap-5 text-white w-">
            <div className="flex flex-col w-3/4">
                <div className="flex flex-row">
                    <img src={user.avatar_url} className="max-w-[64px]"/>
                    <div className="flex flex-col">
                        <p className="font-bold text-2xl">{user.login}</p>
                        <p className="text-sm font-semibold text-[#8ba2ad]">{user.name}</p>
                    </div>
                </div>
                <div>
                    {/* repo list */}
                </div>
            </div>


            <div className="flex flex-col w-1/4 gap-3">
                <p className="font-bold text-xl">{user.login}</p>
                <a href={user.html_url} className="w-fit bg-white px-5 py-0.5 text-black rounded-3xl">Follow</a>
                <p>{user.bio}</p>
                <div className="flex flex-row gap-10">
                    <div>
                        <p className="text-sm">{user.followers}</p>
                        <p className="text-xs text-[#8ba2ad]">Followers</p>
                    </div>
                    <div>
                        <p className="text-sm">{user.public_repos}</p>
                        <p className="text-xs text-[#8ba2ad]">Public Repository</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard