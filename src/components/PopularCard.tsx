import type { GitHubRepo } from '../api/github'
import FooterLinks from './FooterLinks'
import ForkedList from './ForkedList'

interface PopularCardProps {
    forks: GitHubRepo[]
}

function PopularCard({ forks }: PopularCardProps) {
    return (
        <div className="flex flex-col gap-4 h-fit">
            <div className='flex flex-col gap-4 p-4 bg-black rounded-2xl h-fit'>
                {forks.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <p className='text-xs font-semibold text-[#8ba2ad]'>POPULAR REPOSITORIES</p>
                        <ForkedList forks={forks} />
                    </div>
                )}
            </div>
            <FooterLinks />
        </div>
    )
}

export default PopularCard