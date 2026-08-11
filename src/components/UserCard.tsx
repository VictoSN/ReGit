import type { GitHubUser } from "../api/github"

interface UserCardProps {
    user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5">

        </div>
    )
}

export default UserCard