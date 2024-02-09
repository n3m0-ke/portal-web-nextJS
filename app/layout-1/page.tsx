import Image from "next/image";
import { SideNav } from '@/app/ui/sidenav'
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">

      <div className="w-full flex-none md:w-64">
        {/* SIDENAV!!! */}
        <SideNav />
      </div>


      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* Top Nav */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border border-blue-gray-100 rounded-xl">
          <div className="flex items-center">
            1
          </div>
          <div className="flex items-center">
            2
          </div>
          <div className="flex items-center">
            3
          </div>
        </div>

        <div className="flex flex-1 overflow-auto">
          {/* Main Grid */}
          <div className="flex-1 p-4 bg-white text-black">
            Main Section
          </div>

          {/* Game Section */}
          <div className="w-80 p-4 hidden lg:block text-black">
            Your game section
          </div>

        </div>
        
        {/* <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">

          <div className="max-w-[37.5rem] border-x-[1px]">
            <section className="sticky top-0 px-4 py-6 bg-white ">
              <h1 className="text-[1.25rem] font-bold">Home</h1>
            </section>
            //form

            //Feed
            <Publisher />
            <Feed />
          </div>


          
          <div className="laptop:block hidden px-8 space-y-2">
            
            <section className="sticky top-0 py-3 bg-white z-20">
              <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search Twitter"
                  className="text-base placeholder:text-base focus:outline-none bg-transparent"
                />
              </div>
            </section>

            //Your Game Section
            <Trends />

          </div>
        
        
        </div> */}
      
      
      </div>

    </div>
  );
}
