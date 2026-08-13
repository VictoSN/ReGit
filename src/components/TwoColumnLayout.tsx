import type { ReactNode } from "react";

function TwoColumnLayout({ left, right }: {left: ReactNode; right: ReactNode }) {
    return (
        <div className="w-[1020px] flex flex-row gap-5 text-white">
            <div className="flex flex-col w-7/10 gap-5">{left}</div>
            <div className="flex flex-col w-3/10 gap-4">{right}</div>
        </div>
    )
}

export default TwoColumnLayout