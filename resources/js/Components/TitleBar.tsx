import {MoreHorizontal} from "lucide-react";
import React from "react";

export default function TitleBar({title}: { title: string }) {
    return (
        <>
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">

                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

