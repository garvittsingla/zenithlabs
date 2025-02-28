import { useEffect, useRef } from "react";
import { ContainerScroll } from "./container-scroll-animation";
import { BackgroundBeams } from "./background-beams";
import { SparklesCore } from "./sparkles";

export default function Demovid() {
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // use the viewport
            rootMargin: "0px",
            threshold: 0.5, // trigger when 50% of the video is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Video is visible, play it
                    videoRef.current.play().catch((e) => {
                        console.log("Autoplay prevented:", e);
                        // Most browsers require user interaction before autoplay
                    });
                } else {
                    // Video is not visible, pause it
                    videoRef.current.pause();
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Clean up
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
    return (
        <div className="h-screen w-full antialiased relative">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-[200vh] absolute"
                particleColor="#FFFFFF"
            />
            <div className="relative w-full h-full p-8 rounded-xl">
                <ContainerScroll
                    titleComponent={
                        <>
                            <p className="font-bold text-7xl mb-20 text-center bg-gradient-to-t from-gray-400 via-gray-400 to-gray-200 text-transparent bg-clip-text">
                                I BELIEVE I CAN FLY
                            </p>
                        </>
                    }
                >
                    <div className="w-full h-full rounded-xl relative overflow-hidden flex justify-center">
                        <video
                            ref={videoRef}
                            className="w-full h-auto object-contain flex-1 rounded-3xl"
                            src="demovid.mp4"
                            muted
                            playsInline
                            loop
                            autoPlay={false} // We'll control this with the observer
                        />
                    </div>
                </ContainerScroll>
            </div>
        </div>
    );
}
