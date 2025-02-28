"use client";

import Demovid from "@/components/ui/demoo";
import Features from "@/components/ui/features";
import Herosection from "@/components/ui/herosection";
import Testimonials from "./test/page";

export default function Home() {
    return (
        <div className="antialiased p-4 h-screen w-full">
            <Herosection />
            <Features />
            <Demovid />
        </div>
    );
}
