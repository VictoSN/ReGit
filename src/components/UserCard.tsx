import type { GitHubUser } from "../api/github"

interface UserCardProps {
    user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5 text-white">
            <div>
                <div>
                    <img src={user.avatar_url}/>
                    <div>
                        <h1>{user.login}</h1>
                        <h2>{user.name}</h2>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
            <p>{user.bio}</p>
            <a href={user.html_url}>Visit Here!</a>
            <div>
                <p>Followers: {user.followers}</p>
                <p>Public Repository: {user.public_repos}</p>
            </div>
        </div>
    )
}

export default UserCard