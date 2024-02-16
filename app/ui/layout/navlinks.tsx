'use client';

import { UserGroupIcon, HomeIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, EnvelopeIcon, LinkIcon} from "@heroicons/react/16/solid";
import {MdOutlineFeed, MdNotificationsNone, MdNotificationImportant, MdOutlineExitToApp,  MdOutlineHelpOutline, MdOutlineSettings } from "react-icons/md";
import {FiUser} from "react-icons/fi";
import { PiListMagnifyingGlass } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";

const links = [
    {name: 'Feed', href: '/feed', icon: MdOutlineFeed},
    {name: 'Discover', href: '/discover', icon: PiListMagnifyingGlass},
    {name: 'Profile', href: '/profile', icon: FiUser},
    {name: 'Notifications', href: '/notifications', icon:MdNotificationImportant},
    {name: 'Settings', href: '/settings', icon:MdOutlineSettings}
];

export function NavLinks() {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <>
        <div className="space-y-3 items-center">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (                
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex group"
                    >
                        <div 
                        className={clsx(
                            'flex gap-4 mx-0 desktop:px-4 px-3 py-3 rounded-lg hover-transition w-full text-sm text-stone-200',
                            {
                                'hover:bg-white/20 active:bg-white/30': !(link.href === pathname), // Apply these classes if link is not active
                                'bg-white/20 font-bold':pathname === link.href // Apply these classes if link is active
                            }
                        )}
                        >
                            <LinkIcon className="w-6 h-6" />  
                            <span className="text-[.9rem] hidden desktop:block">{link.name}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
        {/* <a href="#" className="flex group items-center">
                        <div
                            className="flex gap-4 mx-0 justify-center items-center group-hover:bg-neutral-200 desktop:px-4 px-3 py-3 rounded-lg hover-transition w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true" className="w-6 h-6">
                                <path
                                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">

                                </path>
                            </svg>
                            <span className="font-bold text-[1.25rem] hidden desktop:block">Home</span>
                        </div>
                    </a> */}
        
        {/* {links.map((link) => {
            const linkIcon = link.icon;
            return (

                
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === link.href,
                        },
                      )}
                >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        })} */}
        </>
    )
}