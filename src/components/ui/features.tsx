import { div } from "framer-motion/client";
import { CardSpotlight } from "./card-spotlight";
import { Tilt } from "./tilt";
import BlurText from "../TextAnimations/BlurText/BlurText";

export default function Features() {
    return (
        <div className="grid grid-rows-10 grid-cols-10 gap-x-8 gap-y-8 h-screen w-full p-10 py-12 mt-40">
            <Tilt
                rotationFactor={8}
                isRevese
                className="row-start-1 row-end-6 col-start-1 col-end-7"
            >
                <CardSpotlight className=" h-full w-full rounded-3xl flex flex-row gap-4 p-8 border-2 shadow-sm shadow-white hover:shadow-blue-500 hover:text-blue-500">
                    <div className="flex flex-col gap-8 p-8">
                        <BlurText
                            text="Quick Save"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-4xl"
                        />
                        <p className="font-semibold text-2xl text-wrap text-left w-[70%]">
                            Quicky save your Posts without any hassle, copy the
                            link and add it to Zenith in an Instatnt
                        </p>
                    </div>
                    <img
                        src="vecteezy_vibrant-3d-lightning-bolt-illustration-energy-power-symbol_55777606.png"
                        alt="fast-logo"
                        className=""
                    />
                </CardSpotlight>
            </Tilt>
            <Tilt
                rotationFactor={8}
                isRevese
                className="row-start-1 row-end-6 col-start-7 col-end-11 "
            >
                <CardSpotlight
                    className="h-full w-full rounded-3xl flex flex-row gap-4 p-8 border-2 shadow-sm shadow-white hover:shadow-pink-500 hover:text-pink-500"
                    color="#FF007F"
                >
                    <div className="flex flex-col gap-8 p-2">
                        {/* <p className="font-bold text-4xl">Safe And Secure</p> */}
                        <BlurText
                            text="Safe And Secure"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-4xl"
                        />
                        <p className="font-semibold text-2xl text-wrap text-left">
                            We Care About your data, and keep it safe, We dont
                            share any data to third parties !
                        </p>
                    </div>
                    <img src="lkshort.png" alt="lock-logo" />
                </CardSpotlight>
            </Tilt>
            <Tilt
                rotationFactor={8}
                isRevese
                className="row-start-6 row-end-11 col-start-1 col-end-5"
            >
                <CardSpotlight
                    className="h-full w-full rounded-3xl flex flex-row gap-4 p-8 border-2 shadow-sm shadow-white hover:shadow-green-500 hover:text-green-500"
                    color="#4CAF50"
                >
                    <div className="flex flex-col gap-8 p-2">
                        {/* <p className="font-bold text-4xl">Breeze like U/X</p> */}
                        <BlurText
                            text="Breeze like U/X"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-4xl"
                        />
                        <p className="font-semibold text-2xl text-wrap text-left">
                            Our easy to understand UI helps to get started
                            without much learning curve
                        </p>
                    </div>
                    <img src="cpie.png" alt="cutie-chubby" />
                </CardSpotlight>
            </Tilt>
            <Tilt
                rotationFactor={8}
                isRevese
                className="row-start-6 row-end-11 col-start-5 col-end-11"
            >
                <CardSpotlight
                    className="h-full w-full rounded-3xl flex flex-row gap-4 p-8 border-2 shadow-sm shadow-white hover:shadow-purple-500 hover:text-purple-500"
                    color="#9C27B0"
                >
                    <div className="flex flex-col gap-8 p-8">
                        {/* <p className="font-bold text-4xl">AI Search</p> */}
                        <BlurText
                            text="AI Search"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="font-bold text-4xl"
                        />
                        <p className="font-semibold text-2xl text-wrap text-left">
                            Blitz past through your previously saved posts with
                            AI ask , every post on your fingertips
                        </p>
                    </div>
                    <img
                        src="ailogo.png"
                        alt="ai-logo"
                        className="transform scale-[1.3]"
                    />
                </CardSpotlight>
            </Tilt>
        </div>
    );
}
