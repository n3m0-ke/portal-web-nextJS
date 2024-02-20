'use client';

import ProgressTracker from "./progresstracker"
import Statistics from "./statistics";

export default function YourGameSection(){
    return(
        <div className="laptop:block hidden px-2 space-y-2 border border-l-stone-700 ">
                <section className="sticky top-0 py-3 bg-black z-20">
                    <div className="flex justify-between items-center gap-4 px-4 py-2 bg-transparent">
                        <h1 className="text-white text-[1.25rem]">Your Game</h1>
                    </div>
                </section>
                <section className="bg-transparent py-4 rounded-2xl border-white sticky -top-80">
                    <h1 className="text-[1.25rem] text-white px-4 pb-4">Your Progress</h1>
                    
                    <ProgressTracker progress={50} />
                    <ProgressTracker progress={50} />

                    <h1 className="text-[1.25rem] text-white px-4 pt-4">Your Statistics</h1>

                    <Statistics />

                </section>
            </div>
    )
}