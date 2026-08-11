import thinkingIcon from '../assets/thinking.png'

interface StatusMessageProps {
    status: string
    query: string
    inputRef: React.RefObject<HTMLInputElement | null>
}

function StatusMessage({ status, query, inputRef }: StatusMessageProps) {
    if (status !== "notFound" && status !== "error") return null

    const message = status === "notFound" ? `Hm...we couldn’t find any results for ${query}` : "Hm...we receive an error, please try again later"

    return  (
        <div className="flex flex-col items-center text-center pt-20 gap-1 text-white">
            <img src={thinkingIcon} className='max-w-[128px]'/>
            <p className="text-lg font-bold">{message}</p> 
            <p className="text-base text-[#8ba2ad]">Double-check your spelling or try different keywords</p>

            {/* Used href address to focus to input */}
            <button onClick={() => inputRef.current?.focus()} className='cursor-pointer bg-white rounded-3xl px-3 py-2 mt-3 text-black font-semibold'>Adjust your search</button>
        </div>   
    )     
}

export default StatusMessage