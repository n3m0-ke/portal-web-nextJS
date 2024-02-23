

import Dropdown from "@/app/ui/dropdown"
import TopSection from "@/app/ui/feed/topsection"
import YourGameSection from "@/app/ui/layout/yourgamesection";
import { MdDiamond, MdOutlineRepeat, MdOutlineMessage, MdOutlineIosShare } from "react-icons/md";
import logo from '@/public/logo/logotext_new.jpeg';
import Image from "next/image";

export default function Feed() {

    return (
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
            <div className="max-w-[37.5rem] border-x-[.5px]">

                {/* Top Bar Section */}
                <TopSection />
                
                <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 mb-0 border-b-[.2px]">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                            alt="Profile" className="w-full" />
                    </div>
                    <div className="space-y-10 w-full">
                        <div className="flex-1">
                            <textarea name="rant" id="rantTextArea"  rows={3} placeholder="Rant here..."
                            className="w-full text-[1.125rem] bg-black text-white p-1 border-white-[.2px]"
                            >

                            </textarea>
                            {/* <input type="text" placeholder="What's happening?"
                                className="w-full text-[1.25rem] focus:outline-none" /> */}
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <div
                                className="hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer mobile:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="w-5 h-5 text-sky-500">
                                    <path
                                        d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z">

                                    </path>
                                </svg>
                            </div>
                            <div className="mobile:flex items-center hidden ">
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path
                                                d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z">

                                            </path>
                                            <circle cx="8.868" cy="8.309" r="1.542">

                                            </circle>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path
                                                d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z">

                                            </path>
                                            <path
                                                d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z">

                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path
                                                d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z">

                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path
                                                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z">

                                            </path>
                                            <path
                                                d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z">

                                            </path>
                                            <circle cx="14.738" cy="9.458" r="1.478">

                                            </circle>
                                            <circle cx="9.262" cy="9.458" r="1.478">

                                            </circle>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z">

                                            </path>
                                            <path
                                                d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z">

                                            </path>
                                            <path
                                                d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z">

                                            </path>
                                            <path
                                                d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z">

                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-zinc-500 hover:fill-zinc-900">
                                        <g>
                                            <path
                                                d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z">

                                            </path>
                                            <path
                                                d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z">

                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <button
                                className="bg-zinc-900 hover:bg-zinc-700 hover-transition px-5 py-2 text-white font-bold rounded-sm w-full mobile:w-auto">POST</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-3 border-b border-b-zinc-700 hover:bg-zinc-900 transition-colors duration-500 ease-out cursor-auto">
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
                                    
                                    <span className="flex-shrink-0">
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

                                <div className="w-full rounded-md mt-5">
                                    <Image
                                    src={logo}
                                    alt="image"
                                    className="object-cover w-full"
                                    />
                                </div>

                                <div className="flex justify-between mt-5 mb-3 text-zinc-300 px-10">
                                    <MdDiamond className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineRepeat className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineMessage className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />
                                    <MdOutlineIosShare className="w-5 h-5 p-px fill-current cursor-pointer hover:bg-sky-100 hover:fill-zinc-900 rounded-full hover-transition" />

                                </div>

                            </div>

                        </div>

                    </div>

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
                                    
                                    <span className="flex-shrink-0">
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
                                    
                                    <span className="flex-shrink-0">
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