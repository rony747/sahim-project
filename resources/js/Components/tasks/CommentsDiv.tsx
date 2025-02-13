export default function CommentsDiv() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
                <div className="space-y-4">
                    <div className="flex space-x-3">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Sarah" className="h-10 w-10 rounded-full" />
                        <div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium text-gray-900">Sarah Chen</span>
                                    <span className="text-sm text-gray-500">2h ago</span>
                                </div>
                                <p className="text-gray-600 mt-1">
                                    I've started working on the social media assets. Will share the first
                                    draft by EOD. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Comment Input */}
                <div className="mt-4 flex items-start space-x-3">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" alt="You" className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                        <textarea placeholder="Add a comment..." className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows={3} />
                        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

