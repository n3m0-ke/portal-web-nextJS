import Link from "next/link";
import { PortalLogo } from "./portallogo";
import { NavLinks } from "./layout/navlinks";
import { PowerIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import logoText from "@/public/logo/logotext_new.jpeg";
import logo from "@/public/logo/logo_new.jpeg";

export function SideNav() {
    return (
        <nav className="flex-col gap-5 px-2 py-4 min-h-screen justify-between items-center hidden tablet:flex">
            <div className="flex flex-col gap-5 items-center desktop:items-stretch w-full">

                {/* LOGO */}

                <div className="relative w-full px-4 h-32 bg-transparent justify-center">
                    {/* <div className="w-full h-20">
                        <img src="/src/assets/images/twitter-logo.png" alt="Logo" className="w-full" />
                    </div> */}
                    {/* <a className="py-6 px-8 text-center" href="/">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                            Material Tailwind React</h6>
                    </a> */}
                    <Image
                    className="absolute inset-0 w-full h-full object-contain"
                    src={logo}
                    alt="Logo"
                    />
                </div>

                {/* Links */}
                <NavLinks />
                <button
                    className="bg-sky-500 p-3 desktop:py-4 text-base font-bold text-white rounded-full max-w-[13.75rem] hover:bg-sky-400 hover-transition">
                    {/* <span className="desktop:block hidden">Tweet</span> */}
                    <div className="desktop:hidden w-6 h-6">
                        <svg viewBox="0 0 24 24" aria-hidden="true" fill="#F8FAFC">
                            <g>
                                <path
                                    d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">

                                </path>
                            </g>
                        </svg>
                    </div>
                </button>
            </div>
            {/* <div
                                className="flex items-center justify-between desktop:w-[17rem] hover:bg-neutral-200 desktop:px-4 px-3 py-3 rounded-full hover-transition cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 overflow-hidden rounded-full">
                                        <img src="https://images.unsplash.com/photo-1614639437280-558b05b13939?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                                            alt="Profile" className="w-full" />
                                    </div>
                                    <div className="desktop:block hidden">
                                        <h1 className="font-bold text-lg">Jasmin Chew</h1>
                                        <h2 className="text-neutral-500 -mt-1">@jasminchew</h2>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="w-4 h-4 text-neutral-500 desktop:block hidden">
                                    <path
                                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
    
                                    </path>
                                </svg>
                            </div> */}
        </nav>
    )
}