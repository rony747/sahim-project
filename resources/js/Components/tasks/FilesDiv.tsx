import {Download, ExternalLink, FileIcon, MoreHorizontal, Upload} from "lucide-react";

export default function FilesDiv(
    {
        files
    }
) {
function dateFormat(date :string) {
    return new Date(date);
}
console.log(files)
    return (
        <>
            {files &&  <div className="bg-white rounded-lg shadow-sm p-6">

                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">Files</h2>
                    <div className="flex items-center space-x-2">
                        <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload
                        </button>
                        {/*<button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">*/}
                        {/*    <FileIcon className="w-4 h-4 mr-2" />*/}
                        {/*    New Folder*/}
                        {/*</button>*/}
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="border-b border-gray-200">
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                            <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
                            <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">

                        {files?.map(file=><tr key={file.id} className="hover:bg-gray-50">
                            <td className="px-3 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <FileIcon className="w-5 h-5 text-gray-400 mr-3" />
                                    <span className="text-sm text-gray-900">{file.file_name}</span>
                                </div>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <span className="text-sm text-gray-500">{(file.file_size /1024 /1024).toFixed(2)} MB</span>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap">
                                <span className="text-sm text-gray-500">{dateFormat(file.created_at).toDateString()}</span>
                            </td>
                            <td className="px-3 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end space-x-2">
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <Download className="w-4 h-4 text-gray-500" />
                                    </button>
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <ExternalLink className="w-4 h-4 text-gray-500" />
                                    </button>
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>
                            </td>
                        </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>}

        </>
    )
}

