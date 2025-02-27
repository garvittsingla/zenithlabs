"use client";

import Image from "next/image";
import Navbar from "@/components/selfcomp/navbar";
import Hyperspeed from "./Hyperspeed/Hyperspeed";
import { GlowEffectCardBackground } from "@/components/selfcomp/gloweffect";
import { GradientButton } from "@/components/ui/gradient-button";

export default function Home() {
    return (
        <div className="antialiased border-box p-4 h-screen w-full flex flex-col items-center gap-6">
            <div className="mb-15 flex flex-row gap-10">
                <Navbar />
                <GradientButton variant={"variant"}>Log In</GradientButton>
            </div>            
            <GlowEffectCardBackground />
        </div>
    );
}
