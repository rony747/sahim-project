import React from "react";

export default function CardSimple({children}: { children: React.ReactNode }) {
    return (
        <div className={'bg-white rounded-lg shadow-sm p-6'}>
            {children}
        </div>
    )
}

