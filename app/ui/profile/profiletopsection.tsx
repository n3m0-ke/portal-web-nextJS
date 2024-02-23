'use client';

import {
    Card,
    CardBody,
    Tabs,
    TabsHeader,
    Tab,
    Button,
    TabsBody,
    TabPanel,
} from "@material-tailwind/react";

import { Dialog, Transition } from '@headlessui/react'

import YourStorySection from "./yourstorysection";

import { useEffect, useRef, useState, Fragment } from 'react';
import { MdEdit } from "react-icons/md";
import YourGameSection from "./yourgamesection";



export default function ProfileTopSection() {

    useEffect(() => {
        const tabElement = document.getElementById("activeTab");
        if (tabElement) {
            tabElement.click();
        }
    }, []);

    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenOrbitModal, setIsOpenOrbitModal] = useState(false);


    // const handleOpen = () => setOpen(!open);

    function closeEditModal() {
        setIsOpenEditModal(false)
    }

    function openEditModal() {
        setIsOpenEditModal(true)
    }

    function closeOrbitModal() {
        setIsOpenOrbitModal(false)
    }

    function openOrbitModal() {
        setIsOpenOrbitModal(true)
    }

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
                                    <Button 
                                        placeholder={undefined} 
                                        className="truncate rounded-md p-2 border bg-black border-zinc-700 cursor-pointer hover:bg-zinc-900 hover:border-zinc-600 font-[1.25rem]"
                                        onClick={openOrbitModal}>
                                        
                                        <span className="text-white font-semibold ">Your orbit :</span>{" "}
                                        <span className="text-zinc-500">600</span>
                                    </Button>

                                    <Transition appear show={isOpenOrbitModal} as={Fragment}>
                                    <Dialog as="div" className="relative z-20" onClose={closeOrbitModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all border border-zinc-300">
                                                        <Dialog.Title
                                                            as="h3"
                                                            className="text-lg font-medium leading-6 text-white"
                                                        >
                                                            Orbit Profile Modal
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-200">
                                                                Lorem ipsum
                                                            </p>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                onClick={closeOrbitModal}
                                                            >
                                                                Got it, thanks!
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>

                                    {/* <span className="truncate rounded-md p-2 border border-zinc-700 cursor-pointer hover:bg-zinc-900 hover:border-zinc-600">
                                        <span className="text-white font-semibold ">Your orbit :</span>{" "}
                                        <span className="text-zinc-500">600</span>
                                    </span> */}

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
                                <Button
                                    placeholder={undefined}
                                    className="w-8 h-8 bg-black hover:bg-zinc-800"
                                    onClick={openEditModal}
                                >
                                    <MdEdit className="m-auto w-4 h-4" />
                                </Button>

                                <Transition appear show={isOpenEditModal} as={Fragment}>
                                    <Dialog as="div" className="relative z-20" onClose={closeEditModal}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-black/25" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 overflow-y-auto">
                                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 scale-95"
                                                    enterTo="opacity-100 scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 scale-100"
                                                    leaveTo="opacity-0 scale-95"
                                                >
                                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all border border-zinc-300">
                                                        <Dialog.Title
                                                            as="h3"
                                                            className="text-lg font-medium leading-6 text-white"
                                                        >
                                                            Edit Profile Modal
                                                        </Dialog.Title>
                                                        <div className="mt-2">
                                                            <p className="text-sm text-gray-200">
                                                                Lorem ipsum
                                                            </p>
                                                        </div>

                                                        <div className="mt-4">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                                onClick={closeEditModal}
                                                            >
                                                                Got it, thanks!
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition>
                            </div>

                        </div>
                    </>

                </CardBody>
            </Card>

            <div className="flex justify-around bg-zinc-800 rounded-none border-zinc-300 w-full">
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
                            id="activeTab"
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
                            <YourStorySection />

                        </TabPanel>

                        <TabPanel
                            value="your-game"
                            className="w-full bg-black p-0"
                        >
                            <YourGameSection />

                        </TabPanel>

                    </TabsBody>
                </Tabs>

            </div>
        </>
    )
}