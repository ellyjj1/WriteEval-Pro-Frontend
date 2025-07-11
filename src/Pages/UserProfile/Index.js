import React, {useEffect, useState} from "react";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Support from "../ContactUs";
import EssaysHistory from "./EssaysHistory";

import {
    RectangleGroupIcon,
    UserGroupIcon,
    Square2StackIcon,
    ChatBubbleLeftEllipsisIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SideBar = ({ activeKey, onSelect }) => {
    const username = localStorage.getItem("username") || "/";

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "/";
    };

    const baseClasses = "flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer";

    const getItemClass = (key) =>
        `${baseClasses} ${activeKey === key ? "shadow-md text-white bg-[#4e0317] hover:bg-rose-800" : ""}`;

    return (
        <ul className="space-y-2 text-xs md:text-sm text-gray-700">

            <li className={getItemClass("account")} onClick={() => onSelect("account")}>
                <UserGroupIcon className="h-5 w-5"/>
                {username}
            </li>
            {/*<li className={getItemClass("dashboard")} onClick={() => onSelect("dashboard")}>*/}
            {/*    <RectangleGroupIcon className="h-5 w-5"/>*/}
            {/*    Dashboard*/}
            {/*</li>*/}
            <li className={getItemClass("essayshistory")} onClick={() => onSelect("essayshistory")}>
                <Square2StackIcon className="h-5 w-5"/>
                Essays
            </li>
            <li className={getItemClass("support")} onClick={() => onSelect("support")}>
                <ChatBubbleLeftEllipsisIcon className="h-5 w-5"/>
                Support
            </li>
            <li className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md text-red-500"
                onClick={Logout}>
                <ArrowLeftStartOnRectangleIcon className="h-5 w-5"/>
                Logout
            </li>
        </ul>
    );
};


const UserProfile = () => {
    const token = localStorage.getItem("token");
    const [activePanel, setActivePanel] = useState("essayshistory");

    useEffect(() => {
        if (!token) {
            window.location.href = "/login";
        }
    }, [token]);


    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-4">
                <div
                    className="col-span-1 md:col-span-1 lg:col-span-1 min-h-screen bg-white p-2 md:px-4 md:py-4 rounded-xl shadow-md">
                    <SideBar activeKey={activePanel} onSelect={setActivePanel}/>
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-4  min-h-screen">
                    {activePanel === "account" && <Account/>}
                    {activePanel === "dashboard" && <Dashboard/>}
                    {activePanel === "essayshistory" && <EssaysHistory/>}
                    {activePanel === "support" && <Support/>}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
