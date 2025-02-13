import {SidebarProvider, SidebarTrigger} from "@/Components/ui/sidebar";
import {AppSidebar} from "@/Components/app-sidebar";
import React from "react";
import {Toaster} from "@/Components/ui/toaster";
import TitleBar from "@/Components/TitleBar";
import {MoreHorizontal} from "lucide-react";



const MainPageLayout = ({children, title = ''}: { children: React.ReactNode, title?: string }) => {

    return (
        <SidebarProvider>
            <AppSidebar />
                <div className={'relative w-full h-full'}>
                    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
                        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <SidebarTrigger /> <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className="min-h-screen bg-gray-50">
                        <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            {children}
                            <Toaster />
                        </main>
                    </div>

                </div>

        </SidebarProvider>
    );
};

export default MainPageLayout;