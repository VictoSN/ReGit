import thinkingIcon from '../assets/thinking.png'
import wavingIcon from '../assets/waving.png'
import type { Status } from '../hooks/useGitHubUser'

interface StatusMessageProps {
    status: Status
    query: string
    inputRef: React.RefObject<HTMLInputElement | null>
}

function StatusMessage({ status, query, inputRef }: StatusMessageProps) {
    if (status !== "notFound" && status !== "error" && status !== "idle" && status !== "empty") return null

    const loitering = status === "idle" || status === "empty"
    const text = {
        idle:     { main: "Welcome!", sub: "Try searching to get started", button: "Start searching" },
        empty:    { main: "Welcome!", sub: "This user doesn't have any repositories yet, but check out their stats to learn more about them.", button: "Adjust your search" },
        notFound: { main: `Hm...we couldn't find any results for ${query}`, sub: "Double-check your spelling or try different keywords", button: "Adjust your search" },
        error:    { main: "Hm...we receive an error, please try again later", sub: "Double-check your spelling or try different keywords", button: "Adjust your search" },
    }[status]

    return  (
        <div className="flex flex-col items-center text-center pt-20 gap-1 text-white">
            <img src={loitering ? wavingIcon : thinkingIcon} className='max-w-[128px]'/>
            <p className="text-lg font-bold">{text.main}</p> 
            <p className="text-base text-[#8ba2ad]">{text.sub}</p>

            {/* Used href address to focus to input */}
            <button onClick={() => inputRef.current?.focus()} className='cursor-pointer bg-white rounded-3xl px-3 py-2 mt-3 text-black font-semibold'>{text.button}</button>
        </div>   
    )     
}

export default StatusMessage