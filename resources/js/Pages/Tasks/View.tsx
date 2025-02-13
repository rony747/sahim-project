import MainPageLayout from "@/Layouts/MainPageLayout";
import {Task} from "@/types/global";
import DescriptionDiv from "@/Components/tasks/DescriptionDiv";
import FilesDiv from "@/Components/tasks/FilesDiv";
import CheckListDiv from "@/Components/tasks/CheckListDiv";
import CommentsDiv from "@/Components/tasks/CommentsDiv";
import RightSidebar from "@/Components/tasks/RightSidebar";


export default function Index({task}: { task: Task }) {
    return (
        <MainPageLayout title={task.title}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Task Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <DescriptionDiv task={task} />
                    {/* Files Section */}
                    <FilesDiv />
                    {/* Checklist */}
                    <CheckListDiv />
                    {/* Comments */}
                    <CommentsDiv />
                </div>
                {/* Right Column - Task Info */}
                <RightSidebar task={task} />
            </div>
        </MainPageLayout>
    )
}

