import thinkingIcon from '../assets/thinking.png'
import wavingIcon from '../assets/waving.png'
import type { Status } from '../hooks/useGitHubUser'

interface StatusMessageProps {
    status: Status
    query: string
    inputRef: React.RefObject<HTMLInputElement | null>
}

function StatusMessage({ status, query, inputRef }: StatusMessageProps) {
    if (status !== "notFound" && status !== "error" && status !== "idle") return null

    const loitering = status === "idle"
    const mainMessage = loitering ? " Welcome!" : status === "notFound" ? `Hm...we couldn’t find any results for ${query}` : "Hm...we receive an error, please try again later"
    const subMessage = loitering ? 'Try searching to get started' : 'Double-check your spelling or try different keywords'
    const buttonMessage = loitering ? 'Start searching' : 'Adjust your search'

    return  (
        <div className="flex flex-col items-center text-center pt-20 gap-1 text-white">
            <img src={loitering ? wavingIcon : thinkingIcon} className='max-w-[128px]'/>
            <p className="text-lg font-bold">{mainMessage}</p> 
            <p className="text-base text-[#8ba2ad]">{subMessage}</p>

            {/* Used href address to focus to input */}
            <button onClick={() => inputRef.current?.focus()} className='cursor-pointer bg-white rounded-3xl px-3 py-2 mt-3 text-black font-semibold'>{buttonMessage}</button>
        </div>   
    )     
}

export default StatusMessage