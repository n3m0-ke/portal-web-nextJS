'use client';

import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
    Switch,
    Tooltip,
    Button,
    TabsBody,
    TabPanel,
} from "@material-tailwind/react";

import Image from "next/image";
import logo from '@/public/logo/logotext_new.jpeg';
import { MdDiamond, MdOutlineIosShare, MdOutlineMessage, MdOutlineRepeat, MdEdit } from "react-icons/md";



export default function ProfileTopSection() {
    return (
        <>
            <div className="relative mt-2 h-48 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
                <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
            </div>

            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 bg-black text-white" placeholder={""}>
                <CardBody className="p-4 w-full" placeholder={""}>
                    <>
                    <div className="flex flex-row w-full">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1602489053809-4d912f6c8b4d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" 
                                alt="avatar" 
                                className="rounded-lg w-full"
                            />
                        </div>
                        

                        <div className="flex-1 pl-5 pr-2">
                            <p>
                                <span className="truncate">
                                    <span className="text-white font-semibold ">User Name</span>{" "}
                                    <span className="text-zinc-500">@username</span>
                                </span>
                                
                            </p>

                            <p className="my-3">
                                <span className="truncate rounded-md p-2 border border-zinc-700 cursor-pointer hover:bg-zinc-900 hover:border-zinc-600">
                                    <span className="text-white font-semibold ">Your orbit :</span>{" "}
                                    <span className="text-zinc-500">600</span>
                                </span>
                                
                            </p>

                            <p className="text-zinc-200 font-thin">
                                <span className="text-white font-semibold ">Bioline : </span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>

                        <div className="flex-shrink-0 justify-end">
                            <button>
                                <MdEdit />
                            </button>
                        </div>

                    </div>
                    </>

                </CardBody>
            </Card>

            <div className="flex justify-around bg-zinc-800 rounded-md border-zinc-700 w-full">
                <Tabs value="app" className="bg-gray-900 rounded-lg overflow-hidden w-full">
                    <TabsHeader
                        className="flex w-full bg-black border-b-2 border-b-zinc-600"
                        placeholder={undefined}
                        indicatorProps={{
                            className:
                                "bg-zinc-700 border-b-2 border-gray-400 shadow-none rounded-none",
                        }}
                    >
                        <Tab
                            placeholder={undefined}
                            value="your-story"
                            className="flex items-center justify-center py-2 px-4 text-white text-sm font-medium cursor-pointer"
                        >
                            {/* <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" /> */}
                            Your Story
                        </Tab>
                        <Tab
                            placeholder={undefined}
                            value="your-game"
                            className="flex items-center justify-center py-2 px-4 text-white text-sm font-medium cursor-pointer "
                        >
                            {/* <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" /> */}
                            Your Game
                        </Tab>
                    </TabsHeader>

                    <TabsBody
                        placeholder={undefined}
                        className="w-full bg-inherit"
                    >
                        <TabPanel
                            value="your-story"
                            className="w-full text-white p-0"
                        >
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

                        </TabPanel>

                        <TabPanel
                            value="your-game"
                            className="w-full "
                        >
                            Your Game Tab

                        </TabPanel>

                    </TabsBody>
                </Tabs>

            </div>
        </>
    )
}