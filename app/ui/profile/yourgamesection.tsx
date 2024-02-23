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
import Statistics from "../layout/statistics";
import LifeLog from "./lifelog";

export default function YourGameSection() {
    return (
        <Tabs value="app" className="bg-gray-900 rounded-lg overflow-hidden w-full m-0">
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
                    value="game-stats"
                    className="flex items-center justify-center py-2 px-4 text-white text-sm font-medium cursor-pointer"
                    id="activeTab"
                >
                    {/* <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" /> */}
                    Game Stats
                </Tab>
                <Tab
                    placeholder={undefined}
                    value="life-log"
                    className="flex items-center justify-center py-2 px-4 text-white text-sm font-medium cursor-pointer "
                >
                    {/* <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" /> */}
                    Life Log
                </Tab>
                <Tab
                    placeholder={undefined}
                    value="Skills"
                    className="flex items-center justify-center py-2 px-4 text-white text-sm font-medium cursor-pointer "
                >
                    {/* <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" /> */}
                    Skills
                </Tab>
            </TabsHeader>

            <TabsBody
                placeholder={undefined}
                className="w-full bg-inherit bg-black"
            >
                <TabPanel
                    value="game-stats"
                    className="w-full text-white p-0 bg-black p-3"
                >
                    <Statistics />

                </TabPanel>
                <TabPanel
                    value="life-log"
                    className="w-full text-white p-0"
                >
                    <LifeLog />

                </TabPanel>

                <TabPanel
                    value="skills"
                    className="w-full text-white p-0"
                >
                    <h1>Skills tab</h1>

                </TabPanel>

            </TabsBody>
        </Tabs>
    )
}