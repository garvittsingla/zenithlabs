"use client"
import ShinyText from '../../components/ui/ShinyText/ShinyText';

// import { Toaster } from "@/components/ui/sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Brain, Link } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContentCard from '../../components/selfcomp/Card';
import { toast ,Toaster} from 'sonner';
import { BACKEND_URL } from '../config/config';

export default function Dashboard() {
    const [link, setLink] = useState('')
    const [snippet, setSnippet] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenAI, setIsOpenAI] = useState(false)
    const [prompt, setPrompt] = useState('')

    async function sendLink() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.post(`${BACKEND_URL}/api/snippet/create`, 
                { url: link }, 
                { headers: { Authorization: `${token}` }}
            )
            setLink('')
            toast.success("Link added successfully")
            // Refresh the snippets after adding
            getLinks()
            setIsOpen(false)
        } catch (error) {
            console.error("Error adding link:", error)
        }
    }

    async function getLinks() {
        const token = localStorage.getItem('token')
        try {
            const response = await axios.get(`${BACKEND_URL}/api/snippet/view`, 
                { headers: { Authorization: `${token}` }}
            )
            // Replace the snippets rather than appending to avoid duplicates
            setSnippet(response.data)
        } catch (error) {
            console.error("Error fetching links:", error)
        }
    }

    function deleteToken() {
        localStorage.removeItem('token')
        window.location.href = "/signin"
    }
    async function askAI() {
        const token = localStorage.getItem('token')
        try {
            toast.success("AI is thinking...")
            try {
                const response = await axios.post(`${BACKEND_URL}/api/snippet/ai`, 
                    { prompt: prompt }, 
                    { headers: { Authorization: `${token}` }}
                )
                setPrompt('')
                
                console.log(response.data)
                if (response.status === 200){
                    toast.success("AI has generated a post")
                    setSnippet(response.data)
                }
            } catch (error) {
                
                    toast.error("Sorry no posts found")
                
            }
            setIsOpenAI(false)
        } catch (error) {
            console.error("Error adding link:", error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            window.location.href = "/signin"
            return
        }
        
        getLinks()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white">
            <Toaster />

            <nav className="sticky top-0 backdrop-blur-md rounded-xl z-10 border-b w-[80%] mx-auto p-4 mb-6">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                        <img className="h-10 w-10 md:h-12 md:w-12" src="logo.png" alt="Logo" />
                        <h1 className="ml-3 text-xl font-bold">Zenith</h1>
                    </div>
                    <div>
                    <AlertDialog open={isOpenAI} onOpenChange={setIsOpenAI}>
                            <AlertDialogTrigger asChild>
                                <button className="bg-black rounded-md px-3 py-2 md:px-4 md:py-3 border-2 border-gray-700 hover:border-gray-500 transition-colors">
                                    <ShinyText 
                                        text="ASK AI" 
                                        disabled={false} 
                                        speed={3} 
                                        className="text-sm md:text-base font-semibold" 
                                    />
                                </button>
                            </AlertDialogTrigger>
                            
                            <AlertDialogContent className="w-[90%] max-w-md bg-black/80 border-gray-700">
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="flex  gap-2 items-center text-white">
                                        Ask AI <Brain/> 
                                    </AlertDialogTitle>
                                    <Input 
                                        onChange={(e) => setPrompt(e.target.value)} 
                                        value={prompt} 
                                        type="text" 
                                        placeholder="'Give me post related to elon musk'" 
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-700">
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction asChild>
                                        <Button 
                                            onClick={askAI} 
                                            type="submit"

                                        >
                                            ASK AI
                                        </Button>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                            <AlertDialogTrigger asChild>
                                <button className="bg-black rounded-md px-3 py-2 md:px-4 md:py-3 border-2 border-gray-700 hover:border-gray-500 transition-colors">
                                    <ShinyText 
                                        text="Add Link" 
                                        disabled={false} 
                                        speed={3} 
                                        className="text-sm md:text-base font-semibold" 
                                    />
                                </button>
                            </AlertDialogTrigger>
                            
                            <AlertDialogContent className="w-[90%] max-w-md bg-black/80 border-gray-700">
                                <AlertDialogHeader>
                                    <AlertDialogTitle className="flex gap-2 items-center text-white">
                                        Add a Link <Link className="h-5"/>
                                    </AlertDialogTitle>
                                    <Input 
                                        onChange={(e) => setLink(e.target.value)} 
                                        value={link} 
                                        type="text" 
                                        placeholder="Paste your link here" 
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className="bg-gray-800 text-white hover:bg-gray-700">
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction asChild>
                                        <Button 
                                            onClick={sendLink} 
                                            type="submit"
                                            className=""
                                        >
                                            Add Link
                                        </Button>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        
                        <Button 
                            onClick={deleteToken} 
                            variant="destructive"
                            className="ml-1 text-sm md:text-base px-3 py-2"
                        >
                            Log out
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <div className="max-w-7xl mx-auto px-4 pb-8">
                <h2 className="text-2xl font-bold mb-6">Your Snippets</h2>
                
                {/* Empty State */}
                {snippet.length === 0 && (
                    <div className="text-center py-16 bg-gray-900 rounded-lg border border-gray-800">
                        <p className="text-gray-400 mb-4">You don't have any snippets yet</p>
                        <Button 
                            onClick={() => setIsOpen(true)}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Add your first link
                        </Button>
                    </div>
                )}
                
                {/* Snippet List */}
                <div className="flex flex-wrap  gap-6  items-center justify-center  ">
                    {snippet && snippet.map((item, index) => (
                        <div key={index} className="">
                            <ContentCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}