'use client';

import { Button } from "@material-tailwind/react";

export default function DiscoverRightSideSection(){
    return(
        <div className="laptop:block hidden px-2 space-y-2 border border-l-stone-700 ">
                <section className="sticky top-0 py-3 bg-black z-20">
                    <div className="flex justify-between items-center gap-4 px-4 py-2 bg-transparent">
                        <h1 className="text-white text-[1.25rem]">For You</h1>
                    </div>
                </section>
                <section className="bg-transparent py-4 rounded-2xl border-white sticky -top-80">
                    <h1 className="w-full text-[1.25rem] font-bold text-white">Trending</h1>
                    <div className="flex flex-row w-full p-3">
                        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col group cursor-pointer relative mr-3">
                            <img className="w-full h-4/5 object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed" />
                            <div className="bg-gray-800 relative flex-1 flex flex-col">
                                <div className="bg-blue-600 p-0.5 rounded-full border-4 border-gray-800 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <div className="flex-1 pb-1 text-white text-sm font-semibold capitalize flex justify-center items-end">
                                    <p>
                                        Create Space
                                    </p>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">
                                
                            </div>
                        </div>

                        <div className="w-36 h-52 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer">
                            <img className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105" src="https://picsum.photos/200/300?random=1" alt="MD. Shibbir Ahmed" />

                            <div className="w-8 h-8 border-4 box-content border-gray-800 rounded-full overflow-hidden absolute left-2.5 top-3">
                                <img className="w-full h-full object-cover" src="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg" alt="MD. Shibbir Ahmed" />
                            </div>

                            <div className="absolute inset-x-3 bottom-1">
                                <p className="text-white font-semibold">Your Space</p>
                            </div>

                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20">

                            </div>

                        </div>
                    </div>
                    
                    

                </section>

                <section className="bg-transparent py-4 rounded-2xl border-white sticky -top-80">
                    <h1 className="w-full text-[1.25rem] font-bold text-white">Orbit Suggestions</h1>
                    <div className="p-3 rounded-md boder border-zinc-500 bg-zinc-900 ">
                        <div className="flex flex-row w-full border-b-zinc-200 my-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
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
                            </div>

                            <div className="flex-shrink-0 justify-end">
                                <Button
                                    placeholder={undefined}
                                    className=" bg-zinc-900 hover:bg-zinc-800 px-3"
                                    onClick={undefined}
                                >
                                    <span>Follow</span>
                                </Button>

                                
                            </div>

                        </div>

                        <div className="flex flex-row w-full border-b-zinc-200 my-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
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
                            </div>

                            <div className="flex-shrink-0 justify-end">
                                <Button
                                    placeholder={undefined}
                                    className=" bg-zinc-900 hover:bg-zinc-800 px-3"
                                    onClick={undefined}
                                >
                                    <span>Follow</span>
                                </Button>

                                
                            </div>

                        </div>

                        <div className="flex flex-row w-full border-b-zinc-200 my-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
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
                            </div>

                            <div className="flex-shrink-0 justify-end">
                                <Button
                                    placeholder={undefined}
                                    className=" bg-zinc-900 hover:bg-zinc-800 px-3"
                                    onClick={undefined}
                                >
                                    <span>Follow</span>
                                </Button>

                                
                            </div>

                        </div>

                    </div>
                    

                </section>
            </div>
    )
}