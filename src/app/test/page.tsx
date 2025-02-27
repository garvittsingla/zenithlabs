"use client"
import { TestimonialCard } from "@/components/selfcomp/Testimonial"
import { motion } from "framer-motion"
import { div } from "motion/react-client"
import { useState, useEffect } from "react"

const data = [
  {
    "author": "Elon Musk",
    "handle": "CEO of SpaceX and Tesla",
    "text": "The future of technology lies in pushing the boundaries of innovation, and we are just getting started. Every leap we take now brings us closer to a world we've only dreamed of.",
    "image": "elonmusk.jpg"
  },
  {
    "author": "Sundar Pichai",
    "handle": "CEO of Google",
    "text": "Innovation is at the heart of everything we do at Google. We believe that technology can unlock opportunities and solve the world’s most pressing problems.",
    "image": "sundar.jpg"
  },
  {
    "author": "Satya Nadella",
    "handle": "CEO of Microsoft",
    "text": "Empowering others to achieve more is our mission. The digital transformation of businesses and industries is just the beginning. Together, we can make a lasting impact.",
    "image": "satya.jpg"
  },
  {
    "author": "Jeff Bezos",
    "handle": "Founder of Amazon",
    "text": "When you innovate, you have to be prepared for people telling you that you are nuts. But that’s the point. You are doing something others didn’t believe was possible.",
    "image": "jeff.jpg"
  },
  {
    "author": "Mark Zuckerberg",
    "handle": "CEO of Meta (formerly Facebook)",
    "text": "The social connections we create through technology can make the world a better place. Every interaction, every connection, can make a positive impact on someone’s life.",
    "image": "mark.jpg"
  }
]

export default function Test() {
  const [scrolling, setScrolling] = useState(true)

  useEffect(()=>{
     window.addEventListener("scrollend",()=>(setScrolling(false)))
  },[])
  

  return (
    <div className="">
      <div className="text-5xl mt-3 container font-semibold text-center">
        Trusted by people around the globe
      </div>
      <div className="text-center mt-3">
        Join thousands of developers who are already building the future with our AI platform
      </div>
      <div className="overflow-hidden mt-4 relative">
        <motion.div
          className="flex gap-4 "
          animate={{ x: scrolling ? "-100%" : "0%" }}
          transition={{ duration: 100, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
        
          {data.map((itm)=>{
            return <div className="">
                 <TestimonialCard author={itm.author} handle={itm.handle} text={itm.text} image={itm.image} />
            </div>
          })}
        </motion.div>
      </div>
    </div>
  )
}
