import { GridBackground, Spotlight } from "../spotlight-new";
import { GradientButton } from "./gradient-button";
import Navbar from "../selfcomp/navbar";
import Hyperspeed from "@/app/Hyperspeed/Hyperspeed";
import BlurText from "../TextAnimations/BlurText/BlurText";

export default function Herosection() {
    return (
        <>
            <GridBackground />
            <Spotlight />
            <div className="mb-15 flex flex-row gap-10 mt-5 justify-center w-full">
                <img src="zenlogo.jpg" alt="comp-logo" className="rounded-md size-[50px]" />
                <Navbar />
                <GradientButton variant={"variant"}>Log In</GradientButton>
            </div>
            {/* <GlowEffectCardBackground /> */}
            <div className="relative h-[100%] w-[100%] rounded-xl bg-black p-2 text-white dark:bg-[hsl(240, 8%, 5%)] dark:text-white overflow-hidden flex items-center justify-between border-box flex-col">
                <div className="absolute flex flex-col gap-4 items-center w-[80%] h-full mt-10">
                    <header className="font-bold text-7xl/20 bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200 text-transparent bg-clip-text pb-4 text-center">
                        Your links organized and always within reach
                    </header>
                    <p className="font-semibold text-2xl pt-4 mx-20 bg-gradient-to-t from-gray-200 via-gray-400 to-gray-200 text-transparent bg-clip-text text-center">
                    Effortlessly find, organize, and access all your essential links in one place. No more scattered bookmarks or lost URLs—everything stays neatly arranged for instant access.
                    </p>
                </div>
                <div className="h-full w-full pr-50">
                    <Hyperspeed />
                </div>
            </div>
        </>
    );
}
