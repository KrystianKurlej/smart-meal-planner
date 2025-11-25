'use client';

import React from "react";
import { ReceiptText, Refrigerator, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function NavBottom() {
    const router = useRouter();
    const pathname = usePathname();

    const [activeTab, setActiveTab] = React.useState<string>(pathname);

    const handleTabClick = (path: string) => {
        setActiveTab(path);
        router.push(path);
    }

    return(
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t text-center z-10 shadow-xl">
            <ul className="grid grid-cols-3 h-18">
                <li className="h-full">
                    <button
                        className={`flex flex-col gap-1 items-center justify-center h-full w-full ${activeTab === '/app' ? 'text-lime-700' : ''}`}
                        onClick={() => handleTabClick('/app/')}
                    >
                        <ReceiptText size={24} />
                        <span className="text-sm block">Recipes</span>
                    </button>
                </li>
                <li className="h-full">
                    <button
                        className={`flex flex-col gap-1 items-center justify-center h-full w-full ${activeTab === '/app/assets' ? 'text-lime-700' : ''}`}
                        onClick={() => handleTabClick('/app/assets')}
                    >
                        <Refrigerator size={24} />
                        <span className="text-sm block">Assets</span>
                    </button>
                </li>
                <li className="h-full">
                    <button
                        className={`flex flex-col gap-1 items-center justify-center h-full w-full ${activeTab === '/app/profile' ? 'text-lime-700' : ''}`}
                        onClick={() => handleTabClick('/app/profile')}
                    >
                        <User size={24} />
                        <span className="text-sm block">Profile</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}