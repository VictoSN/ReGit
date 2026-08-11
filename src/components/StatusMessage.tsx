interface StatusMessageProps {
    status: string
    query: string
}

function StatusMessage({ status, query }: StatusMessageProps) {
    if (status === "notFound") {
        return  <div className="flex flex-col text-center pt-60 gap-2 text-white">
                    <p className="text-lg font-bold">Hm...we couldn’t find any results for {query}</p> 
                    <p className="text-base text-[#8ba2ad]">Double-check your spelling or try different keywords</p>
                </div>        
    }
    if (status === "error") {
        return  <div className="flex flex-col text-center pt-60 gap-2 text-white">
                    <p>Hm...we receive an error, please try again later</p>
                    <p className="text-base text-[#8ba2ad]">Double-check your spelling or try different keywords</p>
                </div>        
    }

    return null
}

export default StatusMessage