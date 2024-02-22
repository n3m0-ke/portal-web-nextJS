import Dropdown from "@/app/ui/dropdown"
import TopSection from "@/app/ui/feed/topsection"
import YourGameSection from "@/app/ui/layout/yourgamesection";
import { MdDiamond, MdOutlineRepeat, MdOutlineMessage, MdOutlineIosShare } from "react-icons/md";
import logo from '@/public/logo/logotext_new.jpeg';
import Image from "next/image"
import ProfileTopSection from "@/app/ui/profile/profiletopsection";

export default function Profile(){
    return(
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
            <div className="max-w-[37.5rem] border-x-[.5px]">
                {/* Top Bar Section */}
                {/* <TopSection /> */}
                <section>
                    <ProfileTopSection />
                    

                    <div className="px-4 py-3 border-b-0 border-grey-200 hover:bg-zinc-900 transition-colors duration-500 ease-out cursor-auto">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img 
                                className="w-full" 
                                src="https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" 
                                alt="avatar" 
                                />
                            </div>
                            

                            <div className="flex flex-col min-w-0">
                                <p className="text-sm">
                                    <span className="truncate">
                                        <span className="text-white font-semibold ">User Name</span>{" "}
                                        <span className="text-zinc-500">@username</span>
                                    </span>
                                    
                                    <span className="flex-shring-0">
                                        <span className="text-zinc-500 px-1">·</span>
                                        <span className="text-zinc-500">18m</span>
                                    </span>
                                    
                                </p>

                                <p className="text-zinc-200 font-thin">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>

                                <div className="flex justify-between mt-5 mb-3 text-zinc-300 px-10">
                                    <MdDiamond className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineRepeat className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineMessage className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineIosShare className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="px-4 py-3 border-b-zinc-600 hover:bg-zinc-900 transition-colors duration-500 ease-out cursor-auto">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img 
                                className="w-full" 
                                src="https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" 
                                alt="avatar" 
                                />
                            </div>
                            

                            <div className="flex flex-col min-w-0">
                                <p className="text-sm">
                                    <span className="truncate">
                                        <span className="text-white font-semibold ">User Name</span>{" "}
                                        <span className="text-zinc-500">@username</span>
                                    </span>
                                    
                                    <span className="flex-shring-0">
                                        <span className="text-zinc-500 px-1">·</span>
                                        <span className="text-zinc-500">18m</span>
                                    </span>
                                    
                                </p>

                                <p className="text-zinc-200 font-thin">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>

                                <div className="flex justify-between mt-5 mb-3 text-zinc-300 px-10">
                                    <MdDiamond className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineRepeat className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineMessage className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineIosShare className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />

                                </div>

                            </div>

                        </div>

                    </div>  
                </section>
            </div>
            <YourGameSection />
        </div>
    )
}