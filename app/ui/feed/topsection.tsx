'use client';

import FeedFilterDropdown from "@/app/ui/dropdownhui"
import { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { SideNav } from "../sidenavresponsive";

export default function TopSection(){
    const [menuOpen, setMenuOpen] = useState(false)
    
    function handleNav(){
        setMenuOpen(!menuOpen);
        console.log("Within function");
    }
    return (
        <section className="flex justify-between items-center sticky top-0 px-4 py-6 bg-gradient-to-b from-black to-transparent text-white backdrop-blur-lg">
            <div onClick={handleNav} className='desktop:hidden laptop:hidden tablet:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className="text-[1rem] ">Feed</h1>
            <FeedFilterDropdown />

            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[50%] desktop:hidden laptop:hidden tablet:hidden h-screen bg-black rounded-lg border-stone-700 p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 desktop:hidden laptop:hidden tablet:hidden"
            }>
                <div onClick={handleNav} className='flex w-full items-center justify-end'>
                    <AiOutlineClose size={25}/>
                </div>
                <div>
                    <SideNav />
                </div>

            </div>



        </section>
    )
}