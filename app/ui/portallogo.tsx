import { GlobeAltIcon } from "@heroicons/react/16/solid";

export function PortalLogo(){
    return (
        <div className="flex flex-row items-center leading-none text-white">
            <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
            <p className="text-[44px]">PORTAL</p>
        </div>
    )
}