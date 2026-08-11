interface StatusMessageProps {
    status: string
}

function StatusMessage({ status }: StatusMessageProps) {
    return (
        <div className="flex bg-gray-800 p-5 rounded-[10px] gap-5 text-white">
            <div>{status}</div>
        </div>
    )
}

export default StatusMessage