import type { ReactNode } from "react";
import "./TwoColumnLayout.css"

function TwoColumnLayout({ left, right }: {left: ReactNode; right: ReactNode }) {
    return (
        <div className="w-[1020px] flex flex-row gap-5 text-white">
            <div className="flex flex-col w-7/10 gap-5">{left}</div>
            <div className="scrollbar-hover flex flex-col w-3/10 sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto self-start gap-4">{right}</div>
        </div>
    )
}

export default TwoColumnLayout