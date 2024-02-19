

import Dropdown from "@/app/ui/dropdown"
import TopSection from "@/app/ui/feed/topsection"
import { MdDiamond, MdOutlineRepeat, MdOutlineMessage, MdOutlineIosShare } from "react-icons/md";

export default function Feed() {

    return (
        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">
            <div className="max-w-[37.5rem] border-x-[.5px]">

                {/* Top Bar Section */}
                <TopSection />
                
                <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 ">
                    <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                            alt="Profile" className="w-full" />
                    </div>
                    <div className="space-y-10 w-full">
                        <div className="flex-1">
                            <input type="text" placeholder="What's happening?"
                                className="w-full text-[1.25rem] focus:outline-none" />
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
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
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
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
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
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
                                        <g>
                                            <path
                                                d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z">

                                            </path>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className="hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
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
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
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
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-sky-500">
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
                                className="bg-sky-500 hover:bg-sky-400 hover-transition px-5 py-2 text-white font-bold rounded-full w-full mobile:w-auto">Tweet</button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 py-3 border-b border-grey-200">
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

                                <div className="flex justify-between mt-2 text-zinc-300">
                                    <MdDiamond className="w-5 h-5 p-px fill-current" />
                                    <MdOutlineRepeat className="w-5 h-5 p-px fill-current" />
                                    <MdOutlineMessage className="w-5 h-5 p-px fill-current" />
                                    <MdOutlineIosShare className="w-5 h-5 p-px fill-current" />

                                </div>

                            </div>

                        </div>

                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="philipmyrtorp" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Philip Myrtorp</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@philipmyrtorp</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">2h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">32</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">12</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">321</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1639337916963-e16623394e63?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="jnchew" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Jasmin Chew</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@jnchew</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">13h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>fringilla urna porttitor rhoncus. Cras adipiscing enim eu turpis egestas.
                                    Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Turpis
                                    tincidunt id aliquet risus feugiat in. Ullamcorper morbi tincidunt ornare
                                    massa eget egestas purus viverra. Risus nec feugiat in fermentum posuere
                                    urna nec tincidunt praesent. Id faucibus nisl tincidunt eget nullam non nisi
                                    est sit. Vitae sapien pellentesque habitant morbi tristique senectus et
                                    netus</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">2</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">13</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">76</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1528980917907-8df7f48f6f2a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="andrehunter" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Andre Hunter</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@andrehunter</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">5h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Faucibus interdum posuere lorem ipsum. Donec pretium vulputate sapien nec.
                                    Leo vel orci porta non pulvinar neque. Mattis vulputate enim nulla aliquet.
                                </p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">32</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">62</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">85</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1616085258995-85bd229048d7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="zanebolen" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Zane Bolen</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@zanebolen</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">4h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Nullam ac tortor vitae purus. Elit ullamcorper dignissim cras tincidunt.
                                    Consequat ac felis donec et odio pellentesque diam volutpat commodo.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">3</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">21</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">87</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1651986491787-b6a2fbbb5101?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="benhersh" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Benjamin Hersh</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@benhersh</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">8h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>blandit turpis cursus in. Nibh mauris cursus mattis molestie. Molestie at
                                    elementum eu facilisis sed. Sapien eget mi proin sed libero enim sed
                                    faucibus turpis. Tellus pellentesque eu tincidunt tortor aliquam nulla.
                                    Maecenas sed enim ut sem viverra aliquet eget sit amet. Est lorem ipsum
                                    dolor sit amet consectetur adipiscing elit. Quis hendrerit dolor magna eget.
                                </p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">23</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">86</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">12</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1652079129755-97b606e144ad?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="freddieaddery" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Freddie Addery</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@freddieaddery</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">2h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis
                                    orci. Egestas egestas fringilla phasellus faucibus scelerisque eleifend
                                    donec.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">65</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">87</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">151</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1652549752120-d9beb4c86bd4?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwM3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="emanuelturbuc" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Emanuel Turbuc</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@emanuelturbuc</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">1hr</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Aenean euismod elementum nisi quis eleifend quam adipiscing. Magna sit amet
                                    purus gravida quis. Praesent elementum facilisis leo vel fringilla est
                                    ullamcorper eget. Morbi tincidunt augue interdum velit euismod. Et malesuada
                                    fames ac turpis egestas maecenas pharetra convallis posuere. Erat
                                    pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Eget
                                    duis at tellus at urna condimentum mattis pellentesque id. Ut tortor pretium
                                    viverra suspendisse potenti nullam. Accumsan in nisl nisi scelerisque eu
                                    ultrices.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">1</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">67</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">103</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1652437225670-f7969e367375?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="akind_bukun" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Akindele Ibukun</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@akind_bukun</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">7h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu
                                    turpis egestas pretium aenean pharetra magna ac placerat. Quis hendrerit
                                    dolor magna eget est lorem ipsum dolor sit. Lorem sed risus ultricies
                                    tristique nulla aliquet enim tortor. Vivamus at augue eget arcu dictum
                                    varius duis at.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">51</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">5</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">2</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1652226569981-00087ea729b2?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="davidearacri" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Davide Aracri</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@davidearacri</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">7h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Semper risus in hendrerit gravida. Aliquam sem et tortor consequat id porta
                                    nibh venenatis cras</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">2</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">8</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">65</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
                        <div className="grid grid-cols-[auto,1fr] gap-3">
                            <div className="w-12 h-12 overflow-hidden rounded-full">
                                <img src="https://images.unsplash.com/photo-1651850600560-64b7d701cd3d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwN3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                    alt="lucasandrade" className="w-full" />
                            </div>
                            <div>
                                <div className="flex gap-1 items-center">
                                    <h1 className="font-bold">Lucas Andrade</h1>
                                    <h2 className="text-neutral-500 hidden mobile:block">@lucasandrade</h2>
                                    <span className="text-neutral-500">•</span>
                                    <h2 className="text-neutral-500">15h</h2>
                                    <div
                                        className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="currentColor" aria-hidden="true"
                                            className="w-4 h-4 text-neutral-400 group-hover:text-sky-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Est lorem ipsum dolor sit amet consectetur adipiscing elit. Quis hendrerit
                                    dolor magna eget.</p>
                                <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                                    <div className="flex items-center group tablet:pr-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-sky-500">862</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-green-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-green-500">
                                                <g>
                                                    <path
                                                        d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-green-500">231</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpx-4">
                                        <div
                                            className="group-hover:bg-rose-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-rose-500">
                                                <g>
                                                    <path
                                                        d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="text-xs group-hover:text-rose-500">312</p>
                                    </div>
                                    <div className="flex gap-1 items-center group tabletpl-4">
                                        <div
                                            className="group-hover:bg-sky-100 w-9 h-9 p-2 rounded-full hover-transition cursor-pointer">
                                            <svg viewBox="0 0 24 24" aria-hidden="true"
                                                className="group-hover:fill-sky-500">
                                                <g>
                                                    <path
                                                        d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z">

                                                    </path>
                                                    <path
                                                        d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z">

                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="laptop:block hidden px-8 space-y-2">
                <section className="sticky top-0 py-3 bg-white z-20">
                    <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" aria-hidden="true" className="w-5 h-5 text-gray-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">

                            </path>
                        </svg>
                        <input type="text" placeholder="Search Twitter"
                            className="text-base placeholder:text-base focus:outline-none bg-transparent" />
                    </div>
                </section>
                <section className="bg-gray-100 py-4 rounded-2xl sticky -top-80">
                    <h1 className="text-[1.25rem] font-black px-4 pb-4">Trends For You</h1>
                    <div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">CAT 7</h3>
                                <span className="font-semibold text-neutral-500">2,236k Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">CAT 2</h3>
                                <span className="font-semibold text-neutral-500">10.9K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Business &amp; finance · Trending
                                </h5>
                                <h3 className="font-bold text-base ">Bill Gates</h3>
                                <span className="font-semibold text-neutral-500">34.9K Tweets Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">Hotdog</h3>
                                <span className="font-semibold text-neutral-500">10.7K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">Extraordinary You</h3>
                                <span className="font-semibold text-neutral-500">5,377k Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">President-elect</h3>
                                <span className="font-semibold text-neutral-500">167K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">rending in Philippines</h5>
                                <h3 className="font-bold text-base ">Mandaluyong City</h3>
                                <span className="font-semibold text-neutral-500">581K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Music · Trending</h5>
                                <h3 className="font-bold text-base ">Japan</h3>
                                <span className="font-semibold text-neutral-500">34K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Trending in Philippines</h5>
                                <h3 className="font-bold text-base ">raine</h3>
                                <span className="font-semibold text-neutral-500">6,197k Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div
                            className="py-4 px-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer hover-transition">
                            <div>
                                <h5 className="font-semibold text-neutral-500">Music · Trending</h5>
                                <h3 className="font-bold text-base ">#SB19</h3>
                                <span className="font-semibold text-neutral-500">40.9K Tweets</span>
                            </div>
                            <div
                                className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer hover-transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="2" stroke="currentColor" aria-hidden="true"
                                    className="w-4 h-4 text-neutral-500 group-hover:text-sky-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">

                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}