import type { GitHubRepo, GitHubUser } from '../api/github'
import plusIcon from '../assets/plus.svg'
import FooterLinks from './FooterLinks'
import StarredList from './StarredList'

interface ProfileCardProps {
    user: GitHubUser
    stars: GitHubRepo[]
}

function ProfileCard({ user, stars}: ProfileCardProps) {
    return (
        <div className="flex flex-col gap-4 h-fit">
            <div className='flex flex-col gap-4 p-4 bg-black rounded-2xl h-fit'>
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
            <FooterLinks />
        </div>
    )
}

export default ProfileCard