import {Task} from "@/types/global";

export default function DescriptionDiv({task}: { task: Task }) {
    return (
        <>
            {task.description && <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                    {task.description}
                </p>
            </div>} </>
    )
}

