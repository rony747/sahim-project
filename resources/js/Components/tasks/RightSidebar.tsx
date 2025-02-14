import {Calendar, CheckCircle2, Clock, LinkIcon, MessageSquare, Paperclip, Tag, User, UserCircle} from "lucide-react";
import {Task} from "@/types/global";

export default function RightSidebar({task}: { task: Task }) {
    return (
        <>
            <div className="space-y-6">
                {/* Status Card */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
                    <div className="space-y-4">
                        {task.status && <div className="flex items-center text-gray-600">
                            <CheckCircle2 className="w-5 h-5 mr-3" />
                            <span>Status: {task.status_label}</span>
                        </div>}
                        {task.priority && <div className="flex items-center text-gray-600">
                            <Tag className="w-5 h-5 mr-3" />
                            <span>Priority: {task.priority_label}</span>
                        </div>}
                        {task.client.name && <div className="flex items-center text-gray-600">
                            <UserCircle className="w-5 h-5 mr-3" />
                            <span>Client: {task.client.name}</span>
                        </div>}
                        <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-3" />
                            <span>Progress: {task.progress_percent}%</span>
                        </div>

                    </div>
                </div>
                {/* Team Members */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
                        <button className="text-blue-600 hover:text-blue-700">
                            Users
                        </button>
                    </div>
                    <div className="flex -space-x-2">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Sarah" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" alt="Michael" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" alt="Emma" className="w-10 h-10 rounded-full border-2 border-white" />
                    </div>
                </div>
                {/* Attachments */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">Quick Access</h2>
                        <button className="text-blue-600 hover:text-blue-700">
                            <Paperclip className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                                <LinkIcon className="w-4 h-4 text-gray-500 mr-2" />
                                <span className="text-sm text-gray-600">campaign-brief.pdf</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-500">
                                <MessageSquare className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                                <LinkIcon className="w-4 h-4 text-gray-500 mr-2" />
                                <span className="text-sm text-gray-600">social-assets.zip</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-500">
                                <MessageSquare className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

