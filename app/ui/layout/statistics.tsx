'use client';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import ProgressTracker from './progresstracker';
import { RadarChart } from '../charts/radarchart';

export default function Statistics() {
    let [isOpenBodyModal, setIsOpenBodyModal] = useState(false);
    let [isOpenSoulModal, setIsOpenSoulModal] = useState(false)
    let [isOpenMindModal, setIsOpenMindModal] = useState(false)


    function closeBodyModal() {
        setIsOpenBodyModal(false)
    }

    function openBodyModal() {
        setIsOpenBodyModal(true)
    }

    function closeMindModal() {
        setIsOpenMindModal(false)
    }

    function openMindModal() {
        setIsOpenMindModal(true)
    }

    function closeSoulModal() {
        setIsOpenSoulModal(false)
    }

    function openSoulModal() {
        setIsOpenSoulModal(true)
    }

    return (
        <>
        <div className="flex mt-5 justify-around w-full">

            {/* Body Statistics */}

            <button className="bg-transparent hover:bg-zinc-500 text-white font-semibold hover:text-white py-0 px-4 border border-white hover:border-transparent rounded"
                onClick={openBodyModal}>
                Body
            </button>

            <Transition appear show={isOpenBodyModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeBodyModal}>
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
                                        Body Modal
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
                                            onClick={closeBodyModal}
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




            <button className="bg-transparent hover:bg-zinc-500 text-white font-semibold hover:text-white py-0 px-4 border border-white hover:border-transparent rounded"
                onClick={openMindModal}>
                Mind
            </button>

            <Transition appear show={isOpenMindModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeMindModal}>
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
                                        Mind Modal
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
                                            onClick={closeMindModal}
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

            <button className="bg-transparent hover:bg-zinc-500 text-white font-semibold hover:text-white py-0 px-4 border border-white hover:border-transparent rounded"
                onClick={openSoulModal}>
                Soul
            </button>

            <Transition appear show={isOpenSoulModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeSoulModal}>
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
                                        Soul Modal
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
                                            onClick={closeSoulModal}
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
        
        <div className='w-full border border-white mt-5'>
            
            <h1 className="text-[1rem] text-white px-4 pt-4">General Balance</h1>
            <div className='border border-white p-3 rounded-full'>
                <RadarChart />
            </div>
            
            <h1 className="text-[1rem] text-white px-4 pt-4">Body</h1>
            <ProgressTracker progress={70}/>

            <h1 className="text-[1rem] text-white px-4 pt-4">Mind</h1>
            <ProgressTracker progress={30}/>

            <h1 className="text-[1rem] text-white px-4 pt-4">Soul</h1>
            <ProgressTracker progress={50}/>



        </div>
</>
    )
}

