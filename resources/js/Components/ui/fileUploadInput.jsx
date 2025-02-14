import { useState } from 'react';

export default function FileUploadInput({ onFilesSelected, error }) {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        const files = [...e.dataTransfer.files];
        handleFiles(files);
    };

    const handleChange = (e) => {
        e.preventDefault();
        const files = [...e.target.files];
        handleFiles(files);
    };

    const handleFiles = (files) => {
        setSelectedFiles(files);
        if (onFilesSelected) {
            onFilesSelected(files);
        }
    };

    return (
        <div className="w-full">
            <div 
                className={`flex items-center justify-center w-full ${
                    dragActive 
                        ? "border-blue-500 bg-blue-50 dark:bg-gray-800" 
                        : "border-gray-300 bg-gray-50 dark:bg-gray-700"
                } ${error ? "border-red-500" : ""} border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className={`w-8 h-8 mb-4 ${error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className={`mb-2 text-sm ${error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}>
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className={`text-xs ${error ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}>
                            SVG, PNG, JPG or GIF (MAX. 10MB)
                        </p>
                    </div>
                    <input 
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        multiple 
                        onChange={handleChange}
                    />
                </label>
            </div>

            {selectedFiles.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Selected Files:</h4>
                    <ul className="mt-2 space-y-2">
                        {selectedFiles.map((file, index) => (
                            <li key={index} className="text-sm text-gray-500 dark:text-gray-400">
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
