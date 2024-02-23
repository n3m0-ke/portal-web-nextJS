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
                    
  
                </section>
            </div>
            <YourGameSection />
        </div>
    )
}