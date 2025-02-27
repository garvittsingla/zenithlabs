import { GlowEffect } from '@/components/ui/glow-effect';
import Hyperspeed from '@/app/Hyperspeed/Hyperspeed';

export function GlowEffectCardBackground() {
  return (
    <div className='relative h-[80%] w-[80%]'>
      <GlowEffect
        colors={['#0894FF', '#C959DD', '#9370db', '#FFFFFF']}
        mode='colorShift'
        blur='medium'
      />
      <div className='relative h-[100%] w-[100%] rounded-xl bg-black p-2 text-white dark:bg-[hsl(240, 8%, 5%)] dark:text-white overflow-hidden flex items-center justify-between border-box flex-col'>
      <header className="absolute font-bold text-5xl top-10 bg-gradient-to-t from-gray-600 via-gray-400 to-gray-200 text-transparent bg-clip-text pb-4">Your links organized and always within reach</header>
        <p className="absolute font-semibold text-xl pt-4 top-25 text-center mx-20 bg-gradient-to-t from-gray-200 via-gray-400 to-gray-200 text-transparent bg-clip-text">Effortlessly discover, organize, and access all your essential links in one centralized platform. Say goodbye to scattered bookmarks and lost URLs—everything you need is neatly arranged for quick access. Stay organized, save time, and never lose track of your important resources again.</p>
        <Hyperspeed  />
      </div>
    </div>
  );
}
