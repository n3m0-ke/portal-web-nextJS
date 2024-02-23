import { Button } from "@material-tailwind/react"

export default function LifeLog() {
    return (
        <>
            <hr className="bg-gray-700 border-0" />

            <div className="w-full h-96 border-b-white">
                <h1 className="text-[1rem] text-white px-4 pt-4 mx-auto mb-4">Daily Streaks of the past 6 days</h1>

                <div className="flex flex-row h-1/4 mx-1">
                    <div className="flex-1 p-1 h-full justify-center">
                        <div className="w-3/4 h-[1.25rem] bg-zinc-300" id="day6"></div>

                        5 days ago
                    </div>
                    <div className="flex-1 p-1 h-full">
                        <div className="w-3/4 h-[1.25rem] bg-zinc-300" id="day5"></div>

                        4 days ago
                    </div>
                    <div className="flex-1 p-1 h-full">
                        <div className="w-3/4 h-[1.25rem] bg-zinc-300" id="day4"></div>

                        3 days ago
                    </div>
                    <div className="flex-1 p-1 h-full">
                        <div className="w-3/4 h-[1.25rem] bg-red-500" id="day3"></div>

                        2 days ago
                    </div>
                    <div className="flex-1 p-1 h-full">
                        <div className="w-3/4 h-[1.25rem] bg-red-500" id="day2"></div>

                        Yesterday
                    </div>
                    <div className="flex-1 p-1 h-full text-sm">
                        <div className="w-3/4 h-[1.25rem] bg-green-500" id="day1"></div>

                        Today
                    </div>
                </div>

                <hr className="bg-gray-700 my-4 mx-1 border-gray-700" />

                <div className="w-full flex flex-row">
                    <div className="p-3">
                        <h1 className="">Daily Targets</h1>
                    </div>

                    <div className="flex-1 justify-end p-3">
                        <Button placeholder={undefined} className="rounded-md p-2 mx-2 border bg-black border-zinc-700 cursor-pointer hover:bg-zinc-900 hover:border-zinc-600 font-[1.25rem]">
                            SELECT TEMPLATE
                        </Button>
                        <Button placeholder={undefined} className="rounded-md p-2 mx-2 border bg-black border-zinc-700 cursor-pointer hover:bg-zinc-900 hover:border-zinc-600 font-[1.25rem]">
                            + ADD ACTIVITY
                        </Button>
                    </div>

                </div>

            </div>

        </>
    )
}