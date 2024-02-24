'use client';

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { SideNav } from "../sidenavresponsive";
import { Input } from "@material-tailwind/react";

export default function DiscoverTopSection() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleNav() {
        setMenuOpen(!menuOpen);
        console.log("Within function");
    }
    return (
        <section className="flex justify-between items-center sticky top-0 px-4 py-6 bg-gradient-to-b from-black to-transparent text-white">
            <div onClick={handleNav} className='desktop:hidden laptop:hidden tablet:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={25} />
            </div>
            <div className="text-[1rem] flex-1 mr-2 bg-black">
                <Input
                    crossOrigin={undefined}
                    type="search"
                    // className="w-full h-full outline outline-0 focus:outline-0 py-2.5 px-3 
                    // bg-transparent 
                    className ="placeholder-shown:border disabled:border-white border-white focus:border-white placeholder-shown:border-white placeholder-shown:border-t-white border-t-white placeholder:text-white focus:border-2"
                    // text-white font-sans font-normal transition-all text-sm accent-black rounded-lg"
                    label="Search"
                    placeholder=" "
                />
            </div>
            
            <GiSettingsKnobs />

            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[50%] desktop:hidden laptop:hidden tablet:hidden h-screen bg-black rounded-lg border-stone-700 p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500 desktop:hidden laptop:hidden tablet:hidden"
            }>
                <div onClick={handleNav} className='flex w-full items-center justify-end'>
                    <AiOutlineClose size={25} />
                </div>
                <div>
                    <SideNav />
                </div>

            </div>
        </section>
    )
}