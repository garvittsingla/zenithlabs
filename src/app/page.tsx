"use client";

import Image from "next/image";
import Navbar from "@/components/selfcomp/navbar";
import Hyperspeed from "./Hyperspeed/Hyperspeed";

export default function Home() {
    return (
        <div className="antialiased border-box p-4 h-screen w-full flex flex-col items-center gap-12">
            <div>
                <Navbar />
            </div>
            <div className=" overflow-hidden  h-full w-full flex items-center justify-between border-box">
                <Hyperspeed  />
            </div>
        </div>
    );
}
