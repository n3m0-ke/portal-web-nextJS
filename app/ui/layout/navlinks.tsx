'use client';

import { UserGroupIcon, HomeIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, EnvelopeIcon, LinkIcon} from "@heroicons/react/16/solid";
import Link from "next/link";
import clsx from "clsx";

import { usePathname } from "next/navigation";

const links = [
    {name: 'Feed', href: '/feed', icon: HomeIcon},
    {name: 'Discover', href: '/discover', icon: MagnifyingGlassIcon},
    {name: 'Profile', href: '/profile', icon: UserGroupIcon},
    {name: 'Notifications', href: '/notifications', icon:EnvelopeIcon},
    {name: 'Settings', href: '/settings', icon:AdjustmentsHorizontalIcon}
];

export function NavLinks() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
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
        })}
        </>
    )
}